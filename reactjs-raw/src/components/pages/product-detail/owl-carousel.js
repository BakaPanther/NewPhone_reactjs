import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';
export class OwlDemo extends Component {
    render() {
        return (
            <>
                <div className='similar-product-area' >
                    <OwlCarousel items={3} margin={8} autoplay={true} >
                        <div>
                            <NavLink href='#' className="similar-items">
                                <img className="similar-product-img" src={'https://via.placeholder.com/450x300'} />
                                <div className="similar-product-name">Tên điện thoại nào đó</div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink href='#' className="similar-items">
                                <img className="similar-product-img" src={'https://via.placeholder.com/450x300'} />
                                <div className="similar-product-name">Tên điện thoại nào đó</div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink href='#' className="similar-items">
                                <img className="similar-product-img" src={'https://via.placeholder.com/450x300'} />
                                <div className="similar-product-name">Tên điện thoại nào đó</div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink href='#' className="similar-items">
                                <img className="similar-product-img" src={'https://via.placeholder.com/450x300'} />
                                <div className="similar-product-name">Tên điện thoại nào đó</div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink href='#' className="similar-items">
                                <img className="similar-product-img" src={'https://via.placeholder.com/450x300'} />
                                <div className="similar-product-name">Tên điện thoại nào đó</div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink href='#' className="similar-items">
                                <img className="similar-product-img" src={'https://via.placeholder.com/450x300'} />
                                <div className="similar-product-name">Tên điện thoại nào đó</div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink href='#' className="similar-items">
                                <img className="similar-product-img" src={'https://via.placeholder.com/450x300'} />
                                <div className="similar-product-name">Tên điện thoại nào đó</div>
                            </NavLink>
                        </div>
                    </OwlCarousel>
                </div>
            </>
        )
    }
}
export default OwlDemo;