import Footer from "../../footer";
import Payment_method from "../../../assets/images/payment-method.png";
import { CheckOutForm } from "./checkout-form";
import SingleAboutProduct from "./single-about-product";
import PayMentMethod from "./payment-method";

export function CheckOut() {
	return (
		<>
			<section className="shop checkout section">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-12">
							<div className="checkout-form">
								<h2>Make Your Checkout Here</h2>
								<CheckOutForm />
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className="order-details">
								<div className="single-widget">
									<h2>Giỏ hàng</h2>
									<div className="cart-totals">
										<SingleAboutProduct />
										<SingleAboutProduct />
										<SingleAboutProduct />
										<SingleAboutProduct />
									</div>
								</div>
								<div className="single-widget">
									<div className="totals-price">
										<h2>Tổng tiền tạm tính:</h2>
										<div className="price">xx,xxx,xxxđ</div>
									</div>
								</div>
								<div className="single-widget">
									<h2>Phương thức thanh toán</h2>
									<div className="payments">
										Vui lòng chọn phương thức thanh toán
										<form className="payment-options">
											{/* <PayMentMethod/> */}
											<div className="form-check">
												<label>
													<input
														type="radio"
														name="#"
														value="option1"
														className="form-check-input"
													/>
													Thanh toán khi nhận hàng
												</label>
											</div>
											<div className="form-check">
												<label>
													<input
														type="radio"
														name="#"
														value="option2"
														className="form-check-input"
													/>
													Qua thẻ
												</label>
											</div>
											<div className="form-group">
												<button className="btn btn-primary mt-2" type="submit">
													Save
												</button>
											</div>

										</form>
									</div>
								</div>
								<div class="single-widget payement">
								<div class="payment-method">
									<img src={Payment_method} alt=""/>
								</div>
							</div>
								<div className="single-widget get-button">
									<div className="content">
										<div className="button">
											<a href="#" className="btn">proceed to checkout</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}