import { Component } from '@angular/core';

import { GoalsPage } from '../goals/goals';
import { EarningsPage } from '../earnings/earnings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GoalsPage;
  tab2Root = EarningsPage;

  constructor() {

  }
}
