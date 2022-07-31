import { TodoItem } from "components/TodoItem/TodoItem"

export const TodoList = ({todos, toggleTodoCompleted, removeTodo}) => {
  return (
    <ul>
        {
           todos.map(todo => <TodoItem 
                key={todo.id} 
                {...todo}
                toggleTodoCompleted={toggleTodoCompleted}
                removeTodo={removeTodo}            
            />) 
        }
    </ul>
  )
}
