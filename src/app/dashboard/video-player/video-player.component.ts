import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.less']
})
export class VideoPlayerComponent implements OnInit {

  @Input() video?: Video;

  constructor() { }

  ngOnInit(): void {
  }

}
