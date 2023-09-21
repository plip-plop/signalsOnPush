import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-sister',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sister.component.html',
  styleUrls: ['./sister.component.css']
})
export class SisterComponent implements OnInit {
  items: string[] = [];
  // signalsList = signal<string[]>([]);

  ngOnInit() {
    setInterval(() => {
      this.items.push("Sister");
      // this.signalsList.mutate(values => values.push("SisterComponent"));
    }, 1000);
  }

  onClick() { }
}
