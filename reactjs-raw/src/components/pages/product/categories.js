import React, { useState, useEffect } from "react";
export function Categories(props) {
    return (
        <>
            <div className="single-widget category">
                <h3 className="title">Categories</h3>
                <ul className="categor-list">
                    {
                        props.data.map(function(item,key){
                            return(
                                <li><a href="#">T-shirts</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}