import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../recoil/todo'

const TodoListStats = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    }=useRecoilValue(todoListStatsState); //상태들 리턴해주는 selector 이용

    let formattedPercentCompleted=Math.round(percentCompleted*100);

    return (
       <ul>
           <li>Total items: {totalNum}</li>
           <li>Items completed: {totalCompletedNum}</li>
           <li>Items not completed: {totalUncompletedNum}</li>
           <li>Percent completed: {formattedPercentCompleted}</li>
       </ul>
    )
}

export default TodoListStats