import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators{
    static validOldPassword(control: AbstractControl){
        return new Promise((resolve) =>{
            setTimeout(() => {
                if (control.value !== '123')
                     resolve ({ invalidOldPassword: true }); 
                else resolve (null);
            }, 2000)
        }); 
    }

    static passwordsShouldMatch(control: AbstractControl) : ValidationErrors | null{
        let newPassword = control.get('newpassword');
        let confirmPassword = control.get('confirmpassword');
        
        if (newPassword.value !== confirmPassword.value )
            return { passwordsShouldMatch: true }
        return null; 
    }
}