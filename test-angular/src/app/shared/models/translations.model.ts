export class Translations {
    name: string;
    locale: string;
    content: string;

    constructor(obj?: any) {
        this.content    = obj && obj.content;
        this.locale     = obj && obj.locale;
        this.name       = obj && obj.name;
    }
}
