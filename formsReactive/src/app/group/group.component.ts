import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  groupForm = new FormGroup({
    nameControl: new FormControl(null, [Validators.required]),
    lastNameControl: new FormControl(null, [Validators.required]),
    emailControl: new FormControl(null, [Validators.required, Validators.email])
  });

  onSubmit() {
    console.warn(this.groupForm.value);
  }

}
