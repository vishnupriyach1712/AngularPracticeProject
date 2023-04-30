import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // currentLanguage: any = 'en';  
  // languageCode = 'en';  
  // constructor(public translate: TranslateService,) { }  
  // languages = [  
  //   { 'languageCode': 'en', 'languageName': 'English' },  
  //   { 'languageCode': 'hi', 'languageName': 'Hindi' },  
  //   { 'languageCode': 'ar', 'languageName': 'Arabic' }  
  // ]  
  
  ngOnInit() {  
  }  

  // languageChange($event) {  
  //   debugger;  
  //   this.currentLanguage = $event;  
  //   this.translate.use(this.currentLanguage);  
  // }  

}
