function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Study for class',
      isCompleted: false,
    },
    {
      text: 'Feed the babies',
      isCompleted: false,
    },
    {
      text: 'Workout for 30+ min',
      isCompleted: false,
    }, 
    {
      text: 'Take a nap',
      isCompleted: false,
    },      
    {
      text: 'Listen to Golden Knights win',
      isCompleted: false,
    },
    {
      text: 'Go to work',
      isCompleted: false,
    },
  ])
  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }
  return(
    <>
      <div className="app">
        <div className="todo-list">
      {todos.map((todo, i) => 
        <Todo index={i} key={i} todo={todo} remove={removeTodo} />)}  
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
    </>);
    }

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
