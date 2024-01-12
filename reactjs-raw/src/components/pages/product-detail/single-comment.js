import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import LikeDislike from './like-dislike';
import RatingStar from './rating-star';
import Cookies from 'js-cookie';
import notifySuccess from '../../items/noti_success';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import axios from 'axios';

export default function SingleComment(props) {
    const [modal, setModal] = useState(false);
    const [ratingValue, setRatingValue] = useState(0);
    const [moTa, setMoTa] = useState('');
    const [khach_hang_id, setKhach_hang_id] = useState(JSON.parse(Cookies.get('user')));
    const [kiemtradamuathanhcong, setKiemTraDaMuaThanhCong] = useState([]);
    function handleStarReview() {
        axios.get('http://127.0.0.1:8000/api/khach-hang/xet-don-hang-da-mua', {
            params: {
                khach_hang_id: khach_hang_id.id,
            }
        })
            .then(response => {
                //đoan kiểm tra điện thoại đã mua chưa nếu ko sẽ k đc đánh giá
                const daMua = response.data.data.some(item => props.idDienThoai == item.dien_thoai_id);

                if (daMua) {
                    setModal(true);
                } else {
                    notifySuccess("Bạn chưa mua điện thoại này.");
                }
            })
            .catch(error => {
                // Hiện thông báo nếu có lỗi xảy ra
                console.error("Lỗi: ", error);
            });

        if (!Cookies.get('accessToken')) {
            notifySuccess("Vui lòng đăng nhập");
        }
    }

    const toggleModal = () => {
        setModal(!modal);
    };

    const sendHandle = () => {
        // console.log('Số sao:', ratingValue);
        // console.log('Nội dung đánh giá:', moTa);

        axios.post('http://127.0.0.1:8000/api/them-moi-danh-gia', {
            'khach_hang_id': khach_hang_id.id,
            'dien_thoai_id': props.idDienThoai,
            'so_sao': ratingValue,
            'mo_ta': moTa
        }).then(response => {
            console.log(response.data.data);

            // Cập nhật danh sách đánh giá bằng cách gọi hàm từ props
            props.updateComments(response.data.data);

            toggleModal();
        }).catch(error => {
            // Hiện thông báo nếu có lỗi xảy ra
            console.error("Lỗi: ", error);
        });

    };

    const handleStarClick = (value) => {
        setRatingValue(value);
    };

    //hàm tạo ngôi sao
    const renderStars = () => {
        const stars = [];
        const maxStars = 5;

        for (let i = 1; i <= maxStars; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star ${i <= ratingValue ? 'active' : ''}`}
                    onClick={() => handleStarClick(i)}
                    style={{ fontSize: '30px' }} // Tăng kích thước font chữ cho biểu tượng ngôi sao
                >
                    &#9733;
                </span>
            );
        }

        return stars;
    };

    return (
        <>
            {/* xuất danh sách đánh giá điện thoại đó */}
            {props.data.map(function (item, key) {
                return (
                    <>
                        {item.dien_thoai_id == props.idDienThoai ? (
                            <div className="single-comment" key={key}>
                                <div className="#">{item.khach_hang_id.ten}</div>
                                <RatingStar sosao={item.so_sao} />
                                <div className="comment-text">{item.mo_ta}</div>
                                <div>----------------------------</div>
                            </div>
                        ) : (
                            ''
                        )}
                    </>
                );
            })}

            {/* Button để mở modal */}
            <button type="button" className="btn btn-success" onClick={handleStarReview}>
                Viết đánh giá
            </button>

            {/* Modal */}
            <Modal isOpen={modal} size="lg" className="my-modal">
                <ModalBody
                    style={{
                        backgroundColor: '#f8f9fa',
                        color: '#333',
                        overflowY: 'auto',
                        width: '80%',
                        margin: 'auto',
                        maxHeight: '80vh',
                    }}
                >
                    <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Chọn số sao và viết đánh giá</h2>
                    <ModalFooter
                        style={{
                            backgroundColor: '#f8f9fa',
                            borderRadius: '0 0 10px 10px',
                            borderTop: 'none',
                            width: '60%',
                            padding: '20px 0px 20px 0px',
                        }}
                    >
                        <div
                            className="rating-area"
                            style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}
                        >
                            {renderStars()}
                        </div>
                        <div
                            className="contact"
                            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <textarea
                                placeholder="Nhập mô tả"
                                name="mo_ta"
                                style={{ width: '100%', minHeight: '80px', margin: '10px 0' }}
                                value={moTa}
                                onChange={(e) => setMoTa(e.target.value)}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <button type="button" className="btn btn-primary" onClick={sendHandle}>
                                    Gửi đánh giá
                                </button>
                            </div>
                        </div>
                    </ModalFooter>
                </ModalBody>
            </Modal>
        </>
    );
}
