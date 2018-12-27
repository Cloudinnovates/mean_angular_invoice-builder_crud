import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Observable } from 'rxjs';
import { Invoice } from '../../models/invoice';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss']
})
export class InvoiceListingComponent implements OnInit {

  invoices$: Observable<Invoice[]>;
  dataSource: Invoice[] = [];
  displayedColumns: string[] = ['item', 'quantity', 'date', 'dueDate', 'rate', 'tax', 'action'];

  constructor(
    private _invoiceService: InvoiceService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.invoices$ = this._invoiceService.getInvoices();
  }

  onClickOfAddNew() {
    this._router.navigate(['new'], { relativeTo: this._route }); // relative approach
    // !(or)
    // this._router.navigate(['dashboard', 'invoices', 'new']);
  }



}
