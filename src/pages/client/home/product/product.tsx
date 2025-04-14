import { useFilterContext } from "@/components/context/filter.context";
import { getBooksAPI } from "@/services/api";
import { ReloadOutlined, StarFilled } from "@ant-design/icons";
import { Button, Rate, Row, Col, Tag, Divider, message } from "antd"; // Add message from antd
import { useEffect, useMemo, useState, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import 'styles/product.scss';

// Update props interface
interface ProductProps {
    listBook?: IBookTable[];
    isLoading?: boolean;
    setIsLoading?: (loading: boolean) => void;
    categoryId?: string | null; // Add this to receive category ID
}

const CustomStar = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="currentColor"
        viewBox="0 0 12 12"
    >
        <path d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z" />
    </svg>
);

const Product: React.FC<ProductProps> = ({ listBook: propListBook, categoryId }) => {
    const { isLoading, setIsLoading, selectedBrands, selectedSuppliers,
        fastDeliveryChecked, cheapPriceChecked, freeShipChecked, fourStarsChecked, selectedSort,
        pageSize: contextPageSize, setPageSize
    } = useFilterContext();
    const [searchTerm, setSearchTerm] = useOutletContext() as any;
    const navigate = useNavigate();

    const [localListBook, setLocalListBook] = useState<IBookTable[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [current, setCurrent] = useState<number>(1);

    const [filter, setFilter] = useState<string>("");

    const [hasMoreItems, setHasMoreItems] = useState<boolean>(true);

    const [isFetching, setIsFetching] = useState<boolean>(false);

    const pageSizeRef = useRef<number>(10);

    const [itemIds, setItemIds] = useState<Set<string>>(new Set());

    const initializedRef = useRef<boolean>(false);

    const prevFiltersRef = useRef({
        brands: [] as string[],
        suppliers: [] as string[],
        fastDelivery: false,
        cheapPrice: false,
        freeShip: false,
        fourStars: false,
        sort: '',
        search: '',
        category: ''
    });

    const prevCategoryRef = useRef<string | null>(null);

    const listBook = propListBook || localListBook;

    const filteredBooks = useMemo(() => {
        return listBook.filter((book) =>
            book.mainText.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, listBook]);

    const fetchBook = async (requestPageSize?: number) => {
        if (isFetching) return;

        setIsFetching(true);
        setIsLoading(true);

        const currentPageSize = requestPageSize || contextPageSize || 10;
        console.log(`Fetching with pageSize: ${currentPageSize}, Previous pageSize: ${pageSizeRef.current}`);

        let shouldShowNoMoreItemsMessage = false;

        let query = new URLSearchParams();

        query.append('current', current.toString());
        query.append('pageSize', currentPageSize.toString());

        if (searchTerm) {
            query.append('mainText', searchTerm);
        }

        if (filter) {
            query.append('filter', filter);
        }

        if (categoryId) {
            query.append('category', categoryId);
        }

        if (selectedSort) {
            const sortCode = getSortCode(selectedSort);
            query.append('sort', sortCode);
        } else {
            query.append('sort', 'popular');
        }

        if (selectedBrands && selectedBrands.length > 0) {
            query.append('brands', selectedBrands.join(','));
        }

        if (selectedSuppliers && selectedSuppliers.length > 0) {
            query.append('suppliers', selectedSuppliers.join(','));
        }

        if (fourStarsChecked) {
            query.append('minRating', '4');
        }

        if (freeShipChecked) {
            query.append('freeShipping', 'true');
        }

        if (cheapPriceChecked) {
            query.append('cheapPrice', 'true');
        }

        if (fastDeliveryChecked) {
            query.append('fastDelivery', 'true');
        }

        const queryString = query.toString();
        console.log("Fetching with query:", queryString);

        try {
            message.destroy();

            const isInitialized = initializedRef.current;
            const prevItemIds = new Set([...itemIds]);
            const prevItemCount = prevItemIds.size;

            console.log(`Before fetch: initialized=${isInitialized}, prevItemCount=${prevItemCount}`);

            const res = await getBooksAPI(queryString);
            if (res && res.data) {
                const items = res.data.items || [];

                const responseItemIds = new Set(items.map(item => item.id));
                console.log(`Response returned ${items.length} items with ${responseItemIds.size} unique IDs`);

                const requestedMoreItems = currentPageSize > pageSizeRef.current;

                if (requestedMoreItems && isInitialized) {

                    const newItemIds = new Set([...prevItemIds]);
                    const existingItems = [...localListBook];

                    let newItemsCount = 0;

                    items.forEach(item => {
                        if (!prevItemIds.has(item.id)) {
                            newItemsCount++;
                            newItemIds.add(item.id);
                            existingItems.push(item);
                        }
                    });

                    console.log(`Found ${newItemsCount} new items to add`);

                    setItemIds(newItemIds);
                    setLocalListBook(existingItems);

                    if (newItemsCount === 0) {
                        console.log("No new items found, hiding 'View More' button");
                        shouldShowNoMoreItemsMessage = true;
                        setHasMoreItems(false);
                    }
                } else {
                    console.log("Initial load or filter change - replacing all items");
                    initializedRef.current = true;

                    setItemIds(responseItemIds);
                    setLocalListBook(items);

                    setHasMoreItems(items.length > 0);

                    if (items.length < currentPageSize) {
                        console.log("Received fewer items than requested pageSize, no more to load");
                        setHasMoreItems(false);

                        if (currentPageSize > 10) {
                            shouldShowNoMoreItemsMessage = true;
                        }
                    }
                }

                pageSizeRef.current = currentPageSize;

                // Set total from meta
                if (res.data.meta && res.data.meta.totalItems) {
                    setTotal(res.data.meta.totalItems);

                    if (responseItemIds.size >= res.data.meta.totalItems && items.length > 0) {
                        console.log("All items loaded based on totalItems");
                        setHasMoreItems(false);

                        if (currentPageSize > 10 && requestedMoreItems) {
                            shouldShowNoMoreItemsMessage = true;
                        }
                    }
                }
            }

            if (shouldShowNoMoreItemsMessage) {
                message.info('Đã hiển thị toàn bộ sản phẩm');
            }
        } catch (error) {
            console.error("Error fetching books:", error);
            message.error('Đã xảy ra lỗi khi tải sách');
            setHasMoreItems(false);
        } finally {
            setIsLoading(false);
            setIsFetching(false);
        }
    };

    const getSortCode = (sortText: string): string => {
        switch (sortText) {
            case 'Phổ biến':
                return 'popular';
            case 'Bán chạy':
                return 'bestselling';
            case 'Hàng mới':
                return 'newest';
            case 'Giá thấp đến cao':
                return 'price-asc';
            case 'Giá cao đến thấp':
                return 'price-desc';
            default:
                return 'popular';
        }
    };

    useEffect(() => {
        const filtersChanged =
            !arraysEqual(prevFiltersRef.current.brands, selectedBrands) ||
            !arraysEqual(prevFiltersRef.current.suppliers, selectedSuppliers) ||
            prevFiltersRef.current.fastDelivery !== fastDeliveryChecked ||
            prevFiltersRef.current.cheapPrice !== cheapPriceChecked ||
            prevFiltersRef.current.freeShip !== freeShipChecked ||
            prevFiltersRef.current.fourStars !== fourStarsChecked ||
            prevFiltersRef.current.sort !== selectedSort ||
            prevFiltersRef.current.search !== searchTerm;

        if (filtersChanged) {
            console.log("Filters changed, resetting pagination state and enabling 'View More' button");
            setHasMoreItems(true);
            pageSizeRef.current = 10;
            initializedRef.current = false;
            setItemIds(new Set());

            if (setPageSize) {
                setPageSize(10);
            }
        }

        prevFiltersRef.current = {
            brands: [...selectedBrands],
            suppliers: [...selectedSuppliers],
            fastDelivery: fastDeliveryChecked,
            cheapPrice: cheapPriceChecked,
            freeShip: freeShipChecked,
            fourStars: fourStarsChecked,
            sort: selectedSort,
            search: searchTerm,
            category: categoryId || ''
        };
    }, [
        selectedBrands,
        selectedSuppliers,
        fastDeliveryChecked,
        cheapPriceChecked,
        freeShipChecked,
        fourStarsChecked,
        selectedSort,
        searchTerm,
        categoryId,
        setPageSize
    ]);

    useEffect(() => {
        if (categoryId !== prevCategoryRef.current && categoryId) {
            console.log(`Category changed to: ${categoryId}`);
            setCurrent(1);
            setItemIds(new Set());
            initializedRef.current = false;
            pageSizeRef.current = 10;

            setLocalListBook([]);

            prevCategoryRef.current = categoryId;
        }
    }, [categoryId]);

    const arraysEqual = (a: string[], b: string[]): boolean => {
        if (a.length !== b.length) return false;
        const sortedA = [...a].sort();
        const sortedB = [...b].sort();
        return sortedA.every((val, idx) => val === sortedB[idx]);
    };

    useEffect(() => {
        if (!propListBook && !isFetching) {
            fetchBook();
        }
    }, [
        propListBook,
        current,
        selectedSort,
        fastDeliveryChecked,
        cheapPriceChecked,
        freeShipChecked,
        fourStarsChecked,
        selectedBrands,
        selectedSuppliers,
        searchTerm,
        categoryId
    ]);

    const addViewedProduct = (productId: string) => {
        const viewedProducts = JSON.parse(localStorage.getItem("viewedProducts") || "[]").map(Number);

        if (!viewedProducts.includes(productId)) {
            viewedProducts.push(productId);
        }

        if (viewedProducts.length > 10) {
            viewedProducts.shift();
        }

        localStorage.setItem("viewedProducts", JSON.stringify(viewedProducts));
    };

    return (
        <>
            {!isLoading && (
                <div className="product-container">
                    <Row className="customize-row" >
                        {filteredBooks?.length > 0 ? (
                            filteredBooks.map((item, index) => (
                                <Col
                                    xs={24}
                                    sm={12}
                                    md={8}
                                    lg={6}
                                    xl={6}
                                    key={`book-${index}`}
                                >
                                    <div
                                        onClick={() => {
                                            navigate(`/book/${item.id}`);
                                            addViewedProduct(item.id);
                                        }}
                                        className="column top-deal-column"
                                    >
                                        <div className="wrapper">
                                            <div className="thumbnail">
                                                <img
                                                    src={item.thumbnail}

                                                    alt="thumbnail book"
                                                />
                                                <div className="badge-container">
                                                    <picture className="webpimg-container">
                                                        <source
                                                            type="image/webp"
                                                            srcSet="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
                                                        />
                                                        <img
                                                            src="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
                                                            alt="product_image_badge"
                                                            className="product-badge"
                                                        />
                                                    </picture>
                                                </div>
                                                <div className="left-badge">25.3</div>
                                                <p className="ads-badge">AD</p>
                                            </div>

                                            <div className="price-section">
                                                <div className="price">
                                                    {new Intl.NumberFormat("vi-VN", {
                                                        style: "currency",
                                                        currency: "VND",
                                                    }).format(item?.price ?? 0)}
                                                </div>
                                                <div className="discount">
                                                    {item.promotion && (
                                                        <span className="promotion-tag">-{item.promotion}%</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="author" title={item.author}>
                                                <span>{item.author}</span>
                                            </div>
                                            <div className="text" title={item.mainText}>
                                                <span>{item.mainText}</span>
                                            </div>

                                            <div className="rating">
                                                <Rate
                                                    className="rate"
                                                    value={5}
                                                    disabled
                                                    style={{ fontSize: 12, lineHeight: '13.8px' }} // Thêm lineHeight: '13.8px'
                                                    character={<CustomStar />}
                                                />
                                                <span>Đã bán {item?.sold ?? 0}</span>
                                            </div>

                                            <div style={{ flex: '1' }}></div>

                                            <Divider className="divider" style={{ margin: '0' }} />

                                            <div className="delivery">
                                                <img

                                                    src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                                                    alt="Giao siêu tốc 2H"
                                                    className="service-icon"
                                                />
                                                <span className="service-text"> Giao siêu tốc 2H </span>

                                            </div>

                                        </div>

                                    </div>



                                </Col>
                            ))
                        ) : (
                            <div
                            >
                                <div
                                    style={{

                                        background: "rgb(255, 255, 255)",
                                        width: "1128px",
                                        padding: "16px 24px",
                                        fontSize: "15px",
                                        marginBottom: "24px",
                                    }}
                                    className="no-product-container"
                                >
                                    <div
                                        style={{
                                            backgroundColor: "rgb(255, 255, 251)",
                                            border: "1px solid rgb(253, 216, 53)",
                                            color: "rgb(223, 189, 21)",
                                            padding: "16px 24px",
                                            display: "flex",
                                        }}
                                        className="no-text"
                                    >
                                        Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn
                                    </div>
                                </div>
                            </div>

                        )}
                    </Row>


                    {filteredBooks?.length > 0 && hasMoreItems && !isFetching && (
                        <div className="view-more-container">
                            <div
                                data-view-id="category_infinity_view.more"
                                className="view-more-button"
                                onClick={() => {
                                    message.destroy();

                                    const newSize = pageSizeRef.current + 10;
                                    console.log(`View More clicked - increasing pageSize from ${pageSizeRef.current} to ${newSize}`);

                                    if (setPageSize) {
                                        setPageSize(newSize);
                                    }

                                    fetchBook(newSize);
                                }}
                            >
                                {isLoading ? (
                                    <div className="loading-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                ) : (
                                    "Xem thêm"
                                )}
                            </div>
                        </div>
                    )}

                    {filteredBooks?.length > 0 && !hasMoreItems && !isLoading && (
                        <div className="no-more-items-message">
                            Đã hiển thị tất cả sản phẩm
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

Product.defaultProps = {
    listBook: undefined
};

export default Product;