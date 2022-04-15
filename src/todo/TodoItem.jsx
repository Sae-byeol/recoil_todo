import React from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todo';

//각각의 todo item들 컴포넌트 (map의 대상)
const TodoItem = ({item}) => {
    //atom에서 관리하는 state가져오기(배열 리스트)
    const [todoList, setTodoList]=useRecoilState(todoListState);
    //수정도 가능
    const editItemText=({target: {value}})=>{
        const newList=todoList.map((listItem)=>(
            listItem.id === item.id
            ? {...listItem, text:value} //순회하면서 탐색하다가 id 같은거 찾으면 그 아이템의 text만 수정
            : listItem
        ));
        setTodoList(newList);
    }
    //체크박스
    const toggleItemCompletion=()=>{
        const newList=todoList.map((listItem)=>(
            listItem.id=== item.id
            ? {...listItem, isComplete : !item.isComplete}
            : listItem
        ))
        setTodoList(newList);
    }
    const deleteItem=()=>{
        const newList=todoList.filter((listItem)=>(
            listItem.id!=item.id
        ));
        setTodoList(newList);
    }
    return (
        <div>
            <input type='text' value={item.text} onChange={editItemText}></input>
            <input
                type='checkbox'
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    )
}

export default TodoItem