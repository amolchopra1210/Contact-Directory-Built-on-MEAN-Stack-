import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import {ContactService } from '../contact.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts : Contact[];
  contact : Contact;
  firstname : string;
  lastname : string;
  phone : string;

  constructor(private contactService : ContactService) { }

  addContact(){
    const newContact = {
      firstname : this.firstname,
      lastname : this.lastname,
      phone : this.phone,
    }
    this.contactService.addContact(newContact).subscribe(contact => this.contacts.push(contact));
    this.contactService.getContact().subscribe( contacts => {this.contacts = contacts});
  }
  
  ngOnInit() {
    this.getContact();
  }
  getContact(){
        this.contactService.getContact().subscribe(contacts => { this.contacts = contacts});
  }
  deleteContact(id : any){
    this.contactService.deleteMethod(id).subscribe(data => {
      console.log(data);
          for(let i = 0; i < this.contacts.length ; i++){
            if(this.contacts[i]._id === id){
                this.contacts.splice(i,1);
            }
          }
        });
  }
}
