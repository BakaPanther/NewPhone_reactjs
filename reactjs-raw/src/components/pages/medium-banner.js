import MeSingleBanner from "./medium-single-banner";

function MeBanner(){
    return(
        <>
	<section className="midium-banner">
		<div className="container">
			<div className="row">
                <MeSingleBanner/>
                <MeSingleBanner/>
			</div>
		</div>
	</section>

    </>
    )
}
export default MeBanner;