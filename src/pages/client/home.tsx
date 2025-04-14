import { filterBookWithFullInfoAPI, getBooksAPI, getBrandsAPI, getCategoryAPI, getFullCategories, getNameCategoryAPI, getSuppliersAPI } from '@/services/api';
import {
    Form

} from 'antd';
import 'styles/general.scss';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import 'styles/home.scss';
import _ from "lodash";
import Breadcrumb from './home/bread.crumb';
import RecentlyViewedProducts from './home/product.seen';
import CategoryExplorer from './home/category/category.list';
import TikiBookstore from './home/book.store';
import TikiAdsComponent from './home/ads';
import BookShopComponent from './home/danhmuc';
import RelatedSearch from './home/related.search';
import TikiBestsellers from './home/best.seller';
import Product from './home/product/product';
import FooterWeb from './home/footer';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useOutletContext() as any;
    const [listCategory, setListCategory] = useState<{
        label: string, value: string
    }[]>([]);
    const [listBook, setListBook] = useState<IBookTable[]>([]);
    const [sharedListBook, setSharedListBook] = useState<IBookTable[]>([]);
    const [current, setCurrent] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");
    const [sortQuery, setSortQuery] = useState<string>("sort=-sold");
    const [listBrand, setListBrand] = useState<IBrands[]>([])
    const [listSupplier, setListSupplier] = useState<ISupplier[]>([])
    const [category, setCategory] = useState<string>("")
    const [listFullCategory, setListFullCategory] = useState<ICategory[]>([])
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [brand, setBrand] = useState<string[]>([]);
    const [supplier, setSupplier] = useState<string[]>([]);
    const filteredBooks = useMemo(() => {
        return listBook.filter((book) =>
            book.mainText.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, listBook]);
    useEffect(() => {
        const initCategory = async () => {
            const res = await getCategoryAPI();
            if (res && res.data) {
                const d = res.data.map(item => {
                    return { label: item, value: item }
                })
                setListCategory(d);
            }
        }
        initCategory();
    }, []);
    useEffect(() => {
        fetchBrand();
        fetchSupplier();
        fetchFullCategories();
    }, []);
    useEffect(() => {
        fetchBook();
    }, [current, pageSize, filter, sortQuery]);
    const fetchBook = async () => {
        setIsLoading(true)
        let query = `current=${current}&pageSize=${pageSize}`;
        if (filter) {
            query += `&${filter}`;
        }
        if (sortQuery) {
            query += `&${sortQuery}`;
        }
        if (searchTerm) {
            query += `&mainText=/${searchTerm}/i`;
        }
        const res = await getBooksAPI(query);
        if (res && res.data) {
            setListBook(res.data.items);
            setTotal(res.data.meta.totalItems)
        }
        setIsLoading(false)
    }
    const fetchBrand = async () => {
        const res = await getBrandsAPI();
        setListBrand(res.data!)
    }
    const fetchSupplier = async () => {
        const res = await getSuppliersAPI();
        setListSupplier(res.data!)

    }
    const fetchFullCategories = async () => {
        const res = await getFullCategories()
        setListFullCategory(res.data!)
    }
    const filterProduct = async () => {
        let query = `current=1&pageSize=${pageSize}`;
        let isChange: boolean = false;

        if (category && category !== "") {
            isChange = true;
            query += `&nameCategory=${category}`;
        }
        if (brand.length > 0) {
            isChange = true;
            query += `&nameBrand=${brand.join(',')}`;
        }
        if (supplier.length > 0) {
            isChange = true;
            query += `&nameSupplier=${supplier.join(',')}`;
        }

        if (isChange === true) {
            const res = await filterBookWithFullInfoAPI(query);
            setTotal(res.data!.meta.totalItems)
            setListBook(res.data?.items || []);
        }
        else {
            await fetchBook();
        }
    };

    useEffect(() => {
        filterProduct();
    }, [category, brand, supplier]);
    return (
        <>
            <main>
                <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"
                    alt="tiki"
                    width="99999"
                    height="99999"
                    className="tiki-background-image"
                />

                <h1 className="tiki-hidden-title">
                    Nhà Sách Tiki giá cực tốt, freeship, giao nhanh 2h | tiki.vn
                </h1>
                <div className="sc-6d96a9af-0 sc-dfad4f1d-1 eTnNSC hYoCsj">
                    <Breadcrumb />
                    <div className="sc-dfad4f1d-0 dHZHvj">
                        <CategoryExplorer />
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <TikiBookstore
                                isLoading={isLoading}
                                setIsLoading={setIsLoading}
                                onListBookChange={setSharedListBook} />

                            <div style={{ marginTop: '6px' }} className="product-wrapper">
                                <Product
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading}
                                    listBook={sharedListBook} />
                            </div>
                        </div>
                    </div>
                    <RecentlyViewedProducts />
                    <TikiAdsComponent />
                    <BookShopComponent />
                    <RelatedSearch />
                    <TikiBestsellers />
                </div>
                <FooterWeb />
            </main>

        </>
    )
}

export default HomePage;