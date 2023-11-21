import SingleTab from "./single-tab";
import TabNav from "./tab-nav";

function ProductArea(){
    return (
        <> 
    <div className="product-area section">
            <div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title">
							<h2>Trending Item</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="product-info">
							<div className="nav-main">
								<TabNav/>
							</div>
							<div className="tab-content" id="myTabContent">
								<SingleTab/>
							</div>
						</div>
					</div>
				</div>
            </div>
    </div>

</>
    )
}
export default ProductArea;