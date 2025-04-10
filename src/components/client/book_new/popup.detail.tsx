import './popup.detail.scss'

interface IProps {
    onClose: () => void;
    price: number;
    discountedPrice: number;
    priceAfterCoupon?: number;
}

const PopupDetail = (props: IProps) => {
    const { onClose, price, discountedPrice, priceAfterCoupon } = props;

    // Format price as integer with thousands separator but no decimal places
    const formatPrice = (price: number) => {
        return Math.floor(price).toLocaleString('vi-VN').replace(/\./g, ',');
    };

    // Close popup when clicking outside
    const handleOutsideClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <>
            <div
                className="popup-overlay"
                onClick={handleOutsideClick}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 100,
                    right: 0,
                    bottom: 0,
                    zIndex: 9998
                }}
            />
            <div
                className="popup-content"
                role="tooltip"
                id="popup-1"
                onClick={(e) => e.stopPropagation()}
            >
                <div>
                    <div className="sc-4ade12da-1 cLyYdX">
                        <div className="title">
                            <div>Chi tiết giá</div>
                            <div style={{ cursor: "pointer" }} onClick={onClose}>
                                <picture className="webpimg-container">
                                    <source
                                        type="image/webp"
                                        srcSet="https://salt.tikicdn.com/ts/upload/bb/a8/96/96edf0241aac5851f4913ef242a5abb4.png"
                                    />
                                    <img
                                        srcSet="https://salt.tikicdn.com/ts/upload/bb/a8/96/96edf0241aac5851f4913ef242a5abb4.png"
                                        width={16}
                                        height={16}
                                        alt="close-icon"
                                        className="sc-900210d0-0 hFEtiz"
                                        style={{ width: 16, height: 16, opacity: 1 }}
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="content">
                            <div className="info">
                                <div>Giá gốc</div>
                                <div className="info__price">
                                    {formatPrice(price)}<sup>₫</sup>
                                </div>
                            </div>
                            <div className="info">
                                <div>
                                    <div>Giá bán</div>
                                    <div className="info__description">
                                        Giá đã giảm trực tiếp từ nhà bán
                                    </div>
                                </div>
                                <div className="info__price">
                                    {formatPrice(discountedPrice)}<sup>₫</sup>
                                </div>
                            </div>
                            <div className="info">
                                <div>
                                    <div>Giá sau áp dụng mã khuyến mãi</div>
                                    <div className="info__description">
                                        Có thể thay đổi ở bước thanh toán
                                    </div>
                                </div>
                                <div className="info__price">
                                    {formatPrice(priceAfterCoupon || discountedPrice * 0.95)}<sup>₫</sup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopupDetail;