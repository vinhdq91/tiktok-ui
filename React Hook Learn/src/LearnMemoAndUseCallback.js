import {memo} from 'react'

function LearnMemoAndUseCallback({onIncrease}) {
    console.log("get here");
    return (
        <>
            <h1>This is LearnMemoAndUseCallback</h1>
            <button onClick={onIncrease}>Click me</button>
        </>
    )
}

// Dùng useCallBack thì phải kết hợp với memo để component Child không bị
// re-render cùng với component Cha (nếu component Cha có pass parameter
// qua component Child)
export default memo(LearnMemoAndUseCallback)