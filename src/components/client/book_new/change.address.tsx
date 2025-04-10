import { useState, useEffect, useRef } from 'react';
import './change.address.scss';

interface ChangeAddressProps {
    onClose: () => void;
    onSelectAddress?: (address: string) => void;
}

// Fake location data structure
interface LocationData {
    [province: string]: {
        [district: string]: string[];
    };
}

const locationData: LocationData = {
    "Hà Nội": {
        "Quận Hoàn Kiếm": ["Phường Hàng Trống", "Phường Hàng Bạc", "Phường Hàng Bồ", "Phường Hàng Gai"],
        "Quận Ba Đình": ["Phường Liễu Giai", "Phường Ngọc Khánh", "Phường Quán Thánh", "Phường Trúc Bạch"],
        "Quận Cầu Giấy": ["Phường Dịch Vọng", "Phường Mai Dịch", "Phường Yên Hòa", "Phường Trung Hòa"]
    },
    "Đà Nẵng": {
        "Quận Hải Châu": ["Phường Hải Châu 1", "Phường Hải Châu 2", "Phường Nam Dương", "Phường Phước Ninh"],
        "Quận Thanh Khê": ["Phường An Khê", "Phường Hòa Khê", "Phường Tam Thuận", "Phường Thanh Khê Tây"],
        "Huyện Hòa Vang": ["Xã Hòa Châu", "Xã Hòa Tiến", "Xã Hòa Phước", "Xã Hòa Khương"]
    },
    "Hồ Chí Minh": {
        "Quận 1": ["Phường Bến Nghé", "Phường Bến Thành", "Phường Cầu Ông Lãnh", "Phường Tân Định"],
        "Quận 7": ["Phường Tân Phong", "Phường Tân Quy", "Phường Phú Mỹ", "Phường Bình Thuận"],
        "Quận Bình Thạnh": ["Phường 1", "Phường 2", "Phường 3", "Phường 5"]
    },
    "Hải Phòng": {
        "Quận Hồng Bàng": ["Phường Minh Khai", "Phường Hoàng Văn Thụ", "Phường Quán Toan"],
        "Quận Ngô Quyền": ["Phường Lạc Viên", "Phường Gia Viên", "Phường Đông Khê"],
        "Huyện Cát Hải": ["Thị trấn Cát Bà", "Xã Việt Hải", "Xã Xuân Đám"]
    }
};

type DropdownType = 'province' | 'district' | 'ward' | null;

const ChangeAddress = ({ onClose, onSelectAddress }: ChangeAddressProps) => {
    const [selectedOption, setSelectedOption] = useState<number>(0);
    const [province, setProvince] = useState<string | null>(null);
    const [district, setDistrict] = useState<string | null>(null);
    const [ward, setWard] = useState<string | null>(null);
    const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);

    const modalRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const provinces = Object.keys(locationData);
    const districts = province ? Object.keys(locationData[province]) : [];
    const wards = province && district ? locationData[province][district] : [];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutsideModal = (event: MouseEvent) => {
            if (modalRef.current &&
                !modalRef.current.contains(event.target as Node) &&
                (event.target as Element).className.includes('ReactModal__Overlay')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutsideModal);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideModal);
        };
    }, [onClose]);

    const handleRadioSelect = (option: number) => {
        setSelectedOption(option);
        if (option === 0) {
            setProvince(null);
            setDistrict(null);
            setWard(null);
        }
    };

    const handleProvinceChange = (value: string) => {
        setProvince(value);
        setDistrict(null);
        setWard(null);
        setOpenDropdown(null);
    };

    const handleDistrictChange = (value: string) => {
        setDistrict(value);
        setWard(null);
        setOpenDropdown(null);
    };

    const handleWardChange = (value: string) => {
        setWard(value);
        setOpenDropdown(null);
    };

    const toggleDropdown = (type: DropdownType) => {
        if (!province && type === 'district') return;
        if (!district && type === 'ward') return;

        setOpenDropdown(openDropdown === type ? null : type);
    };

    // Function to handle address confirmation
    const handleConfirmAddress = () => {
        if (selectedOption === 0) {
            // Use the default address
            onSelectAddress?.("Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội");
            onClose();
        } else if (selectedOption === 1 && ward && district && province) {
            // Use the custom selected address, only if all selections are complete
            const fullAddress = `${ward}, ${district}, ${province}`;
            onSelectAddress?.(fullAddress);
            onClose();
        }
        // If selections are incomplete, do nothing - stay on the modal
    };

    return (
        <div className="ReactModalPortal">
            <div
                className="ReactModal__Overlay ReactModal__Overlay--after-open"
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.53)",
                    overflowY: "scroll",
                    zIndex: 1000
                }}
            >
                <div
                    className="ReactModal__Content ReactModal__Content--after-open"
                    tabIndex={-1}
                    role="dialog"
                    aria-modal="true"
                    style={{
                        position: "relative",
                        inset: 0,
                        border: "none",
                        background: "rgb(255, 255, 255)",
                        overflow: "unset",
                        borderRadius: 4,
                        outline: "none",
                        padding: 0,
                        width: 600,
                        margin: "0px auto"
                    }}
                    ref={modalRef}
                >
                    <div className="sc-583a1fc3-0 ljjQmk">
                        <a className="sc-583a1fc3-1 jeHpbA" onClick={onClose}>
                            <span className="tikicon icon-circle-close" />
                        </a>
                        <div className="sc-583a1fc3-3 fdmRhD">
                            <p className="title">Địa chỉ giao hàng</p>
                        </div>
                        <div className="sc-583a1fc3-4 hQVbFq">
                            <p className="description">
                                Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao hàng cùng
                                phí đóng gói, vận chuyển một cách chính xác nhất.
                            </p>
                            <div data-view-id="header_location_picker_item" data-view-index={0}>
                                <button
                                    className="sc-57c4f16b-0 jYahB"
                                    onClick={() => handleRadioSelect(0)}
                                >
                                    <span className={`tikicon ${selectedOption === 0 ? "icon-radio-button-on" : "icon-radio-button-off"}`} />
                                    <span className="text">
                                        Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội
                                    </span>
                                </button>
                            </div>
                            <div data-view-id="header_location_picker_item" data-view-index={1}>
                                <button
                                    className="sc-57c4f16b-0 jYahB"
                                    onClick={() => handleRadioSelect(1)}
                                >
                                    <span className={`tikicon ${selectedOption === 1 ? "icon-radio-button-on" : "icon-radio-button-off"}`} />
                                    <span className="text">Chọn khu vực giao hàng khác</span>
                                </button>
                            </div>

                            {selectedOption === 1 && (
                                <div className="sc-583a1fc3-7 ertnQD" ref={dropdownRef}>
                                    <div className="row">
                                        <p className="location-type">Tỉnh/Thành phố</p>
                                        <div className="css-1tskbye-container">
                                            <div
                                                className="css-bg1rzq-control"
                                                onClick={() => toggleDropdown('province')}
                                            >
                                                <div className="css-1hwfws3">
                                                    <div className="css-dvua67-singleValue">
                                                        {province || "Vui lòng chọn tỉnh/thành phố"}
                                                    </div>
                                                    <div className="css-1g6gooi">
                                                        <div className="" style={{ display: "inline-block" }}>
                                                            <input
                                                                autoCapitalize="none"
                                                                autoComplete="off"
                                                                autoCorrect="off"
                                                                id="react-select-17-input"
                                                                spellCheck="false"
                                                                tabIndex={0}
                                                                type="text"
                                                                aria-autocomplete="list"
                                                                defaultValue=""
                                                                style={{
                                                                    boxSizing: "content-box",
                                                                    width: 2,
                                                                    background: "0px center",
                                                                    border: 0,
                                                                    fontSize: "inherit",
                                                                    opacity: 1,
                                                                    outline: 0,
                                                                    padding: 0,
                                                                    color: "inherit"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1wy0on6">
                                                    <span className="css-bgvzuu-indicatorSeparator" />
                                                    <div aria-hidden="true" className="css-16pqwjk-indicatorContainer">
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            className="css-19bqh2r"
                                                        >
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            {openDropdown === 'province' && (
                                                <div className="dropdown-menu">
                                                    {provinces.map(prov => (
                                                        <div
                                                            key={prov}
                                                            className={`dropdown-item ${province === prov ? 'selected' : ''}`}
                                                            onClick={() => handleProvinceChange(prov)}
                                                        >
                                                            {prov}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className="location-type">Quận/Huyện</p>
                                        <div className="css-1tskbye-container">
                                            <div
                                                className={`css-bg1rzq-control ${!province ? 'disabled' : ''}`}
                                                onClick={() => {
                                                    if (province) toggleDropdown('district');
                                                }}
                                            >
                                                <div className="css-1hwfws3">
                                                    <div className="css-dvua67-singleValue">
                                                        {district || "Vui lòng chọn quận/huyện"}
                                                    </div>
                                                    <div className="css-1g6gooi">
                                                        <div className="" style={{ display: "inline-block" }}>
                                                            <input
                                                                autoCapitalize="none"
                                                                autoComplete="off"
                                                                autoCorrect="off"
                                                                id="react-select-18-input"
                                                                spellCheck="false"
                                                                tabIndex={0}
                                                                type="text"
                                                                aria-autocomplete="list"
                                                                defaultValue=""
                                                                style={{
                                                                    boxSizing: "content-box",
                                                                    width: 2,
                                                                    background: "0px center",
                                                                    border: 0,
                                                                    fontSize: "inherit",
                                                                    opacity: 1,
                                                                    outline: 0,
                                                                    padding: 0,
                                                                    color: "inherit"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1wy0on6">
                                                    <span className="css-bgvzuu-indicatorSeparator" />
                                                    <div aria-hidden="true" className="css-16pqwjk-indicatorContainer">
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            className="css-19bqh2r"
                                                        >
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            {openDropdown === 'district' && province && (
                                                <div className="dropdown-menu">
                                                    {districts.map(dist => (
                                                        <div
                                                            key={dist}
                                                            className={`dropdown-item ${district === dist ? 'selected' : ''}`}
                                                            onClick={() => handleDistrictChange(dist)}
                                                        >
                                                            {dist}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className="location-type">Phường/Xã</p>
                                        <div className="css-1tskbye-container">
                                            <div
                                                className={`css-bg1rzq-control ${!district ? 'disabled' : ''}`}
                                                onClick={() => {
                                                    if (district) toggleDropdown('ward');
                                                }}
                                            >
                                                <div className="css-1hwfws3">
                                                    <div className="css-dvua67-singleValue">
                                                        {ward || "Vui lòng chọn phường/xã"}
                                                    </div>
                                                    <div className="css-1g6gooi">
                                                        <div className="" style={{ display: "inline-block" }}>
                                                            <input
                                                                autoCapitalize="none"
                                                                autoComplete="off"
                                                                autoCorrect="off"
                                                                id="react-select-19-input"
                                                                spellCheck="false"
                                                                tabIndex={0}
                                                                type="text"
                                                                aria-autocomplete="list"
                                                                defaultValue=""
                                                                style={{
                                                                    boxSizing: "content-box",
                                                                    width: 2,
                                                                    background: "0px center",
                                                                    border: 0,
                                                                    fontSize: "inherit",
                                                                    opacity: 1,
                                                                    outline: 0,
                                                                    padding: 0,
                                                                    color: "inherit"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1wy0on6">
                                                    <span className="css-bgvzuu-indicatorSeparator" />
                                                    <div aria-hidden="true" className="css-16pqwjk-indicatorContainer">
                                                        <svg
                                                            height={20}
                                                            width={20}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            className="css-19bqh2r"
                                                        >
                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            {openDropdown === 'ward' && district && (
                                                <div className="dropdown-menu">
                                                    {wards.map(w => (
                                                        <div
                                                            key={w}
                                                            className={`dropdown-item ${ward === w ? 'selected' : ''}`}
                                                            onClick={() => handleWardChange(w)}
                                                        >
                                                            {w}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="sc-583a1fc3-5 FgPq">
                            <button
                                data-view-id="header_location_picker_save"
                                className="sc-583a1fc3-6 gbyUFB"
                                onClick={handleConfirmAddress}
                            >
                                GIAO ĐẾN ĐỊA CHỈ NÀY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeAddress;