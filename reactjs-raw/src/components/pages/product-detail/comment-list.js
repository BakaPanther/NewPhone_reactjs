import LikeDislike from "./like-dislike";
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

export default function CommentList(props) {
    const [idtraloibinhluan, setIdTraLoiBinhLuan] = useState(null);
    const [vanban, setVanBan] = useState("");
    const [khach_hang_id, setKhach_hang_id] = useState(JSON.parse(Cookies.get('user')));
    const [vanbanmoi, setVanBanMoi] = useState("");

    const handleReply = (commentId) => {
        setIdTraLoiBinhLuan(commentId);
        setVanBan("");
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
        </>
    );
}
