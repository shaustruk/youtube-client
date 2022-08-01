import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const numeric = /[0-9]+/.test(value);
    // const symbol = /(?=.*\W)/.test(value);
    const passwordValid =
      hasUpperCase && hasLowerCase && numeric; /**&& symbol*/
    return !passwordValid ? { passwordValidator: true } : null;
  };
}
