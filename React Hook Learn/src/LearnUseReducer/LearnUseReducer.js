import { useReducer, useRef } from "react";
import {setJob, addJob, deleteJob} from './action';
import reducer, {initState} from './reducer';

// useState
// 1. Init State: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init State: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch (dùng để kích hoạt action nào)

/* Lợi ích của useReducer so với useState:
    useReducer thường gọi reducer, initState hoặc sử dụng các action
    được code ở bên ngoài component => dễ bóc tách các phần ra file riêng
    từ đó dễ quản lý và mở rộng code hơn so với useState 
    (tham khảo thêm lesson 75 khóa F8)
*/

//===================Ex1==========================
// const initState = 0;

// const UP_ACTION = 'up';
// const DOWN_ACTION = 'down';

// const reduce = (state, action) => {
//     console.log("start reduce...");
//     switch(action){
//         case UP_ACTION:
//             return state + 1;
//         case DOWN_ACTION:
//             return state - 1;
//         default:
//             throw new Error('Invalid action')
//     }
// }
// function LearnUseReducer() {
//     const [number, dispatch] = useReducer(reduce, initState);

//     return (
//         <div style={{padding:20}}>
//             <h1>{number}</h1>
//             <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
//             <button onClick={() => dispatch(UP_ACTION)}>Up</button>
//         </div>
//     )
// }


//===================Ex2==========================

function LearnUseReducer() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;

    const inputRef = useRef();
    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }

    return (
        <div style={{padding:20}}>
            <h1>Todo list</h1>
            <input ref={inputRef} type="text" value={job} 
                    onChange={(e) => dispatch(setJob(e.target.value))}/>
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {
                    jobs.map((job, index) => (
                        <li key={index}>
                            <span style={{paddingRight:5}}>{job}</span>
                            <button onClick={() => dispatch(deleteJob(index))}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default LearnUseReducer