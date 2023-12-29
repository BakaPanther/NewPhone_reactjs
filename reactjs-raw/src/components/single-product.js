import { NavLink } from "react-router-dom";

function SingleProduct(props) {
  return (
    <>
      <div className="single-product">
        <div className="product-img">
          <NavLink to='/product-details'>
            {props.data && props.data.dien_thoai_id && (
              <>
                <img className="default-img" src={`http://localhost:8000/${props.data.dien_thoai_id.hinh_anh[0].duong_dan}`} alt="#" />
                <img className="hover-img" src={`http://localhost:8000/${props.data.dien_thoai_id.hinh_anh[0].duong_dan}`} alt="#" />
              </>
            )}
            <span className="out-of-stock">Hot</span>
          </NavLink>
          <div className="button-head">
            <div className="product-action">
              <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className="ti-eye"></i><span>Quick Shop</span></a>
              <a title="Wishlist" href="#"><i className="ti-heart"></i><span>Add to Wishlist</span></a>
              <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
            </div>
            <div className="product-action-2">
              <a title="Add to cart" href="#">Add to cart</a>
            </div>
          </div>
        </div>
        <div className="product-content">
		{props.data && props.data.dien_thoai_id && (
              <>
          <h3><NavLink to='/product-details'>{props.data.dien_thoai_id.ten}</NavLink></h3>
          <div className="product-price">
            <span className="old">{props.data.mau_sac_id.ten}</span>
            <span>{props.data.gia_ban}</span>
          </div>
		  </>
            )}
        </div>
      </div>
    </>
  )
}

export default SingleProduct;
