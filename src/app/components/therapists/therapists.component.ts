import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../../services/api.service';
import Facility from '../../models/facility.model';
import Therapist from '../../models/therapist.model';
import { log } from 'util';
import { stagger } from '@angular/core/src/animation/dsl';

@Component({
    selector: 'app-therapists',
    templateUrl: './therapists.component.html',
    styleUrls: ['./therapists.component.css']
})

export class TherapistsComponent {
    facilityList: Facility[];
    selectedFacility: Facility;

    therapistList: Therapist[];
    editTherapists: Therapist[] = [];

    public newTherapist: Therapist = new Therapist();
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService) {
        let that = this;

        this.apiService.getFacilityData()
        .subscribe( res => {
            that.facilityList = res;
        })
        
        this.apiService.getTherapistData()
        .subscribe((res: any) => {
            that.therapistList = res;
            if (!res) that.therapistList = [];
        });
    }

    create() {
        this.apiService.createTherapistData(this.therapistList, this.newTherapist).subscribe(res => {
            this.newTherapist.name = "";
            this.newTherapist.description = "";
        });
    }

    updateTherapist(selectedTherapist: Therapist) {
        if (this.therapistList.includes(selectedTherapist)) {
            if(!this.editTherapists.includes(selectedTherapist)) {
                this.editTherapists.push(selectedTherapist);
            }else{
                this.editTherapists.splice(this.editTherapists.indexOf(selectedTherapist), 1);
                this.apiService.updateTherapistData(this.therapistList, selectedTherapist).subscribe();
            }
        }
    }

    deleteTherapist(selectedTherapist: Therapist) {
        this.apiService.deleteTherapistData(this.therapistList, selectedTherapist).subscribe();
    }

    doneTherapist(selectedTherapist: Therapist) {
        this.updateTherapist(selectedTherapist);
    }

    submitTherapist(event, selectedTherapist: Therapist) {
        if ( event.keyCode == 13) {
            this.updateTherapist(selectedTherapist); 
        }
    }
}