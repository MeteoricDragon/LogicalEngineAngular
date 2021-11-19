import { Component, OnInit } from '@angular/core';
import { CarPartMemberService } from '../../shared/car-part-member.service';
import { NgForm } from '@angular/forms';
import { CarPartMember } from '../../shared/car-part-member.model'
@Component({
  selector: 'app-car-part-member-form',
  templateUrl: './car-part-member-form.component.html',
  styles: [
  ]
})
export class CarPartMemberFormComponent implements OnInit
{
  constructor(public service: CarPartMemberService) { }
  ngOnInit(): void { }

  onSubmit(form: NgForm)
  {
    if (this.service.formData.Id == 0) // will use the id as identifier for updating or insertion
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm)
  {
    this.service.postMember().subscribe(
      res =>
      {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
  }
  updateRecord(form: NgForm)
  {
    this.service.putMember().subscribe(
      res =>
      {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
  }
  resetForm(form: NgForm)
  {
    form.form.reset();
    this.service.formData = new CarPartMember();
  }
}
