import React from 'react'
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';
import  { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from '../recoil/todo';

const TodoList = () => {
    //global한 저장소(atom)에서 값 가져오기
    const todoList = useRecoilValue(filteredTodoListState); 
    return (
        <>
            <TodoListStats/>  {/*상태를 보여주는 컴포넌트*/}
            <TodoListFilters/> {/*필터 할 컴포넌트*/}
            <TodoItemCreator/>

            {todoList.map((todoItem)=>(
                <TodoItem key={todoItem.id} item={todoItem}></TodoItem>
            ))}
        </>
    )
}

export default TodoList