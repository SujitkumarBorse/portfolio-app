import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Portfolio app component
  currentTheme: Theme = 'light';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Initialize theme service to ensure CSS variables are applied
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
}
