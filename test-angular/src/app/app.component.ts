import {Component, OnInit} from '@angular/core';
import {FeedbackService} from './shared/services/feedback.service';
import {Feedback} from './shared/models/feedback.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    feedbacks: Feedback[];

    constructor(private service: FeedbackService) {
    }

    ngOnInit() {
        this.service.getFeedbacks()
            .subscribe(
                feedbacks => this.feedbacks = feedbacks
            );

    }
}
