import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-facilities',
    templateUrl: './facilities.component.html',
    styleUrls: ['./facilities.component.css']
})

export class FacilitiesComponent {
    data_facilities: any;
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService) {
        let that = this;
        that.data_facilities = [];
       /*
        this.apiService.getFacilityData()
        .map((res: any) => {
            console.log("any:", res);
            that.data_facilities = res;    
            console.log(that.data_facilities);
        }).subscribe();*/
    }
}