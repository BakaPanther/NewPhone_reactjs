import LikeDislike from "./like-dislike";
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import notifyInfor from '../../items/noti_success';
import Cookies from 'js-cookie';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export default function CommentList(props) {
    const [idtraloibinhluan, setIdTraLoiBinhLuan] = useState(null);
    const [vanban, setVanBan] = useState("");
    const [khach_hang_id, setKhach_hang_id] = useState(JSON.parse(Cookies.get('user')));
    const [vanbanmoi, setVanBanMoi] = useState("");
    const [modal, setModal] = useState(false);
    const handleReply = (commentId) => {
        if(Cookies.get('accessToken')){
            setIdTraLoiBinhLuan(commentId);
            setVanBan("");
        }else{
            setModal(true);
        }
    };

    const handleCancelReply = () => {
        setIdTraLoiBinhLuan(null);
        setVanBan("");
    };

    const handleReplyTextChange = (e) => {
        setVanBan(e.target.value);
    };

    const handlePostReply = () => {
        axios.post('http://127.0.0.1:8000/api/them-moi-binh-luan-cap-hai', {
            'khach_hang_id': khach_hang_id.id,
            'dien_thoai_id': props.idDienThoai,
            'binh_luan_cap_mot_id': idtraloibinhluan,
            'noi_dung': vanban
        })
            .then(response => {
                console.log(response);
                // Cập nhật danh sách đánh giá bằng cách gọi hàm từ props
                props.lstComments(response.data.data);

            })
            .catch(error => {
                console.error("Lỗi:", error);
            });

        handleCancelReply();
    };

    const handlePostNewCommand = () => {
        axios.post('http://127.0.0.1:8000/api/them-moi-binh-luan-cap-mot', {
            'khach_hang_id': khach_hang_id.id,
            'dien_thoai_id': props.idDienThoai,
            'noi_dung': vanbanmoi
        })
            .then(response => {
                console.log(response);
                // Cập nhật danh sách đánh giá bằng cách gọi hàm từ props
                props.lstComments(response.data.data);
                setVanBanMoi("");
            })
            .catch(error => {
                console.error("Lỗi:", error);
            });

     
    };

    const handleNewTextChange = (e) => {
        setVanBanMoi(e.target.value);
    }
    const handleX = () => {
        setVanBanMoi("");
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
    return (
        <>
            {props.data.map(function (item, key) {
                return (
                    <div className="single-comment" key={key}>
                        <div className="#" style={{ color: "#F4A460" }}>{item.khach_hang_id?.ten}</div>
                        <div className="comment-text">
                            {item.noi_dung}
                            {item.binh_luan_cap_hai && item.binh_luan_cap_hai.map(function (item1, key) {
                                return (
                                    <React.Fragment key={key}>
                                        <div className="#" style={{ color: "#F4A460" }}>{item1.khach_hang?.ten}</div>
                                        {item1.noi_dung}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                        <button
                            style={{ margin: "6px 0px 0px 4px" }}
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handleReply(item.id)}
                        >
                            <i className="fas fa-reply"></i> Trả lời
                        </button>
                        {/* Hiển thị form trả lời */}
                        {idtraloibinhluan === item.id && (
                            <div className="reply-form">
                                <textarea
                                    value={vanban}
                                    onChange={handleReplyTextChange}
                                    placeholder="Viết câu trả lời..."
                                ></textarea>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handlePostReply}
                                    >
                                        Gửi
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={handleCancelReply}
                                    >
                                        Hủy
                                    </button>
                                </div>
                            </div>
                        )}
                        <LikeDislike />
                    </div>

                );
            })}
            {props.idtraloibinhluan && (
                <div className="reply-form">
                    <textarea
                        value={vanbanmoi}
                        onChange={handleNewTextChange}
                        placeholder="Viết câu trả lời..."
                    ></textarea>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handlePostNewCommand}>
                            Gửi
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleX}>
                            Hủy
                        </button>
                    </div>
                </div>
            )}
              <Modal isOpen={modal} size="sm" className="my-modal">
                <ModalBody style={{ backgroundColor: '#f8f9fa', color: '#333', padding: '20px', maxHeight: '100px', overflowY: 'auto' }}>
                    Đăng nhập rồi mới được trả lời bình luận khách yêu owii!!!
                </ModalBody>
                <ModalFooter style={{ backgroundColor: '#f8f9fa', borderRadius: '0 0 10px 10px', borderTop: 'none', padding: '0px' }}>
                    <Button color="primary" style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', marginRight: '10px' }} onClick={handleYes}>Okey đi thôi!!</Button>
                    <Button color="secondary" style={{ backgroundColor: '#6c757d', color: '#fff', borderRadius: '5px' }} onClick={handleNo}>Honggg</Button>
                </ModalFooter>
            </Modal>

        </>
    );
}
