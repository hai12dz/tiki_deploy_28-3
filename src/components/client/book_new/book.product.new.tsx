import { useCurrentApp } from '@/components/context/app.context';
import { App, Breadcrumb, Col, Popover, Row, Space } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './book.new.scss';
import SameProduct from './same.product';
import TopDeal from './top-deal';
import InfoBook from './info.book';
import SeeMore from './see.more';
import Evaluation from './evaluation';
import CarouselProduct from './carousel.product';
import ProductSeenRecently from './product.seen.recently';
import RelatedBrand from './brand.relate';
import ExploreMore from './explore.more';
import SlideDetail from './slide.detail';
import FooterWeb from '@/pages/client/home/footer';
import ChangeAddress from './change.address';
import Breadcrumbs from './components/BreadCrumb';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ShippingInfo from './components/ShippingInfo';
import Promotions from './components/Promotions';
import AdditionalServices from './components/AdditionalServices';
import OrderSummary from './components/OrderSummary';

interface IProps {
    currentBook: IBookTable | null;
}

const BookNew = (props: IProps) => {
    const { currentBook } = props;
    const [currentQuantity, setCurrentQuantity] = useState<number>(1);
    const { setCarts, user } = useCurrentApp();
    const { message } = App.useApp();
    const navigate = useNavigate();
    const [showAddressModal, setShowAddressModal] = useState<boolean>(false);
    const [deliveryAddress, setDeliveryAddress] = useState<string>("Giao đến Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội");
    const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

    const handleChangeQuantity = (type: 'increase' | 'decrease') => {
        if (type === 'decrease') {
            if (currentQuantity - 1 <= 0) return;
            setCurrentQuantity(currentQuantity - 1);
        }
        if (type === 'increase' && currentBook) {
            if (currentQuantity === +currentBook.quantity) return; // max
            setCurrentQuantity(currentQuantity + 1);
        }
    };

    const handleChangeInput = (value: string) => {
        if (!isNaN(+value)) {
            if (+value > 0 && currentBook && +value < +currentBook.quantity) {
                setCurrentQuantity(+value);
            }
        }
    };

    const handleAddToCart = (isBuyNow = false) => {
        if (!user) {
            message.error("Bạn cần đăng nhập để thực hiện tính năng này.")
            return;
        }
        //update localStorage
        const cartStorage = localStorage.getItem("carts");
        if (cartStorage && currentBook) {
            //update
            const carts = JSON.parse(cartStorage) as ICart[];

            //check exist
            let isExistIndex = carts.findIndex(c => c._id === currentBook?.id);
            if (isExistIndex > -1) {
                carts[isExistIndex].quantity =
                    carts[isExistIndex].quantity + currentQuantity;
            } else {
                carts.push({
                    quantity: currentQuantity,
                    _id: currentBook.id,
                    detail: currentBook
                })
            }

            localStorage.setItem("carts", JSON.stringify(carts));

            //sync React Context
            setCarts(carts);
        } else {
            //create
            const data = [{
                _id: currentBook?.id!,
                quantity: currentQuantity,
                detail: currentBook!
            }]
            localStorage.setItem("carts", JSON.stringify(data))

            //sync React Context
            setCarts(data);
        }

        if (isBuyNow) {
            navigate("/order")
        } else
            message.success("Thêm sản phẩm vào giỏ hàng thành công.")
    };

    const formatPrice = (price: number) => {
        // Format price as integer with thousands separator but no decimal places
        return Math.floor(price).toLocaleString('vi-VN').split(',')[0];
    };

    const calculateDiscountedPrice = () => {
        if (!currentBook) return 0;
        const originalPrice = Number(currentBook.price || 0);
        const discountPercent = Number(currentBook.promotion || 0);
        return originalPrice - (originalPrice * discountPercent / 100);
    };

    const originalPrice = currentBook ? Number(currentBook.price || 0) : 0;
    const discountedPrice = calculateDiscountedPrice();
    const calculatedTotalPrice = discountedPrice * currentQuantity;

    const handleAddressSelect = (address: string) => {
        setDeliveryAddress(`Giao đến ${address}`);
    };

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

    if (!currentBook) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <main>
                <div className="sc-9b2f7535-0 edZgU">
                    <Breadcrumbs currentBook={currentBook} />
                    <div className="sc-iBYQkv fGViSL">
                        <div className="sc-gKPRtg esmbwu">
                            <div className="sc-iBYQkv fGViSL">
                                <div className="sc-aa5e895f-0 joJPdR">
                                    <ProductGallery currentBook={currentBook} />
                                    <div className="sc-21093861-0 gTCFtt">
                                        <div className="sc-40058dbe-0 bXjfwR">
                                            <ProductInfo currentBook={currentBook} />

                                            <ShippingInfo
                                                deliveryAddress={deliveryAddress}
                                                onChangeAddress={() => setShowAddressModal(true)}
                                            />

                                            <Promotions />

                                            <AdditionalServices />

                                            <SameProduct />
                                            <TopDeal />
                                            <InfoBook />
                                            <SeeMore />

                                        </div>
                                    </div>
                                </div>

                                <Evaluation />
                            </div>

                            {/* Replace the order summary section with the new component */}
                            <OrderSummary
                                currentBook={currentBook}
                                currentQuantity={currentQuantity}
                                onChangeQuantity={handleChangeQuantity}
                                onChangeInput={handleChangeInput}
                                onAddToCart={handleAddToCart}
                                formatPrice={formatPrice}
                                calculatedPrice={calculatedTotalPrice}
                            />

                        </div>
                        <ProductSeenRecently />
                        <RelatedBrand />
                        <ExploreMore />
                        <SlideDetail />
                    </div>
                </div>
            </main>
            <FooterWeb />
            {showAddressModal && (
                <ChangeAddress
                    onClose={() => setShowAddressModal(false)}
                    onSelectAddress={handleAddressSelect}
                />
            )}
        </>

    );
}

export default BookNew;