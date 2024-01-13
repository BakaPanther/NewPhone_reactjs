export default function SingleBoughtProduct(props) {
    console.log(props.data);
    return (
        <>
            <div className='row'>
                {props.data && Array.isArray(props.data) && props.data.length > 0 ? (
                    props.data.map(function (item, key) {
                        return (

                            <div className='single-bought-product' key={key}>
                                <div className='row'>
                                    <div className='bought-product-id col-6'>
                                        <h6>Mã đơn hàng: PĐH{item.id}</h6>
                                    </div>
                                    <div className='bought-product-id col-6'>
                                        <h6 style={{ textAlign: 'end', whiteSpace: 'nowrap'}}>
                                            Trạng thái đơn hàng :<span style={{
                                                color: item.trang_thai_don_hang_id === 1 ? '#eaa000' :
                                                    item.trang_thai_don_hang_id === 2 ? '#00d400' :
                                                        item.trang_thai_don_hang_id === 3 ? '#eaa000' :
                                                            'red'
                                            }}>
                                                {item.trang_thai_don_hang_id === 1
                                                    ? '   Chờ xác nhận'
                                                    : item.trang_thai_don_hang_id === 2
                                                        ? '   Đã xác nhận'
                                                        : item.trang_thai_don_hang_id === 3
                                                            ? '   Đang vận chuyển'
                                                            : '   Hủy'}</span>
                                        </h6>
                                    </div>

                                    <div className='bought-product-status col-12'>
                                        {item.chi_tiet_phieu_xuat.map(function (item1, key1) {
                                            return (
                                                <>
                                                    <div className="row">
                                                        <div className='bought-product-img col-2'>
                                                            {item1.chi_tiet_dien_thoai.dien_thoai.hinh_anh.length > 0 && (
                                                                <img src={`http://localhost:8000/${item1.chi_tiet_dien_thoai.dien_thoai.hinh_anh[0].duong_dan}`} alt='#' />
                                                            )}
                                                            <p></p>
                                                        </div>
                                                        <div className='bought-product-id col-5'>
                                                            <h6>Số Lượng: {item1.so_luong}</h6>
                                                        </div>
                                                        <div className='bought-product-id col-5'>
                                                            <h6 key={key1}>{item1.chi_tiet_dien_thoai.dien_thoai.ten}</h6>

                                                            <h6 key={key1}>{item1.chi_tiet_dien_thoai.mau_sac.ten}</h6>
                                                            <h6 key={key1}>{item1.chi_tiet_dien_thoai.dung_luong.ten}</h6>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>

                                    <div className='bought-product-id col-12' style={{ textAlign: 'end', whiteSpace: 'nowrap'}}>
                                        <p>Tổng tiền : {item.tong_tien}</p>
                                        <p>Tổng tiền cần trả: {item.trang_thai_thanh_toan === 1 ? '0đ' : item.tong_tien}</p>
                                        <h6>Trạng thái thanh toán <span style={{
                                                color: item.trang_thai_don_hang_id === 1 ? 'red' :'#00d400'
                                            }}>{item.trang_thai_thanh_toan == 1 ? 'Đã thanh toán' : 'Chưa thanh toán'}</span></h6>
                                    </div>

                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>

    )
}