import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'kku-amount-input',
  templateUrl: './amount-input.component.html',
  styleUrls: ['./amount-input.component.scss'],
})
export class AmountInputComponent {
  @Input() min = 1;
  @Input('amount') _amount = this.min;
  @Input() max?: number;

  @Output('change') change: EventEmitter<number> = new EventEmitter<number>();

  public set amount(num: number) {
    if (num < this.min || (this.max && num > this.max)) {
      return;
    }
    this._amount = num;
    this.change.emit(this._amount);
  }

  public increment(): void {
    this.amount = this._amount + 1;
  }
  public decrement(): void {
    this.amount = this._amount - 1;
  }

  public onChange(event: any): void {
    this.amount = event.target.valueAsNumber;
  }
}
