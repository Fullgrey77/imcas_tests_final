import {Component, OnInit} from '@angular/core';

import {FeedbackService} from 'src/app/shared/services/feedback.service';
import {Feedback} from '../../shared/models/feedback.model';
import {DataService} from '../../shared/services/data.service';


@Component({
    selector: 'app-feeds-list',
    templateUrl: './feeds-list.component.html',
    styleUrls: ['./feeds-list.component.css']
})
export class FeedsListComponent implements OnInit {
    feedbacks: Feedback[];
    title: string;
    constructor(private service: FeedbackService, private data: DataService) {
    }

    ngOnInit() {
        this.service.getFeedbacks()
            .subscribe(feedbacks => this.feedbacks = feedbacks);
        this.data.changeMessage('Feedbacks');
        this.data.currentMessage.subscribe(title => this.title = title);
    }
}
