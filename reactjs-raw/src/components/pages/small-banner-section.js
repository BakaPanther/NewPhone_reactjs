import SmSingleBanner from "./small-single-banner";

function SmBannerSection(){
    return (
        <>
	<section class="small-banner section">
		<div class="container-fluid">
			<div class="row">
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