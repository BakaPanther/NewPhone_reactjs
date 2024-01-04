import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { Container } from "reactstrap";
export function CheckOutForm(){
    const [user, setUser] = useState(JSON.parse(Cookies.get('user')));

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        fontSize: '16px',
    };

    return (
        <>
   
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>First Name<span>*</span></label>
                            <input
                                type="text"
                                name="name"
                                placeholder=""
                                required="required"
                                value={user.ten}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>Email Address<span>*</span></label>
                            <input
                                type="email"
                                name="email"
                                placeholder=""
                                required="required"
                                value={user.email}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>Phone Number<span>*</span></label>
                            <input
                                type="number"
                                name="number"
                                placeholder=""
                                required="required"
                                value={user.so_dien_thoai}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                            <label>Address<span>*</span></label>
                            <input
                                type="text"
                                name="address"
                                placeholder=""
                                required="required"
                                value={user.dia_chi}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                </div>

        </>
    )
}