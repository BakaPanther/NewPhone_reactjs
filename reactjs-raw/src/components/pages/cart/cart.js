import Footer from "../../footer";
import { ShoppingCart } from "./shopping-cart";
import { BreadCrumbs } from "../breadcrumbs";
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
export function Cart() {
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
          setCart(response.data.data)
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
      <BreadCrumbs />
      <ShoppingCart data={cart} setData={setCart}/>
      <Footer />
    </>
  )
}