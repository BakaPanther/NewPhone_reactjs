import SmSingleBanner from "./small-single-banner";

function SmBannerSection(){
    return (
        <>
	<section className="small-banner section">
		<div className="container-fluid">
			<div className="row">
				<SmSingleBanner/>
                <SmSingleBanner/>
                <SmSingleBanner/>
			</div>
		</div>
	</section>
	</>
    )
}
export default SmBannerSection;