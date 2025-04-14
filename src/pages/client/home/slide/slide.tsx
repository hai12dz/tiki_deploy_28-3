import React, { useRef } from 'react';

// Update scrollbar styles to use a darker gray for better visibility
const scrollbarStyles = `
  .custom-scrollbar {
    position: relative;
    scrollbar-width: auto;
    scrollbar-color: #888888 transparent;
    margin-bottom: -12px; /* Pull everything up */
    padding-bottom: 0;
  }
  .custom-scrollbar::-webkit-scrollbar {
    width: auto !important;
    height: 6px !important; /* Make scrollbar thinner */
    position: absolute;
    bottom: 0;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
    margin-bottom: 0; /* Remove margin to position it higher */
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #888888;
    border-radius: 10px;
  }
  .custom-scrollbar:hover::-webkit-scrollbar-thumb {
    background-color: #ababab;
  }
  .custom-scrollbar:hover {
    scrollbar-color: #ababab transparent;
  }
`;

// Product data for both carousels
const productData = [
    {
        image: "https://salt.tikicdn.com/cache/100x100/ts/product/3a/b9/bb/830a52037db377af2fbb6239c3dd4b6b.jpg",
        webp: "https://salt.tikicdn.com/cache/100x100/ts/product/3a/b9/bb/830a52037db377af2fbb6239c3dd4b6b.jpg.webp",
        discount: "-36%"
    },
    {
        image: "https://salt.tikicdn.com/cache/100x100/ts/product/66/85/66/90d7761e878935fd02ad45fb9f7cbbff.jpg",
        webp: "https://salt.tikicdn.com/cache/100x100/ts/product/66/85/66/90d7761e878935fd02ad45fb9f7cbbff.jpg.webp",
        discount: "-25%"
    },
    {
        image: "https://salt.tikicdn.com/cache/100x100/ts/product/f4/d0/2d/0e921326c5b3e62d147af997080b3d31.jpg",
        webp: "https://salt.tikicdn.com/cache/100x100/ts/product/f4/d0/2d/0e921326c5b3e62d147af997080b3d31.jpg.webp",
        discount: "-28%"
    },
    {
        image: "https://salt.tikicdn.com/cache/100x100/ts/product/8d/cd/39/5bbe8e91f15b5fa0f14f50e10fabeca5.jpg",
        webp: "https://salt.tikicdn.com/cache/100x100/ts/product/8d/cd/39/5bbe8e91f15b5fa0f14f50e10fabeca5.jpg.webp",
        discount: "-35%"
    }
];

// Reusable ProductItem component
const ProductItem = ({ image, webp, discount }: { image: string, webp: string, discount: string }) => (
    <div className="sc-49d535ac-0 bLwwYd" style={{ width: "64px", height: "64px", flexShrink: 0 }}>
        <picture className="webpimg-container">
            <source type="image/webp" srcSet={webp} />
            <img
                src={image}
                alt="product-image-undefined"
                className="sc-82b4dcf2-0 ldcZGa sc-49d535ac-1 hFsaQw"
                srcSet={image} />
        </picture>
        <div className="sc-49d535ac-2 iiebSR">{discount}</div>
    </div>
);

// Reusable CarouselItem component
const CarouselItem = ({ productListRef }: { productListRef: React.RefObject<HTMLDivElement> }) => (
    <div className="sc-aeef9a0f-0 sc-6be5dba8-0 kCvpXv giHiyf">
        <div className="carousel-item ">
            <div className="sc-aeef9a0f-1 bxiHoX"></div>
            <img
                style={{ width: "123px", height: "123px" }}
                src="https://salt.tikicdn.com/ts/tka/1c/a1/00/32b0e70d3c6db98a03f300e89480bc72.png"
                alt="1980 Books Tại Tiki Trading" className="sc-6be5dba8-2 euPenc" />
        </div>
        <div className="sc-6be5dba8-3 lgpwhb">
            <div style={{ fontSize: "20px", lineHeight: "30px", marginBottom: "4px" }}
                className="sc-aeef9a0f-2 kyfJKn">Bộ Sưu Tập Sách Mới Giảm Đến 30%</div>
            <div style={{ display: "flex", alignItems: "center", gap: '3px' }}>
                <div style={{ fontSize: "14px", lineHeight: "20px" }} className="sc-aeef9a0f-3 eAjAIG">
                    Tài trợ bởi</div>
                <div style={{ fontSize: "14px", lineHeight: "20px" }} className="sc-aeef9a0f-4 cnyvgK">
                    1980 Books Tại Tiki Trading</div>
                <div style={{ display: "flex" }}>
                    <div className="sc-eaa6b2b1-0 jNTiiA">5/5</div>
                    <img
                        src="https://salt.tikicdn.com/ts/upload/04/53/8a/47482447a52b6728573f14e37e228e72.png"
                        alt="rating-star" className="sc-eaa6b2b1-1 dJHQGE" />
                </div>
            </div>
            <div style={{ marginTop: "18px", marginLeft: "0px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                        ref={productListRef}
                        style={{
                            display: "flex",
                            overflow: "auto",
                            scrollBehavior: "smooth",
                            width: "208px"
                        }}
                        className="sc-aeef9a0f-7 fRchjC custom-scrollbar"
                    >
                        {productData.map((product, index) => (
                            <ProductItem
                                key={index}
                                image={product.image}
                                webp={product.webp}
                                discount={product.discount}
                            />
                        ))}
                    </div>
                </div>
                <div className="sc-6be5dba8-4 gyfMKP"></div>
            </div>
        </div>
        <a
            href="https://tiki.vn/sach-truyen-tieng-viet/c316?itm_campaign=CTP_YPD_TKA_BSA_UNK_ALL_UNK_UNK_UNK_UNK_X.273103_Y.1855423_Z.3857321_CN.%255BStore-Ads%255D-1980s&amp;itm_medium=CPC&amp;itm_source=tiki-ads&amp;publisher_vn=33244&amp;seller=1&amp;sort=newest"
            target="_blank"
            className="link-overlay"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, opacity: 0 }}
        />
    </div>
);

const CarouselComponent = () => {
    // Create a ref for each carousel
    const productListRef1 = useRef<HTMLDivElement>(null);
    const productListRef2 = useRef<HTMLDivElement>(null);

    // Generic scroll function that works for any ref
    const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right', event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (ref.current) {
            const scrollAmount = direction === 'left' ? -100 : 100;
            ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="sc-b118de6a-0 cfnons">
            {/* Add style tag with scrollbar styles */}
            <style>{scrollbarStyles}</style>

            {/* Carousel 1 */}
            <div>
                <CarouselItem productListRef={productListRef1} />
            </div>

            {/* Carousel 2 */}
            <div>
                <CarouselItem productListRef={productListRef2} />
            </div>
        </div>
    );
};

export default CarouselComponent;