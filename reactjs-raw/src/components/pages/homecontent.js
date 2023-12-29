import { NavLink } from "reactstrap";

function HomeContent() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bread-inner">
                                <ul className="bread-list">
                                    <li><a href="index1.html" >Home<i className="ti-arrow-right"></i></a></li>
                                    <li className="active"><NavLink to={"/contact-us"}>Content</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeContent
