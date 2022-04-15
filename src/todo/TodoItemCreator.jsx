import React, { useState }from 'react'
import { todoListState } from '../recoil/todo'
import { useSetRecoilState } from 'recoil'

const TodoItemCreator = () => {
    const [inputValue, setInputValue]=useState('');
    //useSetRecoilState()를 사용해 atom에 저장된 state의 set함수만 가져올 수도 있다. 
    const setTodoList=useSetRecoilState(todoListState);
    const addItem=()=>{
        setTodoList((oldTodoList)=>{
            //set함수의 매개변수는 현재 상태를 나타냄 
            //oldTodoLis에 원소가 있으면 그 원소의 id+1로 id를 수정하고 , 없으면 id를 0으로.
            const id = oldTodoList.length
            ? oldTodoList[oldTodoList.length-1].id+1
            : 0;
            
            //기존 oldList(객체배열)에 새로 입력한 값 붙여서 리턴
            return[
                ...oldTodoList,{
                    id,
                    text: inputValue,
                    isComplete: false,
                },//객체를 하나씩 추가하면서 객체 배열로 만듦
            ];
        });
        setInputValue(''); //검색창 비우기
    }
    const onChange=({ target : {value} })=>{
        setInputValue(value);
    }
    return (
        <div>
            <input type='text' value={inputValue} onChange={onChange}></input>
            <button onClick={addItem}>Add</button>
        </div>
    )
}

export default TodoItemCreator