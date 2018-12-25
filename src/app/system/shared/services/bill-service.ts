import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bill } from '../models/bill.model';

@Injectable({ providedIn: 'root' })
export class BillService {
    constructor(private http: HttpClient) {}

    getBill(): Observable<Bill> {
        return this.http.get<Bill[]>(`http://localhost:3000/bill`)
        .pipe(map((res: Bill[]) => res[0] ? res[0] : undefined));
    }

    getCurrency(base: string = 'RUB'): Observable<any> {
        return this.http.get<Bill[]>(`https://api.exchangeratesapi.io/latest?base=${base}`)
        .pipe(map((res: Bill[]) => res[0] ? res[0] : undefined));
    }
}
