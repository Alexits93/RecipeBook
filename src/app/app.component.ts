import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = 'recipes';

  public constructor(private titleService: Title) {
    this.setTitle('Recipe Book');
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  activePage(feature: string) {
    this.page = feature;
  }
}
