import { ProductService } from "./../product.service";
import { IProduct } from "./../product.model";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products: IProduct[] = [];
  displayedColumns = ["action", "id", "name", "price"];

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }

  deleteProduct(id: string): void {
    Swal.fire({
      icon: "warning",
      title: "Deletar",
      text: "Vai deletar",
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Deletar Regitro",
      allowEnterKey: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then(() => {
      this.productService.delete(id).subscribe(() => {
        this.ngOnInit()
      });
    });

    return;
  }
}
