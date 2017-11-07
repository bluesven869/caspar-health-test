import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent {
    
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute) {
    }

    onClickPatients(): void {
        this.router.navigate(['/patients']);
    }

    onClickTherapists(): void {
        this.router.navigate(['/therapists']);
    }

    onClicFacilities(): void {
        this.router.navigate(['/facilities']);
    }

}