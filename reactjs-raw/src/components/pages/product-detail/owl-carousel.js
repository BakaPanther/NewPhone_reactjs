
import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';

import 'owl.carousel/dist/assets/owl.theme.default.css';

export class OwlDemo extends Component {
    render() {
        return (
            <div>
                <div class='container-fluid' >
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <h3>Sản phẩm tương tự</h3>
                    </div>
                </div>
                <div class='container-fluid' >
                    <OwlCarousel items={3} margin={8} autoplay={true} >
                        <div><a href='#'><img className="img" src={'https://via.placeholder.com/450x300'} /></a></div>
                        <div><a href='#'><img className="img" src={'https://via.placeholder.com/450x300'} /></a></div>
                        <div><a href='#'><img className="img" src={'https://via.placeholder.com/450x300'} /></a></div>
                        <div><a href='#'><img className="img" src={'https://via.placeholder.com/450x300'} /></a></div>
                        <div><a href='#'><img className="img" src={'https://via.placeholder.com/450x300'} /></a></div>
                        <div><a href='#'><img className="img" src={'https://via.placeholder.com/450x300'} /></a></div>
                        <div><a href='#'><img className="img" src={'https://via.placeholder.com/450x300'} /></a></div>
                    </OwlCarousel>

                </div>

            </div>

        )

    }

}


export default OwlDemo;