import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from  "@angular/material/snack-bar"
import { Observable } from 'rxjs';
import { IProduct } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string) : void {
      this.snackBar.open(msg, '', {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
      })
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseUrl, product)
  }

  read(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.baseUrl);
  }
}
