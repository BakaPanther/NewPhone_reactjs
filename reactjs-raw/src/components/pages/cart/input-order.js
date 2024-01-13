import axios from "axios";
import React, { useState, useEffect } from "react"
import notifyError from "../../items/noti_error";
export function InputOrder(props) {
    const [soluong, setSoLuong] = useState(props.data);
    const [inputChanged, setInputChanged] = useState(false);
    // console.log(props.chi_tiet_data);
    const handleInputChange = (e) => {
        if (e.target.validity.valid) {
            if (e.target.value < 1) {
                notifyError("Số lượng phải lớn hơn 0");
                const newTraVe = 1;
                setSoLuong(newTraVe);
                props.onSoLuongChange(newTraVe);
            } else {
                if (e.target.value > props.chi_tiet_data.so_luong) {
                    notifyError("Số lượng đã lớn hơn ở trong khô vui lòng chọn số lượng lại");
                    const newTraVe = props.chi_tiet_data.so_luong;
                    setSoLuong(newTraVe);
                    props.onSoLuongChange(newTraVe);
                } else {
                    const newSoLuong = parseInt(e.target.value, 10);
                    setSoLuong(newSoLuong);
                    setInputChanged(true);
                    props.onSoLuongChange(newSoLuong);
                }
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (inputChanged && soluong > 0) {
                await axios.post('http://127.0.0.1:8000/api/khach-hang/cap-nhat-gio-hang', {
                    "khach_hang_id": props.khach_hang_data.id,
                    "chi_tiet_dien_thoai_id": props.chi_tiet_data,
                    "so_luong": soluong
                });
                setInputChanged(false); // Đánh dấu rằng đã xử lý xong
            }
        };

        fetchData();
    }, [soluong, inputChanged, props.khach_hang_data.id, props.chi_tiet_data]);



    return (
        <>
            <div className="input-group">
                <input type="number" name="so_luong" className="input-number" value={soluong}
                    onChange={handleInputChange} />
            </div>
        </>
    )
}