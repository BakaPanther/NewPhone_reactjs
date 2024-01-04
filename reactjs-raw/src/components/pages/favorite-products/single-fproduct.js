export default function SingleWproduct() {
    return (
        <>
            <tr>
                <td className="image" data-title="No"><img src="https://via.placeholder.com/100x100"
                    alt="#" /></td>
                <td className="product-des" data-title="Description">
                    <p className="product-name"><a href="#">Women Dress</a></p>
                    <p className="product-des">Maboriosam in a tonto nesciung eget distingy magndapibus.</p>
                </td>
                <td className="price" data-title="Price">
                    <span>$110.00 </span>
                </td>
                <td className="action" data-title="Bring-to-cart">
                    <a href="#"><i className="ti-bag"></i></a>
                </td>
                <td className="action" data-title="Remove">
                    <a href="#"><i className="ti-trash remove-icon"></i></a>
                </td>
            </tr>
        </>
    )
}