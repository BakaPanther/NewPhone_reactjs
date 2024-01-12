import axios from "axios";
import SingleComment from "./single-comment";
import React, { useState, useEffect } from "react";
export default function CommentsArea(props) {
    const [danhgia, setDanhGia] = useState([]);

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
    // console.log(danhgia);
    return (
        <>
            <div>
                <h3>Đánh giá</h3>
                <div className="comments-container col-8">
                    <SingleComment data={danhgia} idDienThoai={props.dienThoaiId} updateComments={updateComments} />
                </div>
            </div>
        </>
    )
}