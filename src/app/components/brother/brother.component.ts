import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-brother',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css']
})
export class BrotherComponent implements OnInit {
  items: string[] = [];
  signalsList = signal<string[]>([]);

  ngOnInit() {
    setInterval(() => {
      this.items.push("Brother");
      this.signalsList.mutate(values => values.push("BrotherComponent"));
    }, 1000);
  }

  onClick() { }
}
