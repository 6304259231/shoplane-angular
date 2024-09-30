import { SubjectService } from './../subject.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  constructor(private subjectService:SubjectService){

  }

  userName:string = '';
  sendData(data:string){
    this.subjectService.emitData(data);
    console.log(data);
  }
}
