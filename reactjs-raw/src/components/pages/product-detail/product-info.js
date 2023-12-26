import { useEffect, useRef, useState } from "react"

export default function ProductInfo() {
    const [isOpen, setIsOpen] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const ref=useRef(null)
    useEffect(()=>{
        if(ref.current){
            console.log(ref.current.scrollHeight ,ref.current.clientHeight)
            setShowButton(ref.current.scrollHeight !==ref.current.clientHeight)
        }
    },[ref.current])
    const paragraphStyles = {
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        display: '-webkit-box',
    }
    return (
        <>
            <div className="product-info-content col-8">
                    <h3>Mô tả điện thoại</h3>
                    <div style={isOpen ? null : paragraphStyles} ref={ref}>
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                        Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại. Mô tả điện thoại.
                    </div>
                    {showButton && (<button  onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Rút gọn' : 'Xem thêm...'}</button>)}
            </div>
        </>
    )
}