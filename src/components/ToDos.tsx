import ToDoList from './ToDoList';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo  } from '../actions'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo:(id: number) => dispatch(toggleTodo(id)),
    deleteTodo:(id: number) => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);