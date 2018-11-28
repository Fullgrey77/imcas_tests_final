import {Component, OnInit} from '@angular/core';

import {FeedbackService} from 'src/app/shared/services/feedback.service';
import {Feedback} from '../../shared/models/feedback.model';


@Component({
    selector: 'app-feeds-list',
    templateUrl: './feeds-list.component.html',
    styleUrls: ['./feeds-list.component.css']
})
export class FeedsListComponent implements OnInit {
    feedbacks: Feedback[];

    constructor(private service: FeedbackService) {
    }

    ngOnInit() {
        this.service.getFeedbacks()
            .subscribe(feedbacks => this.feedbacks = feedbacks);
    }
}
