import React, { useEffect, useState } from 'react';
import { getBooksAPI } from '@/services/api';

interface SameProductAppProps {
    currentPage: number;
}

const SameProductApp = ({ currentPage = 1 }: SameProductAppProps) => {
    const [allBooks, setAllBooks] = useState<IBookTable[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const pageSize = 8;

    // Fetch all books once on component mount
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                setLoading(true);
                // Fetch a larger set of books in one API call
                const query = `current=1&pageSize=40`;
                console.log("Fetching all books with query:", query);

                const res = await getBooksAPI(query);
                console.log("API Response:", res);

                if (res && res.statusCode === 200 && res.data) {
                    if (Array.isArray(res.data.items) && res.data.items.length > 0) {
                        console.log(`Successfully loaded ${res.data.items.length} books`);
                        setAllBooks(res.data.items);
                    } else {
                        console.warn("No books found in the response");
                        setAllBooks([]);
                    }
                } else {
                    console.error("Invalid response format:", res);
                    setAllBooks([]);
                }
            } catch (error) {
                console.error("Failed to fetch books:", error);
                setAllBooks([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAllBooks();
    }, []); // Empty dependency array ensures this runs only once

    // Calculate what books to display based on current page
    const displayBooks = React.useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, allBooks.length);
        console.log(`Displaying books from index ${startIndex} to ${endIndex} for page ${currentPage}`);
        return allBooks.slice(startIndex, endIndex);
    }, [allBooks, currentPage, pageSize]);

    console.log("Current page:", currentPage, "Books to display:", displayBooks.length);

    return (
        <div className="sc-714f5c73-0 dutDwQ" style={{ display: "-webkit-box", width: 552 }}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(calc(25% - 8px), 1fr))",
                    gridTemplateRows: "repeat(2, 1fr)",
                    gridAutoFlow: "row",
                    gap: 8
                }}
            >
                {loading ? (
                    <div>Loading...</div>
                ) : displayBooks.length > 0 ? (
                    displayBooks.map((book) => (
                        <div key={book.id} className="sc-e6fb8ae7-1 kTzRAo">
                            <div style={{ height: "100%", width: "100%" }}>
                                <div style={{ height: "100%", width: "100%" }}>
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content={`{"click_data":{"id":${book.id}}}`}
                                        href={`/books/${book.id}`}
                                        rel="nofollow"
                                        style={{ height: "100%" }}
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet={`${book.thumbnail} 1x, ${book.thumbnail} 2x`}
                                                            />
                                                            <img
                                                                srcSet={`${book.thumbnail} 1x, ${book.thumbnail} 2x`}
                                                                alt={book.mainText}
                                                                className="sc-900210d0-0 hFEtiz"
                                                                style={{
                                                                    width: "100%",
                                                                    aspectRatio: "1 / 1",
                                                                    height: "100%",
                                                                    opacity: 1
                                                                }}
                                                            />
                                                        </picture>
                                                    </div>
                                                </div>
                                                {book.promotion > 0 && (
                                                    <p
                                                        className="ads-badge"
                                                        style={{
                                                            display: "inline-block",
                                                            height: 20,
                                                            margin: 0,
                                                            padding: "2px 4px",
                                                            background: "var(--alias-themeVariant, #F5F5FA)",
                                                            borderRadius: 4,
                                                            color: "rgb(39, 39, 42)",
                                                            fontSize: 10,
                                                            fontWeight: 700,
                                                            lineHeight: "150%",
                                                            textTransform: "uppercase",
                                                            border: "1px solid rgb(255, 255, 255)",
                                                            zIndex: 2,
                                                            whiteSpace: "nowrap",
                                                            position: "absolute",
                                                            top: 8,
                                                            right: 8
                                                        }}
                                                    >
                                                        {book.promotion}% OFF
                                                    </p>
                                                )}
                                            </div>
                                            <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                                <div className="info">
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 4
                                                        }}
                                                    >
                                                        <div
                                                            className="name-wrapper"
                                                            style={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                gap: 4,
                                                                height: 58
                                                            }}
                                                        >
                                                            <h3 className="sc-8b415d9d-5 izNpeL">
                                                                {book.mainText}
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{
                                                                        fontSize: 12,
                                                                        display: "inline-block"
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: `${book.rating_svg * 20}%`,
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                                            <svg
                                                                                key={star}
                                                                                width={12}
                                                                                height={12}
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                style={{ width: 12, height: 12 }}
                                                                            >
                                                                                <g clipPath="url(#a)">
                                                                                    <path
                                                                                        d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                                                        fill="#FFC400"
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
                                                                    {/* Background Stars (Empty) */}
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <svg
                                                                            key={star}
                                                                            width={12}
                                                                            height={12}
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <g clipPath="url(#a)">
                                                                                <path
                                                                                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                                                    fill="#DDDDE3"
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
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    {book.price.toLocaleString()}<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No books available for this page.</div>
                )}
            </div>
        </div>
    );
};

export default SameProductApp;