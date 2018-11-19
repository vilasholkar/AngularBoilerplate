import { Component, OnInit, Input } from '@angular/core';
import { ConstantService } from '../../service/core/constant.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() css: string;
  @Input() imgUrl: string;
  @Input() altImgUrl: string;
  @Input() dimension: number;
  public imageName = 'imageName';
  public displayImage = this.constantSvc.imageConfig.IMG_NOT_FOUND;
  constructor(private constantSvc: ConstantService) { }

  ngOnInit() {
    if (typeof this.imgUrl !== 'undefined' && this.imgUrl !== null && this.imgUrl !== '') {
      this.displayImage = this.constantSvc.imageBaseUrl + this.imgUrl;
    } else if (typeof this.altImgUrl !== 'undefined' && this.altImgUrl !== null && this.altImgUrl !== '') {
      this.displayImage = this.altImgUrl;
    }

    if (!this.dimension) {
      this.dimension = this.constantSvc.imageConfig.DEFAULT_WIDTH;
      this.dimension = this.constantSvc.imageConfig.DEFAULT_HEIGHT;
    }
  }

}
