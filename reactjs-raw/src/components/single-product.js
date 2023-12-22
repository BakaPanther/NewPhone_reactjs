import { NavLink } from "react-router-dom";


function SingleProduct() {
	return (
		<>
			<div className="single-product">
				<div className="product-img">
					<NavLink to='/product-details'>
						<img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
						<img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
						<span className="out-of-stock">Hot</span>
					</NavLink>
					<div className="button-head">
						<div className="product-action">
							<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
							<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
							<a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
						</div>
						<div className="product-action-2">
							<a title="Add to cart" href="#">Add to cart</a>
						</div>
					</div>
				</div>
				<div className="product-content">
					<h3><NavLink to='/product-details'>Black Sunglass For Women</NavLink></h3>
					<div className="product-price">
						<span className="old">$60.00</span>
						<span>$50.00</span>
					</div>
				</div>
			</div>
		</>
	)
}
export default SingleProduct;