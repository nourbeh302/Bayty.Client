import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class ReportService {
    currentLang = 'en';

    constructor(
        private router: Router, 
        private _http: HttpClient, 
        public translate: TranslateService
    ) { }

    switchLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.translate.use(this.currentLang);
    }
}
