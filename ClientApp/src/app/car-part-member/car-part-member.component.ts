import { Component, OnInit } from '@angular/core';
import { CarPartMember } from '../shared/car-part-member.model';
import { CarPartMemberService } from '../shared/car-part-member.service';

@Component({
  selector: 'app-car-part-member',
  templateUrl: './car-part-member.component.html',
  styles: [
  ]
})
export class CarPartMemberComponent implements OnInit {

  constructor(public service: CarPartMemberService ) { }

  ngOnInit(): void
  {
    this.service.refreshList();
  }

  populateForm(selectedRecord: CarPartMember)
  {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number)
  {
    this.service.deleteMember(id)
      .subscribe(
        res => { this.service.refreshList(); },
        err => { console.log(err) }
      )
  }
}
