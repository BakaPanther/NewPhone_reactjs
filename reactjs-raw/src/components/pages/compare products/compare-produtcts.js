import { useEffect, useState } from 'react';
import TestImg from '../../../assets/images/test-pic.png'
import Header from '../../header';
import Footer from '../../footer';
import { param } from 'jquery';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
export default function CompareProducts() {
    const [loading1, setLoading1] = useState(true);
	const [loading2, setLoading2] = useState(true);
    const [loading3, setLoading3] = useState(true);
	const [loading4, setLoading4] = useState(true);
    const [color, setColor] = useState("#ffffff");
	const override = {
		display: "block",
		margin: "0 auto",
		borderColor: "red",
	};//loadding
    const [scrolled, setScrolled] = useState(false);
    const [dienThoai1, setDienThoai1] = useState({});
    const [dienThoai2, setDienThoai2] = useState({});
    const [thongSo1, setThongSo1] = useState({});
    const [thongSo2, setThongSo2] = useState({});
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // Kiểm tra nếu người dùng đã cuộn xuống một khoảng cụ thể (ví dụ: 100px)
            if (scrollTop > 250) {
                setScrolled(true); // Khi cuộn xuống, cập nhật state để đổi tên classname
            } else {
                setScrolled(false); // Khi cuộn lên trên, đặt lại state để không đổi tên classname
            }
        };

        window.addEventListener('scroll', handleScroll); // Thêm sự kiện lắng nghe khi cuộn chuột

        return () => {
            window.removeEventListener('scroll', handleScroll); // Xóa sự kiện khi component unmount
        };
    }, []);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/chi-tiet-dien-thoai', {
            params: {
                id : localStorage.getItem('id1')
            }
        })
        .then((response) => {
            setDienThoai1(response.data.data);
            setLoading1(false);
        })
        .catch((error) => {
            // Xử lý lỗi ở đây
            console.error('Error:', error);
        });

        axios.get('http://127.0.0.1:8000/api/chi-tiet-dien-thoai', {
            params: {
                id : localStorage.getItem('id2')
            }
        })
        .then((response) => {
            setDienThoai2(response.data.data);
            setLoading2(false);
        })
        .catch((error) => {
            // Xử lý lỗi ở đây
            console.error('Error:', error);
        });

        axios.get(`http://127.0.0.1:8000/api/thong-so/${localStorage.getItem('id1')}`)
        .then((response) => {
            setThongSo1(response.data.data);
            setLoading3(false);
        })
        .catch((error) => {
            // Xử lý lỗi ở đây
            console.error('Error:', error);
        });

        axios.get(`http://127.0.0.1:8000/api/thong-so/${localStorage.getItem('id2')}`)
        .then((response) => {
            setThongSo2(response.data.data);
            setLoading4(false);
        })
        .catch((error) => {
            // Xử lý lỗi ở đây
            console.error('Error:', error);
        });
    }, []);
    console.log(dienThoai1);
    console.log(thongSo1);
    return (
        <>
            <Header />
            {!loading1 && !loading2 && !loading3 && !loading4? (
				<>
            <div className="compare-container">
                <ul className={scrolled ? "compare-items sticky" : "compare-items"}>
                    <li className='compare-info col-2'>
                        <p>So sánh điện thoại<br />
                            <b>{dienThoai1.ten}</b><br />
                            &<br />
                            <b>{dienThoai2.ten}</b><br />
                        </p>
                    </li>
                    <li className="product-a-container col-5">
                        <div className="product-a-img">
                            <img  src={`http://localhost:8000/${dienThoai1.hinh_anh[0].duong_dan}`} alt='' />
                        </div>
                        <div className='product-a-name'>
                            {dienThoai1.ten}
                        </div>
                        <div className='product-a-price'>
                            {dienThoai1.chi_tiet_dien_thoai[0].gia_ban}
                        </div>
                    </li>
                    <li className="product-b-container col-5">
                        <div className="product-b-img">
                        <img  src={`http://localhost:8000/${dienThoai2.hinh_anh[0].duong_dan}`} alt='' />
                        </div>
                        <div className='product-b-name'>
                        {dienThoai2.ten}
                        </div>
                        <div className='product-b-price'>
                        {dienThoai2.chi_tiet_dien_thoai[0].gia_ban}
                        </div>
                    </li>
                </ul>
                <div className='compare-detail-container'>
                    <table>
                        <thead>
                            <tr>
                            <th></th>
                            <th>Điện thoại 1</th>
                            <th>Điện thoại 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {thongSo1.map((item, key) => (
                            <tr key={key}>
                                <th className='compare-name'>{item.thong_so.ten}</th>
                                <td className='a-compare-detail'>{item.gia_tri}</td>
                                <td className='b-compare-detail'>
                                {/* Tìm thông số tương ứng từ thongSo2 */}
                                {thongSo2[key] ? thongSo2[key].gia_tri : ''}
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                </div>
            </div>
            </>
			) : (
				<ClipLoader
					color={color}
					loading={true}
					size={150}
					aria-label="Loading Spinner"
					data-testid="loader"
					cssOverride={override}
				/>
			)}
            <Footer/>
        </>
    )
}