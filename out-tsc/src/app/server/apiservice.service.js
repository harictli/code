import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let ApiserviceService = class ApiserviceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiServer = "https://localhost:44384/api/";
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    create(product) {
        return this.httpClient.post(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
            .pipe(catchError(this.errorHandler));
    }
    getById(id) {
        return this.httpClient.get(this.apiServer + '/products/' + id)
            .pipe(catchError(this.errorHandler));
    }
    getAll() {
        return this.httpClient.get(this.apiServer + '/products/')
            .pipe(catchError(this.errorHandler));
    }
    update(id, product) {
        return this.httpClient.put(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
            .pipe(catchError(this.errorHandler));
    }
    delete(id) {
        return this.httpClient.delete(this.apiServer + '/products/' + id, this.httpOptions)
            .pipe(catchError(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
};
ApiserviceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiserviceService);
export { ApiserviceService };
//# sourceMappingURL=apiservice.service.js.map