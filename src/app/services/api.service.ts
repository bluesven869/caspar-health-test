import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AsyncLocalStorage } from 'angular-async-local-storage';


@Injectable()
export class ApiService {
    constructor(private http: HttpClient, protected localStorage: AsyncLocalStorage) {
        
    }

    //Facility Apis

    getFacilityData() {
        return this.localStorage.getItem('facility');
    }

    createFacilityData(facilityList, facility) {
        facility._id = facilityList.length + 1;
        facilityList.push({
            _id: facility._id,
            name: facility.name,
            description: facility.description
        });
        return this.localStorage.setItem('facility', facilityList);
    }
    
    updateFacilityData(facilityList, facility) {
        return this.localStorage.setItem('facility', facilityList);
    }

    deleteFacilityData(facilityList, facility) {
        facilityList.splice(facilityList.indexOf(facility), 1);
        return this.localStorage.setItem('facility', facilityList);
    }

    //Therapists Apis

    getTherapistData() {
        return this.localStorage.getItem('therapist');
    }

    createTherapistData(therapistList, therapist) {
        therapist._id = therapistList.length + 1;
        therapistList.push({
            _id: therapist._id,
            name: therapist.name,
            facility: therapist.facility,
            description: therapist.description
        });
        return this.localStorage.setItem('therapist', therapistList);
    }
    
    updateTherapistData(therapistList, therapist) {
        return this.localStorage.setItem('therapist', therapistList);
    }

    deleteTherapistData(therapistList, therapist) {
        therapistList.splice(therapistList.indexOf(therapist), 1);
        return this.localStorage.setItem('therapist', therapistList);
    }

    //Patient Apis

    getPatientData() {
        return this.localStorage.getItem('patient');
    }

    createPatientData(patientList, patient) {
        patient._id = patientList.length + 1;
        patientList.push({
            _id: patient._id,
            name: patient.name,
            therapist: patient.therapist,
            description: patient.description
        });
        return this.localStorage.setItem('patient', patientList);
    }
    
    updatePatientData(patientList, patient) {
        return this.localStorage.setItem('patient', patientList);
    }

    deletePatientData(patientList, patient) {
        patientList.splice(patientList.indexOf(patient), 1);
        return this.localStorage.setItem('patient', patientList);
    }
}
