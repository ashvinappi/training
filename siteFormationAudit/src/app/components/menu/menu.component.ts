import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  showSubmenu: boolean = false;

  constructor(readonly matDialog: MatDialog) {}

  openModel() {
    this.matDialog.open(CreateUserDialogComponent, { width: '600px', height: '200px' });
  }

  toggleSubmenu() {
    this.showSubmenu = !this.showSubmenu;
  }
}
