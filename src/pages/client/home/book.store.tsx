import { useEffect, useState } from "react";
import { getFullCategories } from "@/services/api";
import MyCarousel from "./slide/carousel";
import ProductFilter from "./product/filter.product";

// Add a proper interface for the component props
interface TikiBookstoreProps {
    onListBookChange: (books: IBookTable[]) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;

}

const TikiBookstore: React.FC<TikiBookstoreProps> = ({ onListBookChange, isLoading, setIsLoading }) => {
    const [listFullCategory, setListFullCategory] = useState<ICategory[]>([]);

    useEffect(() => {
        fetchFullCategories();
    }, []);

    const fetchFullCategories = async () => {
        const res = await getFullCategories();
        setListFullCategory(res.data!);
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
                        <a key={index} href={`/${item.id}`}>
                            <div className="sc-9f1e84db-3 jhfSVS">
                                <div className="sc-9f1e84db-4 bxgzHY">
                                    <img src={item.url} width="88" height="88" alt={item.name} />
                                </div>
                                <div className="sc-9f1e84db-5 cZlEPY">{item.name}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="sc-9f1e84db-0 hzwFlv">
                <div className="sc-9f1e84db-2 cASiea">Tất cả sản phẩm</div>
                <div>
                    {/* Only keep the ProductFilter here and pass the callback function */}
                    <ProductFilter
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        onListBookChange={onListBookChange} />
                </div>
            </div>
        </div>
    );
};

export default TikiBookstore;