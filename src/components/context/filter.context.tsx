import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for our context state
interface FilterContextType {
    // Filter state
    selectedBrands: string[];
    selectedSuppliers: string[];
    searchTerm: string;
    pageSize: number;
    current: number;
    sortBy: string;
    minRating: number;
    fastDelivery: boolean;
    cheapPrice: boolean;
    freeShipping: boolean;
    fastDeliveryChecked: boolean;
    cheapPriceChecked: boolean;
    freeShipChecked: boolean;
    fourStarsChecked: boolean;
    fiveStarsChecked: boolean;
    threeStarsChecked: boolean;
    selectedSort: string;

    // Add price range state
    minPrice: string;
    maxPrice: string;

    // Update functions
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    setSelectedBrands: (brands: string[] | ((prev: string[]) => string[])) => void;
    setSelectedSuppliers: (suppliers: string[] | ((prev: string[]) => string[])) => void;
    setSearchTerm: (term: string) => void;
    setPageSize: (size: number) => void;
    setCurrent: (current: number) => void;
    setSortBy: (sort: string) => void;
    setMinRating: (rating: number) => void;
    setFastDelivery: (enabled: boolean) => void;
    setCheapPrice: (enabled: boolean) => void;
    setFreeShipping: (enabled: boolean) => void;
    setFastDeliveryChecked: (checked: boolean) => void;
    setCheapPriceChecked: (checked: boolean) => void;
    setFreeShipChecked: (checked: boolean) => void;
    setFourStarsChecked: (checked: boolean) => void;
    setFiveStarsChecked: (checked: boolean) => void;
    setThreeStarsChecked: (checked: boolean) => void;
    setSelectedSort: (sort: string) => void;
    setMinPrice: (price: string) => void;
    setMaxPrice: (price: string) => void;

    // Helper functions
    resetFilters: () => void;
    buildQueryString: () => string;
}

// Create the context with a default undefined value
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Define props for our provider component
interface FilterProviderProps {
    children: ReactNode;
}

// Create the provider component
export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
    // Define all our state variables
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [pageSize, setPageSize] = useState<number>(10);
    const [current, setCurrent] = useState<number>(1);
    const [sortBy, setSortBy] = useState<string>('popular');
    const [minRating, setMinRating] = useState<number>(0);
    const [fastDelivery, setFastDelivery] = useState<boolean>(false);
    const [cheapPrice, setCheapPrice] = useState<boolean>(false);
    const [freeShipping, setFreeShipping] = useState<boolean>(false);
    const [fastDeliveryChecked, setFastDeliveryChecked] = useState<boolean>(false);
    const [cheapPriceChecked, setCheapPriceChecked] = useState<boolean>(false);
    const [freeShipChecked, setFreeShipChecked] = useState<boolean>(false);
    const [fourStarsChecked, setFourStarsChecked] = useState<boolean>(false);
    const [fiveStarsChecked, setFiveStarsChecked] = useState<boolean>(false);
    const [threeStarsChecked, setThreeStarsChecked] = useState<boolean>(false);
    const [selectedSort, setSelectedSort] = useState<string>('Phổ biến');
    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');

    // Function to reset all filters
    const resetFilters = () => {
        setSelectedBrands([]);
        setSelectedSuppliers([]);
        setSearchTerm('');
        setPageSize(10);
        setCurrent(1);
        setSortBy('popular');
        setMinRating(0);
        setFastDelivery(false);
        setCheapPrice(false);
        setFreeShipping(false);
        setFastDeliveryChecked(false);
        setCheapPriceChecked(false);
        setFreeShipChecked(false);
        setFourStarsChecked(false);
        setFiveStarsChecked(false);
        setThreeStarsChecked(false);
        setSelectedSort('Phổ biến');
        setMinPrice('');
        setMaxPrice('');
    };

    // Function to build query string from all filters
    const buildQueryString = (): string => {
        const params = new URLSearchParams();

        // Add pagination params
        params.append('current', current.toString());
        params.append('pageSize', pageSize.toString());

        // Add search term if available
        if (searchTerm) {
            params.append('mainText', encodeURIComponent(searchTerm));
        }

        // Add sort parameter
        params.append('sort', sortBy);

        // Add filters for brands, suppliers
        if (selectedBrands.length > 0) {
            params.append('brands', selectedBrands.join(','));
        }

        if (selectedSuppliers.length > 0) {
            params.append('suppliers', selectedSuppliers.join(','));
        }

        // Add rating filter
        if (minRating > 0) {
            params.append('minRating', minRating.toString());
        }

        // Add boolean filters
        if (freeShipping) {
            params.append('freeShipping', 'true');
        }

        if (cheapPrice) {
            params.append('cheapPrice', 'true');
        }

        if (fastDelivery) {
            params.append('fastDelivery', 'true');
        }

        // Add the new checkbox filters
        if (fastDeliveryChecked) {
            params.append('fastDeliveryChecked', 'true');
        }

        if (cheapPriceChecked) {
            params.append('cheapPriceChecked', 'true');
        }

        if (freeShipChecked) {
            params.append('freeShipChecked', 'true');
        }

        if (fourStarsChecked) {
            params.append('fourStarsChecked', 'true');
        }

        if (fiveStarsChecked) {
            params.append('fiveStarsChecked', 'true');
        }

        if (threeStarsChecked) {
            params.append('threeStarsChecked', 'true');
        }

        // Add selectedSort to query params if needed
        if (selectedSort && selectedSort !== 'Phổ biến') {
            params.append('selectedSort', selectedSort);
        }

        // Add price range parameters with correct names
        if (minPrice) {
            params.append('priceBottom', minPrice);
        }

        if (maxPrice) {
            params.append('priceTop', maxPrice);
        }

        return params.toString();
    };

    // Create the context value object
    const contextValue: FilterContextType = {
        isLoading,
        setIsLoading,
        selectedBrands,
        selectedSuppliers,
        searchTerm,
        pageSize,
        current,
        sortBy,
        minRating,
        fastDelivery,
        cheapPrice,
        freeShipping,
        fastDeliveryChecked,
        cheapPriceChecked,
        freeShipChecked,
        fourStarsChecked,
        fiveStarsChecked,
        threeStarsChecked,
        selectedSort,
        minPrice,
        maxPrice,
        setSelectedBrands,
        setSelectedSuppliers,
        setSearchTerm,
        setPageSize,
        setCurrent,
        setSortBy,
        setMinRating,
        setFastDelivery,
        setCheapPrice,
        setFreeShipping,
        setFastDeliveryChecked,
        setCheapPriceChecked,
        setFreeShipChecked,
        setFourStarsChecked,
        setFiveStarsChecked,
        setThreeStarsChecked,
        setSelectedSort,
        setMinPrice,
        setMaxPrice,
        resetFilters,
        buildQueryString
    };

    return (
        <FilterContext.Provider value={contextValue}>
            {children}
        </FilterContext.Provider>
    );
};

// Custom hook to use the filter context
export const useFilterContext = (): FilterContextType => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error('useFilterContext must be used within a FilterProvider');
    }
    return context;
};

export default FilterContext;
