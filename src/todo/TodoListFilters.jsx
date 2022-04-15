import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../recoil/todo'

const TodoListFilters = () => {
    //atom으로 관리하는 state 가져오기
    const [filter, setFilter]=useRecoilState(todoListFilterState);
    
    const updateFilter=({target: {value}})=>{
        setFilter(value);
    }
    return (
        <>
        Filter:
        <select value={filter} onChange={updateFilter}>
            <option value='Show All'>All</option>
            <option value='Show Completed'>Completed</option>
            <option value='Show Uncompleted'>Uncompleted</option>
        </select>
        </>
    )
}

export default TodoListFilters