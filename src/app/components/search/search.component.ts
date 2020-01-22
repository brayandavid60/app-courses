import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  courseFound:any[]= [];
  loading:boolean;

  constructor(private courseService: CourseService) { }

  search(finished: string) {
    console.log(finished);

    this.loading = true;
    this.courseService.getSearchCourse(finished)
      .subscribe((data: any) => {
        console.log(data);
        this.courseFound = data;
        this.loading = false;
      })
  }
}
