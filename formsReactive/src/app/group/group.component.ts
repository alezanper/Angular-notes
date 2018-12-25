import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  badNames = ['Alex', 'Maria']

  constructor() { }

  ngOnInit() {
  }

  groupForm = new FormGroup({
    nameControl: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
    lastNameControl: new FormControl(null, [Validators.required]),
    emailControl: new FormControl(null, [Validators.required, Validators.email])
  });

  /**
   * When form is submitted the data will be show it to console
   */
  onSubmit() {
    console.warn(this.groupForm.value);
  }

  /**
   * Validator for avoid forbidden names
   * @param control 
   */
  forbiddenNames(control: FormControl): { [s: string]: boolean }{
    if(this.badNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }
    return null;
  }

}
