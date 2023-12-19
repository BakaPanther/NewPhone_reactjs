import SingleBlog from "./single-blog";

function ShopBlog(props){
	const lst_dien_thoai = props.data.dienThoai.map((item,key) =>{
		return(
			<SingleBlog data={item} key={key}/>
		)
	})
    return(
        <>
        <section className="shop-blog section">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="section-title">
						<h2>{props.data.ten}</h2>
					</div>
				</div>
			</div>
			<div className="row">
				{lst_dien_thoai}
			</div>
		</div>
	</section>
        </>
    )
}
export default ShopBlog;