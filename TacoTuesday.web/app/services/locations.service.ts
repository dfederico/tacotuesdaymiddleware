import { LocationsResult } from './../types/locations-result';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LocationsService {
    constructor(private http: Http) { }
    
    public GetInfo(long: number, lat: number): Observable<LocationsResult>{
        var url = `http://localhost:47905/api/location?longitude=${long}&latitude=${lat}`
        console.log(url);
        return this.http.get(url)
        .map(res => res.json())
        .catch(this.handleErrors);;
    }

    handleErrors(error: Response) {
        alert(error);
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}