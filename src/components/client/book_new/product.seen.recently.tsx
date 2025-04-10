import React, { useState, useEffect } from 'react';

const BookRecentDetails = (): JSX.Element => {
    // State to track current slide index and hover state
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isHovering, setIsHovering] = useState<boolean>(false);

    // Width of each slide
    const slideWidth: number = 163;

    // Total number of slides (adjust based on actual number of slide containers)
    const totalSlides: number = 12;

    // Auto-slide interval in milliseconds (5 seconds)
    const autoSlideInterval: number = 5000;

    // Handle prev click
    const handlePrevClick = (): void => {
        // Add a console.log to debug
        console.log('Previous clicked, current slide:', currentSlide);
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Handle next click
    const handleNextClick = (): void => {
        // Add a console.log to debug
        console.log('Next clicked, current slide:', currentSlide);
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
    const isPrevDisabled: boolean = currentSlide === 0;
    const isNextDisabled: boolean = currentSlide === totalSlides - 1;

    // Handle pagination dot click
    const handlePaginationClick = (index: number): void => {
        setCurrentSlide(index);
    };

    return (
        <div className="sc-34e0efdc-0 dSZwVn">
            <div className="sc-34e0efdc-1 ddClVB">Sản phẩm bạn đã xem</div>
            <div
                style={{
                    display: "flex",
                    flex: "1 1 0%",
                    overflow: "hidden",
                    paddingTop: 12
                }}
            >
                <div
                    className="sc-a007ec24-0 hVGhMI children-slider"
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
                                gap: 8,
                                transform: `translateX(-${currentSlide * slideWidth}px)`,
                                transition: "0.5s ease-in-out"
                            }}
                        >
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":273844986,"spid":212356653}}'
                                        href="/noi-chuyen-la-ban-nang-giu-mieng-la-tu-duong-im-lang-la-tri-tue-p273844986.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/00/9a/66/34d3abd4b5f39c62d1bf49f1f4c030bd.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/00/9a/66/34d3abd4b5f39c62d1bf49f1f4c030bd.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/00/9a/66/34d3abd4b5f39c62d1bf49f1f4c030bd.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/00/9a/66/34d3abd4b5f39c62d1bf49f1f4c030bd.jpg 2x"
                                                                alt="Nói Chuyện Là Bản Năng, Giữ Miệng Là Tu Dưỡng, Im Lặng Là Trí Tuệ"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Nói Chuyện Là Bản Năng, Giữ Miệng Là Tu Dưỡng, Im
                                                                Lặng Là Trí Tuệ
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "96%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    119.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":275702538,"spid":275702540}}'
                                        href="/chat-gpt-thuc-chien-p275702538.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/17/4a/65/b4765d60127ee4cccf8fd551633fafd4.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/17/4a/65/b4765d60127ee4cccf8fd551633fafd4.png.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/17/4a/65/b4765d60127ee4cccf8fd551633fafd4.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/17/4a/65/b4765d60127ee4cccf8fd551633fafd4.png 2x"
                                                                alt="Chat GPT Thực Chiến"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Chat GPT Thực Chiến
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "94%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    104.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":4780917,"spid":4781791}}'
                                        href="/nguoi-dua-dieu-tai-ban-2018-p4780917.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/4e/51/a9/d3c765cea429477a2f1a769b39d589bc.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/4e/51/a9/d3c765cea429477a2f1a769b39d589bc.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/4e/51/a9/d3c765cea429477a2f1a769b39d589bc.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/4e/51/a9/d3c765cea429477a2f1a769b39d589bc.jpg 2x"
                                                                alt="Người Đua Diều (Tái Bản 2018)"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Người Đua Diều (Tái Bản 2018)
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "96%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    93.100<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":276346703,"spid":277231271}}'
                                        href="/combo-4-cuon-chatgpt-chatgpt-thuc-chien-ai-5-0-ai-cong-cu-nang-cao-hieu-suat-p276346703.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/1d/65/9e/5942aaf6bd80dd5817659d1f11f2c070.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/1d/65/9e/5942aaf6bd80dd5817659d1f11f2c070.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/1d/65/9e/5942aaf6bd80dd5817659d1f11f2c070.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/1d/65/9e/5942aaf6bd80dd5817659d1f11f2c070.jpg 2x"
                                                                alt="Combo 4 cuốn: ChatGPT + ChatGPT thực chiến + AI 5.0 + AI Công cụ nâng cao hiệu suất"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Combo 4 cuốn: ChatGPT + ChatGPT thực chiến + AI 5.0
                                                                + AI Công cụ nâng cao hiệu suất
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "90%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    417.100<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":134605025,"spid":134605026}}'
                                        href="/phieu-luyen-viet-cung-gau-kiki-2-luyen-viet-bang-chu-cai-p134605025.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/89/d1/e1/f21f1bd8d74bc5ae41484a935b67cbba.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/89/d1/e1/f21f1bd8d74bc5ae41484a935b67cbba.png.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/89/d1/e1/f21f1bd8d74bc5ae41484a935b67cbba.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/89/d1/e1/f21f1bd8d74bc5ae41484a935b67cbba.png 2x"
                                                                alt="Phiếu Luyện Viết Cùng Gấu Kiki 2. Luyện Viết Bảng Chữ Cái"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Phiếu Luyện Viết Cùng Gấu Kiki 2. Luyện Viết Bảng
                                                                Chữ Cái
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "100%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    24.500<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":190238356,"spid":190238357}}'
                                        href="/ky-luat-ban-than-p190238356.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/09/3b/73/873b5e1f6e55c774b90062ad94e07940.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/09/3b/73/873b5e1f6e55c774b90062ad94e07940.png.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/09/3b/73/873b5e1f6e55c774b90062ad94e07940.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/09/3b/73/873b5e1f6e55c774b90062ad94e07940.png 2x"
                                                                alt="Kỷ Luật Bản Thân"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Kỷ Luật Bản Thân
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "94%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    119.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":8011021,"spid":8057289}}'
                                        href="/tam-ly-hoc-thanh-cong-tai-ban-p8011021.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/41/c8/23/86289a16b242a20ca172c0d9b9c7b978.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/41/c8/23/86289a16b242a20ca172c0d9b9c7b978.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/41/c8/23/86289a16b242a20ca172c0d9b9c7b978.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/41/c8/23/86289a16b242a20ca172c0d9b9c7b978.jpg 2x"
                                                                alt="Tâm Lý Học Thành Công (Tái Bản)"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Tâm Lý Học Thành Công (Tái Bản)
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "94%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    175.650<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":275406600,"spid":275406603}}'
                                        href="/dan-dat-mot-bay-soi-hay-chan-mot-ddan-cuu-p275406600.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f5/66/66/6675e1bd7020ba9658876a87ebe60001.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f5/66/66/6675e1bd7020ba9658876a87ebe60001.png.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f5/66/66/6675e1bd7020ba9658876a87ebe60001.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f5/66/66/6675e1bd7020ba9658876a87ebe60001.png 2x"
                                                                alt="Dẫn Dắt Một Bầy Sói Hay Chăn Một Đàn Cừu"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Dẫn Dắt Một Bầy Sói Hay Chăn Một Đàn Cừu
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "96%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    120.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":601472,"spid":137540903}}'
                                        href="/co-tich-viet-nam-bang-tho-an-ban-ki-niem-60-nam-nxb-kim-dong-p601472.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/media/catalog/product/c/o/co-tich-viet-nam-bang-tho_bia-in.u5102.d20170404.t103254.237226.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/media/catalog/product/c/o/co-tich-viet-nam-bang-tho_bia-in.u5102.d20170404.t103254.237226.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/media/catalog/product/c/o/co-tich-viet-nam-bang-tho_bia-in.u5102.d20170404.t103254.237226.jpg 1x, https://salt.tikicdn.com/cache/280x280/media/catalog/product/c/o/co-tich-viet-nam-bang-tho_bia-in.u5102.d20170404.t103254.237226.jpg 2x"
                                                                alt="Cổ Tích Việt Nam Bằng Thơ (Ấn Bản Kỉ Niệm 60 Năm NXB Kim Đồng)"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Cổ Tích Việt Nam Bằng Thơ (Ấn Bản Kỉ Niệm 60 Năm NXB
                                                                Kim Đồng)
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "90%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    149.850<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":276559548,"spid":276559550}}'
                                        href="/balaji-srinivasan-cong-nghe-su-that-va-tuong-lai-ban-quyen-p276559548.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/42/2d/85/b66b0764ff9a917d2caa1cf6f20c4512.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/42/2d/85/b66b0764ff9a917d2caa1cf6f20c4512.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/42/2d/85/b66b0764ff9a917d2caa1cf6f20c4512.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/42/2d/85/b66b0764ff9a917d2caa1cf6f20c4512.jpg 2x"
                                                                alt="Balaji Srinivasan - Công nghệ, Sự thật và Tương lai - Bản Quyền"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Balaji Srinivasan - Công nghệ, Sự thật và Tương lai
                                                                - Bản Quyền
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "100%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    203.900<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":273043744,"spid":273043745}}'
                                        href="/shaman-nhung-vi-phap-su-cuoi-cung-p273043744.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/43/cc/2a/ecbdb3e5f69150f4167cf90e238f0fb6.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/43/cc/2a/ecbdb3e5f69150f4167cf90e238f0fb6.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/43/cc/2a/ecbdb3e5f69150f4167cf90e238f0fb6.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/43/cc/2a/ecbdb3e5f69150f4167cf90e238f0fb6.jpg 2x"
                                                                alt="Shaman - Những Vị Pháp Sư Cuối Cùng"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Shaman - Những Vị Pháp Sư Cuối Cùng
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "90%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    92.650<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":275503125,"spid":275791635}}'
                                        href="/tai-ban-moi-nhat-suy-nghi-thong-ke-trong-doi-thuong-giao-su-nguyen-van-tuan-bia-mem-p275503125.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f5/ff/3f/85701cb1f0b7e61584f5d1f0d188b22c.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f5/ff/3f/85701cb1f0b7e61584f5d1f0d188b22c.png.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f5/ff/3f/85701cb1f0b7e61584f5d1f0d188b22c.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f5/ff/3f/85701cb1f0b7e61584f5d1f0d188b22c.png 2x"
                                                                alt="(Tái bản mới nhất) SUY NGHĨ THỐNG KÊ TRONG ĐỜI THƯỜNG - Giáo sư Nguyễn Văn Tuấn (bìa mềm)"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                (Tái bản mới nhất) SUY NGHĨ THỐNG KÊ TRONG ĐỜI
                                                                THƯỜNG - Giáo sư Nguyễn Văn Tuấn (bìa mềm)
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "80%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    165.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":270771590,"spid":274073168}}'
                                        href="/sau-anh-phan-tiep-theo-truoc-ngay-em-den-p270771590.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/c9/97/d3/63b04043b549797d97b030f8d0ec383f.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/c9/97/d3/63b04043b549797d97b030f8d0ec383f.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/c9/97/d3/63b04043b549797d97b030f8d0ec383f.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/c9/97/d3/63b04043b549797d97b030f8d0ec383f.jpg 2x"
                                                                alt="Sau Anh (Phần tiếp theo Trước Ngày Em Đến)"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Sau Anh (Phần tiếp theo Trước Ngày Em Đến)
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO" />
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    171.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":276327744,"spid":276346222}}'
                                        href="/ngoi-nha-ro-bot-trong-rung-sau-ban-quyen-p276327744.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f8/9d/38/d28679d6f0b1eb6b0cb2c076970ce2b1.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f8/9d/38/d28679d6f0b1eb6b0cb2c076970ce2b1.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f8/9d/38/d28679d6f0b1eb6b0cb2c076970ce2b1.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f8/9d/38/d28679d6f0b1eb6b0cb2c076970ce2b1.jpg 2x"
                                                                alt="Ngôi Nhà Rô Bốt Trong Rừng Sâu - Bản Quyền"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Ngôi Nhà Rô Bốt Trong Rừng Sâu - Bản Quyền
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "100%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    169.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":276353648,"spid":276364771}}'
                                        href="/nexus-luoc-su-cua-nhung-mang-luoi-thong-tin-tu-thoi-dai-do-da-den-tri-tue-nhan-tao-yuval-noah-harari-bia-mem-p276353648.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/b3/50/83/fbb72d3d9bcf99c22254f4c26529a271.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/b3/50/83/fbb72d3d9bcf99c22254f4c26529a271.png.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/b3/50/83/fbb72d3d9bcf99c22254f4c26529a271.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/b3/50/83/fbb72d3d9bcf99c22254f4c26529a271.png 2x"
                                                                alt="Nexus - Lược Sử Của Những Mạng Lưới Thông Tin Từ Thời Đại Đồ Đá Đến Trí Tuệ Nhân Tạo (Yuval Noah Harari) - Bìa Mềm "
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Nexus - Lược Sử Của Những Mạng Lưới Thông Tin Từ
                                                                Thời Đại Đồ Đá Đến Trí Tuệ Nhân Tạo (Yuval Noah
                                                                Harari) - Bìa Mềm{" "}
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "100%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    267.962<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":25728855,"spid":191297055}}'
                                        href="/kinh-dich-ngo-tat-to-p25728855.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/92/60/7d/da18c36557a572b5fe21714d17cd9e25.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/92/60/7d/da18c36557a572b5fe21714d17cd9e25.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/92/60/7d/da18c36557a572b5fe21714d17cd9e25.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/92/60/7d/da18c36557a572b5fe21714d17cd9e25.jpg 2x"
                                                                alt="Kinh Dịch (Ngô Tất Tố)"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Kinh Dịch (Ngô Tất Tố)
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "92%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    213.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":192951626,"spid":192951627}}'
                                        href="/bu-t-chi-go-2b-co-ta-y-lien-quan-hong-ha-3530-p192951626.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/38/16/26/6e0c824ee58de8a24cd5841454b2195b.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/38/16/26/6e0c824ee58de8a24cd5841454b2195b.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/38/16/26/6e0c824ee58de8a24cd5841454b2195b.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/38/16/26/6e0c824ee58de8a24cd5841454b2195b.jpg 2x"
                                                                alt="Bút Chì Gỗ 2B Có Tẩy Liên Quân - Hồng Hà 3530"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Bút Chì Gỗ 2B Có Tẩy Liên Quân - Hồng Hà 3530
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO" />
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    3.800<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":277485605,"spid":277485608}}'
                                        href="/loc-vo-4-o-ly-48-trang-school-go-home-hong-ha-0518-p277485605.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/03/c1/aa/23f8b5b1174fc7a7dd552707fcbaa367.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/03/c1/aa/23f8b5b1174fc7a7dd552707fcbaa367.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/03/c1/aa/23f8b5b1174fc7a7dd552707fcbaa367.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/03/c1/aa/23f8b5b1174fc7a7dd552707fcbaa367.jpg 2x"
                                                                alt="Lốc vở 4 Ô ly 48 trang School Go Home Hồng Hà - 0518"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Lốc vở 4 Ô ly 48 trang School Go Home Hồng Hà - 0518
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "100%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    67.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":276476997,"spid":276477005}}'
                                        href="/tui-giay-trung-sdstationery-love-you-dung-qua-phu-kien-my-pham-chocolate-qua-valentine-hoa-tiet-hoa-p276476997.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/b1/b2/2e/f72a4d0e0ec47c867653dcc58f408f81.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/b1/b2/2e/f72a4d0e0ec47c867653dcc58f408f81.png.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/b1/b2/2e/f72a4d0e0ec47c867653dcc58f408f81.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/b1/b2/2e/f72a4d0e0ec47c867653dcc58f408f81.png 2x"
                                                                alt="Túi giấy trung SDstationery Love You đựng quà, phụ kiện, mỹ phẩm, chocolate, quà Valentine, họa tiết hoa"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Túi giấy trung SDstationery Love You đựng quà, phụ
                                                                kiện, mỹ phẩm, chocolate, quà Valentine, họa tiết
                                                                hoa
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO" />
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    18.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="sc-714f5c73-0 dutDwQ"
                                style={{ display: "-webkit-box", width: 163 }}
                            >
                                <div className="sc-54d97ee6-0 iPWthy">
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":146225297,"spid":146225298}}'
                                        href="/flow-dong-chay-p146225297.html"
                                    >
                                        <span className="sc-8b415d9d-0 esCPZO">
                                            <div style={{ position: "relative" }}>
                                                <div className="sc-accfdecb-0 oeQAA thumbnail">
                                                    <div className="image-wrapper">
                                                        <picture className="webpimg-container">
                                                            <source
                                                                type="image/webp"
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f8/32/4f/e7ac0e53a413486fea69aa6d121bd329.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f8/32/4f/e7ac0e53a413486fea69aa6d121bd329.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f8/32/4f/e7ac0e53a413486fea69aa6d121bd329.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f8/32/4f/e7ac0e53a413486fea69aa6d121bd329.jpg 2x"
                                                                alt="Flow - Dòng Chảy"
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
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
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
                                                                Flow - Dòng Chảy
                                                            </h3>
                                                            <div className="sc-8b415d9d-4 MtbnO">
                                                                <div
                                                                    className="sc-980e9960-0 eTeHeN"
                                                                    style={{ fontSize: 12, display: "inline-block" }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            zIndex: 2,
                                                                            position: "absolute",
                                                                            left: 0,
                                                                            top: 0,
                                                                            bottom: 0,
                                                                            width: "100%",
                                                                            overflow: "hidden"
                                                                        }}
                                                                    >
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                        <svg
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
                                                                    </div>
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                    <svg
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-7615e682-0 jVbBhv">
                                                            <div className="price-discount">
                                                                <div
                                                                    className="price-discount__price"
                                                                    style={{ color: "rgb(39, 39, 42)" }}
                                                                >
                                                                    166.725<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: 8
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: 6
                                                        }}
                                                    >
                                                        <div className="sc-5577b120-0 bhuTly" />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
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
export default BookRecentDetails;