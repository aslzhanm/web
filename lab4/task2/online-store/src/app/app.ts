import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, ProductList], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('online-store');

  categories = [
  {id: 1, name: 'Smartphones'},
  {id: 2, name: 'Laptops'},
  {id: 3, name: 'Headphones'},
  {id: 4, name: 'Tablets'}
  ];

  selectedCategoryId: number | null = null;

  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 843000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 1
    },

    {
      id: 2,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
      price: 403000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 1
    },

    {
      id: 3,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      price: 330000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 1
    },

    {
      id: 4,
      name: 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ черный',
      description: 'Samsung Galaxy A07 6 ГБ/128 ГБ — это универсальный смартфон для тех, кто ценит производительность и большой объем памяти для хранения ваших данных.',
      price: 69000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 1
    },

    {
      id: 5,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'iPhone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее.',
      price: 490000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 1
    },

    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'По скорости вычислений чип M1 превосходит все другие процессоры Apple. Такая производительность позволяет выполнять на MacBook Air самые ресурсоёмкие задачи, например редактировать фото и видео на профессиональном уровне или играть в игры со сложной графикой',
      price: 440000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 2
    },

    {
      id: 7,
      name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK',
      description: 'Ноутбук IdeaPad 3 работает тише и с меньшим выделением тепла за счет использования оптимизированной механической системы распределения потоков воздуха и интеллектуальной вентиляции, предотвращающей смешивание потоков холодного и теплого воздуха. ',
      price: 170000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 2
    },

    {
      id: 8,
      name: 'Ноутбук Acer Aspire 3 15.6" / 8 Гб / SSD 256 Гб / Win 11 Pro / A325-45 / ZN.N01SI.03K.',
      description: 'Ноутбук Acer Aspire 3 A325-45 с экраном 15.6 дюймов – отличное решение для работы и учебы. Выпущен в 2025 году, оснащен 8 ГБ оперативной памяти и быстрым SSD NVME на 256 ГБ. На устройстве предустановлены Windows 11 Pro, что позволяет сразу приступить к продуктивной работе',
      price: 161000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-pro-a325-45-zn-n01si-03k--136300221/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 2
    },

    {
      id: 9,
      name: 'Ноутбук ThundeRobot 911S Core D 15.6" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F',
      description: 'Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей. Отличается высокой частотой обновления — достигает 144 Гц. Матовое покрытие экрана уменьшает количество бликов, обеспечивая комфортные условия для глаз.',
      price: 497000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000&tab=reviews&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 2
    },

    {
      id: 10,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
      description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений',
      price: 520000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 2
    },

    {
      id: 11,
      name: 'Наушники Razer Blackshark V2 X белый',
      description: 'Сразитесь со врагами в легкой киберспортивной гарнитуре, раскрывающую свои преимущества под давлением. Представляем Razer BlackShark V2 X - тройная угроза за счет восхитительного звучания, превосходной чистоты микрофона и звукоизоляции высокого качества, подтвержденными про-игроками',
      price: 15000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h07/64919532240926.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-belyi-104669405/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 3
    },

    {
      id: 12,
      name: 'Наушники Apple AirPods 4 белый',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.',
      price: 60000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 3
    },

    {
      id: 13,
      name: 'Наушники Apple AirPods 4 Active Noise Cancellation белый',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни',
      price: 84000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 3
    },

    {
      id: 14,
      name: 'Наушники Marshall Major IV черный',
      description: 'Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки самых разных жанров. В основе данной модели используются динамические излучатели с диаметром мембраны 40 мм, что в совокупности с широким диапазоном частот и высокой чувствительностью может обеспечить качественное и насыщенное звучание.',
      price: 19000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 3
    },

    {
      id: 15,
      name: 'Наушники Xiaomi Redmi Buds 6 Lite черный',
      description: 'Наушники TWS Xiaomi Buds 6 lite представлены в черном цвете. Благодаря эргономичной форме и силиконовым эластичным вкладышам они удобны в использовании. ',
      price: 8000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb9/pfe/88596781.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-6-lite-chernyi-123229664/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 3
    },

    {
      id: 16,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      price: 205000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 4
    },

    {
      id: 17,
      name: 'Планшет Xiaomi Redmi Pad 2 4G 11 дюйм 8 Гб/256 Гб серый',
      description: 'Xiaomi Redmi Pad 2 4G — универсальный планшет с ярким 11-дюймовым экраном и поддержкой мобильной связи, идеально подходящий для работы, учебы и развлечений.',
      price: 130000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 4
    },

    {
      id: 18,
      name: 'Планшет Huawei MatePad 11,5 S 2026 Papermatte',
      description: ' + подарок 11.5 дюйм 12 Гб/256 Гб зеленый',
      price: 260000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9a/p34/96173123.jpg?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-s-2026-papermatte-podarok-11-5-djuim-12-gb-256-gb-zelenyi-154784583/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 4
    },

    {
      id: 19,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/256 Гб серебристый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот планшет с мощным процессором Apple A16 и емким аккумулятором обеспечит вам высокую производительность и длительное время работы.',
      price: 275000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4d/p3f/37019512.png?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-256-gb-serebristyi-138202210/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 4
    },

    {
      id: 20,
      name: 'Планшет Samsung Galaxy Tab S10 Ultra 14.6 дюйм 12 Гб/256 Гб серый',
      description: 'Планшет Samsung Galaxy Tab S10 Ultra — мощное устройство с впечатляющим экраном и высокой производительностью, идеально подходящее для работы и развлечений.',
      price: 580000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-medium',
      images: [
        ''
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s10-ultra-14-6-djuim-12-gb-256-gb-seryi-128152132/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gbraid=0AAAAAC7-v7gFJkUm-SakbwqOi5jCJv0Yi&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1Ibx-4dnnj5zfoNT0AIdLHLWcLHvnt9p4uO6m4YSVv_iAQgUrGeAIBoCA3oQAvD_BwE',
      likes: 0,
      categoryId: 4
    }
    
  ]

    filteredProducts: Product[] = [];


  selectCategory (categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.filteredProducts = this.products.filter(
      product => product.categoryId === categoryId
    );

  };

}


