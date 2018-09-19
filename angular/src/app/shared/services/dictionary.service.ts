import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Http } from '@angular/http';


@Injectable()
export class DictionaryService {
  public defaultLang = 'EN';
  public lang = 'EN';
  private subscriber = null;


  public dictionary = {

  };

  constructor(
    private http: Http
  ) {
    this.loadLanguage();
    this.subscriber = this.loadDictionary(this.lang).subscribe(d => this.dictionary = d);
  }

  getLabel(entry): string {
    return this.dictionary[entry] || '';
  }

  loadDictionary(language): Observable<any> {
    return this.http.get(`/api/dictionary`)
      .map(res => {
        const data = res.json().data;
        if (data.hasOwnProperty(language)) {
          return data[language];
        }
        return data[this.defaultLang];
      })
      .catch(err => err.json());
  }

  loadLanguage() {
    const $html = document.querySelector('html');
    this.lang = $html.getAttribute('lang');
    this.lang = this.lang.toUpperCase();
  }
}
