import { Component, Input, OnInit } from '@angular/core';

import { Video } from '../../types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {

  selectedVideo: Video | undefined;
  @Input() videoList: Video[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  selectVideoItem(video: Video) {
    this.selectedVideo = video;
  }
}
