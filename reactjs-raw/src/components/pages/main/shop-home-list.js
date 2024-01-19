import axios from "axios";
import React, { useState, useEffect } from "react";
import TopDanhGia from "./top-danh-gia";
import TopLuotMua from "./top-luot-mua";
import TopDienThoaiMoi from "./top-dien-thoai-moi";
function ShopHomeList() {
	const [topdanhgia,setTopDanhGia]=useState([]);
	const [topluotmua,setTopLuotMua]=useState([]);
	const [topdienthoaimoi,setTopDienThoaiMoi]=useState([]);
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dien-thoai-duoc-danh-gia-nhieu-nhat')
		.then(response=>{
			// console.log(response.data.data);
			setTopDanhGia(response.data.data);
		})
		.catch(error => {
			// Hiện thông báo nếu có lỗi xảy ra
			console.error("Lỗi: ", error);
		});
	},[]);

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dien-thoai-luot-mua-nhieu-nhat')
		.then(response=>{
			// console.log(response.data.data);
			setTopLuotMua(response.data.data);
		})
		.catch(error => {
			// Hiện thông báo nếu có lỗi xảy ra
			console.error("Lỗi: ", error);
		});
	},[]);

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dien-thoai-moi-nhat')
		.then(response=>{
			console.log(response.data.data);
			setTopDienThoaiMoi(response.data.data);
		})
		.catch(error => {
			// Hiện thông báo nếu có lỗi xảy ra
			console.error("Lỗi: ", error);
		});
	},[]);

	return (
		<>
			<section className="shop-home-list section">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-12">
							<div className="row">
								<div className="col-12">
									<div className="shop-section-title">
										<h1>Top Điện Thoại Mới Nhập</h1>
									</div>
								</div>
							</div>
							<TopDienThoaiMoi data={topdienthoaimoi} />
						</div>
						<div className="col-lg-4 col-md-6 col-12">
							<div className="row">
								<div className="col-12">
									<div className="shop-section-title">
										<h1>Top Lượt Mua</h1>
									</div>
								</div>
							</div>
							<TopLuotMua data={topluotmua}/>
						</div>
						<div className="col-lg-4 col-md-6 col-12">
							<div className="row">
								<div className="col-12">
									<div className="shop-section-title">
										<h1>Top Đánh Giá</h1>
									</div>
								</div>
							</div>
							<TopDanhGia data={topdanhgia}/>

						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default ShopHomeList;