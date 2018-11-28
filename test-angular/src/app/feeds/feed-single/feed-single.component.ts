import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../../shared/services/feedback.service';
import {Feedback} from '../../shared/models/feedback.model';

@Component({
  selector: 'app-feed-single',
  templateUrl: './feed-single.component.html',
  styleUrls: ['../feeds-list/feeds-list.component.css']
})
export class FeedSingleComponent implements OnInit {
  @Input() feedback: Feedback;


  constructor(public service: FeedbackService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.service.getFeedback(this.route.snapshot.params['id'])
        .subscribe(data => {
          this.feedback = new Feedback(data);
      });
  }

}
