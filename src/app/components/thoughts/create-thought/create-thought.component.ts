import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  thought: Thought = {
    content: '',
    author: '',
    model: 'modelo1',
  };

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {}

  addThought() {
    this.service
      .add(this.thought)
      .subscribe(() => this.router.navigate(['/listThought']));
  }

  cancelThought() {
    this.router.navigate(['/listThought']);
  }
}
