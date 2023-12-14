import SingleBlog from "./single-blog";

function ShopBlog(){
    return(
        <>
        <section className="shop-blog section">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="section-title">
						<h2>From Our Blog</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<SingleBlog/>
				<SingleBlog/>
                <SingleBlog/>
			</div>
		</div>
	</section>
        </>
    )
}
export default ShopBlog;