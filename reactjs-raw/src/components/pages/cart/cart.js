import Footer from "../../footer";
import { ShoppingCart } from "./shopping-cart";
import { BreadCrumbs } from "../breadcrumbs";
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
export function Cart() {
  //loader
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const override = {
      display: "block",
      margin: "0 auto",
      borderColor: "red",
  };
  const [cart, setCart] = useState([]);
  const [khach_hang_id, setKhach_hang_id] = useState(JSON.parse(Cookies.get('user')));

  useEffect(() => {
    setTimeout(() => {
      axios.get('http://127.0.0.1:8000/api/khach-hang/danh-sach-gio-hang', {
        params: {
          khach_hang_id: khach_hang_id.id
        }
      })
        .then((response) => {
          setCart(response.data.data);
          setLoading(false);
        })
        .catch(error => {
          // Hiện thông báo nếu có lỗi xảy ra
          console.error("Lỗi: ", error);
        });
    }, 1000);
  },[khach_hang_id]);
  // console.log(setCart);
  return (
    <>
          {(!loading) ? (
            <div>
              <BreadCrumbs />
              <ShoppingCart data={cart} setData={setCart}/>
              <Footer />
            </div>
                ) : (
                  <ClipLoader
                  color={color}
                  loading={true}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  cssOverride={override}
              />
          )}
    </>
  )
}