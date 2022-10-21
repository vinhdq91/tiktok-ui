import { useEffect, useRef, useState } from "react"

// 1. Luôn tạo ra 1 object với 1 property là current, có thể set lại giá trị cho current
// 2. Có thể lấy DOM qua attribute ref
function LearnUseRef() {
    // Lấy DOM Object
    const h2Ref = useRef();
    useEffect(() => {
        console.log(h2Ref.current);
        console.log(h2Ref.current.getBoundingClientRect());
    })

    // Lưu giá trị để sử dụng qua nhiều hàm khác nhau
    let countDown = useRef(99);
    const [number, setNumber] = useState(60);
    const handleStart = () => {
        countDown.current = setInterval(() => {
            setNumber(prev => prev - 1);
        }, 1000);
        console.log(countDown.current);
    }
    const handleStop = () => {
        clearInterval(countDown.current);
    }
    return (
        <div style={{padding:20}}>
            <h2 ref={h2Ref}>{number}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default LearnUseRef