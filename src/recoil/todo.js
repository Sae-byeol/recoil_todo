import { atom, selector } from 'recoil';

//관리할 상태값 (atom)

//todo list
export const todoListState = atom({
    key: 'todoListState',
    default:[], //배열타입
});

//어떻게 filter할지 정하는 state
export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All'
});

//selector
//state를 통헤 도출되는 값. 미리 만들어두고 필요할 때마다 state 쓰듯이 쓸 수 있음

//어떤 기준으로 filter할 지 state와 todoList state를 받아 기준에 따라 filter된 리스트를 반환하는 seletor
export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    //get에는 객체 안에 get 함수가 들어있는 파라미터를 받는다.
    //get을 사용하여 state들을 불러올 수 있다.
    get: ({get})=>{
        const filter=get(todoListFilterState);
        const list=get(todoListState);
        switch(filter){
            case 'Show Completed': 
                return list.filter((item)=>item.isComplete); //complete가 참인 애들만 filter
            case 'Show Uncompleted': 
                return list.filter((item)=> !item.isComplete);
            default:
                return list;
        }
    },
});
//todoList의 상태들을 계산해 리턴하는 selector
export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get:({get})=>{
        const todoList=get(filteredTodoListState);//필터링 된 리스트
        const totalNum=todoList.length;
        const totalCompletedNum=todoList.filter((item)=>item.isComplete).length;
        const totalUncompletedNum=totalNum-totalCompletedNum;
        const percentCompleted= totalNum===0 ? 0 : totalCompletedNum/totalNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        }
    }
})