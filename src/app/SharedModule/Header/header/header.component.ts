import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLanguageService } from 'src/app/Services/Language/change-language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  switchLang: string;
  browserLang: string;
  constructor(
    private langService: ChangeLanguageService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'hin']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserLang = translate.getDefaultLang();
    this.languageChanged();
    this.langService.selectedLanguage.next(this.browserLang)
    this.langService.selectedLanguage.subscribe((res) => {
      this.switchLang = res;
    });
  }

  ngOnInit(): void {}

  selectLanguage(languageCode: string) {
    console.log(languageCode);
    this.langService.selectedLanguage.next(languageCode);
    this.translate.use(this.langService.selectedLanguage.value)
  }

  languageChanged(){
    this.translate.use( this.browserLang.match(/en|hin/) ? this.browserLang :'en')
  }
}
