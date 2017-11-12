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
        that.data_facilities =  {
            "data":
            [  
                {  
                    "data":{  
                        "name":"Andrew",
                        "gender":"Male"
                    },
                    "children":[
                        {  
                            "data":{  
                                "name":"Andrewson",
                                "gender":"Male"
                            },
                            "children":[  
                                {  
                                    "data":{  
                                        "name":"Eric",
                                        "gender":"Male"
                                    }
                                }                       
                            ]
                        }
                    ]
                }
            ]
        };
        /*
        this.apiService.getFacilityData()
        .map((res: any) => {
            
            that.data_facilities = res;    
            
        }).subscribe(); */
    }
}