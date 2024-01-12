import TestImg from '../../../assets/images/test-pic.png'
export default function CompareList() {
    return (
        <>
            <div className="stickycompare-container ">
                <div className="row">
                    <div className="compare-list-item col-5">
                        <div className='compare-a row'>
                            <div className='col-11'>
                                <div className="product-a-img">
                                    <img src={TestImg} alt='' />
                                </div>
                                <div className='product-a-name'>
                                    Tên điện thoại A
                                </div>
                            </div>
                            <div className='delete-compare col-1'>
                                <button>X</button>
                            </div>
                        </div>
                    </div>
                    <div className="compare-list-item col-5">
                    <div className='compare-b row'>
                            <div className='col-11'>
                                <div className="product-b-img">
                                    <img src={TestImg} alt='' />
                                </div>
                                <div className='product-b-name'>
                                    Tên điện thoại A
                                </div>
                            </div>
                            <div className='delete-compare col-1'>
                                <button>X</button>
                            </div>
                        </div>
                    </div>
                    <div className="compare-action col-2">
                        <button>So sánh ngay</button>
                    </div>
                </div>
            </div>
        </>
    )
}