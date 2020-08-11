import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'deals';

  name = 'Angular Lovers';

constructor(
    private title: Title,
    private meta: Meta
) {}

ngOnInit() {
    this.title.setTitle('Autoaffilate.in');
    this.meta.updateTag({ name: 'description', content: 'Dynamic Hello Angular Lovers description!' });
}
}
