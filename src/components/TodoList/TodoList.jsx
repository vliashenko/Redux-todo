import {useSelector} from "react-redux"
import { TodoItem } from "components/TodoItem/TodoItem"

export const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  
  return (
    <ul>
        {
           todos.map(todo => <TodoItem 
                key={todo.id} 
                {...todo}       
            />) 
        }
    </ul>
  )
}
