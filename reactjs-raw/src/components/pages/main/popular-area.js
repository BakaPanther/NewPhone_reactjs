import SingleProduct from "../../single-product";


function PopularArea() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="product-area most-popular section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title">
                                        <h2>Hot Item</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="owl-carousel popular-slider">
                                        <SingleProduct/>
                                        <SingleProduct/>
                                        <SingleProduct/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PopularArea;