
function SingleTab(props) {
    // console.log(props.data.hinh_anh);
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                    <div className="product-img">
                        <a href="#">
                            {props.data.hinh_anh && props.data.hinh_anh.length > 0 ? (
                                <img src={`http://localhost:8000/` + props.data.hinh_anh[0].duong_dan} alt="#" />
                            
                                ) : (
                                <span>Không có dữ liệu</span>
                            )}
                        </a>
                        {/* <span className="out-of-stock">Hot</span> */}
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
                        <h3><a href="product-details.html">{props.data.ten}</a></h3>
                        <div className="product-price">
                            <span className="old">$60.00</span>
                            <span>{props.data.chi_tiet_dien_thoai[0].gia_ban}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleTab;