import { getCategoryAPI, getNameCategoryAPI } from "@/services/api";
import { useEffect, useState } from "react";
import ProductCard from "./category.ads";

const CategoryExplorer = () => {
    const [listCategory, setListCategory] = useState<{ label: string, value: string }[]>([]);
    const [nameCategory, setNameCategory] = useState<{ [key: string]: string[] }>({});
    const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

    // Hàm lấy danh mục con của từng category
    const showCategories = async (categoryName: string) => {
        setExpandedCategories(prev => {
            const newState = Object.keys(prev).reduce((acc, key) => {
                acc[key] = false; // Close all categories
                return acc;
            }, {} as { [key: string]: boolean });
            return {
                ...newState,
                [categoryName]: !prev[categoryName] // Toggle the clicked category
            };
        });

        if (!expandedCategories[categoryName]) {
            const query = `name=${categoryName}`;
            const res = await getNameCategoryAPI(query);
            setNameCategory(prevState => ({
                ...prevState,
                [categoryName]: res.data ?? []
            }));
        }
    };

    useEffect(() => {
        const initCategory = async () => {
            const res = await getCategoryAPI();
            if (res && res.data) {
                const categories = res.data.map(item => ({ label: item, value: item }));
                setListCategory(categories);
            }
        };
        initCategory();
    }, []);

    return (
        <div className="sc-dfad4f1d-2 kQdWhJ">
            <div className="sc-d1be8d65-0 bFGLIR">
                <div className="sc-d1be8d65-1 NBIRX">Khám phá theo danh mục</div>
                <div className="sc-36d678cb-0 eSTCTE">
                    {listCategory.map((item, index) => (
                        <div key={index} className="sc-36d678cb-1 jZopbL">
                            <div className="sc-36d678cb-2 bLoXGk">
                                <a href={`/category/${item.value}`}>
                                    <div className="sc-36d678cb-3 fZuZht">{item.label}</div>
                                </a>
                                <div className="sc-36d678cb-4 jMdDfP" onClick={() => showCategories(item.label)}>
                                    <img
                                        src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                                        alt="Toggle"
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            transform: expandedCategories[item.label] ? "rotate(0deg)" : "rotate(180deg)",
                                            transition: "transform 0.3s ease"
                                        }}
                                    />
                                </div>
                            </div>
                            {expandedCategories[item.label] && nameCategory[item.label] && (
                                <div className="sc-36d678cb-5 cHTThk">
                                    {nameCategory[item.label].map((subItem, subIndex) => (
                                        <div key={subIndex} className="sc-36d678cb-6 jZEauZ">
                                            <a href={`/subcategory/${subItem}`}>{subItem}</a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div >
                <ProductCard />
            </div>


        </div>
    );
};

export default CategoryExplorer;
