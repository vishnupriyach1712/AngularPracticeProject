import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {

  constructor() { }
  selectedLanguage = new BehaviorSubject('en')
}
