import React, { useState, useEffect } from 'react';
import { getBooksAPI } from 'services/api';

const TikiBestsellers = () => {
    const [bestsellers, setBestsellers] = useState<IBookTable[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBestsellerBooks = async () => {
            try {
                setLoading(true);
                // Fetch bestselling books sorted by sales
                const query = 'current=1&pageSize=10&sort=-sold'; // Get top 10 books sorted by sales
                const response = await getBooksAPI(query);

                if (response.data?.items) {
                    setBestsellers(response.data.items);
                }
            } catch (error) {
                console.error("Failed to fetch bestseller books:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBestsellerBooks();
    }, []);

    return (
        <div className="sc-37a54662-0 hnXIPX">
            <h2>Top Bán Chạy Sản Phẩm {/* */}Nhà Sách Tiki</h2>
            {loading ? (
                <div>Đang tải...</div>
            ) : (
                <ol>
                    {bestsellers.map((book, index) => (
                        <li key={index}>
                            <a href={`https://tiki.vn/product/${book.id}`}>
                                <span className="best-sale-name">{book.mainText}</span>
                                <span className="best-sale-price">{book.price.toLocaleString('vi-VN')}<sup>₫</sup></span>
                            </a>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default TikiBestsellers;