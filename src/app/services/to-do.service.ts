import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CommonHttp } from './common-http.service';


@Injectable({
    providedIn: 'root'
})
export class TODOService {
    constructor(
        private httpProxy: CommonHttp
    ) { }

    public postAsync(params?: any): Observable<any> {
        const url = `/v1/create`;
        return this.httpProxy.postAsync(url, params);
    }
}
