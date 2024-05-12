import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];
  @Output() selectContact = new EventEmitter<Contact>();

  onSelect(contact: Contact): void {
    this.selectContact.emit(contact);
  }
}
