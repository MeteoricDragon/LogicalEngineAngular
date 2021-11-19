import { Injectable } from '@angular/core';
import { CarPartMember } from './car-part-member.model'
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CarPartMemberService {
  constructor(private http: HttpClient) {
  }
    readonly _baseUrl = "https://localhost:7458/api/Member";
    formData: CarPartMember = new CarPartMember();
    list!: CarPartMember[];
  postMember() {
    return this.http.post(this._baseUrl, this.formData);
  }
  putMember() {
    return this.http.put(this._baseUrl + "/" + this.formData.Id, this.formData);
  }
  deleteMember(id: number) {
    return this.http.delete(this._baseUrl + "/" + id );
  }
  refreshList() {
    this.http.get(this._baseUrl)
      .toPromise()
      .then(res => this.list = res as CarPartMember[]);
  }

}
