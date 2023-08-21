import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent implements OnInit {
  tought: Thought = {
    id: 0,
    content: '',
    author: '',
    model: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service
      .searchId(parseInt(id!))
      .subscribe((thought) => (this.tought = thought));
  }

  deleteThought() {
    if (this.tought.id) {
      this.service.delete(this.tought.id).subscribe(() => {
        this.router.navigate(['/listThought']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listThought']);
  }
}
