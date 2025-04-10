import './evaluation.scss'
import { useState } from 'react';

const Evaluation = () => {
    // Initial image URLs as constants for reference
    const initialTopIconSrc = "https://salt.tikicdn.com/ts/ta/6a/2c/6e/125f814f740ad14defbb98b7b49dfa49.png";
    const activeTopIconSrc = "https://salt.tikicdn.com/ts/ta/0e/f6/e0/12bcf4aedaa439a9a680059afd56c68d.png";
    const initialBottomIconSrc = "https://salt.tikicdn.com/ts/ta/95/ae/66/2957a823955457b65f6f9150e41b5cb0.png";
    const activeBottomIconSrc = "https://salt.tikicdn.com/ts/ta/fd/63/9b/cbd8432f2fde557145ba2bc6f0428430.png";

    // State to track which icon versions we're showing
    const [topIconSrc, setTopIconSrc] = useState(initialTopIconSrc);
    const [bottomIconSrc, setBottomIconSrc] = useState(initialBottomIconSrc);

    // Event handlers for icon clicks - now toggling between states
    const handleTopIconClick = () => {
        setTopIconSrc(topIconSrc === initialTopIconSrc ? activeTopIconSrc : initialTopIconSrc);
    };

    const handleBottomIconClick = () => {
        setBottomIconSrc(bottomIconSrc === initialBottomIconSrc ? activeBottomIconSrc : initialBottomIconSrc);
    };

    return (
        <div id="customer-review-widget-id">
            <div className="sc-34e0efdc-0 dSZwVn">
                <div className="sc-34e0efdc-1 ddClVB">Khách hàng đánh giá</div>
                <div className="sc-4b1322bd-0 btfjhU customer-reviews">
                    <div className="customer-reviews__inner">
                        <div className="customer-reviews__top">
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 2fr",
                                    width: "100%",
                                    paddingBottom: 16
                                }}
                            >
                                <div className="sc-4b1322bd-1 cDJOxJ review-rating">
                                    <div className="review-rating__heading">Tổng quan</div>
                                    <div className="review-rating__inner">
                                        <div className="review-rating__summary">
                                            <div className="review-rating__point">4.7</div>
                                            <div className="review-rating__stars">
                                                <div
                                                    className="sc-a236768f-0 fFhahK"
                                                    style={{ whiteSpace: "nowrap" }}
                                                >
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/7b/fe/fc/3da9d35ef717692a4b3b345f44e55caf.png"
                                                            width={24}
                                                            height={24}
                                                        />
                                                    </span>
                                                    <div style={{ width: "94%" }}>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={24}
                                                                height={24}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={24}
                                                                height={24}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={24}
                                                                height={24}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={24}
                                                                height={24}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={24}
                                                                height={24}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-rating__total">(114 đánh giá)</div>
                                        <div className="review-rating__detail">
                                            <div className="review-rating__level">
                                                <div
                                                    className="sc-a236768f-0 fFhahK"
                                                    style={{ whiteSpace: "nowrap" }}
                                                >
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <div style={{ width: "100%" }}>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-4b1322bd-2 qmgSA">
                                                    <div style={{ width: "84%" }} />
                                                </div>
                                                <div className="review-rating__number">95</div>
                                            </div>
                                            <div className="review-rating__level">
                                                <div
                                                    className="sc-a236768f-0 fFhahK"
                                                    style={{ whiteSpace: "nowrap" }}
                                                >
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <div style={{ width: "80%" }}>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-4b1322bd-2 qmgSA">
                                                    <div style={{ width: "12%" }} />
                                                </div>
                                                <div className="review-rating__number">13</div>
                                            </div>
                                            <div className="review-rating__level">
                                                <div
                                                    className="sc-a236768f-0 fFhahK"
                                                    style={{ whiteSpace: "nowrap" }}
                                                >
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <div style={{ width: "60%" }}>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-4b1322bd-2 qmgSA">
                                                    <div style={{ width: "2%" }} />
                                                </div>
                                                <div className="review-rating__number">3</div>
                                            </div>
                                            <div className="review-rating__level">
                                                <div
                                                    className="sc-a236768f-0 fFhahK"
                                                    style={{ whiteSpace: "nowrap" }}
                                                >
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <div style={{ width: "40%" }}>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-4b1322bd-2 qmgSA">
                                                    <div style={{ width: "1%" }} />
                                                </div>
                                                <div className="review-rating__number">1</div>
                                            </div>
                                            <div className="review-rating__level">
                                                <div
                                                    className="sc-a236768f-0 fFhahK"
                                                    style={{ whiteSpace: "nowrap" }}
                                                >
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <span>
                                                        <img
                                                            alt="star-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                                                            width={14}
                                                            height={14}
                                                        />
                                                    </span>
                                                    <div style={{ width: "20%" }}>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                        <span>
                                                            <img
                                                                alt="star-icon"
                                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                                width={14}
                                                                height={14}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="sc-4b1322bd-2 qmgSA">
                                                    <div style={{ width: "1%" }} />
                                                </div>
                                                <div className="review-rating__number">2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="ai-summary" className="sc-4b1322bd-9 kLEOsJ">
                                    <div id="ai-chat" className="disclaimer">
                                        <img
                                            alt="icon"
                                            src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png"
                                            width={24}
                                            height={24}
                                        />
                                        <div>
                                            <span>Trợ lý AI</span> tổng hợp
                                        </div>
                                        <div style={{ marginLeft: 4 }}>từ các đánh giá mới nhất</div>
                                    </div>
                                    <div className="section-item">
                                        <div className="title">
                                            <span className="text-bold">Về sản phẩm:</span>{" "}
                                            <span className="text-lighter">
                                                (15 tích cực, 6 tiêu cực)
                                            </span>
                                        </div>
                                        <div className="flex text">
                                            <img
                                                alt="icon"
                                                src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                                width={16}
                                                height={16}
                                            />
                                            <div>Nội dung bổ ích, dễ hiểu, thực tế.</div>
                                        </div>
                                        <div className="flex text">
                                            <img
                                                alt="icon"
                                                src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                                width={16}
                                                height={16}
                                            />
                                            <div>Sách in đẹp, giấy tốt, trình bày rõ ràng.</div>
                                        </div>
                                        <div className="flex text">
                                            <img
                                                alt="icon"
                                                src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                                width={16}
                                                height={16}
                                            />
                                            <div>Giá tốt, đúng chất thực chiến.</div>
                                        </div>
                                        <div className="flex text">
                                            <img
                                                alt="icon"
                                                src="https://salt.tikicdn.com/ts/ta/28/aa/3f/b21c8fac9240dd055b363255cc1fc72e.png"
                                                width={16}
                                                height={16}
                                            />
                                            <div>Nội dung cơ bản, lỗi thời, có thể tìm trên mạng.</div>
                                        </div>
                                    </div>
                                    <div className="section-item">
                                        <div className="title">
                                            <span className="text-bold">Về dịch vụ:</span>{" "}
                                            <span className="text-lighter">(8 tích cực, 1 tiêu cực)</span>
                                        </div>
                                        <div className="flex text">
                                            <img
                                                alt="icon"
                                                src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                                width={16}
                                                height={16}
                                            />
                                            <div>Giao hàng nhanh, đóng gói cẩn thận.</div>
                                        </div>
                                        <div className="flex text">
                                            <img
                                                alt="icon"
                                                src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                                width={16}
                                                height={16}
                                            />
                                            <div>Nhân viên chuyên nghiệp, thái độ tốt.</div>
                                        </div>
                                        <div className="flex text">
                                            <img
                                                alt="icon"
                                                src="https://salt.tikicdn.com/ts/ta/6e/32/bd/0e629541310a1a8132b6ef8666827ba9.png"
                                                width={16}
                                                height={16}
                                            />
                                            <div>Hỗ trợ khách hàng tốt sau bán hàng.</div>
                                        </div>
                                        <div className="flex text">
                                            <img
                                                alt="icon"
                                                src="https://salt.tikicdn.com/ts/ta/28/aa/3f/b21c8fac9240dd055b363255cc1fc72e.png"
                                                width={16}
                                                height={16}
                                            />
                                            <div>Đơn hàng không đóng hộp giấy, sách bị rách.</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-between">
                                        <div className=" flex flex-between wrapper-icon">
                                            <img
                                                alt="icon"
                                                src={topIconSrc}
                                                width={32}
                                                height={32}
                                                onClick={handleTopIconClick}
                                                style={{ cursor: 'pointer' }}
                                            />
                                            <img
                                                alt="icon"
                                                src={bottomIconSrc}
                                                width={32}
                                                height={32}
                                                onClick={handleBottomIconClick}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="customer-reviews__top">
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr",
                                    borderTop: "1px solid rgb(242, 242, 242)",
                                    width: "100%",
                                    paddingTop: 16
                                }}
                            >
                                <div className="sc-4b1322bd-3 ehtKLX review-images">
                                    <div className="review-images__heading">Tất cả hình ảnh (12)</div>
                                    <div className="review-images__inner">
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/96/ec/ac/6fd26e3626e2a8ae2ccd3f47d1b5d4c5.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/bd/9b/1f/83ce09241eebc24dc5257610fdb8f228.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/f3/92/48/bab2bfb4a63c3777d42f5490a5103755.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/d8/49/94/3d0786393508fa23b3665adebc087505.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/5b/eb/70/4f58048b64b74b1500d44c7e06b68e58.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/22/f6/c4/2e493a234563cab1e69ddd9cec34c1a2.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/45/f5/6a/fea2df82075993cb2429c644ea252440.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/7b/eb/b3/402e031c84d2ed32d42b320c596d899a.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/20/9c/83/da0dadbea04ccae4a292fb377473a918.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/11/52/59/991f9869e85237beccc6938c1b0184c0.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/0e/10/b3/b07821d9e67d9651b2adad23e7ccea24.jpg")'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="review-images__item"
                                            data-view-id="pdp_product_review_view_photo"
                                        >
                                            <div
                                                className="review-images__img"
                                                style={{
                                                    backgroundImage:
                                                        'url("https://salt.tikicdn.com/cache/w200/ts/review/9e/41/59/e0163523f6bdce653465a7c7bc94c1c6.jpg")'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-4b1322bd-4 VLKeD filter-review">
                            <div className="filter-review__label">Lọc theo</div>
                            <div className="filter-review__inner">
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={0}
                                    className="filter-review__item "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">Mới nhất</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={1}
                                    className="filter-review__item "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">Có hình ảnh</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={2}
                                    className="filter-review__item "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">Đã mua hàng</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={3}
                                    className="filter-review__item  "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">5 sao</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={4}
                                    className="filter-review__item  "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">4 sao</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={5}
                                    className="filter-review__item  "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">3 sao</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={6}
                                    className="filter-review__item  "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">2 sao</span>
                                </div>
                                <div
                                    data-view-id="pdp_review_filter_item"
                                    data-view-index={7}
                                    className="filter-review__item  "
                                >
                                    <span className="filter-review__check">
                                        <img src="https://salt.tikicdn.com/ts/upload/68/59/32/9589577c7e094d3dccbe57dd0af2bbb8.png" />
                                    </span>
                                    <span className="filter-review__text">1 sao</span>
                                </div>
                            </div>
                        </div>
                        <div />
                        <div className="sc-4b1322bd-5 hcsJQG review-comment">
                            <div className="review-comment__user">
                                <div className="review-comment__user-inner">
                                    <div className="review-comment__user-avatar">
                                        <div
                                            className="sc-9162b613-0 erIzSq has-character"
                                            style={{
                                                backgroundImage:
                                                    'url("https%3A%2F%2Fsalt.tikicdn.com%2Fcache%2F512x512%2Fts%2Favatar%2F81%2F27%2F84%2F1ff8a5d17a5880e6ff6777d10af6463d.png")'
                                            }}
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/cache/512x512/ts/avatar/81/27/84/1ff8a5d17a5880e6ff6777d10af6463d.png"
                                                alt="Nguyễn  Tấn Phát"
                                            />
                                            <span>TP</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="review-comment__user-name">Nguyễn Tấn Phát</div>
                                        <div className="review-comment__user-date">
                                            Đã tham gia 12 năm
                                        </div>
                                    </div>
                                </div>
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"
                                            alt="review-count"
                                        />
                                        Đã viết
                                    </div>
                                    <span>42 Đánh giá</span>
                                </div>
                                <div
                                    style={{ border: "0.5px solid rgb(235, 235, 240)", marginTop: 9 }}
                                />
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"
                                            alt="liked-count"
                                        />
                                        Đã nhận
                                    </div>
                                    <span>20 Lượt cảm ơn</span>
                                </div>
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <div className="review-comment__rating-title">
                                    <div
                                        className="sc-a236768f-0 fFhahK review-comment__rating"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <div style={{ width: "100%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="review-comment__title">Cực kì hài lòng</div>
                                </div>
                                <div className="review-comment__seller-name-attributes">
                                    <div className="review-comment__seller-name">
                                        <span className="review-comment__check-icon" />
                                        Đã mua hàng
                                    </div>
                                </div>
                                <div className="review-comment__content">
                                    <div>
                                        <span>
                                            {" "}
                                            Mình cho 5 sao cách đóng gói và vận chuyển của Tiki nhé. Mình
                                            luôn có thiện cảm với Dịch vụ và Thái độ của Tiki khi mua
                                            hàng. Mình sẽ không đánh giá sách vì mỗi người một quan điểm.
                                            Tiki tiếp tục vững...{" "}
                                        </span>
                                        <span className="show-more-content">Xem thêm</span>
                                    </div>
                                </div>
                                <div className="review-comment__created-date">
                                    <span>Đánh giá vào 5 tháng trước</span>
                                    <span className="review-comment__time-line">Đã dùng 1 ngày</span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span
                                            data-view-id="pdp_product_review_like_buton"
                                            className="review-comment__thank "
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/10/9f/8b/54e5f6b084fb9e3445036b4646bc48b5.png"
                                                width={24}
                                                height={24}
                                            />
                                            <span>3</span>
                                        </span>
                                        <span
                                            data-view-id="pdp_product_review_reply_button"
                                            className="review-comment__reply"
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/82/f0/7f/7353641630f811453e875bb5450065d8.png"
                                                width={24}
                                                height={24}
                                            />
                                            1
                                        </span>
                                    </div>
                                    <span
                                        data-view-id="pdp_product_review_reply_button"
                                        className="review-comment__reply"
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/3f/fa/d4/7057dfb58b682b1b0a2b9683228863ee.png"
                                            width={24}
                                            height={24}
                                        />
                                        Chia sẻ
                                    </span>
                                </div>
                                <div className="review-comment__sub-comments">
                                    <div className="sc-4b1322bd-6 koMmsD review-sub-comment">
                                        <div className="review-sub-comment__inner">
                                            <div className="review-sub-comment__avatar-thumb">
                                                <div
                                                    className="sc-9162b613-0 erIzSq"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2Fd1%2F3f%2Fae%2F13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg")'
                                                    }}
                                                >
                                                    <img
                                                        src="https://vcdn.tikicdn.com/ts/seller/d1/3f/ae/13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg"
                                                        alt="Tiki Trading"
                                                    />
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <div className="review-sub-comment__avatar">
                                                    <div className="review-sub-comment__avatar-name">
                                                        Tiki Trading
                                                    </div>
                                                    <span className="review-sub-comment__check-icon" />
                                                    <div className="review-sub-comment__avatar-date">
                                                        5 tháng trước
                                                    </div>
                                                </div>
                                                <div className="review-sub-comment__content">
                                                    Cảm ơn anh Phát đã tin tưởng Tiki và cho Tiki 5⭐️! Thật
                                                    tuyệt vời khi Tiki có một khách hàng là anh ❤️
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-4b1322bd-5 hcsJQG review-comment">
                            <div className="review-comment__user">
                                <div className="review-comment__user-inner">
                                    <div className="review-comment__user-avatar">
                                        <div
                                            className="sc-9162b613-0 erIzSq has-character"
                                            style={{
                                                backgroundImage:
                                                    'url("%2F%2Ftiki.vn%2Fassets%2Fimg%2Favatar.png")'
                                            }}
                                        >
                                            <img src="//tiki.vn/assets/img/avatar.png" alt="Hien Mac" />
                                            <span>HM</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="review-comment__user-name">Hien Mac</div>
                                        <div className="review-comment__user-date">
                                            Đã tham gia 4 năm
                                        </div>
                                    </div>
                                </div>
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"
                                            alt="review-count"
                                        />
                                        Đã viết
                                    </div>
                                    <span>16 Đánh giá</span>
                                </div>
                                <div
                                    style={{ border: "0.5px solid rgb(235, 235, 240)", marginTop: 9 }}
                                />
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"
                                            alt="liked-count"
                                        />
                                        Đã nhận
                                    </div>
                                    <span>1 Lượt cảm ơn</span>
                                </div>
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <div className="review-comment__rating-title">
                                    <div
                                        className="sc-a236768f-0 fFhahK review-comment__rating"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <div style={{ width: "100%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="review-comment__title">Cực kì hài lòng</div>
                                </div>
                                <div className="review-comment__seller-name-attributes">
                                    <div className="review-comment__seller-name">
                                        <span className="review-comment__check-icon" />
                                        Đã mua hàng
                                    </div>
                                </div>
                                <div className="review-comment__content">
                                    Giao sách nhanh , bọc hàng tốt, nhân viên chuyên nghiệp vẫn là ưu
                                    điểm max của Tiki Nội dung sách chưa đọc nên chưa review đc
                                </div>
                                <div className="review-comment__images">
                                    <div
                                        data-view-id="pdp_product_review_view_photo"
                                        className="review-comment__image"
                                        style={{
                                            backgroundImage:
                                                'url("https://salt.tikicdn.com/cache/w280/ts/review/22/f6/c4/2e493a234563cab1e69ddd9cec34c1a2.jpg")'
                                        }}
                                    />
                                </div>
                                <div className="review-comment__created-date">
                                    <span>Đánh giá vào 2 tháng trước</span>
                                    <span className="review-comment__time-line">Đã dùng 4 giờ</span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span
                                            data-view-id="pdp_product_review_like_buton"
                                            className="review-comment__thank "
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/10/9f/8b/54e5f6b084fb9e3445036b4646bc48b5.png"
                                                width={24}
                                                height={24}
                                            />
                                            <span>Hữu ích</span>
                                        </span>
                                        <span
                                            data-view-id="pdp_product_review_reply_button"
                                            className="review-comment__reply"
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/82/f0/7f/7353641630f811453e875bb5450065d8.png"
                                                width={24}
                                                height={24}
                                            />
                                            1
                                        </span>
                                    </div>
                                    <span
                                        data-view-id="pdp_product_review_reply_button"
                                        className="review-comment__reply"
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/3f/fa/d4/7057dfb58b682b1b0a2b9683228863ee.png"
                                            width={24}
                                            height={24}
                                        />
                                        Chia sẻ
                                    </span>
                                </div>
                                <div className="review-comment__sub-comments">
                                    <div className="sc-4b1322bd-6 koMmsD review-sub-comment">
                                        <div className="review-sub-comment__inner">
                                            <div className="review-sub-comment__avatar-thumb">
                                                <div
                                                    className="sc-9162b613-0 erIzSq"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2Fd1%2F3f%2Fae%2F13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg")'
                                                    }}
                                                >
                                                    <img
                                                        src="https://vcdn.tikicdn.com/ts/seller/d1/3f/ae/13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg"
                                                        alt="Tiki Trading"
                                                    />
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <div className="review-sub-comment__avatar">
                                                    <div className="review-sub-comment__avatar-name">
                                                        Tiki Trading
                                                    </div>
                                                    <span className="review-sub-comment__check-icon" />
                                                    <div className="review-sub-comment__avatar-date">
                                                        2 tháng trước
                                                    </div>
                                                </div>
                                                <div className="review-sub-comment__content">
                                                    Cảm ơn bạn đã ủng hộ và đánh giá 5⭐️ sản phẩm cho Tiki
                                                    nha. Tiki hy vọng được đồng hành cùng bạn nhiều hơn ạ ❤️
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-4b1322bd-5 hcsJQG review-comment">
                            <div className="review-comment__user">
                                <div className="review-comment__user-inner">
                                    <div className="review-comment__user-avatar">
                                        <div
                                            className="sc-9162b613-0 erIzSq has-character"
                                            style={{
                                                backgroundImage:
                                                    'url("%2F%2Ftiki.vn%2Fassets%2Fimg%2Favatar.png")'
                                            }}
                                        >
                                            <img src="//tiki.vn/assets/img/avatar.png" alt="Le ngoc" />
                                            <span>LN</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="review-comment__user-name">Le ngoc</div>
                                        <div className="review-comment__user-date">
                                            Đã tham gia 2 năm
                                        </div>
                                    </div>
                                </div>
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"
                                            alt="review-count"
                                        />
                                        Đã viết
                                    </div>
                                    <span>13 Đánh giá</span>
                                </div>
                                <div
                                    style={{ border: "0.5px solid rgb(235, 235, 240)", marginTop: 9 }}
                                />
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"
                                            alt="liked-count"
                                        />
                                        Đã nhận
                                    </div>
                                    <span>0 Lượt cảm ơn</span>
                                </div>
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <div className="review-comment__rating-title">
                                    <div
                                        className="sc-a236768f-0 fFhahK review-comment__rating"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <div style={{ width: "100%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="review-comment__title">Cực kì hài lòng</div>
                                </div>
                                <div className="review-comment__seller-name-attributes">
                                    <div className="review-comment__seller-name">
                                        <span className="review-comment__check-icon" />
                                        Đã mua hàng
                                    </div>
                                </div>
                                <div className="review-comment__content">
                                    Nội dung sách nêu bật được những vấn đề cần thiết nhưng các lỗi
                                    thường gặp khi ban lệnh, hướng dẫn cụ thể, đọc xong, ứng dụng tốt.
                                    Trình bày ví dụ dễ hiểu.
                                </div>
                                <div className="wrapper-rating-attribute">
                                    <div className="rating-attribute">
                                        <svg
                                            width={16}
                                            height={17}
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M13.8036 4.34615C13.9988 4.54142 13.9988 4.858 13.8036 5.05326L6.47401 12.3828C6.38024 12.4766 6.25307 12.5292 6.12046 12.5292C5.98785 12.5292 5.86067 12.4766 5.7669 12.3828L2.14645 8.76234C1.95118 8.56708 1.95118 8.2505 2.14645 8.05524C2.34171 7.85998 2.65829 7.85998 2.85355 8.05524L6.12046 11.3221L13.0964 4.34615C13.2917 4.15089 13.6083 4.15089 13.8036 4.34615Z"
                                                fill="#00AB56"
                                            />
                                        </svg>
                                        <span className="rating-attribute__attributes">
                                            Nội dung bổ ích, Trình bày/Bố cục dễ hiểu
                                        </span>
                                    </div>
                                </div>
                                <div className="review-comment__created-date">
                                    <span>Đánh giá vào 3 tháng trước</span>
                                    <span className="review-comment__time-line">Đã dùng 2 tháng</span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span
                                            data-view-id="pdp_product_review_like_buton"
                                            className="review-comment__thank "
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/10/9f/8b/54e5f6b084fb9e3445036b4646bc48b5.png"
                                                width={24}
                                                height={24}
                                            />
                                            <span>Hữu ích</span>
                                        </span>
                                        <span
                                            data-view-id="pdp_product_review_reply_button"
                                            className="review-comment__reply"
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/82/f0/7f/7353641630f811453e875bb5450065d8.png"
                                                width={24}
                                                height={24}
                                            />
                                            1
                                        </span>
                                    </div>
                                    <span
                                        data-view-id="pdp_product_review_reply_button"
                                        className="review-comment__reply"
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/3f/fa/d4/7057dfb58b682b1b0a2b9683228863ee.png"
                                            width={24}
                                            height={24}
                                        />
                                        Chia sẻ
                                    </span>
                                </div>
                                <div className="review-comment__sub-comments">
                                    <div className="sc-4b1322bd-6 koMmsD review-sub-comment">
                                        <div className="review-sub-comment__inner">
                                            <div className="review-sub-comment__avatar-thumb">
                                                <div
                                                    className="sc-9162b613-0 erIzSq"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2Fd1%2F3f%2Fae%2F13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg")'
                                                    }}
                                                >
                                                    <img
                                                        src="https://vcdn.tikicdn.com/ts/seller/d1/3f/ae/13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg"
                                                        alt="Tiki Trading"
                                                    />
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <div className="review-sub-comment__avatar">
                                                    <div className="review-sub-comment__avatar-name">
                                                        Tiki Trading
                                                    </div>
                                                    <span className="review-sub-comment__check-icon" />
                                                    <div className="review-sub-comment__avatar-date">
                                                        3 tháng trước
                                                    </div>
                                                </div>
                                                <div className="review-sub-comment__content">
                                                    Cảm ơn bạn đã tin tưởng dịch vụ và lựa chọn sản phẩm của
                                                    Tiki nè. Hy vọng những sản phẩm, dịch vụ của Tiki sẽ giúp
                                                    bạn có những trải nghiệm tuyệt vời nhất. Rất mong bạn sẽ
                                                    tiếp tục ủng hộ Tiki trong thời gian tới ạ. ❤️
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-4b1322bd-5 hcsJQG review-comment">
                            <div className="review-comment__user">
                                <div className="review-comment__user-inner">
                                    <div className="review-comment__user-avatar">
                                        <div
                                            className="sc-9162b613-0 erIzSq has-character"
                                            style={{
                                                backgroundImage:
                                                    'url("%2F%2Ftiki.vn%2Fassets%2Fimg%2Favatar.png")'
                                            }}
                                        >
                                            <img src="//tiki.vn/assets/img/avatar.png" alt="Minh Hoàng" />
                                            <span>MH</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="review-comment__user-name">Minh Hoàng</div>
                                        <div className="review-comment__user-date">
                                            Đã tham gia 7 năm
                                        </div>
                                    </div>
                                </div>
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"
                                            alt="review-count"
                                        />
                                        Đã viết
                                    </div>
                                    <span>12 Đánh giá</span>
                                </div>
                                <div
                                    style={{ border: "0.5px solid rgb(235, 235, 240)", marginTop: 9 }}
                                />
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"
                                            alt="liked-count"
                                        />
                                        Đã nhận
                                    </div>
                                    <span>4 Lượt cảm ơn</span>
                                </div>
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <div className="review-comment__rating-title">
                                    <div
                                        className="sc-a236768f-0 fFhahK review-comment__rating"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <div style={{ width: "100%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="review-comment__title">Cực kì hài lòng</div>
                                </div>
                                <div className="review-comment__seller-name-attributes">
                                    <div className="review-comment__seller-name">
                                        <span className="review-comment__check-icon" />
                                        Đã mua hàng
                                    </div>
                                </div>
                                <div className="review-comment__content">
                                    Nội dung bố ích, viết dễ hiểu. Cảm ơn tác giả và tiki
                                </div>
                                <div className="review-comment__images">
                                    <div
                                        data-view-id="pdp_product_review_view_photo"
                                        className="review-comment__image"
                                        style={{
                                            backgroundImage:
                                                'url("https://salt.tikicdn.com/cache/w280/ts/review/20/9c/83/da0dadbea04ccae4a292fb377473a918.jpg")'
                                        }}
                                    />
                                </div>
                                <div className="review-comment__created-date">
                                    <span>Đánh giá vào 1 tháng trước</span>
                                    <span className="review-comment__time-line">Đã dùng 1 giờ</span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span
                                            data-view-id="pdp_product_review_like_buton"
                                            className="review-comment__thank "
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/10/9f/8b/54e5f6b084fb9e3445036b4646bc48b5.png"
                                                width={24}
                                                height={24}
                                            />
                                            <span>Hữu ích</span>
                                        </span>
                                        <span
                                            data-view-id="pdp_product_review_reply_button"
                                            className="review-comment__reply"
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/82/f0/7f/7353641630f811453e875bb5450065d8.png"
                                                width={24}
                                                height={24}
                                            />
                                            1
                                        </span>
                                    </div>
                                    <span
                                        data-view-id="pdp_product_review_reply_button"
                                        className="review-comment__reply"
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/3f/fa/d4/7057dfb58b682b1b0a2b9683228863ee.png"
                                            width={24}
                                            height={24}
                                        />
                                        Chia sẻ
                                    </span>
                                </div>
                                <div className="review-comment__sub-comments">
                                    <div className="sc-4b1322bd-6 koMmsD review-sub-comment">
                                        <div className="review-sub-comment__inner">
                                            <div className="review-sub-comment__avatar-thumb">
                                                <div
                                                    className="sc-9162b613-0 erIzSq"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2Fd1%2F3f%2Fae%2F13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg")'
                                                    }}
                                                >
                                                    <img
                                                        src="https://vcdn.tikicdn.com/ts/seller/d1/3f/ae/13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg"
                                                        alt="Tiki Trading"
                                                    />
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <div className="review-sub-comment__avatar">
                                                    <div className="review-sub-comment__avatar-name">
                                                        Tiki Trading
                                                    </div>
                                                    <span className="review-sub-comment__check-icon" />
                                                    <div className="review-sub-comment__avatar-date">
                                                        1 tháng trước
                                                    </div>
                                                </div>
                                                <div className="review-sub-comment__content">
                                                    Cảm ơn bạn đã tin tưởng dịch vụ và lựa chọn sản phẩm của
                                                    Tiki nè. Hy vọng những sản phẩm, dịch vụ của Tiki sẽ giúp
                                                    bạn có những trải nghiệm tuyệt vời nhất. Rất mong bạn sẽ
                                                    tiếp tục ủng hộ Tiki trong thời gian tới ạ. ❤️
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-4b1322bd-5 hcsJQG review-comment">
                            <div className="review-comment__user">
                                <div className="review-comment__user-inner">
                                    <div className="review-comment__user-avatar">
                                        <div
                                            className="sc-9162b613-0 erIzSq has-character"
                                            style={{
                                                backgroundImage:
                                                    'url("%2F%2Ftiki.vn%2Fassets%2Fimg%2Favatar.png")'
                                            }}
                                        >
                                            <img
                                                src="//tiki.vn/assets/img/avatar.png"
                                                alt="Trần Nguyễn Minh Hoàng"
                                            />
                                            <span>MH</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="review-comment__user-name">
                                            Trần Nguyễn Minh Hoàng
                                        </div>
                                        <div className="review-comment__user-date">
                                            Đã tham gia 7 năm
                                        </div>
                                    </div>
                                </div>
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/c6/67/f1/444fc9e1869b5d4398cdec3682af7f14.png"
                                            alt="review-count"
                                        />
                                        Đã viết
                                    </div>
                                    <span>5 Đánh giá</span>
                                </div>
                                <div
                                    style={{ border: "0.5px solid rgb(235, 235, 240)", marginTop: 9 }}
                                />
                                <div className="review-comment__user-info">
                                    <div>
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/cc/86/cd/1d5ac6d4e00abbf6aa4e4636489c9d80.png"
                                            alt="liked-count"
                                        />
                                        Đã nhận
                                    </div>
                                    <span>2 Lượt cảm ơn</span>
                                </div>
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <div className="review-comment__rating-title">
                                    <div
                                        className="sc-a236768f-0 fFhahK review-comment__rating"
                                        style={{ whiteSpace: "nowrap" }}
                                    >
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <span>
                                            <img
                                                alt="star-icon"
                                                src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                        <div style={{ width: "100%" }}>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                            <span>
                                                <img
                                                    alt="star-icon"
                                                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                    width={20}
                                                    height={20}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="review-comment__title">Cực kì hài lòng</div>
                                </div>
                                <div className="review-comment__seller-name-attributes">
                                    <div className="review-comment__seller-name">
                                        <span className="review-comment__check-icon" />
                                        Đã mua hàng
                                    </div>
                                </div>
                                <div className="review-comment__content">
                                    Giá tốt, nội dung dễ hiểu, đúng chất thực chiến, cầm tay chỉ việc
                                </div>
                                <div className="review-comment__images">
                                    <div
                                        data-view-id="pdp_product_review_view_photo"
                                        className="review-comment__image"
                                        style={{
                                            backgroundImage:
                                                'url("https://salt.tikicdn.com/cache/w280/ts/review/96/ec/ac/6fd26e3626e2a8ae2ccd3f47d1b5d4c5.jpg")'
                                        }}
                                    />
                                </div>
                                <div className="review-comment__created-date">
                                    <span>Đánh giá vào 7 tháng trước</span>
                                    <span className="review-comment__time-line">Đã dùng 18 phút</span>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span
                                            data-view-id="pdp_product_review_like_buton"
                                            className="review-comment__thank "
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/10/9f/8b/54e5f6b084fb9e3445036b4646bc48b5.png"
                                                width={24}
                                                height={24}
                                            />
                                            <span>2</span>
                                        </span>
                                        <span
                                            data-view-id="pdp_product_review_reply_button"
                                            className="review-comment__reply"
                                        >
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/82/f0/7f/7353641630f811453e875bb5450065d8.png"
                                                width={24}
                                                height={24}
                                            />
                                            2
                                        </span>
                                    </div>
                                    <span
                                        data-view-id="pdp_product_review_reply_button"
                                        className="review-comment__reply"
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/3f/fa/d4/7057dfb58b682b1b0a2b9683228863ee.png"
                                            width={24}
                                            height={24}
                                        />
                                        Chia sẻ
                                    </span>
                                </div>
                                <div className="review-comment__sub-comments">
                                    <div className="sc-4b1322bd-6 koMmsD review-sub-comment">
                                        <div className="review-sub-comment__inner">
                                            <div className="review-sub-comment__avatar-thumb">
                                                <div
                                                    className="sc-9162b613-0 erIzSq"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https%3A%2F%2Fvcdn.tikicdn.com%2Fts%2Fseller%2Fd1%2F3f%2Fae%2F13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg")'
                                                    }}
                                                >
                                                    <img
                                                        src="https://vcdn.tikicdn.com/ts/seller/d1/3f/ae/13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg"
                                                        alt="Tiki Trading"
                                                    />
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <div className="review-sub-comment__avatar">
                                                    <div className="review-sub-comment__avatar-name">
                                                        Tiki Trading
                                                    </div>
                                                    <span className="review-sub-comment__check-icon" />
                                                    <div className="review-sub-comment__avatar-date">
                                                        7 tháng trước
                                                    </div>
                                                </div>
                                                <div className="review-sub-comment__content">
                                                    Tiki rất vui khi nhận được đánh giá 5⭐️ từ anh. Sự hài
                                                    lòng của anh là động lực to lớn với Tiki đó ạ. Hy vọng anh
                                                    Hoàng sẽ tiếp tục ủng hộ Tiki nha!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="review-comment__count"
                                        data-view-id="pdp_product_review_view_reply"
                                    >
                                        <img
                                            src="https://salt.tikicdn.com/ts/upload/9e/e4/d9/115528e11b40fdf3c354f28d05f01ca8.png"
                                            className="review-comment__icon-more"
                                            width={20}
                                            height={20}
                                            alt="more-icon"
                                        />
                                        Xem thêm 1 câu trả lời
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="customer-reviews__pagination">
                            <ul className="sc-5bd1447b-0 lbrpBI">
                                <li>
                                    <a className="btn prev">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            color="#C4C4CF"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "rgb(196, 196, 207)" }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn active">1</a>
                                </li>
                                <li>
                                    <a className="btn ">2</a>
                                </li>
                                <li>
                                    <a className="btn ">3</a>
                                </li>
                                <li>
                                    <a className="btn ">4</a>
                                </li>
                                <li>
                                    <a className="btn ">5</a>
                                </li>
                                <li>
                                    <a className="btn next">
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={0}
                                            viewBox="0 0 24 24"
                                            color="#38383D"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "rgb(56, 56, 61)" }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Evaluation;