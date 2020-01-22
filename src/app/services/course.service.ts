import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private urlEndPoint: string = 'https://mytablemesa.com/api/courses';

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(`${this.urlEndPoint}?limit=100`)
      .pipe(map(data => data['items']));
  }

  getSearchCourse(finished: string) {
    return this.http.get(`${this.urlEndPoint}?name=${finished}&limit=15`)
      .pipe(map(data =>  data['items']));
  }

}
