import SingleTab from "./single-tab";
import TabNav from "./tab-nav";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductArea(){

	const [nhaSanXuat, setNhaSanXuat] = useState([]);
	const [dienThoai, setDienThoai] = useState([]);
	const [hienThi, setHienThi] = useState([]);

	//lay danh sach nhà sản xuất
	useEffect(() => {
		// Thực hiện yêu cầu GET khi component được render
		axios.get('http://127.0.0.1:8000/api/nha-san-xuat')
		  .then(response => {
			// Lưu dữ liệu nhận được vào state
			setNhaSanXuat(response.data.data);
		  })
		  .catch(error => {
			// Hiện thông báo nếu có lỗi xảy ra
			console.error("Lỗi: ",error);
		  });
	  }, []); // [] để đảm bảo chỉ gửi yêu cầu một lần khi component mount

	//lấy danh sách điện thoại và hiển thị tạm thời 9 sản phẩm
	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/dien-thoai')
			.then(response => {
				// Lưu dữ liệu nhận được vào state
				setDienThoai(response.data.data);
			})
			.catch(error => {
				console.error("Lỗi: ",error);
			});
	}, []);
	useEffect(() => {
		// Khi điện thoại thay đổi, cập nhật danh sách sản phẩm hiển thị
		setHienThi(dienThoai.slice(0, 9));
	}, [dienThoai, 9]);
	// console.log(hienThi);

	const lst_nha_san_xuat = nhaSanXuat.map((item,key) => {
		return(
			<TabNav data={item} key={key}/>
		)
	})
	// console.log(nhaSanXuat);
    return (
        <> 
    <div className="product-area section">
            <div className="container">
				<div className="row">
					<div className="col-12">

					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="product-info">
							<div className="nav-main">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									{lst_nha_san_xuat}
								</ul>
							</div>
							<div className="tab-content" id="myTabContent">
							<div className="tab-pane fade show active" id="man" role="tabpanel">
								<div className="tab-single">
										<div className="row">
											{hienThi.map((item,key) =>(
												<SingleTab data={item} key={key}/>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
    </div>

</>
    )
}
export default ProductArea;