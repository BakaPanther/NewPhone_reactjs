import SingleProduct from "./single-product";

function PopularArea() {
    return (
        <>
            <div class="row">
                <div class="col-12">
                    <div class="product-area most-popular section">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="section-title">
                                        <h2>Hot Item</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="owl-carousel popular-slider">
                                        <SingleProduct />
                                        <SingleProduct />
                                        <SingleProduct />
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