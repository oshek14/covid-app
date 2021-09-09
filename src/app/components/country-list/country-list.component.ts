import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CovidServiceService } from 'src/app/core/services/covid-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent implements OnInit {

  @Input() states: Array<any>;
  @Input() statesInfo: Array<any>;

  stateWholeInfo: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < this.states.length; i++) {
      this.stateWholeInfo.push({
        stateInfo: this.statesInfo[i],
        stateCovidInfo: this.states[i]
      })
    }
  }

}
