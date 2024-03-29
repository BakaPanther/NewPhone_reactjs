import { NavLink } from "react-router-dom";
import notifySuccess from './items/noti_success';
import notifyInfor from './items/noti_success';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
function Header() {
  const [modal, setModal] = useState(false);
  function handleLogout() {
    // Xóa accessToken từ cookie khi người dùng đăng xuất
    Cookies.remove('accessToken');
    notifySuccess("Đăng Xuất Thành Công");
  }
  function handleClick() {
    if (Cookies.get('accessToken')) {
      window.location.href = "/cart";
    }
    else {
      setModal(true);
    }

  }
  function handleMyAccountClick() {
    if (Cookies.get('accessToken')) {
      window.location.href = "/my-account";
    }
    else {
      setModal(true);
    }

  }
  const handleYes = () => {
    notifyInfor('Đang chuyển hướng đến đăng nhập');
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };

  const handleNo = () => {
    setModal(!modal)
  };
  return (
    <>
      {/* <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}
      <header className="header shop">

        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">

                <div className="top-left">
                  <ul className="list-main">
                    <li><i className="ti-headphone-alt"></i> +84 911 29730</li>
                    <li><i className="ti-email"></i> newphone@gmail.com</li>
                  </ul>
                </div>

              </div>
              <div className="col-lg-8 col-md-12 col-12">

                <div className="right-content">
                  <ul className="list-main">
                    <li><i className="ti-location-pin"></i>Vị trí cửa hàng</li>
                    <li><i className="ti-alarm-clock"></i> <a href="#">Giao dịch hàng ngày</a></li>
                    <li><i className="ti-user"></i> <NavLink onClick={handleMyAccountClick} >Tài khoản của tôi</NavLink></li>
                    {
                      Cookies.get('accessToken') ? (
                        <li><i className="ti-user"></i><NavLink onClick={handleLogout}>Đăng xuất</NavLink></li>
                      ) : (
                        <li><i className="ti-power-off"></i><NavLink to='/login'>Đăng nhập</NavLink></li>
                      )
                    }
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="middle-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-12">

                <div className="logo">
                  <NavLink to="/"><img src="../images/test_logo.png" alt="logo" /></NavLink>
                </div>

                <div className="search-top">
                  <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>

                  <div className="search-top">
                    <form className="search-form">
                      <input type="text" placeholder="Search here..." name="search" />
                      <button defaultValue="search" type="submit"><i className="ti-search"></i></button>
                    </form>
                  </div>

                </div>

                <div className="mobile-nav"></div>
              </div>
              <div className="col-lg-8 col-md-7 col-12">
                <div className="search-bar-top">
                  <div className="search-bar">
                    <form>
                      <input name="search" placeholder="Search Products Here....." type="search" />
                      <button className="btnn"><i className="ti-search"></i></button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-12">
                <div className="right-bar">

                  <div className="sinlge-bar">
                    <NavLink to={'/wishlist-products'} className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></NavLink>
                  </div>
                  <div className="sinlge-bar shopping">
                    <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span>
                    </a>
                    <div className="shopping-item">
                      <div className="dropdown-cart-header">
                        <span>2 Items</span>
                        <a href="#">View Cart</a>
                      </div>
                      <ul className="shopping-list">
                        <li>
                          <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                          <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                          <h4><a href="#">Woman Ring</a></h4>
                          <p className="quantity">1x - <span className="amount">$99.00</span></p>
                        </li>
                        <li>
                          <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                          <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                          <h4><a href="#">Woman Necklace</a></h4>
                          <p className="quantity">1x - <span className="amount">$35.00</span></p>
                        </li>
                      </ul>
                      <div className="bottom">
                        <div className="total">
                          <span>Total</span>
                          <span className="total-amount">$134.00</span>
                        </div>
                        <a href="checkout.html" className="btn animate">Checkout</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-inner" id="myHeader">
          <div className="container">
            <div className="cat-nav-head">
              <div className="row">
                <div className="col-lg-3">
                  {/* <div className="all-category">
                    <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
                    <ul className="main-category">
                      <li><a href="#">New Arrivals <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        <ul className="sub-category">
                          <li><a href="#">accessories</a></li>
                          <li><a href="#">best selling</a></li>
                          <li><a href="#">top 100 offer</a></li>
                          <li><a href="#">sunglass</a></li>
                          <li><a href="#">watch</a></li>
                          <li><a href="#">man’s product</a></li>
                          <li><a href="#">ladies</a></li>
                          <li><a href="#">westrn dress</a></li>
                          <li><a href="#">denim </a></li>
                        </ul>
                      </li>
                      <li className="main-mega"><a href="#">best selling <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        <ul className="mega-menu">
                          <li className="single-menu">
                            <a href="#" className="title-link">Shop Kid's</a>
                            <div className="image">
                              <img src="https://via.placeholder.com/225x155" alt="#" />
                            </div>
                            <div className="inner-link">
                              <a href="#">Kids Toys</a>
                              <a href="#">Kids Travel Car</a>
                              <a href="#">Kids Color Shape</a>
                              <a href="#">Kids Tent</a>
                            </div>
                          </li>
                          <li className="single-menu">
                            <a href="#" className="title-link">Shop Men's</a>
                            <div className="image">
                              <img src="https://via.placeholder.com/225x155" alt="#" />
                            </div>
                            <div className="inner-link">
                              <a href="#">Watch</a>
                              <a href="#">T-shirt</a>
                              <a href="#">Hoodies</a>
                              <a href="#">Formal Pant</a>
                            </div>
                          </li>
                          <li className="single-menu">
                            <a href="#" className="title-link">Shop Women's</a>
                            <div className="image">
                              <img src="https://via.placeholder.com/225x155" alt="#" />
                            </div>
                            <div className="inner-link">
                              <a href="#">Ladies Shirt</a>
                              <a href="#">Ladies Frog</a>
                              <a href="#">Ladies Sun Glass</a>
                              <a href="#">Ladies Watch</a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">accessories</a></li>
                      <li><a href="#">top 100 offer</a></li>
                    </ul>
                  </div> */}
                </div>
                <div className="col-lg-9 col-12">
                  <div className="menu-area">

                    <nav className="navbar navbar-expand-lg">
                      <div className="navbar-collapse">
                        <div className="nav-inner">
                          <ul className="nav main-menu menu navbar-nav">
                            <li className="active"><NavLink to={"/"}>Trang chủ</NavLink></li>
                            <li><NavLink to="/product">Sản phẩm</NavLink></li>
                            <li><NavLink to="/">Payment<i className="ti-angle-down"></i></NavLink>
                              <ul className="dropdown">
                                <li><NavLink onClick={handleClick}>Giỏ hàng</NavLink></li>
                                <li><NavLink to="/checkout">Checkout</NavLink></li>
                              </ul>
                            </li>
                            <li><NavLink to="/contact-us">Liên hệ</NavLink></li>
                          </ul>
                        </div>
                      </div>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
      <Modal isOpen={modal} size="sm" className="my-modal">
        <ModalBody style={{ backgroundColor: '#f8f9fa', color: '#333', padding: '20px', maxHeight: '100px', overflowY: 'auto' }}>
          Đăng nhập rồi mới vào được khách yêu owii!!!
        </ModalBody>
        <ModalFooter style={{ backgroundColor: '#f8f9fa', borderRadius: '0 0 10px 10px', borderTop: 'none', padding: '0px' }}>
          <Button color="primary" style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', marginRight: '10px' }} onClick={handleYes}>Okey đi thôi!!</Button>
          <Button color="secondary" style={{ backgroundColor: '#6c757d', color: '#fff', borderRadius: '5px' }} onClick={handleNo}>Honggg</Button>
        </ModalFooter>
      </Modal>
    </>

  );
}

export default Header;