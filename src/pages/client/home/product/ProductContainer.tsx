import React, { useState } from 'react';
import ProductFilter from './filter.product';
import Product from './product';

// Updated to accept optional props that allow external control
interface ProductContainerProps {
    externalFilter?: boolean;  // If true, don't render internal filter
    listBook?: IBookTable[];   // Optional listBook prop for when filter is external
}

const ProductContainer: React.FC<ProductContainerProps> = ({
    externalFilter = false,
    listBook: externalListBook
}) => {
    // Only manage state internally if not provided externally
    const [internalListBook, setInternalListBook] = useState<IBookTable[]>([]);

    // Use external books if provided, otherwise use internal state
    const listBook = externalListBook || internalListBook;

    return (
        <div className="product-container-wrapper">
            {/* Only render ProductFilter if externalFilter is false */}
            {!externalFilter && (
                <ProductFilter onListBookChange={setInternalListBook} />
            )}

            {/* Pass the product component with the appropriate list */}
            <Product listBook={listBook} />
        </div>
    );
};

export default ProductContainer;
