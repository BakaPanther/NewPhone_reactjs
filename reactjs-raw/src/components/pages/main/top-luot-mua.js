import { NavLink } from "react-bootstrap";
import Cookies from "js-cookie";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { useState } from "react";
import notifyInfor from "../../items/noti_infor";
import notifySuccess from "../../items/noti_success";
import axios from "axios";
function TopLuotMua(props) {
    const [user, setUser] = useState(JSON.parse(Cookies.get('user')));
    const [modal, setModal] = useState(false);

    const addToCart = (id_chi_tiet) => {
        axios.post('http://127.0.0.1:8000/api/khach-hang/gio-hang-them-moi', {
            khach_hang_id: user.id,
            chi_tiet_dien_thoai_id: id_chi_tiet,
            so_luong: 1
        })
            .then((response) => {
                notifySuccess('Thêm vào giỏ hàng thành công');
            })
            .catch((error) => {

            });
    }
    const handleAddToCart = (id) => {
        if (Cookies.get('accessToken') === undefined) {
            setModal(!modal)
        }
        else {
            addToCart(id);
        }

    };
    const handleYes = () => {
        notifyInfor('Đang chuyển hướng đến đăng nhập');
        setTimeout(() => {
            window.location.href = "/login";
        }, 1000);
    };

    const handleNo = () => {
        setModal(!modal)
    };
    return (
        <>
            {
                props.data.map((item, key) => {
                    return (
                        <>
                            <div className="single-list" key={key}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="list-image overlay">
                                            <img src={`http://localhost:8000/${item.chi_tiet_dien_thoai.dien_thoai.hinh_anh[0].duong_dan}`} style={{ width: '100%' }} alt="#" />
                                            <a href="#" className="buy" onClick={() => handleAddToCart(item.chi_tiet_dien_thoai.id)}><i className="fa fa-shopping-bag"></i></a>
                                            <h6>{item.chi_tiet_dien_thoai.dien_thoai.ten} - {item.chi_tiet_dien_thoai.gia_ban} VNĐ - {item.chi_tiet_dien_thoai.mau_sac.ten} -{item.chi_tiet_dien_thoai.dung_luong.ten}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })
            }
            <Modal isOpen={modal} size="sm" className="my-modal">
                <ModalBody style={{ backgroundColor: '#f8f9fa', color: '#333', padding: '20px', maxHeight: '100px', overflowY: 'auto' }}>
                    Đăng nhập rồi mới thêm vào được khách yêu owii!!!
                </ModalBody>
                <ModalFooter style={{ backgroundColor: '#f8f9fa', borderRadius: '0 0 10px 10px', borderTop: 'none', padding: '0px' }}>
                    <Button color="primary" style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', marginRight: '10px' }} onClick={handleYes}>Okey đi thôi!!</Button>
                    <Button color="secondary" style={{ backgroundColor: '#6c757d', color: '#fff', borderRadius: '5px' }} onClick={handleNo}>Honggg</Button>
                </ModalFooter>
            </Modal>
        </>
    )

}

export default TopLuotMua;
