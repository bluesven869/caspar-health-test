import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {

    constructor(private http: Http) {
        console.log(http);
    }

    getFacilityData() {
        let url = '../mocks/facilities.json';
        return this.http.get(url);
    } 
}
