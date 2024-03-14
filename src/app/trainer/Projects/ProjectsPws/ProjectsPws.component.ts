import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-ProjectsPws',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './ProjectsPws.component.html',
  styleUrls: ['./ProjectsPws.component.css']
})
export class ProjectsPwsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
