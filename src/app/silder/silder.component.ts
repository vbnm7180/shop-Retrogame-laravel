import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-silder',
  templateUrl: './slider.component.html',
  styleUrls: ['./silder.component.scss']
})
export class SilderComponent implements OnInit {

  slides = [
    {img: "../../assets/images/slide1.png"},
    {img: "../../assets/images/slide2.png"}
  ];
  slideConfig = {"arrows":true,"prevArrow":".left","nextArrow":".right"};

  constructor() { }

  ngOnInit(): void {
  }

}
