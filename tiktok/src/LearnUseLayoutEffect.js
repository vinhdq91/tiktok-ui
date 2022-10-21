import {useEffect, useLayoutEffect, useState} from 'react';

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi UseEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI


function LearnUseLayoutEffect() {
    const [number, setNumber] = useState(0);
    useLayoutEffect(() => {
        if (number > 3)
            setNumber(0);
    }, [number])
    const handleIncrease = () => {
        setNumber(number + 1);
    }
    return (
        <div style={{padding:20}}>
            <h2>{number}</h2>
            <button onClick={handleIncrease}>Run</button>
        </div>
    )
}

export default LearnUseLayoutEffect