import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sibo-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {
  @Input()
  placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>()

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
