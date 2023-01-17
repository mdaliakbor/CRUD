import React from 'react'
import CreateTodo from '../components/CreateTodo';
import ReadTodo from '../components/ReadTodo';

const TodoPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-5">
            <div className="card-header">
              <h1 className="text-center">
                Todo-CRUD Application
              </h1>
            </div>
            <div className="card-body">
              <CreateTodo/>
              <ReadTodo/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 export default TodoPage;