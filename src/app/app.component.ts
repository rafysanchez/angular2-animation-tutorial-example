﻿import { Component } from '@angular/core';

import { ProductService } from './_services/index';

@Component({
   // moduleId: module.id.toString(),
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(private productService: ProductService) {
        // add some initial products
        if (productService.getAll().length === 0) {
            productService.save({ name: 'Boardies', price: '25.00' });
            productService.save({ name: 'Singlet', price: '9.50' });
            productService.save({ name: 'asca ', price: '12.95' });
            productService.save({ name: 'mola ', price: '12.95' });
            productService.save({ name: 'feijo', price: '12.95' });
            productService.save({ name: 'milho', price: '12.95' });
            productService.save({ name: 'manga', price: '12.95' });
            productService.save({ name: 'bananas', price: '12.95' });
            productService.save({ name: 'maca ', price: '12.95' });





        }
    }
}
