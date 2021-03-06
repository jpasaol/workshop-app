import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Video } from '../../types';

@Component({
  selector: 'app-video-list-card',
  templateUrl: './video-list-card.component.html',
  styleUrls: ['./video-list-card.component.less']
})
export class VideoListCardComponent implements OnInit {

  @Input() selected: boolean = false;
  @Input() video?: Video;

  constructor() { }

  ngOnInit(): void {
  }

}
