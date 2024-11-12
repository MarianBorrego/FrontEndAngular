import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ProductItemCart } from "../interfaces/product.interfarce";

@Injectable({
    providedIn: "root",
})
export class StorageService {
    loadProducts(): Observable<ProductItemCart[]> {
        const rawProducts = localStorage.getItem("products");

        return of(rawProducts ? JSON.parse(rawProducts):[]);
    }

    SaveProducts(products: ProductItemCart[]): void{
        localStorage.setItem('product', JSON.stringify(products));
    }
}