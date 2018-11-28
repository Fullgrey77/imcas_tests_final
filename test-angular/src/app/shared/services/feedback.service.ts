import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Feedback} from '../models/feedback.model';

@Injectable()
export class FeedbackService {

    private apiUrl = 'http://api.imcas.com/v1/feedbacks';

    constructor(private http: HttpClient) {
    }
    getFeedbacks(): Observable<Feedback[]> {
        return this.http.get(this.apiUrl).pipe(
            map(res => res['data']));
    }

    getFeedback(id): Observable<Feedback> {
        return this.http.get(this.apiUrl + '/' + id).pipe(
            map(res =>  {
                return new Feedback(res);
            }));
    }
}
