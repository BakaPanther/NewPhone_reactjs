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
import { RingLoader } from "react-spinners";
import Header from "../../header";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Comment from "./comment";
export default function ProductDetails() {

    let [loading1, setLoading1] = useState(true);
    let [loading2, setLoading2] = useState(true);
    const [khach_hang_id, setKhach_hang_id] = useState(JSON.parse(Cookies.get('user')));
    const [modal, setModal] = useState(false);
    // State để theo dõi id của điện thoại được chọn

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };


    let [color, setColor] = useState("#ffffff");

    const { id } = useParams();//id của điện thoại
    // // State để theo dõi id của điện thoại được chọn
    // const [selectedDienThoaiId, setSelectedDienThoaiId] = useState(id);

    const [dienThoai, setDienThoai] = useState({});//chi tiet dien thoai

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
        if (quantity < sanPham.so_luong)
            setQuantity(quantity + 1);
    };
    //luu sp đã chọn
    const handlSanPhamChange = (item) => {
        setSanPham(item);
        // //lấy id đc chọn
        // setSelectedDienThoaiId(item.dien_thoai_id.id);
    }
    useEffect(() => {
        // Tính toán tổng giá khi số lượng hoặc sanPham thay đổi
        setTongTien(quantity * (sanPham.gia_ban || 0));
    }, [quantity, sanPham]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseProduct = await axios.get(`http://127.0.0.1:8000/api/dien-thoai-chi-tiet/${id}`);
                setDienThoai(responseProduct.data.data);
                setLoading1(false);

                const responseSpec = await axios.get(`http://127.0.0.1:8000/api/thong-so/${id}`);
                setThongSo(responseSpec.data.data);
                setLoading2(false);
            } catch (error) {
                // Xử lý lỗi
                console.error("Có lỗi xảy ra: ", error);

                // Kiểm tra nếu lỗi là 429 thì reload trang
                if (error.response && error.response.status === 429) {
                    window.location.reload();
                }
            }
        };

        fetchData();
    }, []); // Sử dụng 'id' trong dependency array để theo dõi sự thay đổi của id và fetch dữ liệu mới khi id thay đổi



    const handlAddCartChange = () => {

        if (!sanPham || !sanPham.dien_thoai_id) {
            // Nếu sanPham hoặc sanPham.dien_thoai_id không tồn tại hoặc là falsy value (null, undefined, rỗng)
            notifyError('Vui lòng chọn sản phẩm muốn thêm vào giỏ hàng');
            return; // Dừng hàm nếu id không hợp lệ
        }
        if (Cookies.get('accessToken') === undefined) {
            setModal(!modal)

        }
        else {
            axios.post('http://127.0.0.1:8000/api/khach-hang/gio-hang-them-moi', {
                khach_hang_id: khach_hang_id.id,
                chi_tiet_dien_thoai_id: sanPham.id,
                so_luong: quantity,
            })
                .then((response) => {
                    notifySuccess('Thêm vào giỏ hàng thành công');
                    setTimeout(() => {
                        window.location.href = "/cart";
                    }, 2000);
                })
                .catch((error) => {

                });
        }

    }
    const handleYes = () => {
        notifyInfor('Đang chuyển hướng đến đăng nhập');
        setTimeout(() => {
            window.location.href = "/login";
        }, 1000);
    };

    const handleNo = () => {
        setModal(!modal)
    };
    // console.log(sanPham)
    // console.log("dien thoai", sanPham);



    return (
        <>
            {(!loading1 && !loading2) ? (
                <div>
                    <Header />
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
                                <h1>
                                    {sanPham ? (
                                        <>
                                            {dienThoai.ten} { }
                                            {sanPham.mau_sac_id && sanPham.mau_sac_id.ten && (
                                                <>
                                                    {sanPham.mau_sac_id.ten} { }
                                                </>
                                            )}
                                            {sanPham.dung_luong_id && sanPham.dung_luong_id.ten && (
                                                <>
                                                    {sanPham.dung_luong_id.ten}  { 'ram '}
                                                </>
                                            )}
                                                {sanPham.ram_id && sanPham.ram_id.ten && (
                                                <>
                                                    {sanPham.ram_id.ten}
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <>{dienThoai.ten}</>
                                    )}
                                </h1>
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
                                                        <a className="capacity-text">{item.ram_id.ten}</a>
                                                        <a className="capacity-text">{item.gia_ban}</a>
                                                    </li>
                                                );
                                        })
                                    }
                                </ul>
                                <div className="product-quantity">
                                    <h4 className="col-2">Số lượng: </h4>
                                    <div className='input-quantity col-2'>
                                        <button onClick={decreaseQuantity}>-</button>
                                        <span >{quantity}</span>
                                        <button onClick={increaseQuantity}>+</button>
                                    </div>
                                    <div className="product-detail-price col-8">{tongTien}</div>
                                </div>
                                <div className="button6">
                                    <button onClick={handlAddCartChange} className="btn">Mua ngay</button>
                                </div>
                                <CommentsArea dienThoaiId={id} />
                            </div>

                            <Container >
                                <Row>
                                    <Col
                                        className="bg-light border"
                                        sm="4"
                                        xs="6"
                                    >
                                        <ProductSpec data={thongSo} />
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
                            <SimilarProducts dien_thoai_id={dienThoai.id} nha_san_xuat_id={dienThoai.nha_san_xuat.id} />
                            <Comment dienThoaiId={id} />
                        </div>

                    </div>

                    <Footer />
                </div>
            ) : (
                <RingLoader
                    color="#F7941D"
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
            <Modal isOpen={modal} size="sm" className="my-modal">
                <ModalBody style={{ backgroundColor: '#f8f9fa', color: '#333', padding: '20px', maxHeight: '100px', overflowY: 'auto' }}>
                    Đăng nhập rồi mới thêm vào được khách yêu ơii!!!
                </ModalBody>
                <ModalFooter style={{ backgroundColor: '#f8f9fa', borderRadius: '0 0 10px 10px', borderTop: 'none', padding: '0px' }}>
                    <Button color="primary" style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', marginRight: '10px' }} onClick={handleYes}>Okey đi thôi!!</Button>
                    <Button color="secondary" style={{ backgroundColor: '#6c757d', color: '#fff', borderRadius: '5px' }} onClick={handleNo}>Honggg</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}