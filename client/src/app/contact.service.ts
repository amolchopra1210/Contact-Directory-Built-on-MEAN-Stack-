import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http : Http) { }

  //retrieving contacts

  getContact(){
    return this.http.get("api/contacts").map(res => res.json());
  }

  //Add contact

  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/contacts', newContact, { headers : headers }).map(res => res.json());
  }

  //Delete Method

  deleteMethod(id){
    return this.http.delete('api/contacts/' + id).map(res => res.json());
  }
}
