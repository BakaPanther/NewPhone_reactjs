import Footer from "../../footer";
import SingleProduct from "../../single-product";
import { Categories } from "./categories";
import { Manufacturers } from "./manufactures";
import { RecentPost } from "./recent-post";
import { ShopByPrice } from "./shop-by-price";
import { ShopTop } from "./shop-top";


export function ProductContainer(){
    return(
        <>
        <section className="product-area shop-sidebar shop section">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-12">
						<div className="shop-sidebar">
								{/* <!-- Single Widget -->*/}
								<Categories/>
                                {/* <!-- End Single Widget -->*/}	
								<ShopByPrice/>
									{/* <!--/ End Shop By Price -->
								<!-- Single Widget --> */}
								<RecentPost/>
								{/* <!--/ End Single Widget -->
								<!-- Single Widget --> */}
								<Manufacturers/>
								{/* <!--/ End Single Widget --> */}
						</div>
					</div>
					<div className="col-lg-9 col-md-8 col-12">
						<div className="row">
							<ShopTop/>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-6 col-12">
								<SingleProduct/>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<SingleProduct/>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<SingleProduct/>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<SingleProduct/>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<SingleProduct/>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<SingleProduct/>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<SingleProduct/>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<SingleProduct/>
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<SingleProduct/>
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