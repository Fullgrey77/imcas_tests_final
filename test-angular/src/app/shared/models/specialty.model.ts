import {Translations} from './translations.model';

export class Specialty {
    id: number;
    doctor: boolean;
    translations: Translations[] | null;

    constructor(obj?: any) {
    this.id    = obj && obj.id;
    this.doctor     = obj && obj.doctor;
        if (obj && obj.translations) {
            this.translations = [];
            obj.translations.forEach(e => {
                this.translations.push(new Translations(e));
            });
        }
    }
}
