import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class') backgroundClass!: string;

  ngOnInit(): void {
    const backgroundIndex = this.randomIndex();

    this.backgroundClass = `background-${backgroundIndex}`;
  }

  private randomIndex(): number {
    return (Date.now() % 3) + 1;
  }
}
