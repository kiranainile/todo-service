import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/modules/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  @Input()getTodos!:ITodo[]
@Output() emitEditTodo:EventEmitter<ITodo> = new EventEmitter <ITodo>()
@Output() emitRemoveId:EventEmitter<ITodo> = new EventEmitter <ITodo>()
  // todoArr:ITodo[]=[]


  onEditTodo(todo:ITodo){
    console.log(todo);
    this.emitEditTodo.emit(todo)
    
  }

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(id:ITodo){
    console.log(id);



    let getPassword=prompt("password")

    if(getPassword === '932291'){
          this.emitRemoveId.emit(id)


    }else{
      alert(' Enter your Invailid password  plz try again')
    }
    
  }

}