import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../../services/api.service';
import Facility from '../../models/facility.model';
import { log } from 'util';
import { stagger } from '@angular/core/src/animation/dsl';

@Component({
    selector: 'app-facilities',
    templateUrl: './facilities.component.html',
    styleUrls: ['./facilities.component.css']
})

export class FacilitiesComponent {
    facilityList: Facility[];
    editFacilities: Facility[] = [];

    public newFacility: Facility = new Facility();
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService) {
        let that = this;
        
        this.apiService.getFacilityData()
        .subscribe((res: any) => {
            that.facilityList = res;
            if (!res) that.facilityList = [];
        });
    }

    create() {
        this.apiService.createFacilityData(this.facilityList, this.newFacility).subscribe(res => {
            this.newFacility.name = "";
            this.newFacility.description = "";
        });
    }

    updateFacility(selectedFacility: Facility) {
        if (this.facilityList.includes(selectedFacility)) {
            if(!this.editFacilities.includes(selectedFacility)) {
                this.editFacilities.push(selectedFacility);
            }else{
                this.editFacilities.splice(this.editFacilities.indexOf(selectedFacility), 1);
                this.apiService.updateFacilityData(this.facilityList, selectedFacility).subscribe();
            }
        }
    }

    deleteFacility(selectedFacility: Facility) {
        this.apiService.deleteFacilityData(this.facilityList, selectedFacility).subscribe();
    }

    doneFacility(selectedFacility: Facility) {
        this.updateFacility(selectedFacility);
    }

    submitFacility(event, selectedFacility: Facility) {
        if ( event.keyCode == 13) {
            this.updateFacility(selectedFacility); 
        }
    }
}