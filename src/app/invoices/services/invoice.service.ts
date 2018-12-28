import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';
import { map } from 'rxjs/operators';
import { CreateInvoice } from '../models/create-invoice';

const BASE_URL = 'http://localhost:3000/api';

@Injectable()
export class InvoiceService {

  constructor(private _http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this._http.get<Invoice[]>(`${BASE_URL}/invoice`);
  }

  createInvoice(invoice): Observable<Invoice> {

    const payload = {
      item: invoice.itemControl,
      quantity: invoice.quantityControl,
      date: invoice.dateControl,
      dueDate: invoice.duedateControl,
      rate: invoice.rateControl,
      tax: invoice.taxControl,
    };
    console.log('payload', payload);
    return this._http.post<Invoice>(`${BASE_URL}/invoice`, payload);

  }


  deleteInvoice(id: string): Observable<Invoice> {
    return this._http.delete<Invoice>(`${BASE_URL}/invoice/${id}`);
  }

}

