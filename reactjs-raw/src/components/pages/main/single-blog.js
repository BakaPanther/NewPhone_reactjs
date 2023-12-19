function SingleBlog(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="shop-single-blog">
                    <img src={`http://localhost:8000/` + props.data.hinh_anh[0].duong_dan} alt="#"/>
                        <div className="content">
                            <a href="#" className="title">{props.data.ten}</a>
                            <a href="#" className="more-btn">{props.data.chi_tiet_dien_thoai[0].gia_ban}</a>
                        </div>
                </div>

            </div>
        </>
    )
}
export default SingleBlog;