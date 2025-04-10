import { useEffect, useState } from "react";
import { getFullCategories, getBooksAPI } from "@/services/api";
import MyCarousel from "./slide/carousel";
import ProductFilter from "./product/filter.product";
import FilterProductNew from "./product/product.test";

// Add a proper interface for the component props
interface TikiBookstoreProps {
    onListBookChange: (books: IBookTable[]) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

const TikiBookstore: React.FC<TikiBookstoreProps> = ({ onListBookChange, isLoading, setIsLoading }) => {
    const [listFullCategory, setListFullCategory] = useState<ICategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        fetchFullCategories();
    }, []);

    const fetchFullCategories = async () => {
        const res = await getFullCategories();
        setListFullCategory(res.data!);
    };

    const handleCategoryClick = async (categoryId: string) => {
        try {
            // If clicking the same category again, do nothing
            if (selectedCategory === categoryId) return;

            setIsLoading(true);
            setSelectedCategory(categoryId);

            // Get the category name from the list using ID
            const selectedCategoryObj = listFullCategory.find(cat => cat.id === categoryId);

            // Build query with filter parameter instead of category
            // The backend expects 'filter' parameter with category name, not ID
            let query = `filter=${selectedCategoryObj?.name || ''}`;

            const res = await getBooksAPI(query);
            if (res && res.data) {
                // Simply pass the books to the parent component
                const books = res.data.items || [];
                onListBookChange(books);
            }
        } catch (error) {
            console.error("Error fetching books by category:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="sc-dfad4f1d-3 TjGns">
            <div className="sc-4b956788-0 dUZwur">
                <h2>Nhà Sách Tiki</h2>
            </div>

            <MyCarousel />
            <div className="sc-9f1e84db-0 hzwFlv">
                <div className="sc-9f1e84db-2 cASiea">Khám phá theo danh mục</div>
                <div className="sc-9f1e84db-1 iNVZwz">
                    {listFullCategory.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategoryClick(item.id)}
                            style={{ cursor: 'pointer' }}
                            className={`sc-9f1e84db-3 jhfSVS ${selectedCategory === item.id ? 'selected-category' : ''}`}
                        >
                            <div className="sc-9f1e84db-4 bxgzHY">
                                <img src={item.url} width="88" height="88" alt={item.name} />
                            </div>
                            <div className="sc-9f1e84db-5 cZlEPY">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="sc-9f1e84db-0 hzwFlv">
                <div className="sc-9f1e84db-2 cASiea">Tất cả sản phẩm</div>
                <div>
                    <ProductFilter
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        onListBookChange={onListBookChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default TikiBookstore;