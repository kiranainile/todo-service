import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ITodo } from 'src/app/modules/todo';
import { __values } from 'tslib';
import { UuidServices } from 'src/app/services/uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit, OnChanges {
  // [x: string]: any;

  @ViewChild('todoItem')todoItem!:ElementRef
  @ViewChild('isComplated')isComplated!:ElementRef
isInEditMode:boolean=false

@Input() getEditobj!:ITodo
@Output() emitNewTodo: EventEmitter<ITodo> =new EventEmitter<ITodo>()
@Output() emitUpdateTodo: EventEmitter<ITodo> =new EventEmitter<ITodo>()
  constructor(
    private _uuidservices:UuidServices
  ) { }


ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  if(!!changes['getEditobj'].currentValue){
    this.isInEditMode=true
    this.todoItem.nativeElement.value=this.getEditobj.todoItem;
    this.isComplated.nativeElement.value=this.getEditobj.isComplated;
  }
  
}


  ngOnInit(): void {
  }

   ontodoadd(){
     let NewTodo:ITodo={
      todoItem:this.todoItem.nativeElement.value,
      isComplated:this.isComplated.nativeElement.value=='true'? true:false,
      todoId:this._uuidservices.uuid()

     }
     console.log(NewTodo);
     this.emitNewTodo.emit(NewTodo)
     this.todoItem.nativeElement.value=''
     this.isComplated.nativeElement.value='true'

     
  }

  onUpdateTodo(){
    let UpdateObj:ITodo={
   todoItem : this.todoItem.nativeElement.value,
  isComplated: this.isComplated.nativeElement.value,
  todoId : this.getEditobj.todoId
    }

    console.log(UpdateObj);
    this.emitUpdateTodo.emit(UpdateObj)
    this.todoItem.nativeElement.value=''
    this.isComplated.nativeElement.value=''
     this.isInEditMode=false
    
  

  }

}