import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  categories = [
    {
      img: 'assets/images/list.svg',
      title: 'РАЗРЕШЕНИЕ НА РАБОТУ И SSN (Employment Authorization Social Security )',
      link: '/ssn'
    },
    {
      img: 'assets/images/hosp.svg',
      title: 'МЕДИЦИНАСКАЯ СТРАХОВКА (MEDICAL INSURANCE)',
      link: '/insurence'
    },
    {
      img: 'assets/images/car.svg',
      title: 'ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ',
      link: '/car'
    },
    {
      img: 'assets/images/food.svg',
      title: 'FOOD STAMPS',
      link: '/food'
    },
    {
      img: 'assets/images/money.svg',
      title: 'ОТКРЫТИЕ БАНКОВСКОГО СЧЕТА',
      link: '/bank'
    },
    {
      img: 'assets/images/work.svg',
      title: 'ОТКРЫТИЕ БИЗНЕСА',
      link: '/work'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
