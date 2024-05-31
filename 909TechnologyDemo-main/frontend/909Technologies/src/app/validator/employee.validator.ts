import { AbstractControl } from "@angular/forms";

export class EmployeeValidator {
    static validateEmailId(control: AbstractControl): any {
        let emailIdPattern: RegExp = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/;
        if (!emailIdPattern.test(control.value)) {
            return { "emailIdPatternError": true }
        }
        return null;
    }
    static validatePhoneNumber(control: AbstractControl): any {
        let pattern1: RegExp = /^\d{10}$/;

        let value = control.value;
        let matches: boolean = pattern1.test(value);

        if (!matches) {
            return { "phoneNumberError": true }
        }
        return null;
    }
}