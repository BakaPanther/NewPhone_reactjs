import Footer from "../../footer";
import { NocateHeader } from "../../nocate-header";
import SingleWproduct from "./single-fproduct";

export default function WishlishProducts() {
    return (
        <>
        <NocateHeader/>
            <div className="shopping-cart section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="table shopping-summery">
                                <thead>
                                    <tr className="main-hading">
                                        <th>PRODUCT</th>
                                        <th>NAME</th>
                                        <th className="text-center">PRICE</th>
                                        <th className="text-center"><i className="ti-bag"></i></th>
                                        <th className="text-center"><i className="ti-trash remove-icon"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <SingleWproduct/>
                                    <SingleWproduct/>
                                    <SingleWproduct/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}