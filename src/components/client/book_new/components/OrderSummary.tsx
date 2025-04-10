import React from 'react';
import CarouselProduct from '../carousel.product';

interface OrderSummaryProps {
    currentBook: IBookTable;
    currentQuantity: number;
    onChangeQuantity: (type: 'increase' | 'decrease') => void;
    onChangeInput: (value: string) => void;
    onAddToCart: (isBuyNow?: boolean) => void;
    formatPrice: (price: number) => string;
    calculatedPrice: number;  // This now represents price × quantity
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
    currentBook,
    currentQuantity,
    onChangeQuantity,
    onChangeInput,
    onAddToCart,
    formatPrice,
    calculatedPrice
}) => {
    return (
        <div className="sc-98168149-0 ftPStD">
            <div
                style={{
                    position: "sticky",
                    top: 12,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: 12
                }}
            >
                <div
                    style={{ gap: 16, overflow: "initial" }}
                    className="sc-34e0efdc-0 dSZwVn"
                >
                    <div
                        style={{ display: "flex", gap: 0, alignItems: "center", height: 65 }}
                        className="sc-524d1555-0 vIHcS"
                    >
                        <div
                            style={{ display: "flex", gap: 8, alignItems: "center", height: 65 }}
                        >
                            <a href={`/cua-hang/${currentBook?.supplier?.name?.toLowerCase() || ''}?source_screen=product_detail&source_engine=organic`}>
                                <picture className="webpimg-container">
                                    <source
                                        type="image/webp"
                                        srcSet={currentBook?.supplier?.logo ? `/images/${currentBook.supplier.logo}` : "https://vcdn.tikicdn.com/cache/w100/ts/seller/9d/00/50/8ca75b7295f82088f132d799e61efa18.jpg.webp"}
                                    />
                                    <img
                                        src={currentBook?.supplier?.logo ? `/images/${currentBook.supplier.logo}` : "https://vcdn.tikicdn.com/cache/w100/ts/seller/9d/00/50/8ca75b7295f82088f132d799e61efa18.jpg"}
                                        className="sc-900210d0-0 hFEtiz logo"
                                        width={40}
                                        height={40}
                                        alt={currentBook?.supplier?.name || "Supplier"}
                                        style={{
                                            borderRadius: "50%",
                                            minWidth: 40,
                                            width: 40,
                                            height: 40,
                                            opacity: 1
                                        }}
                                    />
                                </picture>
                            </a>
                            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                                <span className="seller-name">
                                    <div className="sc-71dfba1f-0 kjrAcw">
                                        <a href={`/cua-hang/${currentBook?.supplier?.name?.toLowerCase() || ''}?t=product&category_id=8322&parent_id=2&source_screen=product_detail&source_engine=organic`}>
                                            <span>{currentBook?.supplier?.name || ''}</span>
                                        </a>
                                    </div>
                                </span>
                                <div className="sc-98fe21e0-0 gjnreP">
                                    <div className="item review">
                                        <div className="title">
                                            <span>{'4.8'}</span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={16}
                                                height={16}
                                            />
                                        </div>
                                        <div className="sub-title">({'1.1k+'} đánh giá)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-707f326b-0 eLvPkD">
                            <img
                                alt="chat-icon"
                                src="https://salt.tikicdn.com/ts/upload/8b/82/74/cf2c041938ace329ab11fbc38da3275b.png"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>
                    <div style={{ borderTop: "none" }} className="sc-10adedb6-0 gnrEVG">
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <div className="sc-43079b3d-0 ejSfqq">
                                <p className="label">Số Lượng</p>
                                <div className="group-input">
                                    <button
                                        className={currentQuantity <= 1 ? "disable" : ""}
                                        onClick={() => currentQuantity > 1 && onChangeQuantity('decrease')}
                                    >
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                                            alt="remove-icon"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                    <input
                                        type="text"
                                        className="input"
                                        value={currentQuantity}
                                        onChange={(e) => onChangeInput(e.target.value)}
                                    />
                                    <button onClick={() => onChangeQuantity('increase')}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                                            alt="add-icon"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="sc-31ecf63b-2 fzqGUN">
                            <div className="sc-31ecf63b-0 dqQfZn">Tạm tính</div>
                            <div
                                style={{ display: "flex", alignItems: "center", gap: 8 }}
                                className="sc-31ecf63b-1 fgrIVW"
                            >
                                <div>
                                    {formatPrice(calculatedPrice)}<sup>₫</sup>
                                </div>
                            </div>
                        </div>
                        <div className="group-button">
                            <button
                                className="sc-9e5b140a-0 hDQYRF"
                                onClick={() => onAddToCart(true)}
                            >
                                <span>Mua ngay</span>
                            </button>
                            <button
                                type="button"
                                data-view-id="pdp_add_to_cart_button"
                                className="sc-9e5b140a-1 dtpKzE"
                                onClick={() => onAddToCart()}
                            >
                                Thêm vào giỏ
                            </button>
                            <button type="button" className="sc-9e5b140a-1 dtpKzE">
                                <div>Mua trước trả sau</div>
                            </button>
                        </div>
                    </div>
                </div>
                <a
                    style={{ textAlign: "center" }}
                >
                    <span className="sc-f93de155-0 fvuIJS">
                        So sánh 1 nhà bán khác (Giá từ {formatPrice(currentBook?.price || 919000)} ₫)
                    </span>
                </a>
                <div>
                    <CarouselProduct />
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
