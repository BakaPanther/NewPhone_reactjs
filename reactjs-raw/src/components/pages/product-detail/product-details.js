import Footer from "../../footer";
import CommentsArea from "./comments-area";
import ProductSpec from "./product-spec";
import QuantityPicker from "./quantity-picker";
import SimilarProducts from "./similar-products";

export default function ProductDetails() {
    return (
        <>
            <div className="product-detail-container">
                <div className="row">
                    <div className="col-4">
                        <div className="product-detail-img">

                            <img src="https://via.placeholder.com/550x750" alt="#" />
                        </div>
                    </div>
                    <div className="col-8">
                        <h1>Một cái tên điện thoại nào đó</h1>
                        <ul className="product-capacity">
                            <li className="capacity">
                                <a className="capacity-text">Dung lượng</a>
                                <a>Giá tiền</a>
                            </li>
                            <li className="capacity">
                                <a className="capacity-text">Dung lượng</a>
                                <a>Giá tiền</a>
                            </li>
                            <li className="capacity">
                                <a className="capacity-text">Dung lượng</a>
                                <a>Giá tiền</a>
                            </li>
                        </ul>
                        <h2>Chọn màu để xem giá</h2>
                        <ul className="product-color">
                            <li className="color">
                                <a className="color-text">Màu</a>
                                <a>Giá tiền</a>
                            </li>
                            <li className="color">
                                <a className="color-text">Màu</a>
                                <a>Giá tiền</a>
                            </li>
                            <li className="color">
                                <a className="color-text">Màu</a>
                                <a>Giá tiền</a>
                            </li>
                            <li className="color">
                                <a className="color-text">Màu</a>
                                <a>Giá tiền</a>
                            </li>
                            <li className="color">
                                <a className="color-text">Màu</a>
                                <a>Giá tiền</a>
                            </li>
                            <li className="color">
                                <a className="color-text">Màu</a>
                                <a>Giá tiền</a>
                            </li>
                        </ul>
                        <div className="product-quantity">
                        <h4 className="col-2">Số lượng :</h4>
                        <QuantityPicker/>
                        <div className="product-detail-price col-8">100$</div>
                        </div>
                        <div className="button6">
                        <a href="#" class="btn">Thêm vào giỏ hàng</a>
                        <a href="#" class="btn">Mua ngay</a>
                        </div>
                        
                    </div>
                    <ProductSpec/>
                    <CommentsArea/>
                    <SimilarProducts/>
                </div>
            </div>
            <Footer />
        </>
    )
}