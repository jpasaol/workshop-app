import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from '../types';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  private readonly baseUrl: string = "https://api.angularbootcamp.com";

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrl + "/videos")
      .pipe(map(videos => videos.map(video => {
        return {
          ...video,
          title: video.title.toLocaleUpperCase()
        }
      })));
  }
}
