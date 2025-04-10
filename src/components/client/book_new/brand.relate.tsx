import React, { useState, useEffect } from 'react';

const RelatedBrand = () => {
    // State to track current slide index and hover state
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    // Width of each slide
    const slideWidth = 674;

    // Total number of slides
    const totalSlides = 2;

    // Auto-slide interval in milliseconds (5 seconds)
    const autoSlideInterval = 5000;

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
        } else {
            // Loop back to the first slide when reaching the end
            setCurrentSlide(0);
        }
    };

    // Handle pagination dot click
    const handlePaginationClick = (index: number) => {
        setCurrentSlide(index);
    };

    // Set up auto-sliding
    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        // Only auto-slide when not hovering
        if (!isHovering) {
            interval = setInterval(() => {
                if (currentSlide < totalSlides - 1) {
                    setCurrentSlide(prev => prev + 1);
                } else {
                    setCurrentSlide(0);
                }
            }, autoSlideInterval);
        }

        // Clean up the interval when component unmounts or when dependencies change
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [currentSlide, isHovering, totalSlides, autoSlideInterval]);

    // Determine if prev/next buttons should be disabled
    const isPrevDisabled = currentSlide === 0;
    const isNextDisabled = currentSlide === totalSlides - 1;

    return (
        <div className="sc-34e0efdc-0 dSZwVn">
            <div className="sc-34e0efdc-1 ddClVB">Thương hiệu liên quan</div>
            <div style={{ paddingTop: 12 }}>
                <div
                    className="sc-a007ec24-0 hVLBTd ad-slider-carousel"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <span
                        className={`icon icon-prev ${isPrevDisabled ? 'disabled' : ''}`}
                        onClick={handlePrevClick}
                        style={{ opacity: isHovering || isPrevDisabled ? 1 : 0 }}
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
                                gap: 12,
                                transform: `translateX(-${currentSlide * slideWidth}px)`,
                                transition: "0.5s ease-in-out"
                            }}
                        >
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 674 }}
                            >
                                <div>
                                    <a
                                        className="listing-footer-banner-ad"
                                        href="https://tiki.vn/khuyen-mai/top-dien-thoai-may-tinh-bang?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934246_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&waypoint_id=tikichon"
                                        target="_blank"
                                        style={{
                                            border: "1px solid rgb(166, 166, 176)",
                                            borderRadius: 8,
                                            height: "224.667px",
                                            display: "block",
                                            boxSizing: "content-box"
                                        }}
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/tka/a9/ec/4f/e95b916999b2dd40b3a8e2af30e704e8.png"
                                            alt="listing-footer-banner-ad"
                                            style={{
                                                borderRadius: 8,
                                                display: "block",
                                                width: "100%",
                                                objectFit: "cover",
                                                height: "100%"
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 674 }}
                            >
                                <div>
                                    <a
                                        className="listing-footer-banner-ad"
                                        href="https://tiki.vn/khuyen-mai/hang-nhap-khau-chinh-hang?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934237_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&tmsx=009cfe78-c61e-4cec-ac87-3f80ef62f1cf&waypoint_id=HANQUOC"
                                        target="_blank"
                                        style={{
                                            border: "1px solid rgb(166, 166, 176)",
                                            borderRadius: 8,
                                            height: "224.667px",
                                            display: "block",
                                            boxSizing: "content-box"
                                        }}
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/tka/46/b7/ac/46f02024b577c3e3a825a0c955bda0ea.png"
                                            alt="listing-footer-banner-ad"
                                            style={{
                                                borderRadius: 8,
                                                display: "block",
                                                width: "100%",
                                                objectFit: "cover",
                                                height: "100%"
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 674 }}
                            >
                                <div>
                                    <a
                                        className="listing-footer-banner-ad"
                                        href="https://tiki.vn/khuyen-mai/xe-phu-kien-sieu-sale?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934248_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&waypoint_id=tikichon"
                                        target="_blank"
                                        style={{
                                            border: "1px solid rgb(166, 166, 176)",
                                            borderRadius: 8,
                                            height: "224.667px",
                                            display: "block",
                                            boxSizing: "content-box"
                                        }}
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/tka/45/7b/70/fb7c0e1414d55ae6ea43af2883f2d842.png"
                                            alt="listing-footer-banner-ad"
                                            style={{
                                                borderRadius: 8,
                                                display: "block",
                                                width: "100%",
                                                objectFit: "cover",
                                                height: "100%"
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 674 }}
                            >
                                <div>
                                    <a
                                        className="listing-footer-banner-ad"
                                        href="https://tiki.vn/khuyen-mai/cong-nghe-gia-hoi?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934243_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&waypoint_id=giamtoi50"
                                        target="_blank"
                                        style={{
                                            border: "1px solid rgb(166, 166, 176)",
                                            borderRadius: 8,
                                            height: "224.667px",
                                            display: "block",
                                            boxSizing: "content-box"
                                        }}
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/tka/7f/0b/d3/95916a0bd08a84d64206ce6ef9e72010.png"
                                            alt="listing-footer-banner-ad"
                                            style={{
                                                borderRadius: 8,
                                                display: "block",
                                                width: "100%",
                                                objectFit: "cover",
                                                height: "100%"
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
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
                        style={{ opacity: isHovering || isNextDisabled ? 1 : 0 }}
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

export default RelatedBrand;