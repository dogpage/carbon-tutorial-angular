import { Component, OnInit, HostBinding } from '@angular/core';

// carbon-components-angular default imports
//import { UIShellModule, IconModule, IconService } from 'carbon-components-angular';
import { UIShellModule, IconModule } from 'carbon-components-angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @HostBinding('class.bx--header') headerClass = true;

  constructor() { }

  ngOnInit(): void {
    console.log('header ngOnInit');
  }

}
