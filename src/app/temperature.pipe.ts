import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temperaturePipe',
    standalone: true
})
export class TemperaturePipe implements PipeTransform {
    //value : the value on which the pipe is used
    // args : the configuration value for the pipe
    transform(value: any, ...args: any[]) {
        return value + '- transformed';
    }

}