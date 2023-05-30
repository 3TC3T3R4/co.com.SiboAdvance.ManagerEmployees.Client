import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'sibo-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  //rutas
  @Input() routeBack!: string[];
  @Output() valueResponse: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.valueResponse.emit('recibido');
  }
}
