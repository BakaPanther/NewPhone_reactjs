import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './comment-list';

export default function Comment(props) {
    const [binhluan, setBinhLuan] = useState([]);
    const [idtraloibinhluan, setIdTraLoiBinhLuan] = useState(null);
    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = () => {
        axios.get('http://127.0.0.1:8000/api/danh-sach-binh-luan',{
            params:{
                dien_thoai_id:props.dienThoaiId
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
      setIdTraLoiBinhLuan('someUniqueId'); // Đặt giá trị để hiển thị form ở thẻ con
    };
    return (
        <>
            <div>
                <h3>Bình Luận</h3>
                <div className="comments-container col-8">
                    <CommentList data={binhluan} idDienThoai={props.dienThoaiId} lstComments={lstComments}  idtraloibinhluan={idtraloibinhluan} />
                </div>
                <button type="button" class="btn btn-primary" onClick={handleButtonClick}>Bình luận</button>
             
            </div>


        </>
    );
}