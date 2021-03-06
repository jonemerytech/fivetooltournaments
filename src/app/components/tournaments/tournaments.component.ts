import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css'],
})
export class TournamentsComponent implements OnInit {
  products: any
  defaultImage = '~/assets/5TT-02.png'

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productsService.getProducts().subscribe((res: any) => {
      this.products = res.data
    })
  }
}
