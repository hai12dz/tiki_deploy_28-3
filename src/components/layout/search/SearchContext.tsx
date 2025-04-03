import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SearchContextType {
    isSearchModalVisible: boolean;
    showSearchModal: () => void;
    hideSearchModal: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
    children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
    const [isSearchModalVisible, setIsSearchModalVisible] = useState<boolean>(false);

    const showSearchModal = () => {
        console.log("Setting search modal visible");
        setIsSearchModalVisible(true);
    };

    const hideSearchModal = () => {
        console.log("Setting search modal hidden");
        setIsSearchModalVisible(false);
    };

    return (
        <SearchContext.Provider value={{ isSearchModalVisible, showSearchModal, hideSearchModal }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchContext = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearchContext must be used within a SearchProvider');
    }
    return context;
};
