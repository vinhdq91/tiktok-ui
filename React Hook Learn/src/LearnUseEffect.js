// Side Effects (Việc sửa dữ liệu bên cạnh hoạt động chính là render dữ liệu)

import { useEffect, useState } from "react"

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi UseEffect callback

// Events: Add/Remove event listener
// Observer pattern: Subscribe / Unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// UseState
// Mounted / Unmounted
// ====
// Call API

/*
 1. Update DOM
    - F8 blog title
 2. Call API
 3. Listen DOM Events
        - Scroll
        - Resize
 4. Cleanup
        - Remove listener / Unsubscribe
        - Clear timer
*/
// 1.useEffect(callback)
    // - Gọi callback mỗi khi component re-render
    // - Gọi callback sau khi component thêm element vào DOM
// 2.useEffect(callback, [])
    // - Chỉ gọi callback 1 lần sau khi component mounted
// 3.useEffect(callback, [dependencies])
    // - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

// ===============================================================
// 1. Callback luôn được gọi sau khi Component được mounted
// 2. Cleanup function luôn được gọi trước khi Component bị unmounted
// 3. Cleanup function luôn được gọi trước khi Callback được gọi (trừ lần mounted)
const tabs = ['posts', 'comments', 'albums'];
function LearnUseEffect(){
    const [fetchDatas, setFetchDatas] = useState([]);
    const [tabType, setTabType] = useState('posts');
    // Đưa vào useEffect có mục đích là thực hiện thay đổi dữ liệu
    // sau khi render html, ưu tiên render html trước
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${tabType}`)
        .then(res => res.json())
        .then(data => {
            setFetchDatas(data);
            })
    }, [tabType]);
    

    // ===============================================================
    const [showBtnTop, setShowBtnTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowBtnTop(window.scrollY >= 500);
        }

        /* Đối tượng window khi unmounted Component sẽ không mất và không dùng lại được,
            nên cần phải cleanup nếu không sẽ bị memory leak
        */
        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // ===============================================================
    const [countDown, setCountdown] = useState(180);
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1);
        }, 1000)

        // Clear Interval để tránh memory leak sau khi unmounted
        return () => clearInterval(timerId);
    }, [])
    // ===============================================================
    const [avatar, setAvatar] = useState();
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        setAvatar(URL.createObjectURL(file));
        console.log(URL.createObjectURL(file));
    }
    useEffect(() => {
        // Cleanup avatar to avoid memory leak when change image
        return () => {
            if (avatar){
                URL.revokeObjectURL(avatar);
            }
        }
    }, [avatar])
    return (
        <div style={{padding: 20}}>
            {
                tabs.map(tab => (
                    <button onClick={() => setTabType(tab)} 
                            key={tab}
                            style={tabType === tab ? {backgroundColor:'yellow'} : {}}>
                        {tab}
                    </button>
                ))
            }
            <ul>
            {
                fetchDatas.map(item => (
                    <li key={item.id}>
                        <div>Title: {item.title || item.name}</div>
                        <div>Body: {item.body}</div>
                    </li>
                ))
            }
            </ul>
            {
                showBtnTop && (
                    <button style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}>
                        Go to top
                    </button>
                )
            }

            <div>
                <h1>{countDown}</h1>
            </div>

            <div>
                <input type="file" onChange={handlePreviewAvatar} />
                
                {avatar && (
                    <div><img src={avatar} alt="" width="50%" /></div>
                )}
            </div>
        </div>
    )
}

export default LearnUseEffect