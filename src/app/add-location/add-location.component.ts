import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent implements OnInit {
  locationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.locationForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      section: [
        '',
        [
          Validators.required,
          Validators.minLength(100),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      position: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      residents: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      locationType: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      image: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get name(): AbstractControl {
    return this.locationForm.get('name');
  }
  get section(): AbstractControl {
    return this.locationForm.get('section');
  }
  get position(): AbstractControl {
    return this.locationForm.get('position');
  }
  get residents(): AbstractControl {
    return this.locationForm.get('residents');
  }
  get locationType(): AbstractControl {
    return this.locationForm.get('locationType');
  }
  get image(): AbstractControl {
    return this.locationForm.get('image');
  }
}
