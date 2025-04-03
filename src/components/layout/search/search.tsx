import './search.scss'
import { useEffect, useRef, useState } from 'react'
import { suggestionBookAPI } from '@/services/api'

interface SearchProductsProps {
    isVisible: boolean;
    onClose: () => void;
    searchTerm: string;
    onSearch?: () => void; // Keep the onSearch callback
}

const SearchProducts: React.FC<SearchProductsProps> = ({
    isVisible,
    onClose,
    searchTerm,
    onSearch
}) => {
    const searchRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const initialMount = useRef<boolean>(true);

    // State for typing detection
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [immediateTyping, setImmediateTyping] = useState<boolean>(false);

    // State for suggestions
    const [suggestions, setSuggestions] = useState<ISearchSuggestion[]>([]);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    // Update typing state immediately when prop changes
    useEffect(() => {
        if (searchTerm.length > 0) {
            setImmediateTyping(true);
            setIsTyping(true);

            if (overlayRef.current) {
                overlayRef.current.classList.add('typing-overlay');
            }
        } else {
            setImmediateTyping(false);
            setIsTyping(false);

            if (overlayRef.current) {
                overlayRef.current.classList.remove('typing-overlay');
            }
        }
    }, [searchTerm]);

    // Fetch suggestions when searchTerm changes
    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (!searchTerm.trim()) {
            setSuggestions([]);
            return;
        }

        // Add logging to confirm searchTerm changes are detected
        console.log("Search term changed to:", searchTerm);

        // Reduce debounce time to make API call more responsive
        timeoutRef.current = setTimeout(() => {
            console.log("Calling API with term:", searchTerm);
            fetchSuggestions(searchTerm);
        }, 50);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [searchTerm]);

    // Handle Enter key for search
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && isVisible && onSearch) {
            onSearch();
            onClose();
        } else if (e.key === 'Escape' && isVisible) {
            onClose();
        }
    };

    // Listen for keyboard events
    useEffect(() => {
        if (isVisible) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible, onSearch]);

    // Fetch suggestions from API
    const fetchSuggestions = async (query: string) => {
        try {
            console.log("Fetching suggestions for:", query);
            const apiUrl = `keyword=${encodeURIComponent(query)}`;
            console.log("API URL:", apiUrl);

            const response = await suggestionBookAPI(apiUrl);
            console.log("API response:", response);

            if (response && response.data) {
                console.log("Setting suggestions:", response.data);
                setSuggestions(response.data);
            } else {
                console.log("No suggestions found");
                setSuggestions([]);
            }
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            setSuggestions([]);
        }
    };

    // Handle overlay position
    useEffect(() => {
        const updateOverlayPosition = () => {
            if (!overlayRef.current) return;

            const headerWrapper = document.querySelector('.header-wrapper');
            if (headerWrapper) {
                const headerRect = headerWrapper.getBoundingClientRect();
                const headerBottom = headerRect.bottom;

                if (headerBottom > 0) {
                    overlayRef.current.style.top = `${headerBottom}px`;
                    overlayRef.current.style.height = `calc(100vh - ${headerBottom}px)`;

                    if (immediateTyping) {
                        overlayRef.current.classList.add('typing-overlay');
                    } else {
                        overlayRef.current.classList.remove('typing-overlay');
                    }
                } else {
                    overlayRef.current.style.top = '0';
                    overlayRef.current.style.height = '100vh';
                }
            }
        };

        const handleClickOutside = (event: MouseEvent): void => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('scroll', updateOverlayPosition);
            updateOverlayPosition();

            if (initialMount.current) {
                setIsExpanded(false);
                initialMount.current = false;
            }
        } else {
            initialMount.current = true;
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', updateOverlayPosition);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isVisible, onClose, immediateTyping]);

    // Handle reopening modal with existing search term
    useEffect(() => {
        if (isVisible && searchTerm.trim()) {
            console.log("Modal reopened with existing search term:", searchTerm);
            fetchSuggestions(searchTerm);
            setImmediateTyping(true);
            setIsTyping(true);

            if (overlayRef.current) {
                overlayRef.current.classList.add('typing-overlay');
            }
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            <div className={`search-overlay ${immediateTyping ? 'typing-overlay' : ''}`} ref={overlayRef}></div>

            <div className={`sc-f1b34bcc-0 iNGxKa search-modal-visible ${immediateTyping ? 'typing-active' : ''}`} ref={searchRef}>
                {!immediateTyping && (
                    <div className="sc-1a8f85ba-0 fjnTfW">
                        <div className="item promo">
                            <a
                                href="https://tiki.vn/khuyen-mai/44-sieu-sale?itm_campaign=HMP_YPD_TKA_BNA_UNK_ALL_ALL_UNK_UNK_UNK_TMSX.779c2ce2-8f25-4b0e-aef0-c4b92941f663&itm_medium=CPD&itm_source=tiki-ads&tmsx=779c2ce2-8f25-4b0e-aef0-c4b92941f663&waypoint_id=lichsukien"
                                data-view-id="search_suggestion_promo_item"
                                data-view-content='{"click_data":{"url":"https://tiki.vn/khuyen-mai/44-sieu-sale?itm_campaign=HMP_YPD_TKA_BNA_UNK_ALL_ALL_UNK_UNK_UNK_TMSX.779c2ce2-8f25-4b0e-aef0-c4b92941f663&itm_medium=CPD&itm_source=tiki-ads&tmsx=779c2ce2-8f25-4b0e-aef0-c4b92941f663&waypoint_id=lichsukien","title":"promo"}}'
                                data-view-index={0}
                            >
                                4.4 Còn 3 ngày{" "}
                            </a>
                            <div className="keyword">4.4 Còn 3 ngày </div>
                            <picture className="webpimg-container">
                                <source
                                    type="image/webp"
                                    srcSet="https://salt.tikicdn.com/cache/140x28/ts/tikimsp/35/3d/cd/71dc22a787aaffcd0ec87412ac83b078.png.webp"
                                />
                                <img
                                    className="sc-82b4dcf2-0 ldcZGa banner"
                                    src="https://salt.tikicdn.com/cache/140x28/ts/tikimsp/35/3d/cd/71dc22a787aaffcd0ec87412ac83b078.png"
                                    srcSet="https://salt.tikicdn.com/cache/140x28/ts/tikimsp/35/3d/cd/71dc22a787aaffcd0ec87412ac83b078.png"
                                />
                            </picture>
                        </div>
                    </div>
                )}

                <div className="sc-66af1b06-0 hilSzk">
                    {searchTerm && suggestions.length > 0 ? (
                        suggestions.map((suggestion, index) => (
                            <a
                                key={suggestion.id}
                                data-view-index={index}
                                data-view-id="search_suggestion_keyword_item"
                                data-view-content={`{"click_data":{"keyword":"${suggestion.keyword}"}}`}
                                className={`item ${index > 3 && !isExpanded ? 'hide' : ''}`}
                                href={`/search?q=${encodeURIComponent(suggestion.keyword)}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (onSearch) {
                                        onSearch();
                                    }
                                    onClose();
                                }}
                            >
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
                                    className="item-icon"
                                />
                                <div className="keyword">{suggestion.keyword}</div>
                            </a>
                        ))
                    ) : searchTerm ? (
                        <div></div>
                    ) : (
                        <>
                            <a
                                data-view-index={0}
                                data-view-id="search_suggestion_keyword_item"
                                data-view-content='{"click_data":{"keyword":"thẻ cào viettel"}}'
                                className="item"
                                href="/search?q=th%E1%BA%BB%20c%C3%A0o%20viettel"
                            >
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
                                    className="item-icon"
                                />
                                <div className="keyword">thẻ cào viettel</div>
                            </a>
                            <a
                                data-view-index={1}
                                data-view-id="search_suggestion_keyword_item"
                                data-view-content='{"click_data":{"keyword":"đại việt sử ký toàn thư"}}'
                                className="item"
                                href="/search?q=%C4%91%E1%BA%A1i%20vi%E1%BB%87t%20s%E1%BB%AD%20k%C3%BD%20to%C3%A0n%20th%C6%B0"
                            >
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
                                    className="item-icon"
                                />
                                <div className="keyword">đại việt sử ký toàn thư</div>
                            </a>
                        </>
                    )}

                    {suggestions.length > 4 && (
                        <div className="show-more">
                            <div data-view-id="search_history_expand_button" onClick={toggleExpanded}>
                                {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                                <svg
                                    width={6}
                                    height={11}
                                    viewBox="0 0 6 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`right-icon show-more__icon ${isExpanded ? 'rotate-180' : ''}`}
                                >
                                    <path
                                        fill="rgb(13,92,182)"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>

                {!immediateTyping && (
                    <div className="sc-77bd3e1f-0 ubmOs">
                        <div className="sc-b09dbee7-0 brtKKD">
                            <div className="wrap-heading">
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png"
                                    className="trending"
                                />
                                <div>Tìm Kiếm Phổ Biến</div>
                            </div>
                            <div className="inner" data-view-id="home_top.search_product_container">
                                <a
                                    data-view-id="home_top.search_product_item"
                                    data-view-index={0}
                                    className="item"
                                    href="/search?q=gh%E1%BA%BF%20massage%20to%C3%A0n%20th%C3%A2n&ref=searchBar"
                                >
                                    <img
                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/b5/69/d9/cbf71e24c11912d2629f19268fe19a38.jpg"
                                        className="thumb"
                                    />
                                    <span className="title">ghế massage toàn thân</span>
                                </a>
                                <a
                                    data-view-id="home_top.search_product_item"
                                    data-view-index={1}
                                    className="item"
                                    href="/search?q=%C3%A1o%20phao%20nam&ref=searchBar"
                                >
                                    <img
                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/8a/a6/26/468563e0d9912ccb2f29b958ddf5da51.jpg"
                                        className="thumb"
                                    />
                                    <span className="title">áo phao nam</span>
                                </a>
                                <a
                                    data-view-id="home_top.search_product_item"
                                    data-view-index={2}
                                    className="item"
                                    href="/search?q=%C4%91%E1%BB%93%20b%E1%BB%99%20n%E1%BB%AF%20m%E1%BA%B7c%20nh%C3%A0&ref=searchBar"
                                >
                                    <img
                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/35/a3/ca/499de97bbe957d3b7511b176eb35ca72.jpg"
                                        className="thumb"
                                    />
                                    <span className="title">đồ bộ nữ mặc nhà</span>
                                </a>
                                <a
                                    data-view-id="home_top.search_product_item"
                                    data-view-index={3}
                                    className="item"
                                    href="/search?q=t%C3%A3%20qu%E1%BA%A7n%20huggies&ref=searchBar"
                                >
                                    <img
                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/af/35/6f/e87f55216983fc4c99fdb98eb1e27174.jpg"
                                        className="thumb"
                                    />
                                    <span className="title">tã quần huggies</span>
                                </a>
                                <a
                                    data-view-id="home_top.search_product_item"
                                    data-view-index={4}
                                    className="item"
                                    href="/search?q=gi%C3%A0y%20n%E1%BB%AF%20%C4%91%E1%BB%99n%20%C4%91%E1%BA%BF&ref=searchBar"
                                >
                                    <img
                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/49/54/c0/ed5468cbeca5fe79419f3d9d0fc9aab0.jpg"
                                        className="thumb"
                                    />
                                    <span className="title">giày nữ độn đế</span>
                                </a>
                                <a
                                    data-view-id="home_top.search_product_item"
                                    data-view-index={5}
                                    className="item"
                                    href="/search?q=tiki%20ngon%202h&ref=searchBar"
                                >
                                    <img
                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/43/6c/a2/525a966d69350ead8f323f98ef616b3b.jpg"
                                        className="thumb"
                                    />
                                    <span className="title">tiki ngon 2h</span>
                                </a>
                            </div>
                        </div>
                        <div className="sc-5ee009a8-0 hXsySQ">
                            <div className="wrap-heading">
                                <div>Danh Mục Nổi Bật</div>
                            </div>
                            <div
                                className="inner"
                                data-view-id="search_top.category_product_container"
                            >
                                <a
                                    className="item"
                                    data-view-id="search_top.category_product_item"
                                    data-view-index={0}
                                    href="/do-choi-me-be/c2549"
                                >
                                    <div className="thumb-wrap">
                                        <div className="thumb">
                                            <img src="https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png" />
                                        </div>
                                    </div>
                                    <span className="title">Đồ Chơi - Mẹ &amp; Bé</span>
                                </a>
                                <a
                                    className="item"
                                    data-view-id="search_top.category_product_item"
                                    data-view-index={1}
                                    href="/dien-thoai-may-tinh-bang/c1789"
                                >
                                    <div className="thumb-wrap">
                                        <div className="thumb">
                                            <img src="https://salt.tikicdn.com/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png" />
                                        </div>
                                    </div>
                                    <span className="title">Điện Thoại - Máy Tính Bảng</span>
                                </a>
                                <a
                                    className="item"
                                    data-view-id="search_top.category_product_item"
                                    data-view-index={2}
                                    href="/ngon/c44792"
                                >
                                    <div className="thumb-wrap">
                                        <div className="thumb">
                                            <img src="https://salt.tikicdn.com/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png" />
                                        </div>
                                    </div>
                                    <span className="title">NGON</span>
                                </a>
                                <a
                                    className="item"
                                    data-view-id="search_top.category_product_item"
                                    data-view-index={3}
                                    href="/lam-dep-suc-khoe/c1520"
                                >
                                    <div className="thumb-wrap">
                                        <div className="thumb">
                                            <img src="https://salt.tikicdn.com/ts/category/73/0e/89/bf5095601d17f9971d7a08a1ffe98a42.png" />
                                        </div>
                                    </div>
                                    <span className="title">Làm Đẹp - Sức Khỏe</span>
                                </a>
                                <a
                                    className="item"
                                    data-view-id="search_top.category_product_item"
                                    data-view-index={4}
                                    href="/dien-gia-dung/c1882"
                                >
                                    <div className="thumb-wrap">
                                        <div className="thumb">
                                            <img src="https://salt.tikicdn.com/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png" />
                                        </div>
                                    </div>
                                    <span className="title">Điện Gia Dụng</span>
                                </a>
                                <a
                                    className="item"
                                    data-view-id="search_top.category_product_item"
                                    data-view-index={5}
                                    href="/thoi-trang-nu/c931"
                                >
                                    <div className="thumb-wrap">
                                        <div className="thumb">
                                            <img src="https://salt.tikicdn.com/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png" />
                                        </div>
                                    </div>
                                    <span className="title">Thời trang nữ</span>
                                </a>
                                <a
                                    className="item"
                                    data-view-id="search_top.category_product_item"
                                    data-view-index={6}
                                    href="/thoi-trang-nam/c915"
                                >
                                    <div className="thumb-wrap">
                                        <div className="thumb">
                                            <img src="https://salt.tikicdn.com/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png" />
                                        </div>
                                    </div>
                                    <span className="title">Thời trang nam</span>
                                </a>
                                <a
                                    className="item"
                                    data-view-id="search_top.category_product_item"
                                    data-view-index={7}
                                    href="/giay-dep-nu/c1703"
                                >
                                    <div className="thumb-wrap">
                                        <div className="thumb">
                                            <img src="https://salt.tikicdn.com/ts/category/cf/ed/e1/5a6b58f21fbcad0d201480c987f8defe.png" />
                                        </div>
                                    </div>
                                    <span className="title">Giày - Dép nữ</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default SearchProducts;