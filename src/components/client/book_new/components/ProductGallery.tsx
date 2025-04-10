import React from 'react';

interface ProductGalleryProps {
    currentBook: IBookTable;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ currentBook }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: 400,
                background: "white",
                position: "sticky",
                top: 12,
                gap: 16,
                padding: "16px 0px 12px 0px"
            }}
            className="sc-34e0efdc-0 dSZwVn"
        >
            <div className="sc-aa170f22-0 feQxyc">
                <div className="image-frame">
                    <div
                        style={{ width: 368, height: 368 }}
                        data-view-id="pdp_main_view_gallery"
                    >
                        <div style={{ position: "relative", cursor: "pointer" }}>
                            <picture className="webpimg-container">
                                <source
                                    type="image/webp"
                                    srcSet={currentBook.thumbnail}
                                />
                                <img
                                    srcSet={currentBook.thumbnail}
                                    style={{
                                        width: 368,
                                        height: 368,
                                        zIndex: 2,
                                        opacity: 1
                                    }}
                                    width={368}
                                    height={368}
                                    alt={currentBook.mainText}
                                    loading="eager"
                                    className="sc-7bce5df0-0 fvWcVx"
                                />
                            </picture>
                        </div>
                    </div>
                    <div className="image-badges" />
                </div>
                <div className="sc-6dd31123-0 iYuHsi thumbnail-list">
                    <div className="sc-d93ab8d1-0 fzREUO children-slider">
                        <span className="icon icon-prev disabled">
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
                            <span className="slider" style={{ gap: 8 }}>
                                <a
                                    data-view-id="pdp_main_view_photo"
                                    className="sc-6dd31123-1 Skdxr active"
                                >
                                    <picture className="webpimg-container">
                                        <source
                                            type="image/webp"
                                            srcSet={currentBook.thumbnail}
                                        />
                                        <img
                                            width={47}
                                            height={47}
                                            style={{ width: 47 }}
                                            alt="product-img-0"
                                            src={currentBook.thumbnail}
                                            srcSet={currentBook.thumbnail}
                                            className="sc-82b4dcf2-0 ldcZGa"
                                        />
                                    </picture>
                                </a>
                                {currentBook.slider && currentBook.slider.map((item, index) => (
                                    <a
                                        key={index}
                                        data-view-id="pdp_main_view_photo"
                                        className="sc-6dd31123-1 Skdxr"
                                    >
                                        <picture className="webpimg-container">
                                            <source
                                                type="image/webp"
                                                srcSet={`${import.meta.env.VITE_BACKEND_URL}/images/book/${item}`}
                                            />
                                            <img
                                                width={47}
                                                height={47}
                                                style={{ width: 47 }}
                                                alt={`product-img-${index + 1}`}
                                                src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${item}`}
                                                srcSet={`${import.meta.env.VITE_BACKEND_URL}/images/book/${item}`}
                                                className="sc-82b4dcf2-0 ldcZGa"
                                            />
                                        </picture>
                                    </a>
                                ))}
                            </span>
                        </div>
                        <span className="icon icon-next disabled">
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
        </div>
    );
};

export default ProductGallery;
