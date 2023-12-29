import { useState } from 'react';
import EditIcon from '../../../assets/images/edit-icon.png'
import SingleBoughtProduct from './single-bought-product';
export default function MyAccount() {
    return (
        <>
            <div className="my-account-container">
                <div className="row">
                    <div className="menu-left col-6">
                        <div className="profile-info">
                            <h6>THÔNG TIN CÁ NHÂN </h6>
                            <div className="edit-info">
                                <label>Họ tên:</label>
                                <input value="Tên gì đó" /> <button onClick=''><img src={EditIcon} alt='' />Sửa</button><br />
                                <label>SĐT:</label>
                                <input value="9182739812" /> <button onClick=''><img src={EditIcon} alt='' />Sửa</button><br />
                                <label>Email:</label>
                                <input value="asd@gmail.com" /> <button onClick=''><img src={EditIcon} alt='' />Sửa</button><br />
                                <label>Địa chỉ:</label>
                                <input value="??/?? đường??, quận ?" /> <button onClick=''><img src={EditIcon} alt='' />Sửa</button><br />
                                <div className="confirm-edit">
                                    <button>Hủy</button>
                                    <button>Lưu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-right col-6">
                        <h6>ĐƠN HÀNG ĐÃ MUA </h6>
                        <div className="bought-products">
                            <SingleBoughtProduct/>
                            <SingleBoughtProduct/>
                            <SingleBoughtProduct/>
                            <SingleBoughtProduct/>
                            <SingleBoughtProduct/>
                            <SingleBoughtProduct/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}