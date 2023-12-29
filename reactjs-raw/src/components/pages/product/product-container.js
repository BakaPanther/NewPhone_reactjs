import React, { useState, useEffect } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../../footer";
import Header from "../../header";
import SingleProduct from "../../single-product";
import { Categories } from "./categories";
import { Manufacturers } from "./manufactures";
import { RecentPost } from "./recent-post";
import { ShopByPrice } from "./shop-by-price";
import { ShopTop } from "./shop-top";

export function ProductContainer() {
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const [dsDienThoai, setDsDienThoai] = useState({});
    const [dsNhaSanXuat, setDsNhaSanXuat] = useState({});
    const [filters, setFilters] = useState({
        filters: {
            gia_ban: {
                gia_dau: 0,
                gia_cuoi: 10000000000000
            },
            mau_sac: [],
            dung_luong: [],
            nha_san_xuat: []
        }
    });
    const [diem, setDiemn] = useState(0);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/dien-thoai-loc-danh-sach', JSON.stringify(filters))
            .then((response) => {
                setDsDienThoai(response.data.data);
                setLoading1(false);
                setDiemn(diem + 1);
                console.log("điếm: ", diem);
                console.log(filters);
                console.log(dsDienThoai);
            })
            .catch(error => {
                console.error("Lỗi: ", error);
            });
    }, [filters]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/nha-san-xuat')
            .then((response) => {
                setDsNhaSanXuat(response.data.data);
                setLoading2(false);
            })
            .catch(error => {
                console.error("Lỗi: ", error);
                setLoading1(false);
            });
    }, []);

    const addFilter = (filterType, filterValue) => {
        const isFilterExist = filters.filters[filterType].some(
            filter => JSON.stringify(filter) === JSON.stringify(filterValue)
        );

        if (!isFilterExist) {
            setFilters(prevState => ({
                ...prevState,
                filters: {
                    ...prevState.filters,
                    [filterType]: [
                        ...prevState.filters[filterType],
                        filterValue
                    ]
                }
            }));
        } else {
            setFilters(prevState => ({
                ...prevState,
                filters: {
                    ...prevState.filters,
                    [filterType]: prevState.filters[filterType].filter(
                        filter => JSON.stringify(filter) !== JSON.stringify(filterValue)
                    )
                }
            }));
        }
    };

    return (
        <>
            {!loading1 && !loading2 ? (
                <>
                    <Header />
                    <section className="product-area shop-sidebar shop section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="shop-sidebar">
                                        {/* <Categories /> */}
                                        {/* <ShopByPrice /> */}
                                        {/* <RecentPost /> */}
                                        {/* <Manufacturers /> */}
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-8 col-12">
                                    <div className="row">
                                        <ShopTop />
                                    </div>
                                    <section className="product-area shop-sidebar shop section">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 col-12">
                                                    <div className="shop-sidebar">
                                                        <div className="single-widget category">
                                                            <h3 className="title">Thương hiệu</h3>
                                                            <ul className="categor-list">
                                                                {dsNhaSanXuat.map(function (item, key) {
                                                                    return (
                                                                        <li>
                                                                            <a onClick={() => addFilter('nha_san_xuat', { nha_san_xuat_id: item.id })} style={{ textDecoration: 'none' }}>
                                                                                {item.ten}
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>
                                                        <ShopByPrice />
                                                        <RecentPost />
                                                        <Manufacturers />
                                                    </div>
                                                </div>
                                                <div className="col-lg-9 col-md-8 col-12">
                                                    <div className="row">
                                                        {dsDienThoai.map(function (item, key) {
                                                            return (
                                                                <div className="col-lg-4 col-md-6 col-12">
                                                                    <SingleProduct data={item} />
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
									</div>
                            </div>
                        </div>
                    </section>
                    <Footer />

                </>
            ) : (
                <ClipLoader
                    color={color}
                    loading={true}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    cssOverride={override}
                />
            )}
        </>
    );
}
