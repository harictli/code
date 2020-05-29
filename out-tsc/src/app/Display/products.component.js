import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProductsComponent = class ProductsComponent {
    constructor(_myAPIService) {
        this._myAPIService = _myAPIService;
    }
    ngOnInit() {
        this._myAPIService.getAll().subscribe((data) => {
            this.products = data;
        });
    }
};
ProductsComponent = __decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.css']
    })
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map