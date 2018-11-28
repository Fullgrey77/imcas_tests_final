import {Country} from './country.model';
import {Specialty} from './specialty.model';

export class User {
    id: number;
    title: string;
    username: string;
    first_name: string;
    last_name: string;
    fullname: string;
    slug: string;
    picture_url: string;
    country: Country;
    specialty: Specialty;
    company: Boolean;

    constructor(obj?: any) {
        this.id = obj && obj.id;
        this.title = obj && obj.title;
        this.username = obj && obj.username;
        this.first_name = obj && obj.first_name;
        this.last_name = obj && obj.last_name;
        this.fullname = obj && obj.fullname;
        this.slug = obj && obj.slug;
        this.picture_url = obj && obj.picture_url;
        this.country = obj && obj.country ? new Country(obj.country) : null;
        this.specialty = obj && obj.specialty ? new Specialty(obj.specialty) : null;
        this.company = obj && obj.company;

    }

}