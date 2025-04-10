import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
    currentBook: IBookTable;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentBook }) => {
    return (
        <div data-view-id="breadcrumb_container" className="sc-de46788d-0 eKroXI">
            <div className="breadcrumb">
                <Link
                    className="breadcrumb-item"
                    data-view-id="breadcrumb_item"
                    data-view-index={0}
                    to="/"
                >
                    <span>Trang chủ</span>
                </Link>
                <span className="icon icon-next">
                    <svg
                        width={6}
                        height={11}
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#808089"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                        ></path>
                    </svg>
                </span>
                <Link
                    className="breadcrumb-item"
                    data-view-id="breadcrumb_item"
                    data-view-index={1}
                    to="/nha-sach-tiki/c8322"
                >
                    <span>Nhà Sách Tiki</span>
                </Link>
                <span className="icon icon-next">
                    <svg
                        width={6}
                        height={11}
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#808089"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                        ></path>
                    </svg>
                </span>
                <Link
                    className="breadcrumb-item"
                    data-view-id="breadcrumb_item"
                    data-view-index={2}
                    to="/sach-truyen-tieng-viet/c316"
                >
                    <span>Sách tiếng Việt</span>
                </Link>
                <span className="icon icon-next">
                    <svg
                        width={6}
                        height={11}
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#808089"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                        ></path>
                    </svg>
                </span>
                <Link
                    className="breadcrumb-item"
                    data-view-id="breadcrumb_item"
                    data-view-index={3}
                    to="/sach-kinh-te/c846"
                >
                    <span>Sách kinh tế</span>
                </Link>
                <span className="icon icon-next">
                    <svg
                        width={6}
                        height={11}
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#808089"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                        ></path>
                    </svg>
                </span>
                <Link
                    className="breadcrumb-item"
                    data-view-id="breadcrumb_item"
                    data-view-index={4}
                    to="/sach-ky-nang-lam-viec/c385"
                >
                    <span>Sách kỹ năng làm việc</span>
                </Link>
                <span className="icon icon-next">
                    <svg
                        width={6}
                        height={11}
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#808089"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                        ></path>
                    </svg>
                </span>
                <a
                    href="#"
                    className="breadcrumb-item"
                    data-view-id="breadcrumb_item"
                    data-view-index={5}
                >
                    <span title={currentBook.mainText}>{currentBook.mainText}</span>
                </a>
            </div>
        </div>
    );
};

export default Breadcrumbs;