import {Translations} from './translations.model';

export class Country {
    id: number;
    translations: Translations[] | null;

    constructor(obj?: any) {
        this.id = obj && obj.id;
        if (obj && obj.translations) {
            this.translations = [];
            obj.translations.forEach(e => {
                this.translations.push(new Translations(e));
            });
        }
    }
}
