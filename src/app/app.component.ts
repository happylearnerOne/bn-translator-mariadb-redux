import { Component } from '@angular/core';
import { SharedService } from './share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private shareService : SharedService){

  }
}
