import React, { useState } from 'react';
import { Popover } from 'antd';
import './ShippingInfo.scss'
interface ShippingInfoProps {
    deliveryAddress: string;
    onChangeAddress: () => void;
}

const ShippingInfo: React.FC<ShippingInfoProps> = ({
    deliveryAddress,
    onChangeAddress
}) => {
    const [shippingPopoverVisible, setShippingPopoverVisible] = useState<boolean>(false);

    const shippingInfoContent = (
        <div className="sc-f6599889-3 eEVyHi">
            <div>
                <div className="title">Sản phẩm thông thường</div>
                <ul>
                    <li className="text">Giảm 100% tối đa 10k cho đơn 45k</li>
                    <li className="text">Giảm 100% tối đa 25k cho đơn 100k</li>
                </ul>
            </div>
            <div>
                <div className="title">
                    Sản phẩm có nhãn
                    <picture className="webpimg-container">
                        <source
                            type="image/webp"
                            srcSet="https://salt.tikicdn.com/ts/upload/f7/85/80/51da5722c3cfa1d6d93644188d07c51a.png"
                        />
                        <img
                            srcSet="https://salt.tikicdn.com/ts/upload/f7/85/80/51da5722c3cfa1d6d93644188d07c51a.png"
                            width={79}
                            height={16}
                            alt="freeship-icon"
                            className="sc-900210d0-0 hFEtiz badge"
                            style={{ width: 79, height: 16, opacity: 1 }}
                        />
                    </picture>
                </div>
                <ul>
                    <li className="text">Giảm 100% tối đa 15k cho đơn 45k</li>
                    <li className="text">Giảm 100% tối đa 70k cho đơn 100k</li>
                    <li className="text">Giảm 100% tối đa 100k cho đơn 500k</li>
                </ul>
            </div>
            <div className="sc-f6599889-4 cgFBJP">Đã hiểu</div>
        </div>

    );

    return (
        <div className="sc-34e0efdc-0 dSZwVn">
            <div className="sc-34e0efdc-1 ddClVB">Thông tin vận chuyển</div>
            <div className="sc-34e0efdc-2 kAFhAU">
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '4px', fontSize: '14px', fontWeight: 400, lineHeight: '150%', flex: '1 1 0%', minHeight: '21px' }}>
                    <div className="sc-abbfadd6-0 bXxUQh">{deliveryAddress}</div>
                    <span
                        style={{ color: 'rgb(10, 104, 255)', padding: '5px', border: '1px solid transparent' }}
                        onClick={onChangeAddress}
                    >
                        Đổi
                    </span>
                </div>
            </div>
            <div className="sc-34e0efdc-2 kAFhAU">
                <div className="sc-6f43b531-0 nTUKM shipping-info">
                    <div className="shipping-info__item">
                        <div className="shipping-info__item__header">
                            <div className="shipping-info__item__header__logo" style={{ width: '32px' }}>
                                <img src="https://salt.tikicdn.com/ts/upload/6b/59/d9/783a8f53f8c251dbe5f644df40c21c15.png" alt="" height={16} width={32} />
                            </div>
                            <div className="shipping-info__item__header__highlight">Giao đúng sáng mai</div>
                        </div>
                        <div className="shipping-info__item__fee">
                            <div className="shipping-info__item__fee_name">
                                <span style={{ color: '#27272A' }}>
                                    8h - 12h, 05/04: <span style={{ color: '#00AB56' }}>Miễn phí</span>
                                    <span style={{ color: '#808089' }}>&nbsp;<del>16.500<sup><small>₫</small></sup></del></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sc-34e0efdc-2 kAFhAU" style={{ borderBottom: 'none', padding: '4px 0px' }}>
                <div className="sc-d0c6782c-0 CXJre">
                    <div className="sc-d0c6782c-1 fliQTf">
                        <div style={{ flexWrap: 'wrap' }}>
                            <picture className="webpimg-container">
                                <source type="image/webp" srcSet="https://salt.tikicdn.com/ts/upload/67/bc/b6/7aed838df704ad50927e343895885e73.png" />
                                <img
                                    srcSet="https://salt.tikicdn.com/ts/upload/67/bc/b6/7aed838df704ad50927e343895885e73.png"
                                    width={18}
                                    height={18}
                                    alt="freeship-icon"
                                    className="sc-900210d0-0 hFEtiz badge"
                                    style={{ width: '18px', height: '18px', opacity: 1 }}
                                />
                            </picture>
                            <div className="sc-d0c6782c-2 gEwNBn">Freeship 10k đơn từ 45k, Freeship 25k đơn từ 100k</div>

                            <div className="popup-wrapper">
                                <div aria-describedby="popup-2" className="sc-f6599889-0 cxMdsy">
                                    <Popover
                                        content={shippingInfoContent}
                                        title={
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span>Khuyến mãi vận chuyển</span>
                                                <img
                                                    srcSet="https://salt.tikicdn.com/ts/upload/bb/a8/96/96edf0241aac5851f4913ef242a5abb4.png"
                                                    width="16"
                                                    height="16"
                                                    alt="close-icon"
                                                    className="sc-900210d0-0 hFEtiz"
                                                    style={{ width: '16px', height: '16px', opacity: 1, cursor: 'pointer' }}
                                                    onClick={() => setShippingPopoverVisible(false)}
                                                />
                                            </div>
                                        }
                                        trigger="hover"
                                        placement="rightTop"
                                        open={shippingPopoverVisible}
                                        onOpenChange={setShippingPopoverVisible}
                                    >
                                        <picture className="webpimg-container" style={{ cursor: 'pointer' }}>
                                            <source type="image/webp" srcSet="https://salt.tikicdn.com/ts/ta/c1/c0/8f/1c42c78c42d4355130fa4a4ef9036892.png" />
                                            <img
                                                srcSet="https://salt.tikicdn.com/ts/ta/c1/c0/8f/1c42c78c42d4355130fa4a4ef9036892.png"
                                                width={16}
                                                height={16}
                                                alt="info-icon"
                                                className="sc-900210d0-0 hFEtiz"
                                                style={{ width: '16px', height: '16px', opacity: 1 }}
                                            />
                                        </picture>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;
