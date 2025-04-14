import React, { useState } from 'react';
import ProductFilter from './filter.product';
import Product from './product';

interface ProductContainerProps {
    externalFilter?: boolean;
    listBook?: IBookTable[];
}

const ProductContainer: React.FC<ProductContainerProps> = ({
    externalFilter = false,
    listBook: externalListBook
}) => {
    const [internalListBook, setInternalListBook] = useState<IBookTable[]>([]);

    const listBook = externalListBook || internalListBook;

    return (
        <div className="product-container-wrapper">
            {!externalFilter && (
                <ProductFilter onListBookChange={setInternalListBook} />
            )}

            <Product listBook={listBook} />
        </div>
    );
};

export default ProductContainer;
