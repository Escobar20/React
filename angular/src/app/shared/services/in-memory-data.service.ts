import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CONTACTS_LIST, EN, ES } from '../../models/';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { 
      contacts: CONTACTS_LIST,
      dictionary: {EN, ES}
    };
  }
}
