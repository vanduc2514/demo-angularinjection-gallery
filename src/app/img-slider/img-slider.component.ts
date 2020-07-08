import {AfterContentInit, Component, ContentChildren, OnInit, QueryList, ViewEncapsulation} from '@angular/core';
import {ImgSlideComponent} from './img-slide/img-slide.component';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImgSliderComponent implements OnInit, AfterContentInit {
  @ContentChildren(ImgSliderComponent)
  slides: QueryList<ImgSlideComponent>;

  component: ImgSlideComponent;
  activeIndex = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.slides);
    this.component = this.slides.first;
  }

  previous(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

  next(): void {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }
}
