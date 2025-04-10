import './book.new.scss'
import React, { useState, useEffect } from 'react';
import { getBooksAPI } from '@/services/api';

const TopDeal = () => {
    // State to store all fetched books
    const [allBooks, setAllBooks] = useState<IBookTable[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // State to track current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Width of each slide group
    const slideWidth = 132 * 6 + 40; // Width of 6 items plus spacing

    // Items per page
    const itemsPerPage = 6;

    // Calculate total pages based on fetched data
    const totalSlides = Math.ceil(allBooks.length / itemsPerPage) || 1;

    // Fetch all books once on component mount
    useEffect(() => {
        const fetchTopDeals = async () => {
            try {
                setLoading(true);
                // Fetch books with promotion/deals - adjust query as needed
                const query = 'current=1&pageSize=30&sortBy=promotion:desc';
                const res = await getBooksAPI(query);

                if (res && res.statusCode === 200 && res.data) {
                    if (Array.isArray(res.data.items) && res.data.items.length > 0) {
                        console.log(`Loaded ${res.data.items.length} top deal books`);
                        setAllBooks(res.data.items);
                    } else {
                        console.warn("No top deal books found");
                        setAllBooks([]);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch top deals:", error);
                setAllBooks([]);
            } finally {
                setLoading(false);
            }
        };

        fetchTopDeals();
    }, []);

    // Get books grouped by pages
    const getBooksGroupedByPage = () => {
        const pages = [];
        for (let i = 0; i < allBooks.length; i += itemsPerPage) {
            pages.push(allBooks.slice(i, i + itemsPerPage));
        }
        return pages;
    };

    // Get all pages of books
    const bookPages = getBooksGroupedByPage();

    // Handle prev click
    const handlePrevClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Handle next click
    const handleNextClick = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    // Handle pagination dot click
    const handlePaginationClick = (index: number) => {
        setCurrentSlide(index);
    };

    // Determine if prev/next buttons should be disabled
    const isPrevDisabled = currentSlide === 0;
    const isNextDisabled = currentSlide === totalSlides - 1;

    return (
        <div className="sc-34e0efdc-0 dSZwVn" style={{}}>
            <div className="sc-34e0efdc-1 ddClVB">Top Deals</div>
            <div
                style={{
                    display: "flex",
                    flex: "1 1 0%",
                    overflow: "hidden",
                    paddingTop: 12
                }}
            >
                <div className="sc-a007ec24-0 hVGhMI">
                    <span
                        className={`icon icon-prev ${isPrevDisabled ? 'disabled' : ''}`}
                        onClick={handlePrevClick}
                    >
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.0899 14.5899C11.7645 14.9153 11.2368 14.9153 10.9114 14.5899L5.91139 9.58991C5.58596 9.26447 5.58596 8.73683 5.91139 8.4114L10.9114 3.41139C11.2368 3.08596 11.7645 3.08596 12.0899 3.41139C12.4153 3.73683 12.4153 4.26447 12.0899 4.58991L7.67916 9.00065L12.0899 13.4114C12.4153 13.7368 12.4153 14.2645 12.0899 14.5899Z"
                                fill="#0A68FF"
                            />
                        </svg>
                    </span>
                    <div className="content">
                        <span
                            className="slider"
                            style={{
                                display: "flex",
                                gap: 8,
                                transform: `translateX(-${currentSlide * slideWidth}px)`,
                                transition: "0.5s ease-in-out"
                            }}
                        >
                            {loading ? (
                                <div style={{ width: slideWidth, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    Loading...
                                </div>
                            ) : (
                                bookPages.map((pageBooks, pageIndex) => (
                                    <div
                                        key={pageIndex}
                                        style={{
                                            width: slideWidth,
                                            minWidth: slideWidth,
                                            display: 'flex',
                                            gap: 8,
                                            justifyContent: 'flex-start'
                                        }}
                                    >
                                        {pageBooks.map((book) => (
                                            <div
                                                key={book.id}
                                                className="sc-714f5c73-0 dutDwQ"
                                                style={{ display: "-webkit-box", width: 132 }}
                                            >
                                                <div className="sc-e6fb8ae7-1 kTzRAo">
                                                    <div style={{ height: "100%", width: "100%" }}>
                                                        <a
                                                            className="sc-8b415d9d-1 iRifC product-item"
                                                            data-view-id="product_list_item"
                                                            data-view-content={`{"click_data":{"id":${book.id}}}`}
                                                            href={`/books/${book.id}`}
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
                                                                                            {/* Star rating filled stars */}
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
                                        ))}
                                    </div>
                                ))
                            )}
                        </span>
                        <div
                            className="pagination"
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 4,
                                marginTop: 8
                            }}
                        >
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => handlePaginationClick(index)}
                                    style={{
                                        width: currentSlide === index ? 24 : 16,
                                        height: 2,
                                        background: currentSlide === index ? "rgb(10, 104, 255)" : "rgba(0, 0, 0, 0.05)",
                                        borderRadius: 4,
                                        cursor: "pointer",
                                        transition: "all 0.3s ease"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <span
                        className={`icon icon-next ${isNextDisabled ? 'disabled' : ''}`}
                        onClick={handleNextClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.91107 3.41107C6.23651 3.08563 6.76414 3.08563 7.08958 3.41107L12.0896 8.41107C12.415 8.73651 12.415 9.26415 12.0896 9.58958L7.08958 14.5896C6.76414 14.915 6.23651 14.915 5.91107 14.5896C5.58563 14.2641 5.58563 13.7365 5.91107 13.4111L10.3218 9.00033L5.91107 4.58958C5.58563 4.26414 5.58563 3.73651 5.91107 3.41107Z"
                                fill="#0A68FF"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TopDeal;