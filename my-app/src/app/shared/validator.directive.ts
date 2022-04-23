import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { createPasswordValidator } from './password.validator';

@Directive({
  selector: '[passwordValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordValidatorDirective,
    multi: true
  }]
})
export class PasswordValidatorDirective implements Validators {
  validate(control: AbstractControl): ValidationErrors | null {
    return createPasswordValidator()(control);
  }
}
