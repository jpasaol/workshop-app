import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VideoDataService } from 'src/app/api/video-data.service';

import { Video } from '../../types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.less']
})
export class VideoDashboardComponent implements OnInit {
  dashboardVideos: Observable<Video[]> = of([]);
  currentVideo?: Video;

  constructor(private _vds: VideoDataService) { }

  ngOnInit(): void {
    this.dashboardVideos = this._vds.loadVideos();
  }

  selectVideo(video: Video) {
    this.currentVideo = video;
  }
}