import { InputOrder } from "./input-order";
import { TotalAmount } from "./total-amount";

export function ShoppingCart(){
    return(
        <>
        <div className="shopping-cart section">
		<div className="container">
			<div className="row">
				<div className="col-12">

					<table className="table shopping-summery">
						<thead>
							<tr className="main-hading">
								<th>PRODUCT</th>
								<th>NAME</th>
								<th className="text-center">UNIT PRICE</th>
								<th className="text-center">QUANTITY</th>
								<th className="text-center">TOTAL</th> 
								<th className="text-center"><i className="ti-trash remove-icon"></i></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#"/></td>
								<td className="product-des" data-title="Description">
									<p className="product-name"><a href="#">Women Dress</a></p>
									<p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
								</td>
								<td className="price" data-title="Price"><span>$110.00 </span></td>
								<td className="qty" data-title="Qty">
                                    <InputOrder/>
								</td>
								<td className="total-amount" data-title="Total"><span>$220.88</span></td>
								<td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon"></i></a></td>
							</tr>
							<tr>
								<td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#"/></td>
								<td className="product-des" data-title="Description">
									<p className="product-name"><a href="#">Women Dress</a></p>
									<p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
								</td>
								<td className="price" data-title="Price"><span>$110.00 </span></td>
								<td className="qty" data-title="Qty">
                                    <InputOrder/>
								</td>
								<td className="total-amount" data-title="Total"><span>$220.88</span></td>
								<td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon"></i></a></td>
							</tr>
							<tr>
								<td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#"/></td>
								<td className="product-des" data-title="Description">
									<p className="product-name"><a href="#">Women Dress</a></p>
									<p className="product-des">Maboriosam in a tonto nesciung eget  distingy magndapibus.</p>
								</td>
								<td className="price" data-title="Price"><span>$110.00 </span></td>
								<td className="qty" data-title="Qty">
                                <InputOrder/>
								</td>
								<td className="total-amount" data-title="Total"><span>$220.88</span></td>
								<td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon"></i></a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<TotalAmount/>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}