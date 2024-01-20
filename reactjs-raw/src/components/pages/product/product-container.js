import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../footer";
import Header from "../../header";
import SingleProduct from "../../single-product";
import { Categories } from "./categories";
import { Manufacturers } from "./manufactures";
import { RecentPost } from "./recent-post";
import { ShopByPrice } from "./shop-by-price";
import { ShopTop } from "./shop-top";
import ReactPaginate from 'react-paginate';
import { RingLoader } from "react-spinners";

export function ProductContainer() {

	const [loading1, setLoading1] = useState(true);
	const [loading2, setLoading2] = useState(true);
	const [loading3, setLoading3] = useState(true);

	const [color, setColor] = useState("#ffffff");
	const override = {
		display: "block",
		margin: "0 auto",
		borderColor: "red",
	};//loadding

	const [dsDienThoai, setDsDienThoai] = useState({});
	const [dsNhaSanXuat, setDsNhaSanXuat] = useState({});
	const [dsDungLuong, setDsDungLuong] = useState({});

	const itemsPerPage = 9; // Số sản phẩm trên mỗi trang
	const [currentPage, setCurrentPage] = useState(0);
	const handlePageChange = ({ selected }) => {
		setCurrentPage(selected);
	};
	const indexOfLastItem = (currentPage + 1) * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = Array.isArray(dsDienThoai)
		? dsDienThoai.slice(indexOfFirstItem, indexOfLastItem)
		: [];

	const [filters, setfilters] = useState({
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

	//bo_loc_san_pham
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dien-thoai-loc-danh-sach',
			{ params: filters })
			.then((response) => {
				setDsDienThoai(response.data.data);
				setLoading1(false);
			})
			.catch(error => {
				// Hiện thông báo nếu có lỗi xảy ra
				console.error("Lỗi: ", error);

			});
	}, [filters]);

	//load nha san xuat
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/nha-san-xuat')
			.then((response) => {
				setDsNhaSanXuat(response.data.data);
				setLoading2(false);

			})
			.catch(error => {
				// Hiện thông báo nếu có lỗi xảy ra
				console.error("Lỗi: ", error);
			});
	}, []);
	//load dung luong
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dung-luong')
			.then((response) => {
				setDsDungLuong(response.data.data);
				setLoading3(false);
			})
			.catch(error => {
				// Hiện thông báo nếu có lỗi xảy ra
				console.error("Lỗi: ", error);
			});
	}, []);

	// hàm add filters mỗi khi nhấn vào bộ lọc
	const addFilter = (filterType, filterValue) => {
		if (filterType === 'gia_ban') {
			setfilters(prevState => ({
				...prevState,
				filters: {
					...prevState.filters,
					[filterType]: filterValue
				}
			}));
		} else {
			const updatedFilters = new Set(filters.filters[filterType].map(JSON.stringify));
			const isFilterExist = updatedFilters.has(JSON.stringify(filterValue));

			if (!isFilterExist) {
				updatedFilters.add(JSON.stringify(filterValue));
			} else {
				updatedFilters.delete(JSON.stringify(filterValue));
			}

			setfilters(prevState => ({
				...prevState,
				filters: {
					...prevState.filters,
					[filterType]: Array.from(updatedFilters).map(JSON.parse)
				}
			}));
		}
	};

	console.log(dsDienThoai);
	return (
		<>
			{!loading1 && !loading2 && !loading3 ? (
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
								<div className="col-lg-12 col-md-12 col-12">
									<section className="product-area shop-sidebar shop section">
										<div className="container">
											<div className="row">
												<div className="col-lg-3 col-md-4 col-12">
													<div className="shop-sidebar">
														<div className="single-widget category">
															<h3 className="title">Thương hiệu</h3>
															<ul className="categor-list">
																{dsNhaSanXuat && dsNhaSanXuat.map(function (item, key) {
																	const isFilterExist = filters.filters.nha_san_xuat.some(filter => filter.nha_san_xuat_id === item.id);
																	return (
																		<li key={key}>
																			<label style={{ textDecoration: 'none', display: 'block' }}>
																				<input
																					type="checkbox"
																					checked={isFilterExist}
																					onChange={() => addFilter('nha_san_xuat', { nha_san_xuat_id: item.id })}
																				/>
																				{item.ten}
																			</label>
																		</li>
																	);
																})}
															</ul>
														</div>
														<div className="single-widget category">
															<h3 className="title">Dung lượng</h3>
															<ul className="categor-list">
																{dsDungLuong && dsDungLuong.map(function (item, key) {
																	const isFilterExist = filters.filters.dung_luong.some(filter => filter.dung_luong_id === item.id);
																	return (
																		<li key={key}>
																			<label style={{ textDecoration: 'none', display: 'block' }}>
																				<input
																					type="checkbox"
																					checked={isFilterExist}
																					onChange={() => addFilter('dung_luong', { dung_luong_id: item.id })}
																				/>
																				{item.ten}
																			</label>
																		</li>
																	);
																})}
															</ul>
														</div>
														<div className="single-widget range">
															<h3 className="title">Giá tiền</h3>
															<ul className="check-box-list">
																<li>
																	<label
																		onClick={() => addFilter('gia_ban', { gia_dau: 0, gia_cuoi: 100000000 })} style={{ textDecoration: 'none' }}
																		className="checkbox-inline" for="1">
																		<input name="news" id="1" type="radio" />Tất cả<span className="count"></span>
																	</label>
																</li>
																<li>
																	<label
																		onClick={() => addFilter('gia_ban', { gia_dau: 0, gia_cuoi: 1000000 })} style={{ textDecoration: 'none' }}
																		className="checkbox-inline" for="2">
																		<input name="news" id="2" type="radio" />0 VND - 1 triệu VND<span className="count"></span>
																	</label>
																</li>
																<li>
																	<label
																		onClick={() => addFilter('gia_ban', { gia_dau: 1000000, gia_cuoi: 5000000 })} style={{ textDecoration: 'none' }}
																		className="checkbox-inline" for="3">
																		<input name="news" id="3" type="radio" />1 triệu VND - 5 triệu VND<span className="count"></span>
																	</label>
																</li>
																<li>
																	<label
																		onClick={() => addFilter('gia_ban', { gia_dau: 5000000, gia_cuoi: 10000000 })} style={{ textDecoration: 'none' }}
																		className="checkbox-inline" for="4">
																		<input name="news" id="4" type="radio" />5 triệu VND - 10 triệu VND<span className="count"></span>
																	</label>
																</li>
																<li>
																	<label
																		onClick={() => addFilter('gia_ban', { gia_dau: 10000000, gia_cuoi: 20000000 })} style={{ textDecoration: 'none' }}
																		className="checkbox-inline" for="5">
																		<input name="news" id="5" type="radio" />10 triệu VND - 20 triệu VND<span className="count"></span>
																	</label>
																</li>
																<li>
																	<label
																		onClick={() => addFilter('gia_ban', { gia_dau: 20000000, gia_cuoi: 100000000 })} style={{ textDecoration: 'none' }}
																		className="checkbox-inline" for="6">
																		<input name="news" id="6" type="radio" />20 triệu VND trở lên<span className="count"></span>
																	</label>
																</li>
															</ul>
														</div>
														{/* <RecentPost /> */}
														{/* <Manufacturers /> */}
													</div>
												</div>

												<div className="col-lg-9 col-md-8 col-12">
													<div className="row">
														<ShopTop />
														{currentItems.map(function (item, key) {
															return (
																<div className="col-lg-4 col-md-6 col-12">
																	{item.so_luong > 0 && <SingleProduct data={item} />}
																</div>
															)
														})}
													</div>
													{/* Hiển thị phân trang */}
													<ReactPaginate
														pageCount={Math.ceil(dsDienThoai.length / itemsPerPage)}
														pageRangeDisplayed={3} // Số lượng trang được hiển thị
														marginPagesDisplayed={2} // Số lượng trang ở hai bên trang hiện tại được hiển thị
														onPageChange={handlePageChange}
														containerClassName={'pagination'}
														activeClassName={'active'}
														previousLabel={'<'}
														nextLabel={'>'}
														breakLabel={'...'}
														breakClassName={'break-me'}
														pageClassName={'page-item'}
														pageLinkClassName={'page-link'}
														previousClassName={'page-item'}
														nextClassName={'page-item'}
														previousLinkClassName={'page-link'}
														nextLinkClassName={'page-link'}
														disabledClassName={'disabled'}
													/>
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
				<RingLoader
					color="#36d7b7"
					loading
					cssOverride={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}}
					size={148}
					speedMultiplier={1}
				/>
			)}
		</>
	);
}

