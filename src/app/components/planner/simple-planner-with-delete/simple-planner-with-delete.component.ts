import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-planner-with-delete',
  templateUrl: './simple-planner-with-delete.component.html',
  styleUrls: ['./simple-planner-with-delete.component.scss']
})
export class SimplePlannerWithDeleteComponent {

  tasks: string[] = ['Task 1', 'Task 2'];
  inputValue: string = '';

  addTask(): void {
    if(this.inputValue){
      this.tasks.push(this.inputValue);
      this.inputValue = '';
    }
  }

  deleteTask( index: number): void {
    this.tasks.splice(index, 1)
  }
}
