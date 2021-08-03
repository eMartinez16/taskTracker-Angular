import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() task: Task;
  faTrash = faTrash;
  constructor() {
    this.task = { id: 1, text: '', day: '', reminder: false };
  }

  ngOnInit(): void {}
}
