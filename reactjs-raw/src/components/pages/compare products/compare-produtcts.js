import { useEffect, useState } from 'react';
import TestImg from '../../../assets/images/test-pic.png'
import Header from '../../header';
import Footer from '../../footer';
export default function CompareProducts() {
    const [scrolled, setScrolled] = useState(false);

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
    return (
        <>
            <Header />
            <div className="compare-container">
                <ul className={scrolled ? "compare-items sticky" : "compare-items"}>
                    <li className='compare-info col-2'>
                        <p>So sánh điện thoại<br />
                            <b>{'Điện thoại A'}</b><br />
                            &<br />
                            <b>{'Điện thoại B'}</b><br />
                        </p>
                    </li>
                    <li className="product-a-container col-5">
                        <div className="product-a-img">
                            <img src={TestImg} alt='' />
                        </div>
                        <div className='product-a-name'>
                            Tên điện thoại A
                        </div>
                        <div className='product-a-price'>
                            5,xxx,xxxđ
                        </div>
                    </li>
                    <li className="product-b-container col-5">
                        <div className="product-b-img">
                            <img src={TestImg} alt='' />
                        </div>
                        <div className='product-b-name'>
                            Tên điện thoại B
                        </div>
                        <div className='product-b-price'>
                            5,xxx,xxxđ
                        </div>
                    </li>
                </ul>
                <div className='compare-detail-container'>
                    <table>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr >
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gbaisjdniasnd oiajsndifjna skjdf akjndfkjans fjka sdfndnffff fffffffff fffffffffffffffff ffffffffffffffffffff
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr >
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gbaisjdniasnd oiajsndifjna skjdf akjndfkjans fjka sdfndnffff fffffffff fffffffffffffffff ffffffffffffffffffff
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr >
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gbaisjdniasnd oiajsndifjna skjdf akjndfkjans fjka sdfndnffff fffffffff fffffffffffffffff ffffffffffffffffffff
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr >
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gbaisjdniasnd oiajsndifjna skjdf akjndfkjans fjka sdfndnffff fffffffff fffffffffffffffff ffffffffffffffffffff
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr >
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gbaisjdniasnd oiajsndifjna skjdf akjndfkjans fjka sdfndnffff fffffffff fffffffffffffffff ffffffffffffffffffff
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                        <tr>
                            <th className='compare-name '>Ram</th>
                            <td className='a-compare-detail '>
                                8gb
                            </td>
                            <td className='b-compare-detail '>
                                8gb
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    )
}