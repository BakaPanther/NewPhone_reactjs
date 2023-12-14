import Footer from "../../footer";
import { CheckOutForm } from "./checkout-form";

export function CheckOut(){
    return(
        <>
        		<section class="shop checkout section">
			<div class="container">
				<div class="row"> 
					<div class="col-lg-8 col-12">
						<div class="checkout-form">
							<h2>Make Your Checkout Here</h2>
							<p>Please register in order to checkout more quickly</p>
							<CheckOutForm/>
						</div>
					</div>
					<div class="col-lg-4 col-12">
						<div class="order-details">

							<div class="single-widget">
								<h2>CART  TOTALS</h2>
								<div class="content">
									<ul>
										<li>Sub Total<span>$330.00</span></li>
										<li>(+) Shipping<span>$10.00</span></li>
										<li class="last">Total<span>$340.00</span></li>
									</ul>
								</div>
							</div>
							<div class="single-widget">
								<h2>Payments</h2>
								<div class="content">
									<div class="checkbox">
										<label class="checkbox-inline" for="1"><input name="updates" id="1" type="checkbox"/> Check Payments</label>
										<label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox"/> Cash On Delivery</label>
										<label class="checkbox-inline" for="3"><input name="news" id="3" type="checkbox"/> PayPal</label>
									</div>
								</div>
							</div>
							<div class="single-widget payement">
								<div class="content">
									<img src="images/payment-method.png" alt="#"/>
								</div>
							</div>
							<div class="single-widget get-button">
								<div class="content">
									<div class="button">
										<a href="#" class="btn">proceed to checkout</a>
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