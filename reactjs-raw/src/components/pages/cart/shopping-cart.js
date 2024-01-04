import { useState, useEffect } from "react";
import { InputOrder } from "./input-order";
import { TotalAmount } from "./total-amount";
import { CheckOutForm } from "../checkout/checkout-form";
import { PaymentOptions } from "./pay-option";
import axios from "axios";

export function ShoppingCart(props) {
	const [tongtien, setTongTien] = useState(0);
	const [soluong, setSoLuong] = useState(0);
	const [payment, setPayment] = useState(0);
	// Tính tổng số lượng và tổng số tiền khi có sự thay đổi trong props.data
	useEffect(() => {
		let TongSoLuong = 0;
		let TongTien = 0;

		props.data.forEach((item) => {
			TongSoLuong += item.so_luong || 0;
			TongTien += (item.so_luong || 0) * (item.chi_tiet_dien_thoai_id.gia_ban || 0);
		});

		setSoLuong(TongSoLuong);
		setTongTien(TongTien);
	}, [props.data]);

	// Hàm để cập nhật số lượng và tổng tiền 
	const handleSoLuongChange = (newSoLuong, itemIndex) => {
		let newData = [...props.data];
		console.log(itemIndex);
		console.log(newSoLuong);
		newData[itemIndex].so_luong = newSoLuong;

		let newTongTien = 0;
		newData.forEach((item) => {
			newTongTien += item.so_luong * (item.chi_tiet_dien_thoai_id.gia_ban || 0);
		});

		setSoLuong(newData[itemIndex].so_luong);
		setTongTien(newTongTien);
		props.setData(newData);
	};

	const handleRemove = (idchitiet, idkhachhang) => {
		axios.post('http://127.0.0.1:8000/api/khach-hang/xoa-gio-hang', {
			'khach_hang_id': idkhachhang,
			'chi_tiet_dien_thoai_id': idchitiet
		})
			.then((response) => {
				// Xử lý sau khi xóa thành công, nếu cần
				console.log('Đã xóa sản phẩm khỏi giỏ hàng');
				window.location.reload();
			})
			.catch((error) => {
				// Xử lý lỗi nếu có
				console.error('Lỗi khi xóa sản phẩm:', error);
			});
	};

	
	return (
		<>

			<div className="shopping-cart section">
				<div className="container">
					<div className="row">
						<div className="col-12">

							<table className="table shopping-summery">
								<thead>
									<tr className="main-hading">
										<th>Điện Thoại</th>
										<th>Màu Sắc</th>
										<th className="text-center">Dung Lượng</th>
										<th className="text-center">Số Lượng</th>
										<th className="text-center">Giá Bán</th>
										<th className="text-center"><i className="ti-trash remove-icon"></i></th>
									</tr>
								</thead>
								<tbody>
									{
										props.data.map((item, key) => (

											<tr key={key}>

												{item.hinh_anh_id && item.hinh_anh_id.length > 0 ? (

													<td className="image" data-title="No">

														<span>{item.dien_thoai_id.ten}</span>
														<img src={`http://localhost:8000/` + item.hinh_anh_id[0].duong_dan} alt="#" />
													</td>
												) : (
													<span>Không có dữ liệu</span>
												)}

												<td className="product-des" data-title="Description">
													<p className="product-name">
														<a href="#">{item.mau_sac_id.ten}</a>
													</p>

												</td>
												<td className="price" data-title="DungLuong">
													<span>{item.dung_luong_id.ten}</span>
												</td>
												<td className="qty" data-title="Qty">
													<InputOrder
														chi_tiet_data={item.chi_tiet_dien_thoai_id}
														khach_hang_data={item.khach_hang_id}
														data={item.so_luong}
														onSoLuongChange={(newSoLuong) => handleSoLuongChange(newSoLuong, key)}
													/>
												</td>
												<td className="total-amount" data-title="GiaBan">
													<span>{item.chi_tiet_dien_thoai_id.gia_ban}</span>
												</td>
												<td className="action" data-title="Remove">
													<button onClick={() => handleRemove(item.chi_tiet_dien_thoai_id.id, item.khach_hang_id.id)}><i className="ti-trash remove-icon"></i></button>
												</td>
											</tr>

										))
									}


								</tbody>
							</table>
						</div>
					</div>
					<CheckOutForm/>
					<h2>Phương thức thanh toán</h2>
						<ul style={{ listStyleType: 'none', padding: 0 }}>
							<li style={{ marginBottom: '10px' }}>
								<label style={{ display: 'inline-block', marginRight: '10px', fontWeight: 'bold' }}>
									<input type="radio" name="tien_mat" onClick={() => { setPayment(1)}} />
									Tiền mặt
								</label>
							</li>
							<li style={{ marginBottom: '10px' }}>
								<label style={{ display: 'inline-block', marginRight: '10px', fontWeight: 'bold' }}>
									<input type="radio" name="payment" onClick={() => { setPayment(2)}}/>
									Chuyển khoản ngân hàng
								</label>
							</li>
							<li style={{ marginBottom: '10px' }}>
								<label style={{ display: 'inline-block', marginRight: '10px', fontWeight: 'bold' }}>
									<input type="radio" name="payment"onClick={()=> { setPayment(3)}} />
									Momo
								</label>
							</li>
						</ul>
					<div className="row">
						<div className="col-12">
							<TotalAmount tongtien={tongtien} soluong={soluong} payment={payment} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}