import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DepartureVehicleService } from './departure-vehicle.service';
import { Parking } from '../model/Parking.model';
import { Invoice } from '../model/Invoice.model';
import { DatePipe } from '@angular/common';

declare var jQuery;

@Component({
  selector: 'app-departure-vehicle',
  templateUrl: './departure-vehicle.component.html',
  styleUrls: ['./departure-vehicle.component.css'],
  providers: [DepartureVehicleService]
})
export class DepartureVehicleComponent implements OnInit {

  @ViewChild("invoiceModal") exitomodal: ElementRef;


  private plaque: string = "";
  private departureDate: string;
  private isRunning: boolean = false;
  private isValid: boolean = true;
  private isSuccess: boolean = false;
  private message: string;
  private parking: Parking;
  private invoice: Invoice;

  //DATOS DE LA FACTURA
  private invoicePlaque: string = "";
  private invoiceDescVehicleType: string = "";
  private invoiceEmployee: string = "";
  private invoiceIva: string = "";
  private invoiceAdditionalCost: string = "";
  private invoiceSubtotal: string = "";
  private invoiceTotal: string = "";
  private invoiceEntryDate: string = "";
  private invoiceDapartureDate: string = "";

  constructor(private departureVehicleService: DepartureVehicleService) {
    this.parking = new Parking();
  }

  ngOnInit() {
  }

  public save(): void {
    this.isValid = this.departureVehicleService.validate(this.plaque);
    this.isSuccess = false;


    if (this.isValid) {
      this.isRunning = true;

      this.departureVehicleService.getParkingByPlaque(this.plaque).subscribe(parkingFound => {

        if (parkingFound.totalRecords > 0) {
          this.parking = parkingFound.list[0];

          this.departureVehicleService.departureVehicle(this.parking).subscribe(parkingReturned => {

            if (parkingReturned.entity) {
              this.parking = JSON.parse(JSON.stringify(parkingReturned.entity));
              this.parking.departureDate = new Date(this.departureDate);

              this.departureVehicleService.createInvoice(this.parking).subscribe(invoiceReturned => {
                this.isRunning = false;

                if (invoiceReturned.entity) {
                  this.invoice = JSON.parse(JSON.stringify(invoiceReturned.entity));
                  this.fillInvoiceData(this.invoice);
                  this.plaque = "";
                  this.departureDate = "";
                  jQuery(this.exitomodal.nativeElement).modal('show');
                } else {
                  this.isRunning = false;
                  this.isValid = false;
                  this.message = parkingReturned.message;
                }
              });

            } else {
              this.isRunning = false;
              this.isValid = false;
              this.message = parkingReturned.message;
            }
          });
        } else {
          this.isRunning = false;
          this.isValid = false;
          this.message = "No hay vehiculos con la placa ingresada";
        }

      });

    } else {
      this.message = "Ingresa los datos obligatorios";
    }
  }


  public clearValidations(): void {
    this.isRunning = false;
    this.isSuccess = false;
    this.isValid = true;
  }

  private fillInvoiceData(invoice: Invoice): void {
    this.invoicePlaque = invoice.plaque;
    this.invoiceEmployee = invoice.employee;
    this.invoiceDescVehicleType = invoice.descVehicleType;
    this.invoiceIva = invoice.iva.toString();
    this.invoiceAdditionalCost = invoice.additionalCost.toString();
    this.invoiceSubtotal = invoice.subtotal.toString();
    this.invoiceTotal = invoice.total.toString();
    this.invoiceEntryDate = invoice.entryDate.toString();
    this.invoiceDapartureDate = invoice.departureDate.toString();
  }
}
