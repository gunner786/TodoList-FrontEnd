// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getTodo: 'http://localhost:8081/todos/v1/getAll',
  deleteTodo: 'http://localhost:8081/todos/v1/delete?id=',
  addTodo: 'http://localhost:8081/todos/v1/save',
  updateTodo: 'http://localhost:8081/todos/v1/update',
  editTodo: 'http://localhost:8081/todos/v1/edit?id='
};

