import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';

const BASE_URL = 'http://localhost:3000/api';

@Injectable()
export class InvoiceService {

  constructor(private _http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this._http.get<Invoice[]>(`${BASE_URL}/invoice`);
  }


}

