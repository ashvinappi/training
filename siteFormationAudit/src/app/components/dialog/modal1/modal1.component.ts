import {
  Component,
  EventEmitter,
  Input,
  Output,
  AfterContentInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrl: './modal1.component.scss',
})
export class Modal1Component {
  form!: FormGroup;
  errors: Record<string, any> = {};

  @Output() closeDialogEvent = new EventEmitter();

  @Input() openDialog!: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      ville: ['', Validators.required],
      accenture: [false, Validators.required],
      emploi: ['cdi', Validators.required],
      annee: [false, Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['openDialog']?.currentValue === false) {
      this.errors = {};
      this.initForm();
    }
  }

  closeDialog() {
    this.closeDialogEvent.emit();
  }

  onOkClick() {
    this.errors = {};
    if (this.form.invalid) {
      for (const key in this.form.controls) {
        if (this.form.get(key)?.errors) {
          this.errors[key] = this.form.get(key)?.errors;
        }
      }
    } else {
      console.log(this.form.value);
      alert('Formulaire envoyé');
      this.closeDialog();
    }
  }
}
