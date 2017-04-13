import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    public message: any;

    constructor(private alertService: AlertService) { }

    public ngOnInit() {
        this.alertService.getMessage().subscribe((message) => { this.message = message; });
    }
}
