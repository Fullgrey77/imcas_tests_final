import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {FeedbackService} from './shared/services/feedback.service';
import {FeedsComponent} from './feeds/feeds.component';
import {FeedsListComponent} from './feeds/feeds-list/feeds-list.component';
import {FeedSingleComponent} from './feeds/feed-single/feed-single.component';
import {LocalePipe} from './locale.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        FeedsComponent,
        FeedsListComponent,
        FeedSingleComponent,
        LocalePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        FeedbackService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
