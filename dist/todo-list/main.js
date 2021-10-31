(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-add/task-add.component */ "./src/app/task-add/task-add.component.ts");
/* harmony import */ var _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-edit/task-edit.component */ "./src/app/task-edit/task-edit.component.ts");






var routes = [
    {
        // contains the whole todo list
        path: 'tasks',
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"]
    },
    {
        // display the form to add a new task
        path: 'tasks/add',
        component: _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_4__["TaskAddComponent"],
        data: { title: 'Add new task' }
    },
    {
        // display the form to add a new task
        path: 'tasks/:id/edit',
        component: _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_5__["TaskEditComponent"],
        data: { title: 'Task edition' }
    },
    // Always go on /tasks path
    { path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgY29sb3I6ICMzNjk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI1MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Todo list</h1>\n  <router-outlet>\n  </router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-list';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-edit/task-edit.component */ "./src/app/task-edit/task-edit.component.ts");
/* harmony import */ var _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-add/task-add.component */ "./src/app/task-add/task-add.component.ts");










var routes = [
    {
        // contains the whole todo list
        path: 'tasks',
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_6__["TodoComponent"]
    },
    {
        // display the form to add a new task
        path: 'tasks/add',
        component: _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_9__["TaskAddComponent"],
        data: { title: 'Add new task' }
    },
    {
        // display the form to add a new task
        path: 'tasks/:id/edit',
        component: _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_8__["TaskEditComponent"],
        data: { title: 'Task edition' }
    },
    // Always go on /tasks path
    { path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_6__["TodoComponent"],
                _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_8__["TaskEditComponent"],
                _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_9__["TaskAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/models/task.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/task.model.ts ***!
  \*********************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(taskName, taskDescription, id) {
        this.taskDescription = taskDescription;
        this.taskName = taskName;
        this.id = id;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/task-add/task-add.component.css":
/*!*************************************************!*\
  !*** ./src/app/task-add/task-add.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stYWRkL3Rhc2stYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/task-add/task-add.component.html":
/*!**************************************************!*\
  !*** ./src/app/task-add/task-add.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create a new task</h2>\n\n<form>\n  <div class=\"form-group\">\n    <label for=\"taskName\">Task Name</label>\n    <input type=\"text\" id=\"taskName\" class=\"form-control\" [formControl]=\"taskName\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"taskDescription\">Task Description</label>\n    <input type=\"text\" id=\"taskDescription\" class=\"form-control\" [formControl]=\"taskDescription\">\n  </div>\n\n  <div class=\"form-group\">\n    <button (click)=\"createTask()\" class=\"btn btn-primary\">Create</button>\n    <button class=\"btn btn-light\" [routerLink]=\"['/tasks']\">Back</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/task-add/task-add.component.ts":
/*!************************************************!*\
  !*** ./src/app/task-add/task-add.component.ts ***!
  \************************************************/
/*! exports provided: TaskAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAddComponent", function() { return TaskAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-storage.service */ "./src/app/task-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TaskAddComponent = /** @class */ (function () {
    function TaskAddComponent(storage, router, route) {
        this.storage = storage;
        this.router = router;
        this.route = route;
        this.taskName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.taskDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    TaskAddComponent.prototype.createTask = function () {
        if (this.taskName.value == "" || this.taskDescription.value == "") {
            alert("Please enter task details");
            this.router.navigate(['tasks/add']);
            return;
        }
        this.storage.add(this.taskName.value, this.taskDescription.value);
        this.router.navigate(['tasks']);
    };
    TaskAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-add',
            template: __webpack_require__(/*! ./task-add.component.html */ "./src/app/task-add/task-add.component.html"),
            styles: [__webpack_require__(/*! ./task-add.component.css */ "./src/app/task-add/task-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_storage_service__WEBPACK_IMPORTED_MODULE_3__["TaskStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TaskAddComponent);
    return TaskAddComponent;
}());



/***/ }),

/***/ "./src/app/task-edit/task-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stZWRpdC90YXNrLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Edit your task</h2>\n\n<form>\n  <div class=\"form-group\">\n    <label for=\"taskName\">Title</label>\n    <input type=\"text\" id=\"taskName\" class=\"form-control\" [formControl]=\"taskName\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"taskDescription\">Note</label>\n    <input type=\"text\" id=\"taskDescription\" class=\"form-control\" [formControl]=\"taskDescription\">\n  </div>\n\n  <div class=\"form-group\">\n    <button (click)=\"updateTask()\" class=\"btn btn-primary\">Update</button>\n    <button class=\"btn btn-light\" [routerLink]=\"['/tasks']\">Cancel</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.ts ***!
  \**************************************************/
/*! exports provided: TaskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditComponent", function() { return TaskEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-storage.service */ "./src/app/task-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(storage, route, router) {
        this.storage = storage;
        this.route = route;
        this.router = router;
        this.taskName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.taskDescription = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this.storage.editTask(params.get('id')).subscribe(function (data) {
                _this.taskName.setValue(data.taskName);
                _this.taskDescription.setValue(data.taskDescription);
            });
        });
    };
    TaskEditComponent.prototype.updateTask = function () {
        this.storage.update(this.id, this.taskName.value, this.taskDescription.value);
        this.router.navigate(['/tasks']);
    };
    TaskEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-edit',
            template: __webpack_require__(/*! ./task-edit.component.html */ "./src/app/task-edit/task-edit.component.html"),
            styles: [__webpack_require__(/*! ./task-edit.component.css */ "./src/app/task-edit/task-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_storage_service__WEBPACK_IMPORTED_MODULE_3__["TaskStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "./src/app/task-storage.service.ts":
/*!*****************************************!*\
  !*** ./src/app/task-storage.service.ts ***!
  \*****************************************/
/*! exports provided: TaskStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStorageService", function() { return TaskStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared_models_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/shared/models/task.model */ "./src/app/shared/models/task.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var TaskStorageService = /** @class */ (function () {
    function TaskStorageService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.initialized = false;
    }
    TaskStorageService.prototype.getTasks = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].getTodo);
    };
    TaskStorageService.prototype.add = function (taskName, taskDescription) {
        var task = new _app_shared_models_task_model__WEBPACK_IMPORTED_MODULE_2__["Task"](taskName, taskDescription, '');
        this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].addTodo, task).subscribe(function (value) {
            console.log(value);
        });
    };
    TaskStorageService.prototype.update = function (id, taskName, taskDescription) {
        var task = new _app_shared_models_task_model__WEBPACK_IMPORTED_MODULE_2__["Task"](taskName, taskDescription, id);
        this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].updateTodo, task).subscribe(function (value) {
            console.log(value);
        });
    };
    TaskStorageService.prototype.delete = function (id) {
        this.httpClient.post('http://localhost:8081/todos/v1/delete?id=' + id, id).subscribe(function (value) {
        });
    };
    TaskStorageService.prototype.editTask = function (id) {
        return this.httpClient.get('http://localhost:8081/todos/v1/edit?id=' + id);
    };
    TaskStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TaskStorageService);
    return TaskStorageService;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<button class=\"btn btn-success\" [routerLink]=\"['/tasks/add']\">New task</button>\n\n<div *ngIf=\"taskList && taskList.length > 0; else noTasks\">\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>#</th>\n      <th>Task Name</th>\n      <th>Task Description</th>\n      <th>Task Last Updated</th>\n      <th></th>\n    </tr>\n    </thead>\n    <tbody *ngFor=\"let task of taskList\">\n    <tr>\n      <td>{{ task.id }}</td>\n      <td>{{ task.taskName }}</td>\n      <td>{{ task.taskDescription }}</td>\n      <td>{{ task.lastUpdated }}</td>\n      <td>\n        <button class=\"btn btn-light\" (click)=\"delete(task.id)\"><i class=\"far fa-trash-alt\"></i></button>\n        <button class=\"btn btn-light\" [routerLink]=\"['/tasks/', task.id, 'edit']\"><i class=\"far fa-edit\"></i></button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-storage.service */ "./src/app/task-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TodoComponent = /** @class */ (function () {
    function TodoComponent(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.getTasks().subscribe(function (data) {
            _this.taskList = data;
        });
    };
    TodoComponent.prototype.delete = function (id) {
        this.storage.delete(id);
        window.location.reload();
    };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_storage_service__WEBPACK_IMPORTED_MODULE_2__["TaskStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    getTodo: 'http://localhost:8081/todos/v1/getAll',
    deleteTodo: 'http://localhost:8081/todos/v1/delete?id=',
    addTodo: 'http://localhost:8081/todos/v1/save',
    updateTodo: 'http://localhost:8081/todos/v1/update',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shameelhasnain/Downloads/todo-list-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map