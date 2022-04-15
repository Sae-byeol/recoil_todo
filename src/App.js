import TodoList from './todo/TodoList';
import './App.css';
import { RecoilRoot } from "recoil";


function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <TodoList></TodoList>
      </div>

    </RecoilRoot>
  );
}

export default App;
