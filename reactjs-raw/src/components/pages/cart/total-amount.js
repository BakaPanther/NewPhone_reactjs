export function TotalAmount(props) {
    return (
        <>
            <div className="total-amount">
                <div className="row">
                    <div className="col-lg-8 col-md-5 col-12">
                        <div className="left">
                            <div className="coupon">
                                <form action="#" target="_blank">
                                    <input name="Coupon" placeholder="Enter Your Coupon" />
                                    <button className="btn">Apply</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-12">
                        <div className="right">
                            <ul>
                                <li>Shipping<span>Free</span></li>
                                <li>Số lượng<span>{props.soluong}</span></li>
                                <li className="last">Tổng tiền<span>{props.tongtien}</span></li>
                            </ul>
                            <div className="button5">
                                <a href="#" className="btn">Checkout</a>
                                <a href="#" className="btn">Continue shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}