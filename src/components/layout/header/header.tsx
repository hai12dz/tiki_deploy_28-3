import React, { useState } from 'react'
import '../search/search.scss'
import SearchProducts from '../search/search'

const Header: React.FC = () => {
    const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

    const showSearch = (): void => {
        console.log("Showing search modal");
        setIsSearchVisible(true);
    };

    const hideSearch = (): void => {
        console.log("Hiding search modal");
        setIsSearchVisible(false);
    };

    return (
        <header>
            <div className="search-container" style={{ position: 'relative' }}>
                <input
                    data-view-id="main_search_form_input"
                    type="text"
                    placeholder="Search..."
                    onClick={showSearch}
                    onFocus={showSearch}
                />

                {isSearchVisible && (
                    <SearchProducts
                        isVisible={isSearchVisible}
                        onClose={hideSearch}
                    />
                )}
            </div>

            {/* Other header content */}
        </header>
    );
};

export default Header;
