import {Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FeedbackService} from '../../shared/services/feedback.service';
import {Feedback} from '../../shared/models/feedback.model';
import {DataService} from '../../shared/services/data.service';

@Component({
    selector: 'app-feed-single',
    templateUrl: './feed-single.component.html',
    styleUrls: ['../feeds-list/feeds-list.component.css']
})
export class FeedSingleComponent implements OnInit {
    @Input() feedback: Feedback;
    constructor(public service: FeedbackService, private route: ActivatedRoute, private data: DataService) {
    }

    ngOnInit() {
        if (this.route.snapshot.params['id']) {
            this.service.getFeedback(this.route.snapshot.params['id'])
                .subscribe(data => {
                    this.feedback = new Feedback(data);
                    this.data.changeMessage(this.feedback.user.fullname);
                });
        }
    }
}
