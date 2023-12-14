export function ShopTop() {
    return (
        <>
            <div className="col-12">
								{/* <!-- Shop Top --> */}
								<div className="shop-top">
									<div className="shop-shorter">
										<div className="single-shorter">
											<label>Show :</label>
											<select style={{display: 'none'}}>
												<option selected="selected">09</option>
												<option>15</option>
												<option>25</option>
												<option>30</option>
											</select><div className="nice-select" tabindex="0"><span className="current">09</span><ul className="list"><li data-value="09" className="option selected">09</li><li data-value="15" className="option">15</li><li data-value="25" className="option">25</li><li data-value="30" className="option">30</li></ul></div>
										</div>
										<div className="single-shorter">
											<label>Sort By :</label>
											<select style={{display: 'none'}}>
												<option selected="selected">Name</option>
												<option>Price</option>
												<option>Size</option>
											</select><div className="nice-select" tabindex="0"><span className="current">Name</span><ul className="list"><li data-value="Name" className="option selected">Name</li><li data-value="Price" className="option">Price</li><li data-value="Size" className="option">Size</li></ul></div>
										</div>
									</div>
								</div>
								{/* <!--/ End Shop Top --> */}
							</div>
        </>
    )
}