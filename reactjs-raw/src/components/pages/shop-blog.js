import SingleBlog from "./single-blog";

function ShopBlog(){
    return(
        <>
        <section class="shop-blog section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="section-title">
						<h2>From Our Blog</h2>
					</div>
				</div>
			</div>
			<div class="row">
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