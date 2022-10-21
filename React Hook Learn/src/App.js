import logo from './logo.svg';
import { createContext, useCallback, useRef, useState } from 'react';
import LearnUseEffect from './LearnUseEffect';
import FakeCommentApp from './FakeCommentApp';
import LearnUseLayoutEffect from './LearnUseLayoutEffect';
import LearnUseRef from './LearnUseRef';
import LearnMemoAndUseCallback from './LearnMemoAndUseCallback';
import LearnUseMemo from './LearnUseMemo';
import LearnUseReducer from './LearnUseReducer/LearnUseReducer';
import LearnUseContext from './LearnUseContext/LearnUseContext';

// UseState
// 1.
// const initOrders = [100, 200, 300];
// function App() {
//   const [counter, setCounter] = useState(() => {
//     const total = initOrders.reduce((acc, curr) => acc + curr);
//     console.log(total);
//     return total;
//   });
//   const handleIncrease = () => {
//     setCounter(counter + 1);
//   }
//   return (
//     <div className="App">
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Click</button>
//     </div>
//   );
// }

// 2.
// const giftArray = [
//   'Dress',
//   'Xbox',
//   'Car'
// ];

// function App() {
//   const [gift, setgift] = useState();
//   const handleUpdate = () => 
//               setgift(giftArray[Math.floor(Math.random() * giftArray.length)]);
//   return (
//     <div>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={handleUpdate}>Lấy phần thưởng</button>
//     </div>
//   )
// }

//========================================================
// Two way binding
// 1. Input text
// function App() {
//     const [name, setName] = useState();
//     const [email, setEmail] = useState();
//     const handleSubmit = () => {
//         console.log({
//             name,
//             email
//         });
//     }
//     return (
//         <div style={{padding:20}}>
//             <input type="text" value={name} onChange={e => setName(e.target.value)} />
//             <br/>
//             <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
//             <br/>
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     );
// }

// 2. Radio
// const courses = [
//     {
//         id: 1,
//         name: 'HTML, CSS'
//     },
//     {
//         id: 2,
//         name: 'Javascript'
//     },
//     {
//         id: 3,
//         name: 'ReactJs'
//     }
// ]
// function App(){
//     const [checked, setChecked] = useState(1);
//     const handleSubmit = () => {
//         console.log(checked);
//     }
//     return (
//         <div>
//             {
//                 courses.map(course => (
//                     <div key={course.id}>
//                         <label htmlFor={course.id}>{course.name}</label>
//                         <input onChange={() => setChecked(course.id)}
//                                checked={course.id === checked}
//                                 type="radio" id={course.id} />
//                     </div> 
//                 ))
//             }
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
// }

//3. Checkbox
// const cars = [
//     {
//         id: 1,
//         name: 'Toyota'
//     },
//     {
//         id: 2,
//         name: 'Huyndai'
//     },
//     {
//         id: 3,
//         name: 'Vinfast'
//     },
//     {
//         id: 4,
//         name: 'Tesla'
//     }
// ]
// function App(){
//     const [checkedCars, setCheckedCars] = useState([]);
//     const handleSubmit = () => {
//         console.log(checkedCars);
//     }
//     const handleCheck = (id) => {
//         setCheckedCars(prev => {
//             if(checkedCars.includes(id)){
//                 // checkedCars.splice(checkedCars.indexOf(car.id), 1);
//                 return checkedCars.filter(e => e != id);
//             }
//             else{
//                 // checkedCars.push(id);
//                 return [...prev, id];
//             }
//         })
//     }
//     return (
//         <div>
//             {
//                 cars.map(car => (
//                     <div key={car.id}>
//                         <label htmlFor={car.id}>{car.name}</label>
//                         <input onChange={() => handleCheck(car.id)}
//                                 checked={checkedCars.includes(car.id)}
//                                 type="checkbox" id={car.id} />
//                     </div> 
//                 ))
//             }
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
// }

//========================================================
// Todo list (Two way biding)

// function App(){
//     const [inputItem, setInputItem] = useState('');
//     const [items, setItems] = useState(() => {
//         const storageItems = JSON.parse(localStorage.getItem('items')) ?? [];
//         console.log(storageItems);
//         return storageItems;
//     });
//     const handleAdd = () => {
//         if (inputItem != ''){
//             setItems(prev => {
//                 const newItems = [...prev, inputItem];
                
//                 // save to local storage (để F5 thì vẫn còn list)
//                 const jsonItems = JSON.stringify(newItems);
//                 localStorage.setItem('items', jsonItems);

//                 return newItems;
//             });
//             setInputItem('');
//         }
//     }
//     return (
//         <div style={{padding:20}}>
//             <input value={inputItem} onChange={(e) => setInputItem(e.target.value)} type="text" />
//             <button onClick={handleAdd}>Add</button>

//             <ul id="todo-list">
//                 {
//                     items.map((item, index) => (
//                         <li key={index}>{item}</li>    
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

//================================================================
// Mounted / Unmounted  
// import Content from './Content';

// function App() {
//     const [showContent, setShowContent] = useState(false);
//     return (
//         <div style={{padding:20}}>
//             <button onClick={() => setShowContent(!showContent)}>
//                 {(showContent && "Hide") || (!showContent && "Show")}
//             </button>
//             {showContent && <Content />} 
//         </div>
//     )
// }

//================================================================
// UseEffect
// function App() {
//     const [showLearnUseEffect, setShowLearnUseEffect] = useState(false);
//     return (
//         <div style={{padding:20}}>
//             <button onClick={() => setShowLearnUseEffect(!showLearnUseEffect)}>
//                 {(showLearnUseEffect && 'UnMounted') || (!showLearnUseEffect && 'Mounted')}
//             </button>
//             { showLearnUseEffect && <LearnUseEffect /> }
//          </div>
//     )
// }

//================================================================
// App Fake Comment
// function App() {
//     const [showLearnUseEffect, setShowLearnUseEffect] = useState(false);
//     return (
//         <div style={{padding:20}}>
//             <button onClick={() => setShowLearnUseEffect(!showLearnUseEffect)}>
//                 {(showLearnUseEffect && 'UnMounted') || (!showLearnUseEffect && 'Mounted')}
//             </button>
//             { showLearnUseEffect && <FakeCommentApp /> }
//          </div>
//     )
// }

//================================================================
// UseLayoutEffect
// function App() {
//     const [showLearnUseEffect, setShowLearnUseEffect] = useState(false);
//     return (
//         <div style={{padding:20}}>
//             <button onClick={() => setShowLearnUseEffect(!showLearnUseEffect)}>
//                 {(showLearnUseEffect && 'UnMounted') || (!showLearnUseEffect && 'Mounted')}
//             </button>
//             { showLearnUseEffect && <LearnUseLayoutEffect /> }
//          </div>
//     )
// }

//================================================================
// UseRef
// function App() {
//     const [showLearnUseEffect, setShowLearnUseEffect] = useState(false);
//     return (
//         <div style={{padding:20}}>
//             <button onClick={() => setShowLearnUseEffect(!showLearnUseEffect)}>
//                 {(showLearnUseEffect && 'UnMounted') || (!showLearnUseEffect && 'Mounted')}
//             </button>
//             { showLearnUseEffect && <LearnUseRef /> }
//          </div>
//     )
// }

//================================================================
// Memo & UseCallback

// function App() {
//     const [number, setNumber] = useState(0);

//     /* Viết như này sẽ bị re-render nhiều lần khi gọi Component Child
//        do mỗi lần sẽ tạo 1 tham chiếu đến hàm handleClick */
//     // const handleClick = () => {
//     //     setNumber(prev => prev + 1);
//     // }

//     /* Sử dụng useCallback không có dependency trong [] thì sẽ tự động tạo
//             để lưu tham chiếu ra bên ngoài component App()
//         => Không bị re-render nhiều lần khi gọi đến Component Child */
//     const handleClick = useCallback(() => {
//         setNumber(prev => prev + 1);
//     }, []);

//     return (
//         <div style={{padding:20}}>
//             <LearnMemoAndUseCallback onIncrease={handleClick}/>
//             <h1>{number}</h1>
//         </div>
//     )
// }

//================================================================
// UseMemo

// function App() {
//     const [show, setShow] = useState(false);
//     const handleClick = () => {
//         setShow(!show);
//     }
//     return (
//         <div style={{padding:20}}>
//             <button onClick={handleClick}>
//                 {(show && "Unmounted") || (!show && "Mounted")}
//             </button>
//             {
//                 show && <LearnUseMemo />
//             }
//         </div>
//     )
// }

//================================================================
// UseReducer

// function App() {
//     const [show, setShow] = useState(false);
//     const handleClick = () => {
//         setShow(!show);
//     }
//     return (
//         <div style={{padding:20}}>
//             <button onClick={handleClick}>
//                 {(show && "Unmounted") || (!show && "Mounted")}
//             </button>
//             {
//                 show && <LearnUseReducer />
//             }
//         </div>
//     )
// }

//================================================================
// UseContext
// 1. Create Context
// 2. Provider
// 3. Consumer

// export const ThemeContext = createContext()
// console.log("THEMECONTEXT: ", ThemeContext);

// function App() {
//     const [theme, setTheme] = useState('dark');

//     const toggleTheme = () => {
//         setTheme(theme === 'dark' ? 'light' : 'dark');
//         console.log(theme);
//     }

//     return (
//         // Gửi theme qua component cháu (Không cần thông qua component cha)
//         <ThemeContext.Provider value={theme}>
//             <div style={{padding:20}}>
//                 <button onClick={toggleTheme}>Toggle theme</button>
//                 <LearnUseContext/>
//             </div>
//         </ThemeContext.Provider>
//     )
// }

//================================================================
// Context + useReducer
// Redux vs React-context

/*
    1. Debugging capabilities
    2. Middelware
    3. Addons and extensibility
    4. Cross-platform and cross-framework usage
    5. Depending on your app's setup, much better performance than working with just Context
*/
// import { useContext } from 'react';
// import { StoreContext } from './Context&UseReducer/store'
import { useStore, actions } from './ContextAndUseReducer/store'

function App() {
    // const [state, dispatch] = useContext(StoreContext);
    const [state, dispatch] = useStore();    
    const {todos, todoInput} = state;

    const inputRef = useRef();
    const handleAdd = () => {
        dispatch(actions.addTodoInput(todoInput));
        dispatch(actions.setTodoInput(''));
        inputRef.current.focus();
    }
    return (
        <div style={{padding:20}}>
            <input ref={inputRef} value={todoInput} 
                   onChange={e => {
                                dispatch(actions.setTodoInput(e.target.value))
                            }}/>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>
                            <span style={{marginRight:5}}>{todo}</span>
                            <button 
                                onClick={() => dispatch(actions.deleteTodoInput(index))}>
                                    X
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App;
