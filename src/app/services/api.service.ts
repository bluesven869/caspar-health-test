import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
        
    }

    getFacilityData() {
        let url = 'assets/mocks/facilities.json';
        return this.http.get(url);
    } 
}
