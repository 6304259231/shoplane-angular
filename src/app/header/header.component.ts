import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent implements OnInit {
  userName : string = '';

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    // Subscribe to the Observable 

    this.subjectService.getData().subscribe({
      next: (data: string) => {
        this.userName = data; 
        console.log("Received data from DataComponent:", data); 
      },
      error: (err) => {
        console.error('Error while receiving data:', err);
      }
    });
  }
}
