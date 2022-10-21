import { useEffect, useState } from "react";

const tabs = [
    {id:1, name:'ES6'}, 
    {id:2, name:'Javascript'}, 
    {id:3, name:'React JS'}
];
function FakeCommentApp() {
    const [lessonId, setLessonId] = useState(1);
    const handleClick = (index) => {
        setLessonId(index);
    }
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    }, [lessonId])
    return (
        <div>
            <ul>
                {
                    tabs.map(tab =>
                    (
                        <li style={ {color: lessonId === tab.id ? 'red' : 'black',
                                        cursor: 'pointer'} }
                            key={tab.id}
                            onClick={() => handleClick(tab.id)}>{tab.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FakeCommentApp