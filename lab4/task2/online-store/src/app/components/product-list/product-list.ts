import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 777777,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE'
    },

    {
      id: 2,
      name: 'Смарт-часы YUNTEKO DMi50 графитовый-черный',
      description: '🔆🕙 Смарт часы YUNTEKO DMi50 — умнее других "умных" часов, крепче твоих нервов, и работает дольше, чем ты на работе!🔥',
      price: 29999,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p52/58332178.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd0/p54/58332180.jpg?format=gallery-medium'
    
      ],
      link: 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE'
    },

    {
      id: 3,
      name: 'Рация Baofeng BF-888S',
      description: 'Baofeng BF-888s уверенно работает на расстояниях до 1 км на улицах большого города, и на 5-7 км за городом, в степной местности.',
      price: 7888,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p03/p34/104923286.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6b/p1d/18052908.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4f/p1d/18052909.jpg?format=gallery-medium'
        
      ],
      link: 'https://kaspi.kz/shop/p/ratsija-baofeng-bf-888s-100648176/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE'
    },

    {
      id: 4,
      name: 'Фитнес-браслет Xiaomi Smart Band 10 черный',
      description: 'Xiaomi Smart Band 10 — стильный и функциональный фитнес-браслет в черном цвете, который станет вашим надежным помощником в достижении спортивных целей и контроле здоровья.',
      price: 23333,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe9/p90/84688212.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p74/p92/67214815.png?format=gallery-medium',
        
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/p05/49520025.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-10-chernyi-141530632/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE'
    },

    {
      id: 5,
      name: 'Электронная книга ONYX BOOX Go Color 7 (Gen II) черный',
      description: 'ONYX BOOX Go Color 7 (Gen II) — современный цветной ридер, который сочетает в себе высокое разрешение и удобство использования. Идеален для чтения книг в любом месте благодаря встроенной подсветке и долговечному аккумулятору.',
      price: 129999,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p97/p58/50611308.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pac/p5b/50611315.png?format=gallery-medium',
        
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/p5e/50611322.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/onyx-boox-go-color-7-gen-ii-chernyi-140657740/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE'
    },

    {
      id: 6,
      name: 'Наушники Apple EarPods USB-C белый',
      description: 'Наушники Apple USB-C MYQY3ZM/A — это удобное и практичное решение для тех, кто предпочитает классический дизайн и надёжное качество звука. ✨ ',
      price: 10777,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h55/hd8/84353546846238.jpg?format=gallery-medium',
        
        'https://resources.cdn-kaspi.kz/img/m/p/h49/ha9/84353546911774.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-usb-c-belyi-114086432/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE'
    },

    {
      id: 7,
      name: 'Портативная колонка BT SPEAKER ZQS-4239 черный',
      description: 'Портативная колонка BT SPEAKER ZQS-4239 — ваш идеальный спутник для вечеринок и отдыха, обеспечивающий мощный звук и удобство использования.',
      price: 4222,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=gallery-medium',
      images: [
        '',
        '',
        ''
      ],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-bt-speaker-zqs-4239-chernyi-110785723/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE'
    },

    {
      id: 8,
      name: 'Батарейка AAA Duracell 12 шт',
      description: 'Батарейки основной линейки размера AAА - работают до 10 раз дольше. Щелочные батарейки подходят для обширного применения.',
      price: 1111,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hea/h8f/80794403635230.jpg?format=gallery-medium',
      images: [
        '',
        '',
        ''
      ],
      link: 'https://kaspi.kz/shop/p/batareika-aaa-duracell-12-sht-110389394/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE'
    },

    {
      id: 9,
      name: 'Обеденный стол Seol, 100х100x75 см, ЛДСП, тон светлый мрамор',
      description: 'Этот стол сочетает в себе элегантность и прочность, предлагая стильный и долговечный вариант для вашего интерьера',
      price: 28888,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/hbd/69835310235678.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha8/h68/69835310759966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h60/69835311808542.jpg?format=gallery-medium',
        ''
      ],
      link: 'https://kaspi.kz/shop/p/stol-obedennyi-seol-100x100x75-sm-ton-svetlyi-mramor-109252994/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE'
    },

    {
      id: 10,
      name: 'Bioderma крем Sebium Hydra для лица 40 мл',
      description: 'В период лечения тяжелых форм акне кожа может очень сильно сохнуть, трескаться, раздражаться и испытывать общий дискомфорт.',
      price: 7600,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p0a/83177267.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/pbd/25952389.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p13/pbb/25952391.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf7/pba/25952392.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/bioderma-krem-sebium-hydra-dlja-litsa-40-ml-17600059/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE'
    },

  ]
}
