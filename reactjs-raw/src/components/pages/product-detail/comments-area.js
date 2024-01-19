import axios from "axios";
import SingleComment from "./single-comment";
import React, { useState, useEffect } from "react";
import StarRating from "./star-rating";
export default function CommentsArea(props) {
    const [danhgia, setDanhGia] = useState([]);
    const [sosaotrungbinh, setSoSaoTrungBinh] = useState([]);
    
    useEffect(() => {
        fetchComments();
    }, []);
    const fetchComments = () => {
        axios.get('http://127.0.0.1:8000/api/danh-sach-danh-gia')
            .then(response => {
                setDanhGia(response.data.data);
            })
            .catch(error => {
                console.error("Lỗi: ", error);
            });
    };

    //xét lại giá trị đánh giá
    const updateComments = (newComments) => {
        setDanhGia(newComments);
    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/so-sao-danh-gia-trung-binh', {
            params: {
                dien_thoai_id: props.dienThoaiId
            }
        }).then(response => {
            setSoSaoTrungBinh(response.data.data);
        }).catch(error => {
            // Xử lý lỗi
            console.error('Lỗi khi gửi yêu cầu:', error);
        });
    },[]);

    const updateRatingValue = (value) => {
        setSoSaoTrungBinh(value);
    };
    // console.log(danhgia);
    return (
        <>
            <div>
                <h3><StarRating rating={sosaotrungbinh}/></h3>
                <div className="comments-container col-8">
                    <SingleComment data={danhgia} idDienThoai={props.dienThoaiId} updateComments={updateComments}  updateRating={updateRatingValue} />
                </div>
            </div>
        </>
    )
}