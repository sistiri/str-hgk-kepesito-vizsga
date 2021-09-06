import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Student } from 'src/app/models/student';
import { StudentHttpService } from 'src/app/service/student-http.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  reactForm: FormGroup;

  studentId: string = ''


  student$: Observable<Student> = this.ar.params.pipe(
    tap( params => this.studentId = params.id),
    switchMap(params => this.service.getById(params.id))
  );


  constructor(
    private service: StudentHttpService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  saveStudent(form: NgForm): void {
    this.service.update(form.value, this.studentId).subscribe(
      student => this.router.navigate(['/', 'student-list']),
      err => console.error(err)
    );
  }

}
