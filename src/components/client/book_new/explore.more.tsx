import React, { useState, useEffect, useRef } from 'react';
import './explore.more.scss'
const ExploreMore = () => {
    const [headerOpacity, setHeaderOpacity] = useState(1);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!componentRef.current) return;

            const componentEl = componentRef.current;
            const componentRect = componentEl.getBoundingClientRect();
            const componentTop = componentRect.top;
            const componentBottom = componentRect.bottom;
            const componentHeight = componentRect.height;

            // Only apply effect when component is visible in viewport
            if (componentTop < window.innerHeight && componentTop > -componentHeight) {
                // Component is visible in the viewport

                // Fade in when component enters viewport from top
                if (componentTop > 0) {
                    // Calculate fade in based on how much of the component has entered the viewport
                    const fadeInProgress = 1 - Math.min(1, componentTop / Math.min(400, componentHeight * 0.3));
                    setHeaderOpacity(fadeInProgress);
                }
                // Only fade out when approaching the VERY END of the component (last 15%)
                else if (componentBottom < window.innerHeight) {
                    // Calculate how far we are from the end - only start fading in the last 15% of the component
                    const endThreshold = Math.max(150, componentHeight * 0.15);

                    // Distance from current position to component end
                    const distanceToEnd = componentBottom;

                    if (distanceToEnd < endThreshold) {
                        // Apply fade out only in the last portion of the component
                        const fadeOutProgress = distanceToEnd / endThreshold;
                        setHeaderOpacity(fadeOutProgress);
                    } else {
                        // Keep fully visible through most of the component
                        setHeaderOpacity(1);
                    }
                }
                // Fully visible when in the middle of viewing the component
                else {
                    setHeaderOpacity(1);
                }
            } else {
                // Component is completely out of view
                setHeaderOpacity(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="sc-25579e0e-0 kzWQME" style={{ paddingTop: 0, position: "relative" }} ref={componentRef}>
            <div
                className="header"
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 997,
                    width: "100%",
                    backgroundColor: "#F5F5FA",
                    paddingTop: 16,
                    opacity: headerOpacity,
                    transition: "opacity 0.5s ease" // Increased transition time for smoother effect
                }}
            >
                <h2 className="sc-25579e0e-1 EwjD" style={{ height: 48 }}>
                    Khám phá thêm
                </h2>
                <div className="sc-25579e0e-2 fTTOgs">
                    <div
                        className="tab active"
                        data-view-id="pdp_infinity_tab_item"
                        data-view-index={0}
                    >
                        <picture className="webpimg-container">
                            <source
                                type="image/webp"
                                srcSet="https://salt.tikicdn.com/cache/w100/ts/ta/70/b9/49/43f25c0f4ee6b7a0d918f047e37e8c87.png.webp 1x, https://salt.tikicdn.com/cache/w100/ts/ta/70/b9/49/43f25c0f4ee6b7a0d918f047e37e8c87.png.webp 2x"
                            />
                            <img
                                height={40}
                                width={40}
                                src="https://salt.tikicdn.com/ts/ta/70/b9/49/43f25c0f4ee6b7a0d918f047e37e8c87.png"
                                alt="Dành cho bạn"
                                srcSet="https://salt.tikicdn.com/cache/w100/ts/ta/70/b9/49/43f25c0f4ee6b7a0d918f047e37e8c87.png 1x, https://salt.tikicdn.com/cache/w100/ts/ta/70/b9/49/43f25c0f4ee6b7a0d918f047e37e8c87.png 2x"
                                className="sc-82b4dcf2-0 ldcZGa"
                            />
                        </picture>
                        <div className="tab-text">Dành cho bạn</div>
                    </div>
                    <div
                        className="tab false"
                        data-view-id="pdp_infinity_tab_item"
                        data-view-index={1}
                    >
                        <picture className="webpimg-container">
                            <source
                                type="image/webp"
                                srcSet="https://salt.tikicdn.com/cache/w100/ts/ta/37/58/02/85786ae9e80eea21104c096b6593b37d.jpg.webp 1x, https://salt.tikicdn.com/cache/w100/ts/ta/37/58/02/85786ae9e80eea21104c096b6593b37d.jpg.webp 2x"
                            />
                            <img
                                height={40}
                                width={40}
                                src="https://salt.tikicdn.com/ts/ta/37/58/02/85786ae9e80eea21104c096b6593b37d.jpg"
                                alt="Sách Xả Kho - 60%"
                                srcSet="https://salt.tikicdn.com/cache/w100/ts/ta/37/58/02/85786ae9e80eea21104c096b6593b37d.jpg 1x, https://salt.tikicdn.com/cache/w100/ts/ta/37/58/02/85786ae9e80eea21104c096b6593b37d.jpg 2x"
                                className="sc-82b4dcf2-0 ldcZGa"
                            />
                        </picture>
                        <div className="tab-text">Sách Xả Kho - 60%</div>
                    </div>
                    <div
                        className="tab false"
                        data-view-id="pdp_infinity_tab_item"
                        data-view-index={2}
                    >
                        <picture className="webpimg-container">
                            <source
                                type="image/webp"
                                srcSet="https://salt.tikicdn.com/cache/w100/ts/ta/8e/6e/1a/f091aae16dcc6b9e57dee454a921e016.png.webp 1x, https://salt.tikicdn.com/cache/w100/ts/ta/8e/6e/1a/f091aae16dcc6b9e57dee454a921e016.png.webp 2x"
                            />
                            <img
                                height={40}
                                width={40}
                                src="https://salt.tikicdn.com/ts/ta/8e/6e/1a/f091aae16dcc6b9e57dee454a921e016.png"
                                alt="Top Deal Bán Chạy"
                                srcSet="https://salt.tikicdn.com/cache/w100/ts/ta/8e/6e/1a/f091aae16dcc6b9e57dee454a921e016.png 1x, https://salt.tikicdn.com/cache/w100/ts/ta/8e/6e/1a/f091aae16dcc6b9e57dee454a921e016.png 2x"
                                className="sc-82b4dcf2-0 ldcZGa"
                            />
                        </picture>
                        <div className="tab-text">Top Deal Bán Chạy</div>
                    </div>
                    <div
                        className="tab false"
                        data-view-id="pdp_infinity_tab_item"
                        data-view-index={3}
                    >
                        <picture className="webpimg-container">
                            <source
                                type="image/webp"
                                srcSet="https://salt.tikicdn.com/cache/w100/ts/personalish/8f/97/0e/f3881b536acf0bc31cc6e3e5712e386b.jpg.webp 1x, https://salt.tikicdn.com/cache/w100/ts/personalish/8f/97/0e/f3881b536acf0bc31cc6e3e5712e386b.jpg.webp 2x"
                            />
                            <img
                                height={40}
                                width={40}
                                src="https://salt.tikicdn.com/ts/personalish/8f/97/0e/f3881b536acf0bc31cc6e3e5712e386b.jpg"
                                alt="Trending"
                                srcSet="https://salt.tikicdn.com/cache/w100/ts/personalish/8f/97/0e/f3881b536acf0bc31cc6e3e5712e386b.jpg 1x, https://salt.tikicdn.com/cache/w100/ts/personalish/8f/97/0e/f3881b536acf0bc31cc6e3e5712e386b.jpg 2x"
                                className="sc-82b4dcf2-0 ldcZGa"
                            />
                        </picture>
                        <div className="tab-text">Trending</div>
                    </div>
                </div>
            </div>
            <div data-view-id="pdp_infinity_tab_content" className="sc-25579e0e-3 hMkAQW">
                <div className="content">
                    <div
                        className="tiki-square-ad"
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div>
                            <a
                                href="https://tiki.vn/khuyen-mai/cong-nghe-gia-hoi?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934244_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads&waypoint_id=giamtoi50"
                                data-view-id="pdp_infinity_brand_ad"
                                rel="nofollow"
                                className="sc-b4d1ea6b-0 dgeJJr"
                            >
                                <picture className="webpimg-container">
                                    <source
                                        type="image/webp"
                                        srcSet="https://salt.tikicdn.com/cache/w750/ts/tka/f7/4f/e5/285c32d4933f185c9999c7614aec5c2e.png.webp 1x, https://salt.tikicdn.com/cache/w750/ts/tka/f7/4f/e5/285c32d4933f185c9999c7614aec5c2e.png.webp 2x"
                                    />
                                    <img
                                        srcSet="https://salt.tikicdn.com/cache/w750/ts/tka/f7/4f/e5/285c32d4933f185c9999c7614aec5c2e.png 1x, https://salt.tikicdn.com/cache/w750/ts/tka/f7/4f/e5/285c32d4933f185c9999c7614aec5c2e.png 2x"
                                        alt="square-banner"
                                        className="sc-900210d0-0 hFEtiz banner-image"
                                        style={{ width: "100%", height: "100%", opacity: 1 }}
                                    />
                                </picture>
                            </a>

                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            <div style={{ height: "100%", width: "100%" }}>
                                <div style={{ height: "100%", width: "100%" }}>
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":271972235}}'
                                        href="//tka.tiki.vn/pixel/pixel?data=6MoNwDxUJQud-ALI4OSF-Lbj7f8aX9MwdNHKahquUoD_mUdByVP5blHPzSadkBDzXaO4iCMNPTGfctNuwdp5HQjNP7YfybhraB9ZvaQDDnP_FO0G2NFxfjUXGUQ8E-rqvcnYgbAM1pPVCUWh1m6W71KhV72dcRlgd7kI3EovsqwwFQ1mBQjXTRJyGU6jbOHD6L9qCiavPkdC9NflXsX5e7OTskcWedeNXLsq7UJGc_5uSYc_IeWwy4hm9FvexdjQPjUcFd51z9Irz4JPK7oqSM2YjLkoL6glwT4rfA5XDKPZGG4cIjE6xngNBxUM3CQVB_iSatXd7Vx8rGtW3LMekWzs01f4Xnc-6G--4gyCUZiDgTRtapBUFTsghy2hkhgkKOt1cw9cw0ECxawdxX0yLANQpRFVLnCQ0FHUDE0GFUA2NueFmkO5HRFmxaeYFmB-shCfo8Bt9nXuJy7K4T4liCB0azYUSnTdXygWQeQ8aRk0Dff18JwaSNLYkC6RJEB0zjog0wKT6O1LZzHN5XHlCUWSXNv3Xi52mRbtd54EON0tvwRIIiLANF6s_Q3JpGBlvAmQDj6QMutBZXMd4ZDA3ZlLQRce9ntybM3mNnenBiwOBmcV3BFJajtc8rjLzTvIQPegItyJe1tBftX5z3mg-CqFn7AfIKNOu2KAVBRc-ki4FcAMsFvk73eq78lzeTVxL1HSzHjx1ukljM_JZPpeGKmyA_lBfbrhALxZzrifPvh1PkPVYwbohwz-Xc8RMksNoYH9z_3ziIf7URO0uhdigTtP6gK1dlGaGPoMLDtYFg0-qoKneqqvA0Z7U_80rxEMQJtX_ewF5ylUQiRpnLy_f6eFwzXdUPJ_4ammWmDPkYKLyuudXs6SPqlrE5ykFhjRbCHd_NZ3WWdhGCUQUPpcosv6RyZWEFOUacB_eGtL0S1JNoaVQm39NM_dtwKbP2pvMaGdzDoD2appifv3mSSk9kHg4kkapN2s0PLqd3TmaaLxGbF4xddKyP8iVTYXLoPY7osdOP_Q4VdadXWqXvcZyqca4yI6GajDGYPq3bUHQRsH1KaECRFTzOnGafcUvKZKVWk7gTKGGrirLYdMSwsUjah0GcOdYcCOW9tgML9snKSdeF39GRYIUjCeMx9PsOBJew&pos=1&reqid=5b8nT3P65C&type=CLICK"
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
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/1c/10/64/ee7d3888e5cd488eed7b4c75ac53dad8.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/1c/10/64/ee7d3888e5cd488eed7b4c75ac53dad8.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/1c/10/64/ee7d3888e5cd488eed7b4c75ac53dad8.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/1c/10/64/ee7d3888e5cd488eed7b4c75ac53dad8.jpg 2x"
                                                                alt="Giao Tiếp 360 Độ - Nghệ Thuật Ứng Biến Trong Mọi Tình Huống"
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
                                                    AD
                                                </p>
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
                                                <div
                                                    className="sc-8cb63b91-0 iftnV info-badges"
                                                    style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                                >
                                                    <picture className="webpimg-container">
                                                        <source
                                                            type="image/webp"
                                                            srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                        />
                                                        <img
                                                            srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                            width="100%"
                                                            height="100%"
                                                            alt="product_image_badge"
                                                            className="sc-900210d0-0 hFEtiz"
                                                            style={{ width: "100%", height: "100%", opacity: 1 }}
                                                        />
                                                    </picture>
                                                </div>
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
                                                                Giao Tiếp 360 Độ - Nghệ Thuật Ứng Biến Trong Mọi
                                                                Tình Huống
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
                                                                    style={{ color: "rgb(255, 66, 78)" }}
                                                                >
                                                                    108.000<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                            <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                                <div className="price-discount__discount">-35%</div>
                                                                <div className="price-discount__original-price">
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
                                                        <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                            <img
                                                                width={32}
                                                                height={16}
                                                                src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                                alt="delivery_info_badge"
                                                            />
                                                            <span>Giao chiều mai</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ width: "100%" }}>
                            <div style={{ height: "100%", width: "100%" }}>
                                <div style={{ height: "100%", width: "100%" }}>
                                    <a
                                        className="sc-8b415d9d-1 iRifC product-item"
                                        data-view-id="product_list_item"
                                        data-view-content='{"click_data":{"id":275933334}}'
                                        href="//tka.tiki.vn/pixel/pixel?data=3z6YLxeMqRAXhhFNoQgLYkNVxL7aWkh1ALIsmbFzvx4aU4FLu7pskNsIxdI5g9Z8ZdHRF0G-SKTBCxmawCLMjpBR0kVsN8CMutrP3YGoin-oFmNPalqD10HUwqIo_OpJE4s_e4SL94L2goKdMJjiImbQZ5wj0UgqwyIBipSaHywJosO3EqmDh1ii_EgHVbu-SIsYcwcV4QAHiNQZRFvrG-BwFKiMLEWa_wL0h1VDmLZYcVFUXktoA8Go9-Oer79qP0RpFeitmSbYShEGkNgp13oEHFtATZazM8x5mDvZy4P1Bx8Io7d88wnVHiGfuQv1LjHNyj3BHh1KSNoDPTpNZacUxZ94sp1X-tH6JfKGYojnLExx9_lPFcVvAr4vQQjTU0onlvoPNz3YKlRPAr7s8ES1ataju7r7jOtAy8OqWUDx3nF-vXN4mrLg5NbrDzWYTegrlKtJL4rTSvYpF8vbKe2hC2_txXY08ndSdjygA59RUSUDQUIKR5PvxRFEbhB5Obu7WzW_NBHiEtcC9HGQrXNTFL5tjdL_t5tkphPOJK9TS174lZZpHLYbBO_zWgfGmg3X-eBfqfRrjjGbURWYh3OjRlAqWn-RU5k2kxdtEtmdR-Rt854_a58nTy5SmWyUH39zdlnjUCLeDbYfyfXFu-BaMrbyQgt8dzj_Yftbt83uOJUCrRUG0bqrA8IRGGV_XccMRJ56P2HQFJZ6DRCoWBwIjYnyXr_UIKOPL9RnUhyCPu7hkqFzGqXBxau18VOmehUCwhFTc6uOG5n-_8yUqGL-U9HrV4JtSS6n2z-YdylMIfWbveEZIEdrtJ2mOuQOujgjLgJT1Tp_7gbBRY33v7AF9p_hmJU7A-K1NOmS3-fh087ZemIVFin5-CHHYd5skaLw3RVsErlfQ9XWZom04tUA6nb7Yh_XJ_mPbyMkC-B5IVUMbM61y-pslcNWj4mPmKc6_AskmODTOP1z3607Xz3TVXCT2ruCRcO3uozWycOIZuTPTTyADZS3ExsYGmmp9CkStliBAkFJc5txReSp-e8IU7rqOlFOEqVYZSVOOnjpC8K1i73d667d-OEn1kxBL5AcmCjuTNHcuOuSpJDIlWs&pos=2&reqid=5b8nT3P65C&type=CLICK"
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
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/db/61/59/356c0e645fbe4ce122f90448a1e675bd.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/db/61/59/356c0e645fbe4ce122f90448a1e675bd.jpg.webp 2x"
                                                            />
                                                            <img
                                                                srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/db/61/59/356c0e645fbe4ce122f90448a1e675bd.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/db/61/59/356c0e645fbe4ce122f90448a1e675bd.jpg 2x"
                                                                alt="Nghĩ nhanh nói khéo: Hướng dẫn cách phản ứng thông minh trong mọi tình huống"
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
                                                    AD
                                                </p>
                                                <div
                                                    className="sc-3e53096f-0 hiPBCe"
                                                    style={{
                                                        position: "absolute",
                                                        top: 8,
                                                        left: 8,
                                                        zIndex: 2
                                                    }}
                                                />
                                                <div
                                                    className="sc-8cb63b91-0 iftnV info-badges"
                                                    style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                                >
                                                    <picture className="webpimg-container">
                                                        <source
                                                            type="image/webp"
                                                            srcSet="https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png"
                                                        />
                                                        <img
                                                            srcSet="https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png"
                                                            width="100%"
                                                            height="100%"
                                                            alt="product_image_badge"
                                                            className="sc-900210d0-0 hFEtiz"
                                                            style={{ width: "100%", height: "100%", opacity: 1 }}
                                                        />
                                                    </picture>
                                                </div>
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
                                                                Nghĩ nhanh nói khéo: Hướng dẫn cách phản ứng thông
                                                                minh trong mọi tình huống
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
                                                                    style={{ color: "rgb(255, 66, 78)" }}
                                                                >
                                                                    137.970<sup>₫</sup>
                                                                </div>
                                                            </div>
                                                            <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                                <div className="price-discount__discount">-27%</div>
                                                                <div className="price-discount__original-price">
                                                                    189.000<sup>₫</sup>
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
                                                        <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                            <img
                                                                width={32}
                                                                height={16}
                                                                src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                                alt="delivery_info_badge"
                                                            />
                                                            <span>Giao chiều thứ 5, 10/04</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":92551347}}'
                                href="/sach-cua-hieu-triet-hoc-first-news-p92551347.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.277612751&itm_medium=CPC&itm_source=tiki-reco&spid=277612751"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/b3/63/a4/18b8ec0e717447ccc16d582d4421e871.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/b3/63/a4/18b8ec0e717447ccc16d582d4421e871.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/b3/63/a4/18b8ec0e717447ccc16d582d4421e871.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/b3/63/a4/18b8ec0e717447ccc16d582d4421e871.jpg 2x"
                                                        alt="Sách-Cửa hiệu triết học - First News"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Sách-Cửa hiệu triết học - First News
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            168.300<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-15%</div>
                                                        <div className="price-discount__original-price">
                                                            198.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":77982982}}'
                                href="/tri-tue-xuc-cam-p77982982.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.88962650&itm_medium=CPC&itm_source=tiki-reco&spid=88962650"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/7f/93/03/5d5a974c971b0af2a3815e519f07199d.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/7f/93/03/5d5a974c971b0af2a3815e519f07199d.png.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/7f/93/03/5d5a974c971b0af2a3815e519f07199d.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/7f/93/03/5d5a974c971b0af2a3815e519f07199d.png 2x"
                                                        alt="Trí Tuệ Xúc Cảm"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                    <h3 className="sc-8b415d9d-5 izNpeL">Trí Tuệ Xúc Cảm</h3>
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
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            159.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-20%</div>
                                                        <div className="price-discount__original-price">
                                                            199.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":271379451}}'
                                href="/ly-thuyet-tro-choi-p271379451.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.271379452&itm_medium=CPC&itm_source=tiki-reco&spid=271379452"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/8a/b6/ba/1d95b88597f28e42d8ca91e3b3ff600f.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/8a/b6/ba/1d95b88597f28e42d8ca91e3b3ff600f.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/8a/b6/ba/1d95b88597f28e42d8ca91e3b3ff600f.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/8a/b6/ba/1d95b88597f28e42d8ca91e3b3ff600f.jpg 2x"
                                                        alt="Lý Thuyết Trò Chơi"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Lý Thuyết Trò Chơi
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
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            123.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-31%</div>
                                                        <div className="price-discount__original-price">
                                                            179.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <img
                                                        width={32}
                                                        height={16}
                                                        src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                        alt="delivery_info_badge"
                                                    />
                                                    <span>Giao chiều mai</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":105483727}}'
                                href="/on-dinh-hay-tu-do-p105483727.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.271987159&itm_medium=CPC&itm_source=tiki-reco&spid=271987159"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/6b/f4/a1/f029ab00ae124fca88412f5cc0e36700.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/6b/f4/a1/f029ab00ae124fca88412f5cc0e36700.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/6b/f4/a1/f029ab00ae124fca88412f5cc0e36700.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/6b/f4/a1/f029ab00ae124fca88412f5cc0e36700.jpg 2x"
                                                        alt="Ổn Định Hay Tự Do"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Ổn Định Hay Tự Do
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            109.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-16%</div>
                                                        <div className="price-discount__original-price">
                                                            129.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 5, 10/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":190238356}}'
                                href="/ky-luat-ban-than-p190238356.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.275924399&itm_medium=CPC&itm_source=tiki-reco&spid=275924399"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/a8/49/af/e97b1e11bbf30ea9df134386445a19a2.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/a8/49/af/e97b1e11bbf30ea9df134386445a19a2.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/a8/49/af/e97b1e11bbf30ea9df134386445a19a2.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/a8/49/af/e97b1e11bbf30ea9df134386445a19a2.jpg 2x"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                    <h3 className="sc-8b415d9d-5 izNpeL">Kỷ Luật Bản Thân</h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            154.980<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-18%</div>
                                                        <div className="price-discount__original-price">
                                                            189.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 5, 10/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":220665663}}'
                                href="/30-tuoi-moi-thu-chi-moi-bat-dau-p220665663.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.263452210&itm_medium=CPC&itm_source=tiki-reco&spid=263452210"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/94/0c/26/2dcfd04d8eaacc82d08717a3aac04d2d.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/94/0c/26/2dcfd04d8eaacc82d08717a3aac04d2d.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/94/0c/26/2dcfd04d8eaacc82d08717a3aac04d2d.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/94/0c/26/2dcfd04d8eaacc82d08717a3aac04d2d.jpg 2x"
                                                        alt="30 Tuổi - Mọi Thứ Chỉ Mới Bắt Đầu"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        30 Tuổi - Mọi Thứ Chỉ Mới Bắt Đầu
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            114.750<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-15%</div>
                                                        <div className="price-discount__original-price">
                                                            135.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":272449818}}'
                                href="/manifest-7-buoc-de-thay-doi-cuoc-doi-ban-mai-mai-p272449818.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.273901441&itm_medium=CPC&itm_source=tiki-reco&spid=273901441"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/ba/b8/53/fac2502222de1c9b26f9e44e041a015a.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/ba/b8/53/fac2502222de1c9b26f9e44e041a015a.png.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/ba/b8/53/fac2502222de1c9b26f9e44e041a015a.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/ba/b8/53/fac2502222de1c9b26f9e44e041a015a.png 2x"
                                                        alt="MANIFEST – 7 Bước Để Thay Đổi Cuộc Đời Bạn Mãi Mãi"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        MANIFEST – 7 Bước Để Thay Đổi Cuộc Đời Bạn Mãi Mãi
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            75.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-16%</div>
                                                        <div className="price-discount__original-price">
                                                            89.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 5, 10/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":275243138}}'
                                href="/ren-luyen-tu-duy-phan-bien-p275243138.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.275243141&itm_medium=CPC&itm_source=tiki-reco&spid=275243141"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/60/d0/03/fc7a179de014d73a30a53bc442f4bcb2.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/60/d0/03/fc7a179de014d73a30a53bc442f4bcb2.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/60/d0/03/fc7a179de014d73a30a53bc442f4bcb2.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/60/d0/03/fc7a179de014d73a30a53bc442f4bcb2.jpg 2x"
                                                        alt="Rèn Luyện Tư Duy Phản Biện"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Rèn Luyện Tư Duy Phản Biện
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
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            96.800<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-30%</div>
                                                        <div className="price-discount__original-price">
                                                            139.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <img
                                                        width={32}
                                                        height={16}
                                                        src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                        alt="delivery_info_badge"
                                                    />
                                                    <span>Giao chiều mai</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":10005245}}'
                                href="/dan-ong-sao-hoa-dan-ba-sao-kim-p10005245.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.55637250&itm_medium=CPC&itm_source=tiki-reco&spid=55637250"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/7d/2d/06/1f92380924474d1d602266b0f22e88fe.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/7d/2d/06/1f92380924474d1d602266b0f22e88fe.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/7d/2d/06/1f92380924474d1d602266b0f22e88fe.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/7d/2d/06/1f92380924474d1d602266b0f22e88fe.jpg 2x"
                                                        alt="Đàn Ông Sao Hỏa Đàn Bà Sao Kim"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Đàn Ông Sao Hỏa Đàn Bà Sao Kim
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
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            141.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-25%</div>
                                                        <div className="price-discount__original-price">
                                                            188.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <img
                                                        width={32}
                                                        height={16}
                                                        src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                        alt="delivery_info_badge"
                                                    />
                                                    <span>Giao chiều thứ 5, 10/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":170708233}}'
                                href="/thay-doi-ti-hon-hieu-qua-bat-ngo-atomic-habits-tai-ban-lan-4-p170708233.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.274776871&itm_medium=CPC&itm_source=tiki-reco&spid=274776871"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/05/a7/38/88c2b831bf9e32c85bff491137b30e5b.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/05/a7/38/88c2b831bf9e32c85bff491137b30e5b.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/05/a7/38/88c2b831bf9e32c85bff491137b30e5b.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/05/a7/38/88c2b831bf9e32c85bff491137b30e5b.jpg 2x"
                                                        alt="Thay Đổi Tí Hon - Hiệu Quả Bất Ngờ Atomic Habits (Tái Bản Lần 4)"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Thay Đổi Tí Hon - Hiệu Quả Bất Ngờ Atomic Habits (Tái
                                                        Bản Lần 4)
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(39, 39, 42)" }}
                                                        >
                                                            189.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":247446852}}'
                                href="/suc-hut-cua-su-diem-tinh-p247446852.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.275001834&itm_medium=CPC&itm_source=tiki-reco&spid=275001834"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/5e/7d/c5/6caf6cf19d451fd5bbb40519ad8c01aa.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/5e/7d/c5/6caf6cf19d451fd5bbb40519ad8c01aa.png.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/5e/7d/c5/6caf6cf19d451fd5bbb40519ad8c01aa.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/5e/7d/c5/6caf6cf19d451fd5bbb40519ad8c01aa.png 2x"
                                                        alt="Sức Hút Của Sự Điềm Tĩnh"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Sức Hút Của Sự Điềm Tĩnh
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            94.050<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-5%</div>
                                                        <div className="price-discount__original-price">
                                                            99.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":101782486}}'
                                href="/deep-work-lam-ra-lam-choi-ra-choi-tai-ban-p101782486.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.101782488&itm_medium=CPC&itm_source=tiki-reco&spid=101782488"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/34/73/6b/2582628bf067160b459d9b3f425050a9.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/34/73/6b/2582628bf067160b459d9b3f425050a9.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/34/73/6b/2582628bf067160b459d9b3f425050a9.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/34/73/6b/2582628bf067160b459d9b3f425050a9.jpg 2x"
                                                        alt="Deep Work - Làm Ra Làm, Chơi Ra Chơi (Tái Bản)"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Deep Work - Làm Ra Làm, Chơi Ra Chơi (Tái Bản)
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
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            111.100<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-30%</div>
                                                        <div className="price-discount__original-price">
                                                            159.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <img
                                                        width={32}
                                                        height={16}
                                                        src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                        alt="delivery_info_badge"
                                                    />
                                                    <span>Giao chiều mai</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":10095276}}'
                                href="/ikigai-bi-mat-song-truong-tho-va-hanh-phuc-cua-nguoi-nhat-p10095276.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.155350650&itm_medium=CPC&itm_source=tiki-reco&spid=155350650"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/0c/ae/23/74a7396a4c1bcf48ed016b92ab349b5a.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/0c/ae/23/74a7396a4c1bcf48ed016b92ab349b5a.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/0c/ae/23/74a7396a4c1bcf48ed016b92ab349b5a.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/0c/ae/23/74a7396a4c1bcf48ed016b92ab349b5a.jpg 2x"
                                                        alt="Ikigai - Bí Mật Sống Trường Thọ Và Hạnh Phúc Của Người Nhật"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Ikigai - Bí Mật Sống Trường Thọ Và Hạnh Phúc Của Người
                                                        Nhật
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(39, 39, 42)" }}
                                                        >
                                                            76.347<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <img
                                                        width={32}
                                                        height={16}
                                                        src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                        alt="delivery_info_badge"
                                                    />
                                                    <span>Giao chiều thứ 5, 10/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":263070154}}'
                                href="/giai-ma-hooc-mon-dopamine-p263070154.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.263070155&itm_medium=CPC&itm_source=tiki-reco&spid=263070155"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/71/9d/f6/034e4969a68181a0f850cdfa24503e0c.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/71/9d/f6/034e4969a68181a0f850cdfa24503e0c.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/71/9d/f6/034e4969a68181a0f850cdfa24503e0c.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/71/9d/f6/034e4969a68181a0f850cdfa24503e0c.jpg 2x"
                                                        alt="Giải mã Hoóc-môn Dopamine"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Giải mã Hoóc-môn Dopamine
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
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            131.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-34%</div>
                                                        <div className="price-discount__original-price">
                                                            198.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <img
                                                        width={32}
                                                        height={16}
                                                        src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                        alt="delivery_info_badge"
                                                    />
                                                    <span>Giao chiều mai</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":189643105}}'
                                href="/khong-phai-soi-nhung-cung-dung-la-cuu-tang-kem-bookmark-2-mat-p189643105.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.196153715&itm_medium=CPC&itm_source=tiki-reco&spid=196153715"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/09/2b/e4/e220a9a28a35a7c6ed3336e89c09178b.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/09/2b/e4/e220a9a28a35a7c6ed3336e89c09178b.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/09/2b/e4/e220a9a28a35a7c6ed3336e89c09178b.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/09/2b/e4/e220a9a28a35a7c6ed3336e89c09178b.jpg 2x"
                                                        alt="Không Phải Sói Nhưng Cũng Đừng Là Cừu -Tặng kèm bookmark 2 mặt"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Không Phải Sói Nhưng Cũng Đừng Là Cừu -Tặng kèm bookmark
                                                        2 mặt
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            115.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-10%</div>
                                                        <div className="price-discount__original-price">
                                                            128.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":76776245}}'
                                href="/nghe-thuat-tu-duy-phan-bien-p76776245.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.274137278&itm_medium=CPC&itm_source=tiki-reco&spid=274137278"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f2/78/db/519339b2143334abb6c62381a036cf88.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f2/78/db/519339b2143334abb6c62381a036cf88.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/f2/78/db/519339b2143334abb6c62381a036cf88.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/f2/78/db/519339b2143334abb6c62381a036cf88.jpg 2x"
                                                        alt="Nghệ Thuật Tư Duy Phản Biện"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Nghệ Thuật Tư Duy Phản Biện
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            116.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-10%</div>
                                                        <div className="price-discount__original-price">
                                                            129.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":77222782}}'
                                href="/sach-cuon-sach-lon-ruc-ro-ve-bon-mua-p77222782.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.206311087&itm_medium=CPC&itm_source=tiki-reco&spid=206311087"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/a2/23/3b/cd3b7d6c2cc3ea66982af57fb15b949c.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/a2/23/3b/cd3b7d6c2cc3ea66982af57fb15b949c.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/a2/23/3b/cd3b7d6c2cc3ea66982af57fb15b949c.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/a2/23/3b/cd3b7d6c2cc3ea66982af57fb15b949c.jpg 2x"
                                                        alt="Sách - Cuốn Sách Lớn Rực Rỡ Về Bốn Mùa"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Sách - Cuốn Sách Lớn Rực Rỡ Về Bốn Mùa
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            71.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-10%</div>
                                                        <div className="price-discount__original-price">
                                                            79.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className="tiki-square-ad"
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div>
                            <a
                                href="https://tiki.vn/khuyen-mai/dien-tu-dien-gia-dung-dien-lanh?itm_campaign=PDP_YPD_TKA_BNA_UNK_ALL_UNK_UNK_UNK_UNK_X.213283_Y.1795603_Z.3934241_CN.Default-banners-for-all-display-placements&itm_medium=CPM&itm_source=tiki-ads"
                                data-view-id="pdp_infinity_brand_ad"
                                rel="nofollow"
                                className="sc-b4d1ea6b-0 dgeJJr"
                            >
                                <picture className="webpimg-container">
                                    <source
                                        type="image/webp"
                                        srcSet="https://salt.tikicdn.com/cache/w750/ts/tka/b7/5a/ba/e5856a6eab2b01fba18b88e59ee63e7b.png.webp 1x, https://salt.tikicdn.com/cache/w750/ts/tka/b7/5a/ba/e5856a6eab2b01fba18b88e59ee63e7b.png.webp 2x"
                                    />
                                    <img
                                        srcSet="https://salt.tikicdn.com/cache/w750/ts/tka/b7/5a/ba/e5856a6eab2b01fba18b88e59ee63e7b.png 1x, https://salt.tikicdn.com/cache/w750/ts/tka/b7/5a/ba/e5856a6eab2b01fba18b88e59ee63e7b.png 2x"
                                        alt="square-banner"
                                        className="sc-900210d0-0 hFEtiz banner-image"
                                        style={{ width: "100%", height: "100%", opacity: 1 }}
                                    />
                                </picture>
                            </a>

                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":57815506}}'
                                href="/sach-tu-duy-nguoc-dich-chuyen-the-gioi-p57815506.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.194098925&itm_medium=CPC&itm_source=tiki-reco&spid=194098925"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/02/01/11/102affd1927cc9dbd5c4a6e52921ec1a.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/02/01/11/102affd1927cc9dbd5c4a6e52921ec1a.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/02/01/11/102affd1927cc9dbd5c4a6e52921ec1a.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/02/01/11/102affd1927cc9dbd5c4a6e52921ec1a.jpg 2x"
                                                        alt="Sách Tư Duy Ngược Dịch Chuyển Thế Giới"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Sách Tư Duy Ngược Dịch Chuyển Thế Giới
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
                                                            160.350<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <img
                                                        width={32}
                                                        height={16}
                                                        src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                        alt="delivery_info_badge"
                                                    />
                                                    <span>Giao chiều thứ 5, 10/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":77774625}}'
                                href="/nghe-thuat-tap-trung-nang-cao-nang-suat-toi-uu-thoi-gian-hieu-qua-bat-ngo-p77774625.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.197521746&itm_medium=CPC&itm_source=tiki-reco&spid=197521746"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/54/bd/9c/0bbe884b7f99a5b36435a3bf8a3402ee.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/54/bd/9c/0bbe884b7f99a5b36435a3bf8a3402ee.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/54/bd/9c/0bbe884b7f99a5b36435a3bf8a3402ee.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/54/bd/9c/0bbe884b7f99a5b36435a3bf8a3402ee.jpg 2x"
                                                        alt="Nghệ Thuật Tập Trung - Nâng Cao Năng Suất, Tối Ưu Thời Gian, Hiệu Quả Bất Ngờ"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Nghệ Thuật Tập Trung - Nâng Cao Năng Suất, Tối Ưu Thời
                                                        Gian, Hiệu Quả Bất Ngờ
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            94.050<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-5%</div>
                                                        <div className="price-discount__original-price">
                                                            99.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":187827003}}'
                                href="/khong-diet-khong-sinh-dung-so-hai-tb5-p187827003.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.274005570&itm_medium=CPC&itm_source=tiki-reco&spid=274005570"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/d9/e7/c5/1e8879b20f37a74b93bd7b6dd0e64e13.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/d9/e7/c5/1e8879b20f37a74b93bd7b6dd0e64e13.png.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/d9/e7/c5/1e8879b20f37a74b93bd7b6dd0e64e13.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/d9/e7/c5/1e8879b20f37a74b93bd7b6dd0e64e13.png 2x"
                                                        alt="Không Diệt Không Sinh Đừng Sợ Hãi (TB5)"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/f7/9e/83/ab28365ea395893fe5abac88b5103444.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Không Diệt Không Sinh Đừng Sợ Hãi (TB5)
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(39, 39, 42)" }}
                                                        >
                                                            112.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":273844978}}'
                                href="/thao-tung-tam-ly-p273844978.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.167940011&itm_medium=CPC&itm_source=tiki-reco&spid=167940011"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg 2x"
                                                        alt="Thao Túng Tâm Lý"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                    <h3 className="sc-8b415d9d-5 izNpeL">Thao Túng Tâm Lý</h3>
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
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            117.700<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-30%</div>
                                                        <div className="price-discount__original-price">
                                                            169.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <img
                                                        width={32}
                                                        height={16}
                                                        src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                        alt="delivery_info_badge"
                                                    />
                                                    <span>Giao chiều mai</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":138107485}}'
                                href="/mat-day-tam-den-tai-ban-p138107485.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.274570083&itm_medium=CPC&itm_source=tiki-reco&spid=274570083"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/e3/d7/fc/79a47ccdf47161da71ba769c8cca786d.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/e3/d7/fc/79a47ccdf47161da71ba769c8cca786d.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/e3/d7/fc/79a47ccdf47161da71ba769c8cca786d.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/e3/d7/fc/79a47ccdf47161da71ba769c8cca786d.jpg 2x"
                                                        alt="Mặt Dày Tâm Đen (Tái Bản)"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Mặt Dày Tâm Đen (Tái Bản)
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            152.100<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-10%</div>
                                                        <div className="price-discount__original-price">
                                                            169.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":274363543}}'
                                href="/con-duong-chang-may-ai-di-p274363543.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.274384004&itm_medium=CPC&itm_source=tiki-reco&spid=274384004"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/87/41/af/a7128277dcf9efece61281a6a291500f.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/87/41/af/a7128277dcf9efece61281a6a291500f.png.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/87/41/af/a7128277dcf9efece61281a6a291500f.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/87/41/af/a7128277dcf9efece61281a6a291500f.png 2x"
                                                        alt="Con Đường Chẳng Mấy Ai Đi"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Con Đường Chẳng Mấy Ai Đi
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            132.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-20%</div>
                                                        <div className="price-discount__original-price">
                                                            165.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 6, 11/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":263028535}}'
                                href="/ung-dung-tam-ly-hoc-nlp-thay-cach-nghi-mo-loi-di-p263028535.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.274841077&itm_medium=CPC&itm_source=tiki-reco&spid=274841077"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/77/98/5a/53202a345462fe2e2e76c847fda4f543.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/77/98/5a/53202a345462fe2e2e76c847fda4f543.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/77/98/5a/53202a345462fe2e2e76c847fda4f543.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/77/98/5a/53202a345462fe2e2e76c847fda4f543.jpg 2x"
                                                        alt="Ứng Dụng Tâm Lý Học NLP - Thay Cách Nghĩ Mở Lối Đi"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Ứng Dụng Tâm Lý Học NLP - Thay Cách Nghĩ Mở Lối Đi
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            106.200<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-10%</div>
                                                        <div className="price-discount__original-price">
                                                            118.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":253284267}}'
                                href="/ikigai-bi-mat-song-truong-tho-va-hanh-phuc-cua-nguoi-nhat-ba-n-quye-n-p253284267.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.274373288&itm_medium=CPC&itm_source=tiki-reco&spid=274373288"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/db/be/b9/103dc25230be069d3611c8b6b718e80b.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/db/be/b9/103dc25230be069d3611c8b6b718e80b.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/db/be/b9/103dc25230be069d3611c8b6b718e80b.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/db/be/b9/103dc25230be069d3611c8b6b718e80b.jpg 2x"
                                                        alt="Ikigai - Bí Mật Sống Trường Thọ Và Hạnh Phúc Của Người Nhật  -  Bản Quyền"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Ikigai - Bí Mật Sống Trường Thọ Và Hạnh Phúc Của Người
                                                        Nhật - Bản Quyền
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            81.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-10%</div>
                                                        <div className="price-discount__original-price">
                                                            90.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":272888010}}'
                                href="/song-khai-van-song-tinh-thuc-p272888010.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.273467762&itm_medium=CPC&itm_source=tiki-reco&spid=273467762"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/78/1d/74/17fa5a5c86f92bff6976a988ee2bbbb4.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/78/1d/74/17fa5a5c86f92bff6976a988ee2bbbb4.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/78/1d/74/17fa5a5c86f92bff6976a988ee2bbbb4.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/78/1d/74/17fa5a5c86f92bff6976a988ee2bbbb4.jpg 2x"
                                                        alt="Sống Khai Vấn - Sống Tỉnh Thức"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Sống Khai Vấn - Sống Tỉnh Thức
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            196.648<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-6%</div>
                                                        <div className="price-discount__original-price">
                                                            209.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 6, 11/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":212213000}}'
                                href="/pdca-cong-cu-lap-ke-hoach-hieu-qua-p212213000.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.253346938&itm_medium=CPC&itm_source=tiki-reco&spid=253346938"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/6e/5b/70/c5cb15185d8d7ec8fc4190927693df74.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/6e/5b/70/c5cb15185d8d7ec8fc4190927693df74.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/6e/5b/70/c5cb15185d8d7ec8fc4190927693df74.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/6e/5b/70/c5cb15185d8d7ec8fc4190927693df74.jpg 2x"
                                                        alt="PDCA – Công Cụ Lập Kế Hoạch Hiệu Quả"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        PDCA – Công Cụ Lập Kế Hoạch Hiệu Quả
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            152.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-10%</div>
                                                        <div className="price-discount__original-price">
                                                            169.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":184466860}}'
                                href="/hanh-tinh-cua-mot-ke-nghi-nhieu-p184466860.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.185817253&itm_medium=CPC&itm_source=tiki-reco&spid=185817253"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/65/78/e7/2eacb9f887fc28779b15cf9ab6d0bf79.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/65/78/e7/2eacb9f887fc28779b15cf9ab6d0bf79.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/65/78/e7/2eacb9f887fc28779b15cf9ab6d0bf79.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/65/78/e7/2eacb9f887fc28779b15cf9ab6d0bf79.jpg 2x"
                                                        alt="Hành Tinh Của Một Kẻ Nghĩ Nhiều"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Hành Tinh Của Một Kẻ Nghĩ Nhiều
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
                                                            73.100<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <img
                                                        width={32}
                                                        height={16}
                                                        src="https://salt.tikicdn.com/cache/w96/ts/tka/26/a2/90/0663718b1c04d15a46bf0f23874a7e01.png"
                                                        alt="delivery_info_badge"
                                                    />
                                                    <span>Giao chiều thứ 5, 10/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":196411152}}'
                                href="/the-mountain-is-you-neu-khong-giai-quyet-van-de-ban-se-tro-thanh-van-de-p196411152.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.277068014&itm_medium=CPC&itm_source=tiki-reco&spid=277068014"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/db/e1/8f/a9b513be112156ba8fd26200a377bd9a.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/db/e1/8f/a9b513be112156ba8fd26200a377bd9a.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/db/e1/8f/a9b513be112156ba8fd26200a377bd9a.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/db/e1/8f/a9b513be112156ba8fd26200a377bd9a.jpg 2x"
                                                        alt="The Mountain Is You - Nếu Không Giải Quyết Vấn Đề, Bạn Sẽ Trở Thành Vấn Đề"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        The Mountain Is You - Nếu Không Giải Quyết Vấn Đề, Bạn
                                                        Sẽ Trở Thành Vấn Đề
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(39, 39, 42)" }}
                                                        >
                                                            148.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":276076848}}'
                                href="/tro-choi-cua-nhung-ke-hieu-luat-p276076848.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.276155156&itm_medium=CPC&itm_source=tiki-reco&spid=276155156"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/6d/dd/10/bad7c4bb1437b467204e9b542e169f96.png.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/6d/dd/10/bad7c4bb1437b467204e9b542e169f96.png.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/6d/dd/10/bad7c4bb1437b467204e9b542e169f96.png 1x, https://salt.tikicdn.com/cache/280x280/ts/product/6d/dd/10/bad7c4bb1437b467204e9b542e169f96.png 2x"
                                                        alt="Trò Chơi Của Những Kẻ Hiểu Luật"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Trò Chơi Của Những Kẻ Hiểu Luật
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(39, 39, 42)" }}
                                                        >
                                                            179.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":199897520}}'
                                href="/than-tam-tri-p199897520.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.274184829&itm_medium=CPC&itm_source=tiki-reco&spid=274184829"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/2b/e9/ea/16fdeec32c3965852427044bfbd170d1.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/2b/e9/ea/16fdeec32c3965852427044bfbd170d1.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/2b/e9/ea/16fdeec32c3965852427044bfbd170d1.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/2b/e9/ea/16fdeec32c3965852427044bfbd170d1.jpg 2x"
                                                        alt="Thân Tâm Trí"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                    <h3 className="sc-8b415d9d-5 izNpeL">Thân Tâm Trí</h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            143.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-10%</div>
                                                        <div className="price-discount__original-price">
                                                            159.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{
                            background: "white",
                            borderRadius: 8,
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div style={{ height: "100%", width: "100%" }}>
                            <a
                                className="sc-8b415d9d-1 iRifC product-item"
                                data-view-id="product_list_item"
                                data-view-content='{"click_data":{"id":241746535}}'
                                href="/tu-do-tach-tra-truoc-khi-tran-ly-p241746535.html?itm_campaign=tiki-reco_UNK_DT_UNK_UNK_maybe-you-like_maybe-you-like_pdp-widget-infinity-1-v2-v1_202504071800_MD_batched_PID.274851507&itm_medium=CPC&itm_source=tiki-reco&spid=274851507"
                            >
                                <span className="sc-8b415d9d-0 esCPZO">
                                    <div style={{ position: "relative" }}>
                                        <div className="sc-accfdecb-0 oeQAA thumbnail">
                                            <div className="image-wrapper">
                                                <picture className="webpimg-container">
                                                    <source
                                                        type="image/webp"
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/90/5c/73/9e8eb9fed3b226259b2ef855171d0852.jpg.webp 1x, https://salt.tikicdn.com/cache/280x280/ts/product/90/5c/73/9e8eb9fed3b226259b2ef855171d0852.jpg.webp 2x"
                                                    />
                                                    <img
                                                        srcSet="https://salt.tikicdn.com/cache/280x280/ts/product/90/5c/73/9e8eb9fed3b226259b2ef855171d0852.jpg 1x, https://salt.tikicdn.com/cache/280x280/ts/product/90/5c/73/9e8eb9fed3b226259b2ef855171d0852.jpg 2x"
                                                        alt="Tự Đổ Tách Trà Trước Khi Tràn Ly"
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
                                            style={{ position: "absolute", top: 8, left: 8, zIndex: 2 }}
                                        />
                                        <div
                                            className="sc-8cb63b91-0 iftnV info-badges"
                                            style={{ position: "absolute", inset: 0, zIndex: 2 }}
                                        >
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                />
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/c2/bc/6d/ff18cc8968e2bbb43f7ac58efbfafdff.png"
                                                    width="100%"
                                                    height="100%"
                                                    alt="product_image_badge"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: "100%", height: "100%", opacity: 1 }}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                    <div className="sc-8b415d9d-6 ePleYc product-card-content">
                                        <div className="info">
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 4 }}
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
                                                        Tự Đổ Tách Trà Trước Khi Tràn Ly
                                                    </h3>
                                                    <div className="sc-8b415d9d-4 MtbnO" />
                                                </div>
                                                <div className="sc-7615e682-0 jVbBhv">
                                                    <div className="price-discount">
                                                        <div
                                                            className="price-discount__price"
                                                            style={{ color: "rgb(255, 66, 78)" }}
                                                        >
                                                            64.600<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", gap: 4, height: 18 }}>
                                                        <div className="price-discount__discount">-5%</div>
                                                        <div className="price-discount__original-price">
                                                            68.000<sup>₫</sup>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            style={{ display: "flex", flexDirection: "column", gap: 8 }}
                                        >
                                            <div
                                                style={{ display: "flex", flexDirection: "column", gap: 6 }}
                                            >
                                                <div className="sc-5577b120-0 bhuTly" />
                                                <div className="sc-ef96b96-1 gheWdB delivery-info">
                                                    <span>Giao thứ 7, 12/04</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <a
                    className="sc-29fc655e-0 eogKxs view-more"
                    data-view-id="home_infinity_view.more"
                >
                    Xem Thêm
                </a>
            </div>
        </div>

    );
}
export default ExploreMore;