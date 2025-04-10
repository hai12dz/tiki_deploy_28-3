import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './filter.product.scss';
import { useOutletContext } from 'react-router-dom';
import { getBooksAPI, getBrandsAPI, getFullCategories, getSuppliersAPI } from '@/services/api';
import { set } from 'lodash';
import { useFilterContext } from '@/context/FilterContext';
import FilterNewProductModal from './filter.modal.new';

interface ProductFilterProps {
    onListBookChange?: (books: IBookTable[]) => void;
    isLoading?: boolean;
    setIsLoading?: (loading: boolean) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
    onListBookChange,
}) => {
    const [brandExpanded, setBrandExpanded] = useState(false);
    const [supplierExpanded, setSupplierExpanded] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [sortMenuVisible, setSortMenuVisible] = useState(false);
    const sortOptions = ['Phổ biến', 'Bán chạy', 'Hàng mới', 'Giá thấp đến cao', 'Giá cao đến thấp'];
    const sortButtonRef = useRef<HTMLButtonElement>(null);
    const sortMenuRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [queryFiler, setQueryFilter] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [listBrand, setListBrand] = useState<IBrands[]>([])
    const [listSupplier, setListSupplier] = useState<ISupplier[]>([])
    const [listBook, setListBook] = useState<IBookTable[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [listFullCategory, setListFullCategory] = useState<ICategory[]>([])
    const containerRef = useRef<HTMLDivElement>(null);
    const expandButtonRef = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState<number>(1);
    const [filter, setFilter] = useState<string>("");
    const [sortQuery, setSortQuery] = useState<string>("sort=-sold");
    const [searchTerm, setSearchTerm] = useOutletContext() as any;
    const [followSupplier, setFollowSupplier] = useState<boolean>(false);

    const [tempSelectedBrands, setTempSelectedBrands] = useState<string[]>([]);
    const [tempSelectedSuppliers, setTempSelectedSuppliers] = useState<string[]>([]);
    const { isLoading, setIsLoading, selectedBrands, setSelectedBrands, selectedSuppliers, setSelectedSuppliers,
        fastDeliveryChecked, setFastDeliveryChecked, cheapPriceChecked, setCheapPriceChecked,
        freeShipChecked, setFreeShipChecked, fourStarsChecked, setFourStarsChecked,
        fiveStarsChecked, setFiveStarsChecked, threeStarsChecked, setThreeStarsChecked,
        selectedSort, setSelectedSort, pageSize, setPageSize,
        minPrice, setMinPrice, maxPrice, setMaxPrice
    } = useFilterContext();

    const [searchMode, setSearchMode] = useState<boolean>(false);
    const [initialSearchDone, setInitialSearchDone] = useState<boolean>(false);
    const initialSearchTermRef = useRef<string>('');

    useEffect(() => {
        fetchBrand();
        fetchSupplier();
        fetchFullCategories();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            initialSearchTermRef.current = searchTerm;
            performSearchOnly();
            setInitialSearchDone(true);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBook();
    }, [
        current,
        pageSize,
        filter,
        selectedSort,
        fastDeliveryChecked,
        cheapPriceChecked,
        freeShipChecked,
        fourStarsChecked,
        fiveStarsChecked,
        threeStarsChecked,
        selectedBrands,
        selectedSuppliers,
        minPrice,
        maxPrice
    ]);

    const performSearchOnly = async () => {
        if (setIsLoading) {
            setIsLoading(true);
        }

        try {
            const query = `current=1&pageSize=${pageSize}&mainText=${encodeURIComponent(searchTerm)}`;

            const res = await getBooksAPI(query);
            if (res && res.data) {
                const books = res.data.items;
                setListBook(books);
                setTotal(res.data.meta.totalItems);

                if (onListBookChange) {
                    onListBookChange(books);
                }
            }
        } catch (error) {
            console.error("Error searching books:", error);
        } finally {
            if (setIsLoading) {
                setIsLoading(false);
            }
        }
    };

    const fetchBook = async () => {
        if (setIsLoading) {
            setIsLoading(true);
        }

        let query = `current=${current}&pageSize=${pageSize}`;

        if (selectedSort) {
            const sortCode = getSortCode(selectedSort);
            query += `&sort=${sortCode}`;
        }

        if (filter) {
            query += `&${filter}`;
        }

        if (searchTerm && !initialSearchDone) {
            query += `&mainText=${encodeURIComponent(searchTerm)}`;
        }

        if (selectedBrands && selectedBrands.length > 0) {
            query += `&brands=${selectedBrands.join(',')}`;
        }

        if (selectedSuppliers && selectedSuppliers.length > 0) {
            query += `&suppliers=${selectedSuppliers.join(',')}`;
        }

        if (threeStarsChecked) {
            query += `&minRating=3`;
        } else if (fourStarsChecked) {
            query += `&minRating=4`;
        } else if (fiveStarsChecked) {
            query += `&minRating=5`;
        }

        if (freeShipChecked) {
            query += `&freeShipping=true`;
        }

        if (cheapPriceChecked) {
            query += `&cheapPrice=true`;
        }

        if (fastDeliveryChecked) {
            query += `&fastDelivery=true`;
        }

        if (minPrice) {
            query += `&priceBottom=${minPrice}`;
        }

        if (maxPrice) {
            query += `&priceTop=${maxPrice}`;
        }

        try {
            const res = await getBooksAPI(query);
            if (res && res.data) {
                const books = res.data.items;
                setListBook(books);
                setTotal(res.data.meta.totalItems);

                if (onListBookChange) {
                    onListBookChange(books);
                }
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            if (setIsLoading) {
                setIsLoading(false);
            }
        }
    };

    const getSortCode = (sortText: string) => {
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
                return encodeURIComponent(sortText);
        }
    };

    const fetchBrand = async () => {
        const res = await getBrandsAPI();
        setListBrand(res.data!)
    }

    const fetchSupplier = async () => {
        const res = await getSuppliersAPI();
        setListSupplier(res.data!)
    }

    const fetchFullCategories = async () => {
        const res = await getFullCategories()
        setListFullCategory(res.data!)
    }

    const getBrandNames = () => listBrand.map(brand => brand.name);
    const getSupplierNames = () => listSupplier.map(supplier => supplier.name);

    // Always ensure we display exactly 4 brands
    const getDisplayBrands = () => {
        const allBrandNames = getBrandNames();
        if (selectedBrands.length >= 4) {
            return selectedBrands.slice(0, 4);
        } else {
            // Add default brands to fill up to 4 items
            const result = [...selectedBrands];
            const defaultBrands = allBrandNames.filter(brand => !selectedBrands.includes(brand));
            const remaining = 4 - result.length;
            result.push(...defaultBrands.slice(0, remaining));
            return result;
        }
    };

    // Always ensure we display exactly 4 suppliers
    const getDisplaySuppliers = () => {
        const allSupplierNames = getSupplierNames();
        if (selectedSuppliers.length >= 4) {
            return selectedSuppliers.slice(0, 4);
        } else {
            // Add default suppliers to fill up to 4 items
            const result = [...selectedSuppliers];
            const defaultSuppliers = allSupplierNames.filter(supplier => !selectedSuppliers.includes(supplier));
            const remaining = 4 - result.length;
            result.push(...defaultSuppliers.slice(0, remaining));
            return result;
        }
    };

    const brands = getDisplayBrands().slice(0, 4);
    const brandsFull = getDisplayBrands().slice(0, 4);

    const supplierNames = getSupplierNames();

    const formatSupplierName = (name: string) => {
        if (name === "HỆ THỐNG NHÀ SÁCH ABC") {
            return "HỆ THỐNG NHÀ SÁCH AB...";
        }
        return name.length > 25 ? name.substring(0, 25) + '...' : name;
    };

    const suppliers = getDisplaySuppliers().slice(0, 3).map(formatSupplierName);
    const suppliersFull = getDisplaySuppliers().slice(0, 4).map(formatSupplierName);

    const allBrands = getBrandNames();
    const allSuppliers = getSupplierNames();

    const isSupplierSelected = (supplier: string) => {
        if (supplier.endsWith('...')) {
            const baseText = supplier.slice(0, -3);
            return selectedSuppliers.some(s => s.startsWith(baseText));
        }
        return selectedSuppliers.includes(supplier);
    };

    const handleBrandToggle = () => {
        if (!brandExpanded) {
            setTempSelectedBrands([...selectedBrands]);
        }
        setBrandExpanded(prev => !prev);
    };

    const handleBrandSelect = (brand: string) => {
        if (!brandExpanded) {
            if (setPageSize) {
                setPageSize(10);
            }

            setInitialSearchDone(true);

            setSelectedBrands(prev =>
                prev.includes(brand)
                    ? prev.filter(b => b !== brand)
                    : [...prev, brand]
            );
            setTempSelectedBrands(prev => {
                if (prev.includes(brand)) {
                    return prev.filter(b => b !== brand);
                } else {
                    return [...prev, brand];
                }
            });
        }
    };

    const handleResetBrands = () => {
        setTempSelectedBrands([]);
    };

    const handleSupplierToggle = () => {
        setBrandExpanded(false);

        if (!supplierExpanded) {
            setSupplierExpanded(true);
            setTempSelectedSuppliers([...selectedSuppliers]);
            return;
        }

        if (supplierExpanded && !followSupplier) {
            setFollowSupplier(true);
            setTempSelectedSuppliers([...selectedSuppliers]);
            return;
        }

        if (followSupplier) {
            setFollowSupplier(false);
            return;
        }
    };

    const handleSupplierSelect = (supplier: string) => {
        if (!followSupplier) {
            const actualSupplier = supplier.endsWith('...')
                ? allSuppliers.find(s => s.startsWith(supplier.slice(0, -3))) || supplier
                : supplier;

            if (setPageSize) {
                setPageSize(10);
            }

            setInitialSearchDone(true);

            setSelectedSuppliers(prev =>
                prev.includes(actualSupplier)
                    ? prev.filter(s => s !== actualSupplier)
                    : [...prev, actualSupplier]
            );
            setTempSelectedSuppliers(prev => {
                if (prev.includes(actualSupplier)) {
                    return prev.filter(s => s !== actualSupplier);
                } else {
                    return [...prev, actualSupplier];
                }
            });
        }
    };

    const handleResetSuppliers = () => {
        setTempSelectedSuppliers([]);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const isLeftArrowClick = (event.target as HTMLElement).closest('.left-arrow-button');
        if (isLeftArrowClick) return;

        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node) &&
            expandButtonRef.current &&
            !expandButtonRef.current.contains(event.target as Node) &&
            !(event.target as HTMLElement).closest('.arrow-button')
        ) {
            setBrandExpanded(false);
            setFollowSupplier(false);
        }
    };

    useEffect(() => {
        if (brandExpanded || supplierExpanded) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [brandExpanded, supplierExpanded]);

    const renderBrandModal = () => {
        if (!brandExpanded || !expandButtonRef.current) {
            return null;
        }

        const buttonRect = expandButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                ref={modalRef}
                className="brand-selection-modal brand-modal-portal"
                style={{
                    '--top-position': `${buttonRect.bottom + window.scrollY + 10}px`,
                    '--left-position': `${buttonRect.left + window.scrollX - 200}px`
                } as React.CSSProperties}
            >
                <div className="brand-selection-content">
                    <div className="brand-selection-options">
                        {allBrands.map((brand, index) => (
                            <button
                                key={index}
                                className={`brand-selection-chip ${tempSelectedBrands.includes(brand) ? 'selected' : ''}`}
                                onClick={() => {
                                    setTempSelectedBrands(prev =>
                                        prev.includes(brand)
                                            ? prev.filter(b => b !== brand)
                                            : [...prev, brand]
                                    );
                                }}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                    <div className="brand-selection-actions">
                        <button className="reset-button" onClick={handleResetBrands}>
                            Xóa lọc
                        </button>
                        <button className="apply-button" onClick={() => {
                            setSelectedBrands(tempSelectedBrands);
                            handleBrandToggle();
                        }}>
                            Xem kết quả
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    const renderSupplierModal = () => {
        if (!supplierExpanded || !expandButtonRef.current) {
            return null;
        }

        const buttonRect = expandButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                ref={modalRef}
                className="supplier-selection-modal supplier-modal-portal"
                style={{
                    '--top-position': `${buttonRect.bottom + window.scrollY + 10}px`,
                    '--left-position': `${buttonRect.left + window.scrollX + 470}px`
                } as React.CSSProperties}
            >
                <div className="supplier-selection-content supplier-content-scroll">
                    <div className="supplier-selection-options">
                        {allSuppliers.map((supplier, index) => (
                            <button
                                key={index}
                                className={`supplier-selection-chip ${tempSelectedSuppliers.includes(supplier) ? 'selected' : ''}`}
                                onClick={() => {
                                    setTempSelectedSuppliers(prev =>
                                        prev.includes(supplier)
                                            ? prev.filter(s => s !== supplier)
                                            : [...prev, supplier]
                                    );
                                }}
                            >
                                {supplier}
                            </button>
                        ))}
                    </div>
                    <div className="supplier-selection-actions">
                        <button className="reset-button" onClick={handleResetSuppliers}>
                            Xóa lọc
                        </button>
                        <button className="apply-button" onClick={() => {
                            setSelectedSuppliers(tempSelectedSuppliers);
                            handleSupplierToggle();
                        }}>
                            Xem kết quả
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    const handleLeftArrowClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSupplierExpanded(false);
        setShowLeftArrow(false);
        setBrandExpanded(false);
    };

    useEffect(() => {
        if (containerRef.current) {
            if (supplierExpanded) {
                containerRef.current.style.transform = 'translateX(-82px)';
                containerRef.current.classList.add('translated');
                setShowLeftArrow(true);
            } else {
                containerRef.current.style.transform = 'translateX(0)';
                containerRef.current.classList.remove('translated');
                setShowLeftArrow(false);
            }
        }
    }, [supplierExpanded]);

    const toggleSortMenu = () => {
        setSortMenuVisible((prev) => !prev);
    };

    const handleSortSelect = (option: string) => {
        if (setPageSize) {
            setPageSize(10);
        }

        setSelectedSort(option);
        setSortMenuVisible(false);
    };

    const handleClickOutsideSortMenu = (event: MouseEvent) => {
        if (
            sortMenuRef.current &&
            !sortMenuRef.current.contains(event.target as Node) &&
            sortButtonRef.current &&
            !sortButtonRef.current.contains(event.target as Node)
        ) {
            setSortMenuVisible(false);
        }
    };

    useEffect(() => {
        if (sortMenuVisible) {
            document.addEventListener('mousedown', handleClickOutsideSortMenu);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideSortMenu);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSortMenu);
        };
    }, [sortMenuVisible]);

    const renderSortDropdown = () => {
        if (!sortMenuVisible || !sortButtonRef.current) return null;

        const buttonRect = sortButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                ref={sortMenuRef}
                className="sort-menu visible sort-menu-portal"
                style={{
                    '--top-position': `${buttonRect.bottom + window.scrollY}px`
                } as React.CSSProperties}
            >
                {sortOptions.map((option, index) => (
                    <div
                        key={index}
                        className={`sort-item ${selectedSort === option ? 'selected' : ''}`}
                        onClick={() => handleSortSelect(option)}
                    >
                        {option}
                        {selectedSort === option && (
                            <img
                                src="https://salt.tikicdn.com/ts/upload/0a/3f/8c/35f5967924f138b30c5840d3907ba081.png"
                                alt="selected"
                            />
                        )}
                    </div>
                ))}
            </div>,
            document.body
        );
    };

    const handleFastDeliveryChange = () => {
        if (setPageSize) {
            setPageSize(10);
        }
        setInitialSearchDone(true);
        setFastDeliveryChecked(!fastDeliveryChecked);
    };

    const handleCheapPriceChange = () => {
        if (setPageSize) {
            setPageSize(10);
        }
        setInitialSearchDone(true);
        setCheapPriceChecked(!cheapPriceChecked);
    };

    const handleFreeShipChange = () => {
        if (setPageSize) {
            setPageSize(10);
        }
        setInitialSearchDone(true);
        setFreeShipChecked(!freeShipChecked);
    };

    const handleFourStarsChange = () => {
        if (setPageSize) {
            setPageSize(10);
        }
        setInitialSearchDone(true);
        setFourStarsChecked(!fourStarsChecked);
    };

    return (
        <div className="product-filter-container">
            {isLoading && (
                <div className="filter-loading-spinner">
                    <div className="spinner"></div>
                </div>
            )}

            <div className={`filter-content ${isLoading ? 'filter-content-loading' : ''}`}>
                <div className="filter-sections-wrapper">
                    {showLeftArrow && (
                        <div className="left-arrow-button">
                            <img
                                onClick={handleLeftArrowClick}
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                alt="arrow"
                                className="left-arrow-icon"
                            />
                        </div>
                    )}

                    <div className="filter-sections" ref={containerRef}>
                        <div className="filter-section-groups">
                            <div className="filter-sections-brand">
                                <div className="filter-section">
                                    <div className="section-label">Thương hiệu</div>
                                    <div className="filter-options-wrapper">
                                        <div className="brand-options-container">
                                            <div className="filter-options">
                                                {(brandExpanded ? brandsFull : brands).map((brand, index) => (
                                                    <button
                                                        key={index}
                                                        className={`option-chip ${selectedBrands.includes(brand) ? 'selected' : ''}`}
                                                        onClick={() => handleBrandSelect(brand)}
                                                    >
                                                        {brand}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="expand-button-container">
                                            <button ref={expandButtonRef} className="expand-button" onClick={handleBrandToggle}>
                                                <div>
                                                    <img
                                                        src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                                        alt="arrow"
                                                        className="arrow-icon-brand"
                                                    />
                                                </div>
                                            </button>
                                            <div className="brand-supplier-divider"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="filter-sections-supplier">
                                <div className="filter-section">
                                    <div className="section-label">Nhà cung cấp</div>
                                    <div className="filter-options-wrapper">
                                        <div className="supplier-options-container">
                                            <div className="filter-options">
                                                {(supplierExpanded ? suppliersFull : suppliers).map((supplier, index) => (
                                                    <button
                                                        key={index}
                                                        className={`option-chip ${isSupplierSelected(supplier) ? 'selected' : ''}`}
                                                        onClick={() => handleSupplierSelect(supplier)}
                                                    >
                                                        {supplier}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div onClick={handleSupplierToggle} className="gradient-wrapper">
                                            <img
                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                                alt="arrow"
                                                className={`arrow-icon-supplier ${supplierExpanded ? 'rotated' : ''}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-header-divider"></div>

                    <div className="filter-header">
                        <div
                            onClick={() => { setIsModalOpen(true) }}
                            className="filter-button">
                            {(selectedBrands.length > 0 || selectedSuppliers.length > 0 ||
                                fastDeliveryChecked || cheapPriceChecked ||
                                freeShipChecked || fourStarsChecked || fiveStarsChecked || threeStarsChecked) && (
                                    <div className="icon-click"></div>
                                )}
                            <img
                                src="https://salt.tikicdn.com/ts/upload/3f/23/35/2d29fcaea0d10cbb85ce5b0d4cd20add.png"
                                alt="filters"
                                className="filter-icon"
                            />
                            <span>Tất cả</span>
                        </div>
                    </div>
                </div>

                <div className="filter-options-row">
                    <label className="option">
                        <span
                            className="box"
                            onClick={handleFastDeliveryChange}
                        >
                            <img
                                className={`icon-check-on ${fastDeliveryChecked ? 'visible' : ''}`}
                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                alt="active-checkbox"
                            />
                            <img
                                className={`icon-check-off ${!fastDeliveryChecked ? 'visible' : ''}`}
                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                alt="default-checkbox"
                            />
                            <img
                                className="icon-check-hover"
                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                alt="hovered-checkbox"
                            />
                        </span>
                        <div
                            className="option-content"
                            onClick={handleFastDeliveryChange}
                        >
                            <img
                                src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                                alt="Giao siêu tốc 2H"
                                className="now-tag"
                            />
                            <span className="option-text">Giao siêu tốc 2H</span>
                        </div>
                    </label>

                    <div className="vertical-divider"></div>

                    <label className="option">
                        <span
                            className="box"
                            onClick={handleCheapPriceChange}
                        >
                            <img
                                className={`icon-check-on ${cheapPriceChecked ? 'visible' : ''}`}
                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                alt="active-checkbox"
                            />
                            <img
                                className={`icon-check-off ${!cheapPriceChecked ? 'visible' : ''}`}
                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                alt="default-checkbox"
                            />
                            <img
                                className="icon-check-hover"
                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                alt="hovered-checkbox"
                            />
                        </span>
                        <div
                            className="option-content"
                            onClick={handleCheapPriceChange}
                        >
                            <img
                                src="https://salt.tikicdn.com/ts/upload/b5/aa/48/2305c5e08e536cfb840043df12818146.png"
                                alt="Siêu rẻ"
                                className="deal-tag"
                            />
                            <span className="option-text">Siêu rẻ</span>
                        </div>
                    </label>

                    <div className="vertical-divider"></div>

                    <label className="option">
                        <span
                            className="box"
                            onClick={handleFreeShipChange}
                        >
                            <img
                                className={`icon-check-on ${freeShipChecked ? 'visible' : ''}`}
                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                alt="active-checkbox"
                            />
                            <img
                                className={`icon-check-off ${!freeShipChecked ? 'visible' : ''}`}
                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                alt="default-checkbox"
                            />
                            <img
                                className="icon-check-hover"
                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                alt="hovered-checkbox"
                            />
                        </span>
                        <div
                            className="option-content"
                            onClick={handleFreeShipChange}
                        >
                            <img
                                src="https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png"
                                alt="FREESHIP XTRA"
                                className="freeship-tag"
                            />
                        </div>
                    </label>

                    <div className="vertical-divider"></div>

                    <label className="option">
                        <span
                            className="box"
                            onClick={handleFourStarsChange}
                        >
                            <img
                                className={`icon-check-on ${fourStarsChecked ? 'visible' : ''}`}
                                src="https://salt.tikicdn.com/ts/upload/3a/f3/e4/b9e681d6b71abcc05f6c00399361bb81.png"
                                alt="active-checkbox"
                            />
                            <img
                                className={`icon-check-off ${!fourStarsChecked ? 'visible' : ''}`}
                                src="https://salt.tikicdn.com/ts/upload/03/a5/2f/df8fb591920f048e53c88e18c84dd7d4.png"
                                alt="default-checkbox"
                            />
                            <img
                                className="icon-check-hover"
                                src="https://salt.tikicdn.com/ts/upload/d2/16/38/c83c70851f66b169788bda4732b496a1.png"
                                alt="hovered-checkbox"
                            />
                        </span>
                        <div
                            className="option-content"
                            onClick={handleFourStarsChange}
                        >
                            <div className="star-rating star-rating-no-gap">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        width="12"
                                        height="12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="star-icon-negative-margin"
                                    >
                                        <g clipPath="url(#a)">
                                            <path
                                                d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                fill={index < 4 ? "#FFC400" : "#DDDDE3"}
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="a">
                                                <path
                                                    fill="#fff"
                                                    transform="translate(1 1.5)"
                                                    d="M0 0h10v10H0z"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                ))}
                            </div>
                            <span className="option-text">từ 4 sao</span>
                        </div>
                    </label>


                    <div className="sort">
                        <span className="sort-label">Sắp xếp</span>
                        <button ref={sortButtonRef} className="sort-button" onClick={toggleSortMenu}>
                            <span>{selectedSort}</span>
                            <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/catalog/arrow.svg"
                                alt="arrow"
                                className="arrow-icon-brand"
                            />
                        </button>
                        {renderSortDropdown()}
                    </div>
                </div>

                {brandExpanded && renderBrandModal()}
                {followSupplier && renderSupplierModal()}

                <FilterNewProductModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    queryFiler={queryFiler}
                    setQueryFilter={setQueryFilter}
                    listBrand={listBrand}
                    listSupplier={listSupplier}
                    pageSize={pageSize}
                    setListBook={setListBook}
                    setTotal={setTotal}
                    listFullCategory={listFullCategory}
                    selectedBrands={selectedBrands}
                    selectedSuppliers={selectedSuppliers}
                    setParentSelectedBrands={setSelectedBrands}
                    setParentSelectedSuppliers={setSelectedSuppliers}
                    setParentTempSelectedBrands={setTempSelectedBrands}
                    setParentTempSelectedSuppliers={setTempSelectedSuppliers}
                    fastDeliveryChecked={fastDeliveryChecked}
                    cheapPriceChecked={cheapPriceChecked}
                    freeShipChecked={freeShipChecked}
                    fourStarsChecked={fourStarsChecked}
                    fiveStarsChecked={fiveStarsChecked}
                    threeStarsChecked={threeStarsChecked}
                    setFastDeliveryChecked={setFastDeliveryChecked}
                    setCheapPriceChecked={setCheapPriceChecked}
                    setFreeShipChecked={setFreeShipChecked}
                    setFourStarsChecked={setFourStarsChecked}
                    setFiveStarsChecked={setFiveStarsChecked}
                    setThreeStarsChecked={setThreeStarsChecked}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                />
            </div>
        </div>
    );
};

ProductFilter.defaultProps = {
    onListBookChange: undefined,
    isLoading: false,
    setIsLoading: undefined
};

export default ProductFilter;