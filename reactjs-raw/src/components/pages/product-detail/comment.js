import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './comment-list';
import notifyInfor from '../../items/noti_success';
import Cookies from 'js-cookie';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
export default function Comment(props) {
    const [binhluan, setBinhLuan] = useState([]);
    const [idtraloibinhluan, setIdTraLoiBinhLuan] = useState(null);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = () => {
        axios.get('http://127.0.0.1:8000/api/danh-sach-binh-luan', {
            params: {
                dien_thoai_id: props.dienThoaiId
            }
        })
            .then(response => {
                setBinhLuan(response.data.data);
            })
            .catch(error => {
                console.error("Lỗi khi lấy danh sách bình luận: ", error);
            });
    };
    const lstComments = (newComments) => {
        setBinhLuan(newComments);
    };
    const handleButtonClick = () => {
        // Khi nút "Bình luận" được bấm
        if (Cookies.get('accessToken')) {
            setIdTraLoiBinhLuan('someUniqueId'); // Đặt giá trị để hiển thị form ở thẻ con
        }else{
            setModal(true);
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
            <div>
                <h3>Bình Luận</h3>
                <div className="comments-container col-8">
                    <CommentList data={binhluan} idDienThoai={props.dienThoaiId} lstComments={lstComments} idtraloibinhluan={idtraloibinhluan} />
                </div>
                <button type="button" class="btn btn-primary" onClick={handleButtonClick}>Bình luận</button>

            </div>
            <Modal isOpen={modal} size="sm" className="my-modal">
                <ModalBody style={{ backgroundColor: '#f8f9fa', color: '#333', padding: '20px', maxHeight: '100px', overflowY: 'auto' }}>
                    Đăng nhập rồi mới được bình luận khách yêu owii!!!
                </ModalBody>
                <ModalFooter style={{ backgroundColor: '#f8f9fa', borderRadius: '0 0 10px 10px', borderTop: 'none', padding: '0px' }}>
                    <Button color="primary" style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', marginRight: '10px' }} onClick={handleYes}>Okey đi thôi!!</Button>
                    <Button color="secondary" style={{ backgroundColor: '#6c757d', color: '#fff', borderRadius: '5px' }} onClick={handleNo}>Honggg</Button>
                </ModalFooter>
            </Modal>

        </>
    );
}