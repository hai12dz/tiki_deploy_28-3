import './carousel.product.scss';
import React, { useState, useEffect } from 'react';

const CarouselProduct = (): JSX.Element => {
    // State to track current slide index and hover state
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    // Width of each slide
    const slideWidth: number = 360;

    // Total number of slides
    const totalSlides: number = 7; // Adjust based on actual number of slides

    // Auto-slide interval in milliseconds (5 seconds)
    const autoSlideInterval: number = 3000;

    // Handle prev click
    const handlePrevClick = (): void => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Handle next click
    const handleNextClick = (): void => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            // Loop back to the first slide when reaching the end
            setCurrentSlide(0);
        }
    };

    // Set up auto-sliding
    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        // Only auto-slide when not hovering
        if (!isHovering) {
            interval = setInterval(() => {
                handleNextClick();
            }, autoSlideInterval);
        }

        // Clean up the interval when component unmounts or when dependencies change
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [currentSlide, isHovering]);

    // Determine if prev/next buttons should be disabled
    const isPrevDisabled: boolean = currentSlide === 0;
    const isNextDisabled: boolean = currentSlide === totalSlides - 1;

    // Handle pagination dot click
    const handlePaginationClick = (index: number): void => {
        setCurrentSlide(index);
    };

    return (
        <div>
            <div
                className="sc-a007ec24-0 hVLBTd"
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
                            gap: 0,
                            transform: `translateX(-${currentSlide * slideWidth}px)`,
                            transition: "0.5s ease-in-out"
                        }}
                    >
                        <div
                            className="sc-714f5c73-0 dutDwQ"
                            style={{ display: "-webkit-box", width: 360 }}
                        >
                            <div style={{ height: "100%", borderRadius: 8 }}>
                                <a
                                    href="https://tiki.vn/khuyen-mai/top-dien-thoai-may-tinh-bang?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934246_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&waypoint_id=tikichon"
                                    data-view-id="placement"
                                    rel="nofollow"
                                    className="sc-b55618b5-0 gFvZAq"
                                >
                                    <picture className="webpimg-container" style={{ width: "100%" }}>
                                        <source
                                            type="image/webp"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/a9/ec/4f/e95b916999b2dd40b3a8e2af30e704e8.png.webp"
                                        />
                                        <img
                                            src="https://salt.tikicdn.com/cache/w720/ts/tka/a9/ec/4f/e95b916999b2dd40b3a8e2af30e704e8.png"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/a9/ec/4f/e95b916999b2dd40b3a8e2af30e704e8.png"
                                            className="sc-82b4dcf2-0 ldcZGa"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div
                            className="sc-714f5c73-0 dutDwQ"
                            style={{ display: "-webkit-box", width: 360 }}
                        >
                            <div style={{ height: "100%", borderRadius: 8 }}>
                                <a
                                    href="https://tiki.vn/khuyen-mai/hang-nhap-khau-chinh-hang?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934237_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&tmsx=009cfe78-c61e-4cec-ac87-3f80ef62f1cf&waypoint_id=HANQUOC"
                                    data-view-id="placement"
                                    rel="nofollow"
                                    className="sc-b55618b5-0 gFvZAq"
                                >
                                    <picture className="webpimg-container" style={{ width: "100%" }}>
                                        <source
                                            type="image/webp"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/46/b7/ac/46f02024b577c3e3a825a0c955bda0ea.png.webp"
                                        />
                                        <img
                                            src="https://salt.tikicdn.com/cache/w720/ts/tka/46/b7/ac/46f02024b577c3e3a825a0c955bda0ea.png"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/46/b7/ac/46f02024b577c3e3a825a0c955bda0ea.png"
                                            className="sc-82b4dcf2-0 ldcZGa"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div
                            className="sc-714f5c73-0 dutDwQ"
                            style={{ display: "-webkit-box", width: 360 }}
                        >
                            <div style={{ height: "100%", borderRadius: 8 }}>
                                <a
                                    href="https://tiki.vn/khuyen-mai/dien-tu-dien-gia-dung-dien-lanh?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934240_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads"
                                    data-view-id="placement"
                                    rel="nofollow"
                                    className="sc-b55618b5-0 gFvZAq"
                                >
                                    <picture className="webpimg-container" style={{ width: "100%" }}>
                                        <source
                                            type="image/webp"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/99/ce/6a/9c0a7990ddba5207da7cc37b85bdc2f0.png.webp"
                                        />
                                        <img
                                            src="https://salt.tikicdn.com/cache/w720/ts/tka/99/ce/6a/9c0a7990ddba5207da7cc37b85bdc2f0.png"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/99/ce/6a/9c0a7990ddba5207da7cc37b85bdc2f0.png"
                                            className="sc-82b4dcf2-0 ldcZGa"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div
                            className="sc-714f5c73-0 dutDwQ"
                            style={{ display: "-webkit-box", width: 360 }}
                        >
                            <div style={{ height: "100%", borderRadius: 8 }}>
                                <a
                                    href="https://tiki.vn/khuyen-mai/cong-nghe-gia-hoi?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934243_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&waypoint_id=giamtoi50"
                                    data-view-id="placement"
                                    rel="nofollow"
                                    className="sc-b55618b5-0 gFvZAq"
                                >
                                    <picture className="webpimg-container" style={{ width: "100%" }}>
                                        <source
                                            type="image/webp"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/7f/0b/d3/95916a0bd08a84d64206ce6ef9e72010.png.webp"
                                        />
                                        <img
                                            src="https://salt.tikicdn.com/cache/w720/ts/tka/7f/0b/d3/95916a0bd08a84d64206ce6ef9e72010.png"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/7f/0b/d3/95916a0bd08a84d64206ce6ef9e72010.png"
                                            className="sc-82b4dcf2-0 ldcZGa"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div
                            className="sc-714f5c73-0 dutDwQ"
                            style={{ display: "-webkit-box", width: 360 }}
                        >
                            <div style={{ height: "100%", borderRadius: 8 }}>
                                <a
                                    href="https://tiki.vn/khuyen-mai/xe-phu-kien-sieu-sale?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934248_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&waypoint_id=tikichon"
                                    data-view-id="placement"
                                    rel="nofollow"
                                    className="sc-b55618b5-0 gFvZAq"
                                >
                                    <picture className="webpimg-container" style={{ width: "100%" }}>
                                        <source
                                            type="image/webp"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/45/7b/70/fb7c0e1414d55ae6ea43af2883f2d842.png.webp"
                                        />
                                        <img
                                            src="https://salt.tikicdn.com/cache/w720/ts/tka/45/7b/70/fb7c0e1414d55ae6ea43af2883f2d842.png"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/45/7b/70/fb7c0e1414d55ae6ea43af2883f2d842.png"
                                            className="sc-82b4dcf2-0 ldcZGa"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div
                            className="sc-714f5c73-0 dutDwQ"
                            style={{ display: "-webkit-box", width: 360 }}
                        >
                            <div style={{ height: "100%", borderRadius: 8 }}>
                                <a
                                    href="https://tiki.vn/khuyen-mai/top-dien-thoai-may-tinh-bang?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934246_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&waypoint_id=tikichon"
                                    data-view-id="placement"
                                    rel="nofollow"
                                    className="sc-b55618b5-0 gFvZAq"
                                >
                                    <picture className="webpimg-container" style={{ width: "100%" }}>
                                        <source
                                            type="image/webp"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/a9/ec/4f/e95b916999b2dd40b3a8e2af30e704e8.png.webp"
                                        />
                                        <img
                                            src="https://salt.tikicdn.com/cache/w720/ts/tka/a9/ec/4f/e95b916999b2dd40b3a8e2af30e704e8.png"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/a9/ec/4f/e95b916999b2dd40b3a8e2af30e704e8.png"
                                            className="sc-82b4dcf2-0 ldcZGa"
                                        />
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div
                            className="sc-714f5c73-0 dutDwQ"
                            style={{ display: "-webkit-box", width: 360 }}
                        >
                            <div style={{ height: "100%", borderRadius: 8 }}>
                                <a
                                    href="https://tiki.vn/khuyen-mai/hang-nhap-khau-chinh-hang?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934237_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&tmsx=009cfe78-c61e-4cec-ac87-3f80ef62f1cf&waypoint_id=HANQUOC"
                                    data-view-id="placement"
                                    rel="nofollow"
                                    className="sc-b55618b5-0 gFvZAq"
                                >
                                    <picture className="webpimg-container" style={{ width: "100%" }}>
                                        <source
                                            type="image/webp"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/46/b7/ac/46f02024b577c3e3a825a0c955bda0ea.png.webp"
                                        />
                                        <img
                                            src="https://salt.tikicdn.com/cache/w720/ts/tka/46/b7/ac/46f02024b577c3e3a825a0c955bda0ea.png"
                                            srcSet="https://salt.tikicdn.com/cache/w720/ts/tka/46/b7/ac/46f02024b577c3e3a825a0c955bda0ea.png"
                                            className="sc-82b4dcf2-0 ldcZGa"
                                        />
                                    </picture>
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
    );
}

export default CarouselProduct;