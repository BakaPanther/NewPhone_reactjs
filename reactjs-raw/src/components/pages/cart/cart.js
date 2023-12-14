import Footer from "../../footer";
import { ShoppingCart } from "./shopping-cart";
import { BreadCrumbs } from "../breadcrumbs";

export function Cart() {
  return (
    <>
      <BreadCrumbs/>
      <ShoppingCart />
      <Footer />
    </>
  )
}