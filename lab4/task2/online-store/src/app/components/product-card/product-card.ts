import { Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  remove() {
    this.delete.emit(this.product.id);
  }

  like(){
    this.product.likes++;
  }

  //method for sharing
  shareToWhatsApp() {
    const url = `https://wa.me/?text=Check out this product: ${this.product.link}`;
    window.open(url, '_blank');
  }

  shareToTelegram() {
    // ВАЖНО: Добавлен /share/url?url= и правильный вызов функции внутри ${}
    const url = `https://t.me/share/url?url=${this.product.link}&text=${this.product.name}`;
    window.open(url, '_blank');
  }


}
