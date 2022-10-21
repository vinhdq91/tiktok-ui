import { useMemo, useRef, useState } from "react";


function LearnUseMemo() {
    const [infos, getInfos] = useState([]);
    const [name, getName] = useState('');
    const [price, getPrice] = useState('');

    const nameRef = useRef();
    const handleAdd = () => {
        getInfos(prev => [...prev, {name: name, price: price}]);
        getName('');
        getPrice('');

        // Auto focus vào trường name sau khi Add xong, sử dụng useRef
        nameRef.current.focus();
    }

    // Chỗ này sẽ luôn gọi mỗi lần re-render nên sẽ phí tài nguyên
    // => Sử dụng useMemo ở đây, có dependency là infos, vì infos thay đổi
    // mỗi lần ấn Add
    const total = useMemo(() => {
        const result = infos.reduce((acc, curr) => {
                                    console.log("Bị tính toán lại mỗi lần re-render");
                                    return acc + parseInt(curr.price);
                                }, 0);
        return result;
    }, [infos])
    return (
        <div style={{padding:20}}>
            <div>
                <input ref={nameRef} value={name} type="text" onChange={e => getName(e.target.value)} />
            </div>
            <div>
                <input value={price} type="text" onChange={e => getPrice(e.target.value)} />
            </div>
            <button onClick={handleAdd}>Add</button>
            <br />
            <h2>Total: {total}</h2>
            <ul>
                {
                    infos.map((info, index) => (
                        <li key={index}>{info.name} - {info.price}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default LearnUseMemo