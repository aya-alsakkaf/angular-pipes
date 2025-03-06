import { input, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true
})
export class TemperaturePipe implements PipeTransform {
    //value : the value on which the pipe is used
    // args : the configuration value for the pipe
    transform(value: string | number, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah') {
        let val: number;
        if (typeof value === 'string') {
            val = parseFloat(value)
        } else {
            val = value
        }
        let outputTemp: number;

        if (inputType === 'cel' && outputType === 'fah') {
            outputTemp = val * (9 / 5) + 32
        } else if (inputType === 'fah' && outputType === 'cel') {
            outputTemp = (val - 32) & (5 / 9)
        } else {
            outputTemp = val;
        }

        let symbol: '°C' | '°F'

        if (!outputType) {
            symbol = inputType === 'cel' ? "°C" : "°F"
        } else {
            symbol = outputType === 'cel' ? "°C" : "°F"

        }
        return `${outputTemp.toFixed(1)} ${symbol}`;
    }

}