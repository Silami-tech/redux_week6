import logo from './logo.svg';
import './App.css';
import Todo from './Containers/createTodo';
import Tables from './Containers/table';


function App() {
  return (
    <div className="App">
      <Todo/>
      <Tables/>
    </div>
  );
}

export default App;
