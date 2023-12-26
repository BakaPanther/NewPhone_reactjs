import Footer from "../../footer";
import CommentsArea from "./comments-area";
import ProductInfo from "./product-info";
import ProductSpec from "./product-spec";
import QuantityPicker from "./quantity-picker";
import SimilarProducts from "./similar-products";
import notifySuccess from "../../items/noti_success";
import notifyInfor from '../../items/noti_infor';
import notifyError from '../../items/noti_error';
import Cookies from 'js-cookie';
import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";

export default function ProductDetails() {

    let [loading1, setLoading1] = useState(true);
    let [loading2, setLoading2] = useState(true);
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    
    
    let [color, setColor] = useState("#ffffff");
      
    const { id } = useParams();//id của điện thoại

    const [dienThoai,setDienThoai] = useState({});//chi tiet dien thoai

    const [quantity, setQuantity] = useState(1);//so_luong

    const [tongTien, setTongTien] = useState(0);//tong tien

    const [sanPham, setSanPham] = useState({});//luu san phẩm người dùng chọn

    const [thongSo, setThongSo] = useState({});//thong so

        //giam sl mua
        const decreaseQuantity = () => {
            if (quantity > 1) {
            setQuantity(quantity - 1);
            }
        };
      
        //tăng sl mua
        const increaseQuantity = () => {
            setQuantity(quantity + 1);
        };
        //luu sp đã chọn
        const handlSanPhamChange = (item) => {
            setSanPham(item);
        }
      useEffect(() => {
        // Tính toán tổng giá khi số lượng hoặc sanPham thay đổi
        setTongTien(quantity * (sanPham.gia_ban || 0));
      }, [quantity, sanPham]);

    //load san phẩm lúc nhấn nút từ trang nào đó
    useEffect(() => {
        // Thực hiện yêu cầu GET khi component được render
        axios.get(`http://127.0.0.1:8000/api/dien-thoai-chi-tiet/${id}`)
        .then(response => {
            setDienThoai(response.data.data);
            setLoading1(false)
        })
        .catch(error => {
            // Hiện thông báo nếu có lỗi xảy ra
            console.error("Lỗi thông số: ",error);
            setLoading1(false)
        });
    }, []); // [] để đảm bảo chỉ gửi yêu cầu một lần khi component mount

    //load thông số kỹ thuật của điện thoại
    useEffect(() => {
        // Thực hiện yêu cầu GET khi component được render
        axios.get(`http://127.0.0.1:8000/api/thong-so/${id}`)
        .then(response => {
            setThongSo(response.data.data);
            setLoading2(false)
        })
        .catch(error => {
            // Hiện thông báo nếu có lỗi xảy ra
            setLoading2(false)
            console.error("Lỗi: ",error);
        });
    }, []); // [] để đảm bảo chỉ gửi yêu cầu một lần khi component mount
    return (
        <>
          {(!loading1 && !loading2) ? (
            <div>
            <div className="product-detail-container">
                <div className="row">
                    <div className="col-4">
                        <div className="product-detail-img">
                        {dienThoai.hinh_anh && dienThoai.hinh_anh.length > 0 && dienThoai.hinh_anh[0].duong_dan &&
                            <img src={`http://localhost:8000/` + dienThoai.hinh_anh[0].duong_dan} alt="#" />
                        }

                        </div>
                    </div>
                    <div className="col-8">
                        <h1>{dienThoai.ten}</h1>
                        <ul className="product-capacity">
                        {
                            dienThoai &&
                            dienThoai.chi_tiet_dien_thoai &&
                            dienThoai.chi_tiet_dien_thoai.map(function (item, key) {
                            if (item.so_luong > 0)
                                return (
                                <li className="capacity" key={key} onClick={() => handlSanPhamChange(item)}>
                                    <a className="capacity-text">{item.dung_luong_id.ten}</a>
                                    <a className="capacity-text">{item.mau_sac_id.ten}</a>
                                    <a className="capacity-text">{item.gia_ban}</a>
                                </li>
                                );
                            })
                        }
                        </ul>
                        <div className="product-quantity">
                        <h4 className="col-2">Số lượng :</h4>
                        <div className='input-quantity col-2'>
                        <button onClick={decreaseQuantity}>-</button>
                        <span >{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                        </div>
                        <div className="product-detail-price col-8">{tongTien}</div>
                        </div>
                        <div className="button6">
                        <a href="#" className="btn">Thêm vào giỏ hàng</a>
                        <a href="#" className="btn">Mua ngay</a>
                        </div>
                        
                    </div>

                    <Container >
                        <Row>
                            <Col
                            className="bg-light border"
                            sm="4"
                            xs="6"
                            >
                               <ProductSpec data={thongSo}/>
                            </Col>
                            <Col
                            className="bg-light border"
                            sm="8"
                            xs="6"
                            >
                             <div dangerouslySetInnerHTML={{ __html: dienThoai.mo_ta }} />
                            </Col>
                        </Row>
                   
                    </Container>
                    <CommentsArea/>
                    <SimilarProducts/>
                </div>
            </div>
            <Footer />
            </div>
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
    )
}