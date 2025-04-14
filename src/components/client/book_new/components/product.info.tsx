import React, { useState } from 'react';
import { Popover, Col, Row, Space } from 'antd';

interface ProductInfoProps {
    currentBook: IBookTable;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ currentBook }) => {
    const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

    const formatPrice = (price: number) => {
        return Math.floor(price).toLocaleString('vi-VN').split(',')[0];
    };

    const calculateDiscountedPrice = () => {
        const originalPrice = Number(currentBook.price || 0);
        const discountPercent = Number(currentBook.promotion || 0);
        return originalPrice - (originalPrice * discountPercent / 100);
    };

    const originalPrice = Number(currentBook.price || 0);
    const discountedPrice = calculateDiscountedPrice();

    const priceInfoContent = (
        <div className="price-info-popup" style={{ width: '320px' }}>
            <Row gutter={[0, 8]}>
                <Col span={24}>
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Row justify="space-between">
                            <Col>Giá gốc</Col>
                            <Col>{originalPrice.toLocaleString()}đ</Col>
                        </Row>
                        <Row justify="space-between">
                            <Col>Giá bán</Col>
                            <Col>{discountedPrice.toLocaleString()}đ</Col>
                        </Row>
                        <Row>
                            <Col className="discount-info">Giá đã giảm trực tiếp từ nhà bán</Col>
                        </Row>
                    </Space>
                </Col>
            </Row>
        </div>
    );

    return (
        <div style={{ gap: 16 }} className="sc-34e0efdc-0 dSZwVn">
            <div className="sc-e6fb8ae7-3 kLhGA-D">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 6
                    }}
                >
                    <div className="sc-f71dfc2-0 bIhKUr">
                        <div className="sc-182247c9-0 eRYSas">
                            <picture className="webpimg-container">
                                <source
                                    type="image/webp"
                                    srcSet="https://salt.tikicdn.com/ts/ta/b1/3f/4e/cc3d0a2dd751a7b06dd97d868d6afa56.png"
                                />
                                <img
                                    srcSet="https://salt.tikicdn.com/ts/ta/b1/3f/4e/cc3d0a2dd751a7b06dd97d868d6afa56.png"
                                    width={114}
                                    height={20}
                                    alt="return_policy"
                                    style={{ width: 114, height: 20, opacity: 1 }}
                                    className="sc-7bce5df0-0 fvWcVx"
                                />
                            </picture>
                            <picture className="webpimg-container">
                                <source
                                    type="image/webp"
                                    srcSet="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                                />
                                <img
                                    srcSet="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                                    width={89}
                                    height={20}
                                    alt="is_authentic"
                                    style={{ width: 89, height: 20, opacity: 1 }}
                                    className="sc-7bce5df0-0 fvWcVx"
                                />
                            </picture>
                            <span className="brand-and-author no-after">
                                <h6>
                                    Tác giả:{" "}
                                    <a
                                        data-view-id="pdp_details_view_author"
                                        data-view-index={0}
                                        href="#"
                                    >
                                        {currentBook.author}
                                    </a>
                                </h6>
                            </span>
                        </div>
                        <h1 className="sc-c0f8c612-0 dEurho">
                            {currentBook.mainText}
                        </h1>
                        <div className="sc-1a46a934-0 fHEkTS">
                            <div style={{ display: "flex" }}>
                                <div className="sc-1a46a934-1 dCjKzJ">
                                    <div
                                        style={{
                                            marginRight: 4,
                                            fontSize: 14,
                                            lineHeight: "150%",
                                            fontWeight: 500
                                        }}
                                    >
                                        {'4.7'}
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <div style={{ position: "relative" }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    color="#c7c7c7"
                                                    style={{ color: "#c7c7c7" }}
                                                    height={16}
                                                    width={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    color="#c7c7c7"
                                                    style={{ color: "#c7c7c7" }}
                                                    height={16}
                                                    width={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    color="#c7c7c7"
                                                    style={{ color: "#c7c7c7" }}
                                                    height={16}
                                                    width={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    color="#c7c7c7"
                                                    style={{ color: "#c7c7c7" }}
                                                    height={16}
                                                    width={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    color="#c7c7c7"
                                                    style={{ color: "#c7c7c7" }}
                                                    height={16}
                                                    width={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                            </div>
                                            <div
                                                style={{
                                                    width: "94%",
                                                    whiteSpace: "nowrap",
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    overflow: "hidden"
                                                }}
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    color="#FFC400"
                                                    style={{ color: "#FFC400" }}
                                                    height={16}
                                                    width={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    color="#FFC400"
                                                    style={{ color: "#FFC400" }}
                                                    height={16}
                                                    width={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    color="#FFC400"
                                                    style={{ color: "#FFC400" }}
                                                    height={16}
                                                    width={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    color="#FFC400"
                                                    style={{ color: "#FFC400" }}
                                                    height={16}
                                                    width={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 24 24"
                                                    color="#FFC400"
                                                    style={{ color: "#FFC400" }}
                                                    height={16}
                                                    width={16}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="number"
                                        data-view-id="pdp_main_view_review"
                                    >
                                        ({currentBook.sold || '101'})
                                    </a>
                                    <div className="sc-1a46a934-2 eIEoTE" />
                                </div>
                                <div
                                    data-view-id="pdp_quantity_sold"
                                    className="sc-1a46a934-3 geGARt"
                                >
                                    Đã bán {currentBook.sold || '2k'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2
                        }}
                    >
                        <div className="sc-4ade12da-0 enfFJg">
                            <div className="product-price">
                                <div
                                    className="product-price__current-price"
                                    style={{ color: 'rgb(255, 66, 78)' }}
                                >
                                    {formatPrice(calculateDiscountedPrice())}<sup>₫</sup>
                                </div>
                                {currentBook.promotion > 0 && (
                                    <div className="product-price__discount-rate">
                                        -{currentBook.promotion}%
                                    </div>
                                )}
                                <div className="product-price__original-price"><del>{currentBook.price}</del><sup>₫</sup></div>

                                <Popover
                                    content={priceInfoContent}
                                    title={
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span>Chi tiết giá</span>
                                            <img
                                                srcSet="https://salt.tikicdn.com/ts/upload/bb/a8/96/96edf0241aac5851f4913ef242a5abb4.png"
                                                width="16"
                                                height="16"
                                                alt="close-icon"
                                                className="sc-900210d0-0 hFEtiz"
                                                style={{ width: '16px', height: '16px', opacity: 1, cursor: 'pointer' }}
                                                onClick={() => setPopoverVisible(false)}
                                            />
                                        </div>
                                    }
                                    trigger="click"
                                    placement="rightTop"
                                    open={popoverVisible}
                                    onOpenChange={setPopoverVisible}
                                >
                                    <div style={{ cursor: 'pointer' }}>
                                        <img
                                            srcSet="https://salt.tikicdn.com/ts/ta/c1/c0/8f/1c42c78c42d4355130fa4a4ef9036892.png"
                                            width="16"
                                            height="16"
                                            alt="info-icon"
                                            className="sc-900210d0-0 hFEtiz"
                                            style={{ width: '16px', height: '16px', opacity: 1 }}
                                        />
                                    </div>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;