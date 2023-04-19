import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class Validations{
    public static Required = [Validators.required];
    public static RequiredAlpha = [Validators.required, Validators.pattern('[A-Za-z\ ]+')];
    public static RequiredAlphaNamaric = [Validators.required, Validators.pattern('[A-Za-z0-9\ ]+')];
    public static RerquiredPrice = [Validators.required, Validators.pattern('[0-9]*')];
    public static Date = [Validators.required]
}