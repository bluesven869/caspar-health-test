import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiService } from '../../services/api.service';
import Patient from '../../models/patient.model';
import Therapist from '../../models/therapist.model';
import { log } from 'util';
import { stagger } from '@angular/core/src/animation/dsl';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css']
})

export class PatientsComponent {
    therapistList: Therapist[];
    selectedTherapist: Therapist;

    patientList: Patient[];
    editPatients: Patient[] = [];

    public newPatient: Patient = new Patient();
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService) {
        let that = this;

        this.apiService.getTherapistData()
        .subscribe( res => {
            that.therapistList = res;
        })
        
        this.apiService.getPatientData()
        .subscribe((res: any) => {
            that.patientList = res;
            if (!res) that.patientList = [];
        });
    }

    create() {
        this.apiService.createPatientData(this.patientList, this.newPatient).subscribe(res => {
            this.newPatient.name = "";
            this.newPatient.description = "";
        });
    }

    updatePatient(selectedPatient: Patient) {
        if (this.patientList.includes(selectedPatient)) {
            if(!this.editPatients.includes(selectedPatient)) {
                this.editPatients.push(selectedPatient);
            }else{
                this.editPatients.splice(this.editPatients.indexOf(selectedPatient), 1);
                this.apiService.updatePatientData(this.patientList, selectedPatient).subscribe();
            }
        }
    }

    deletePatient(selectedPatient: Patient) {
        this.apiService.deletePatientData(this.patientList, selectedPatient).subscribe();
    }

    donePatient(selectedPatient: Patient) {
        this.updatePatient(selectedPatient);
    }

    submitPatient(event, selectedPatient: Patient) {
        if ( event.keyCode == 13) {
            this.updatePatient(selectedPatient); 
        }
    }
}