export function ShopByPrice() {
    return (
        <>
            <div className="single-widget range">
                <h3 className="title">Shop by Price</h3>
                <div className="price-filter">
                    <div className="price-filter-inner">
                        <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div className="ui-slider-range ui-widget-header ui-corner-all" style={{ width: '26%', left: '24%' }}></div><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{ left: '24%' }}></span><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{ left: '50%' }}></span></div>
                        <div className="price_slider_amount">
                            <div className="label-input">
                                <span>Range:</span><input type="text" id="amount" name="price" placeholder="Add Your Price" />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="check-box-list">
                    <li>
                        <label className="checkbox-inline" for="1"><input name="news" id="1" type="checkbox" />$20 - $50<span className="count">(3)</span></label>
                    </li>
                    <li>
                        <label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" />$50 - $100<span className="count">(5)</span></label>
                    </li>
                    <li>
                        <label className="checkbox-inline" for="3"><input name="news" id="3" type="checkbox" />$100 - $250<span className="count">(8)</span></label>
                    </li>
                </ul>
            </div>
        </>
    )
}