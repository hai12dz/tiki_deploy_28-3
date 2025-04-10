import './book.new.scss'
import React, { useState, useEffect } from 'react';
import SameProductApp from './SameProduct/SameProduct';
import { getBooksAPI } from '@/services/api';

const SameProduct = () => {
    // State to track current slide index
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalPages, setTotalPages] = useState(5); // Default value, will be updated
    const [loading, setLoading] = useState(false);

    // Width of each slide group (matches the width in the existing style)
    const slideWidth = 560;

    // Fetch total count to calculate total pages
    useEffect(() => {
        const fetchTotalCount = async () => {
            try {
                setLoading(true);
                const query = 'current=1&pageSize=1';
                const res = await getBooksAPI(query);

                if (res && res.statusCode === 200 && res.data && res.data.meta) {
                    // Calculate how many pages we'll have with 8 items per page
                    const totalItems = res.data.meta.totalItems;
                    const calculatedPages = Math.ceil(totalItems / 8);
                    console.log(`Total items: ${totalItems}, Total pages: ${calculatedPages}`);
                    setTotalPages(calculatedPages);
                }
            } catch (error) {
                console.error("Failed to fetch total count:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTotalCount();
    }, []);

    // Handle prev click
    const handlePrevClick = () => {
        if (currentSlide > 0) {
            console.log("Moving to previous slide:", currentSlide - 1);
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Handle next click
    const handleNextClick = () => {
        if (currentSlide < totalPages - 1) {
            console.log("Moving to next slide:", currentSlide + 1);
            setCurrentSlide(currentSlide + 1);
        }
    };

    // Handle pagination dot click
    const handlePaginationClick = (index: number) => {
        setCurrentSlide(index);
    };

    // Determine if prev/next buttons should be disabled
    const isPrevDisabled = currentSlide === 0;
    const isNextDisabled = currentSlide === totalPages - 1;

    return (
        <>
            <div className="sc-34e0efdc-0 dSZwVn">
                <div className="sc-34e0efdc-1 ddClVB">Sản phẩm tương tự</div>
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
                                    gap: 8,
                                    transform: `translateX(-${currentSlide * slideWidth}px)`,
                                    transition: "0.5s ease-in-out"
                                }}
                            >
                                {/* For each possible page, render a component but only the visible one will be in view */}
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            width: slideWidth,
                                            minWidth: slideWidth,
                                            display: 'block'
                                        }}
                                    >
                                        <SameProductApp currentPage={index + 1} />
                                    </div>
                                ))}
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
                                {Array.from({ length: totalPages }).map((_, index) => (
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

        </>
    );
};

export default SameProduct;