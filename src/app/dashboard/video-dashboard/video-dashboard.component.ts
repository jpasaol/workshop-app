import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Video } from '../../types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.less']
})
export class VideoDashboardComponent implements OnInit {
  dashboardVideos: Video[] = [];
  currentVideo?: Video;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<Video[]>("https://api.angularbootcamp.com/videos")
      .subscribe(videos => this.dashboardVideos = videos);
  }

  selectVideo(video: Video) {
    this.currentVideo = video;
  }
}