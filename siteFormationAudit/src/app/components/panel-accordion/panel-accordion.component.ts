import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel-accordion',
  templateUrl: './panel-accordion.component.html',
  styleUrls: ['./panel-accordion.component.scss'],
})
export class PanelAccordionComponent {
  @Input() open = false;
  uniqueId: string = '';

  @Input() titre = '';

  generateUniqueId() {
    if (!this.uniqueId) {
      this.uniqueId = 'panel-' + Math.floor(Math.random() * 10000);
    }
    return this.uniqueId;
  }
}
