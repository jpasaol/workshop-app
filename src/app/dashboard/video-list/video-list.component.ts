import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Video } from '../../types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {

  @Input() selectedVideo?: Video;
  @Input() videoList?: Video[];

  @Output() select = new EventEmitter<Video>();

  constructor() { }

  ngOnInit(): void {
  }

  selectVideoItem(video: Video) {
    this.select.emit(video);
  }
}
