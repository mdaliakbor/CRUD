import React from "react";
import {useSelector} from "react-redux";
import {deleteTodoAlert} from "./DeleteTodo";
import {editTodoAlert} from "./UpdateTodo";

const ReadTodo = () =>{
    const todos = useSelector((state)=>state.todo.value)
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((item,i)=>{
                                    return(
                                        <tr key={i.toString()}>
                                            <td>{i}</td>
                                            <td>{item}</td>
                                            <td><button onClick={()=>{editTodoAlert(item,i)}} className="btn btn-primary">Edit</button></td>
                                            <td><button onClick={()=>{deleteTodoAlert(i)}} className="btn btn-danger">Remove</button></td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ReadTodo