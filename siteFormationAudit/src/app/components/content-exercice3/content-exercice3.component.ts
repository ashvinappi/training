import {
  Component,
  SimpleChanges,
  OnChanges,
  EventEmitter,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-content-exercice3',
  templateUrl: './content-exercice3.component.html',
  styleUrl: './content-exercice3.component.scss',
})
export class ContentExercice3Component {
  openPanel = 0;
  openDialog = true;
  closeDialogEvent() {
    this.openDialog = false;
  }
}
