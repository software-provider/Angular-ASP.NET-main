import { Time } from "@angular/common";
import { Model } from "src/app/Model/Model";

export class Product extends Model {
    EMP: string = '';
    Suffix: string = '';
    Amount: number = 0;
    StartDate: string = '';
    ResponceType = '';
    ResponceDate: string  = '';
    Comment: string  = '';
    EditBy: string  = '';
    ViewResponded : boolean = false;
    CLosed : boolean = false;
}