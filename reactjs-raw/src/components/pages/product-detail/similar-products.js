import OwlDemo from "./owl-carousel";


export default function SimilarProducts() {
    return (
        <>
            <div className="similar-products-container">
                <div class='container-fluid' >
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <h3>Sản phẩm tương tự</h3>
                    </div>
                </div>
                <OwlDemo />
            </div>
        </>
    )
}