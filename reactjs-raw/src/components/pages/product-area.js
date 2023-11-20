import SingleTab from "./single-tab";
import TabNav from "./tab-nav";

function ProductArea(){
    return (
        <> 
    <div class="product-area section">
            <div class="container">
				<div class="row">
					<div class="col-12">
						<div class="section-title">
							<h2>Trending Item</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<div class="product-info">
							<div class="nav-main">
								<TabNav/>
							</div>
							<div class="tab-content" id="myTabContent">
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