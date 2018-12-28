import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoiceFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _invoiceService: InvoiceService,
    private snackBar: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.invoiceFormGroup = this._formBuilder.group({
      itemControl: ['', Validators.required],
      quantityControl: ['', Validators.required],
      dateControl: ['', Validators.required],
      duedateControl: ['', Validators.required],
      rateControl: '',
      taxControl: '',
    });
  }

  onFormSubmit() {
    console.log(this.invoiceFormGroup.value);
    this._invoiceService.createInvoice(this.invoiceFormGroup.value).subscribe(
      (data) => {

        this.openSnackBar(data['message'], 'Success');
        this.invoiceFormGroup.reset();
        this._router.navigate(['dashboard', 'invoices']);
      },
      err => {
        this.errorHandler(err, 'Falied to create invoice');
      }
    );

  }


  private errorHandler(error, message) {
    console.error(error);
    this.openSnackBar(message, 'Error');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
