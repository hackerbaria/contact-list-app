import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact List App';
  contacts: Contact[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-555-5555' },
    // Add more contacts as needed
  ];
  selectedContact: Contact | null = null;
  searchQuery: string = '';

  get filteredContacts(): Contact[] {
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      contact.phone.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
