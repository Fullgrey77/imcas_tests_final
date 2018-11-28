import {User} from './user.model';

export class Feedback {
    id: number;
    sorting_order: number;
    user: User;
    translations: Array<object>;

    constructor(obj?: any) {
        this.id              = obj && obj.id;
        this.sorting_order   = obj && obj.sorting_order;
        this.user            = obj && obj.user ? new User(obj.user) : null;
        this.translations    = obj && obj.translations;
    }
}
