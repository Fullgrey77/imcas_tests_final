import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/services/data.service';

@Component({
    selector: 'app-feeds',
    templateUrl: './feeds.component.html'
})
export class FeedsComponent implements OnInit {
    title: string;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.currentMessage
            .subscribe(title => this.title = title);
    }
}
