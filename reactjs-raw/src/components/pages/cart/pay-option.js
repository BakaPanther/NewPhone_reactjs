export function PaymentOptions() {
    return (
        <>
        <div className="col-6">
        <h2>Phương thức thanh toán</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'inline-block', marginRight: '10px', fontWeight: 'bold' }}>
                        <input type="radio" name="payment" />
                        Tiền mặt
                    </label>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'inline-block', marginRight: '10px', fontWeight: 'bold' }}>
                        <input type="radio" name="payment" />
                        Chuyển khoản ngân hàng
                    </label>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'inline-block', marginRight: '10px', fontWeight: 'bold' }}>
                        <input type="radio" name="payment" />
                        Momo
                    </label>
                </li>
            </ul>
            </div>
        </>
    )
}
