import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'appendString'
})

export class AppendStringPipe implements PipeTransform {
    constructor(){}

    transform(value: string, queStr:string, queIndex: number) {
        return `${queStr}${queIndex+1} : ${value}`
    }
}