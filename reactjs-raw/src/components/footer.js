
import { Navbar, NavbarBrand } from 'reactstrap';
function Footer() {
    return (
        <>
            <section className="shop-newsletter section">
                <div className="container">
                    <div className="inner-top">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-12">
                                <div className="inner">
                                    <h4>Newsletter</h4>
                                    <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                                    <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                        <input name="EMAIL" placeholder="Your email address" required="" type="email" />
                                        <button className="btn">Subscribe</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">

                <div className="footer-top section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-12">

                                <div className="single-footer about">
                                    <div className="logo">
                                        <a href="index.html"><img src="images/test_logo.png" alt="#" /></a>
                                    </div>
                                    <p className="text">NewPhone là một website bán điện thoại duy động uy tín và tiện lợi. Người dùng có thể dễ dàng xem các sản phẩm mới nhất, tìm kiếm,
và đăng ký để mua hàng. Ngoài ra còn có thể đánh giá sản phẩm bình luận chắc lượng. Điểm nỗi bật của NewPhone trang chủ thân thiện dễ sử
dụng, mang đến cho người dùng một trải nghiệm mua sắm tuyệt vời. Nếu bạn đang tìm kiếm một website bán điện thoại di động uy tín và
đáng tin cậy, thì NewPhone là một lựa chọn tuyệt vời.</p>
                                    <p className="call">Gọi cho chúng tôi 24/7<span><a href="tel:123456789">+84 911297370</a></span></p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">

                                <div className="single-footer links">
                                    <h4>Thông tin</h4>
                                    <ul>
                                        <li><a href="#"></a></li>
                                        <li><a href="#">Câu hỏi thường gặp</a></li>
                                        <li><a href="#">Điều khoản và điều kiện</a></li>
                                        <li><a href="#">Liên hệ</a></li>
                                        <li><a href="#">Giúp đở</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6 col-12">

                                <div className="single-footer links">
                                    <h4>Dịch vụ khách hàng</h4>
                                    <ul>
                                        <li><a href="#">Phương thức thanh toán</a></li>
                                        <li><a href="#">Hoàn tiền</a></li>
                                        <li><a href="#">Trả lại</a></li>
                                        <li><a href="#">Đang chuyển hàng</a></li>
                                        <li><a href="#">Chính sách bảo mật</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-3 col-md-6 col-12">

                                <div className="single-footer social">
                                    <h4>Liên lạc</h4>

                                    <div className="contact">
                                        <ul>
                                            <li>Thành Phố Hồ Chí Minh.</li>
                                            <li>588 Huỳnh Tấn Phát.</li>
                                            <li>newphone@gmail.com</li>
                                            <li>+84 911297 370</li>
                                        </ul>
                                    </div>

                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-flickr"></i></a></li>
                                        <li><a href="#"><i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="left">
                                        <p>© 2024 <a href="http://www.wpthemesgrid.com" target="_blank">NewPhone</a>  - Đã đăng ký bản quyền.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="right">
                                        <img src="../images/payments.png" alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer