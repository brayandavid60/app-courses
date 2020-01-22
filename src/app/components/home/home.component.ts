import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  allCourses: any[] = [];
  loading:boolean;

  error:boolean;
  messageError:string;

  constructor(private courseService: CourseService) {

    this.loading = true;
    this.error = false;

    this.courseService.getCourses()
      .subscribe(data => {
        this.allCourses = data;
        this.loading = false;
      }, (errorService) => {
        this.loading = false;
        this.error = true;
        console.log(errorService);
        this.messageError = errorService.error.error.message;
      });
  }

  loadMore(){
    this.courseService.getCourses()
    .subscribe(courses => this.allCourses.push.apply(this.allCourses, courses))
  }

}
