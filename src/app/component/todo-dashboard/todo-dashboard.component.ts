import { Component, OnInit ,Input} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITodo } from 'src/app/modules/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
styleUrls: ['./todo-dashboard.component.css']})
export class TodoDashboardComponent implements OnInit {

editTodoobj!:ITodo
  
todoArr:ITodo[] = [
  {
    todoItem:'Angualr',
    todoId:'123',
    isComplated:true
  },
   {
    todoItem:'javascript',
    todoId:'7893',
    isComplated:false
  },
   {
    todoItem:'SASS',
    todoId:'7387',
    isComplated:true
  },
   {
    todoItem:'TypeScript',
    todoId:'123932',
    isComplated:false
  },
   {
    todoItem:'Node.js',
    todoId:'1398',
    isComplated:true
  },
];

  constructor(
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
  }


  getNewTodos(todo:ITodo){
    this.todoArr.push(todo)
console.log(todo);

this._snackBar.open(`The New Todo Item with id ${todo.todoId} Added Successfully!!`)

  }

  getEditTodo(edit:ITodo){
console.log(edit);
this.editTodoobj=edit



  }

  getUpdateTodo(updateId:ITodo){
 let getIndex=this.todoArr.findIndex(n => n.todoId === updateId.todoId)
 this.todoArr[getIndex]=updateId

this._snackBar.open(`The New Todo Item with id ${updateId.todoId} Added Successfully!!`)  }
 

  getRemovedId(id:ITodo){
    let getIndex=this.todoArr.findIndex(n => n.todoId === id.todoId)
    this.todoArr.splice(getIndex,1)

this._snackBar.open(`The Todo Item with id ${id.todoId} Removed Successfully!!`)

  }

}