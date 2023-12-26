import Footer from "../../footer";
import { CheckOutForm } from "./checkout-form";

export function CheckOut(){
    return(
        <>
        		<section className="shop checkout section">
			<div className="container">
				<div className="row"> 
					<div className="col-lg-8 col-12">
						<div className="checkout-form">
							<h2>Make Your Checkout Here</h2>
							<p>Please register in order to checkout more quickly</p>
							<CheckOutForm/>
						</div>
					</div>
					<div className="col-lg-4 col-12">
						<div className="order-details">

							<div className="single-widget">
								<h2>CART  TOTALS</h2>
								<div className="content">
									<ul>
										<li>Sub Total<span>$330.00</span></li>
										<li>(+) Shipping<span>$10.00</span></li>
										<li className="last">Total<span>$340.00</span></li>
									</ul>
								</div>
							</div>
							<div className="single-widget">
								<h2>Payments</h2>
								<div className="content">
									<div className="checkbox">
										<label className="checkbox-inline" for="1"><input name="updates" id="1" type="checkbox"/> Check Payments</label>
										<label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox"/> Cash On Delivery</label>
										<label className="checkbox-inline" for="3"><input name="news" id="3" type="checkbox"/> PayPal</label>
									</div>
								</div>
							</div>
							<div className="single-widget payement">
								<div className="content">
									<img src="images/payment-method.png" alt="#"/>
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
        <Footer/>
        </>
    )
}