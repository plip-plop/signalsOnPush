import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { BrotherComponent } from './components/brother/brother.component';
import { SisterComponent } from './components/sister/sister.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BrotherComponent, SisterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: string[] = [];
  signalsList = signal<string[]>([]);

  ngOnInit() {
    setInterval(() => {
      this.items.push("App");
      this.signalsList.mutate(values => values.push("AppComponent"));
    }, 1000);
  }

  onClick() {

  }
}
