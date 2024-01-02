import { useState } from 'react';
import Footer from "../../footer";
import EditIcon from '../../../assets/images/edit-icon.png'
import SingleBoughtProduct from './single-bought-product';
export default function MyAccount() {
    return (
        <>
            <div className="my-account-container">
                <div className='edit-info'>
                    <div className="row">
                        <div className="menu-left col-6">
                            <form className="form" method="post" action="#">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <label>Họ tên<span><button onClick=''><img src={EditIcon} alt='' />Sửa</button></span></label>
                                            <input type="text" name="name" value="Nguyễn Văn A" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Địa chỉ email<span><button onClick=''><img src={EditIcon} alt='' />Sửa</button></span></label>
                                            <input type="email" name="email" value="abc@gmail.com" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Số điện thoại<span><button onClick=''><img src={EditIcon} alt='' />Sửa</button></span></label>
                                            <input type="number" name="number" value="123562341" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <label>Địa chỉ<span><button onClick=''><img src={EditIcon} alt='' />Sửa</button></span></label>
                                            <input type="text" name="address" value="??/?? đường ??????, quận ?, phường ?" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Postal Code<span><button onClick=''><img src={EditIcon} alt='' />Sửa</button></span></label>
                                            <input type="text" name="post" value="200000" required="required" />
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className='save-edit' style={{'text-align': 'center'}}>
                                    <button>
                                        Lưu thông tin
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="menu-right col-6">
                            <h6>ĐƠN HÀNG ĐÃ MUA </h6>
                            <div className="bought-products">
                                <SingleBoughtProduct />
                                <SingleBoughtProduct />
                                <SingleBoughtProduct />
                                <SingleBoughtProduct />
                                <SingleBoughtProduct />
                                <SingleBoughtProduct />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <Footer />
        </>
    )
}