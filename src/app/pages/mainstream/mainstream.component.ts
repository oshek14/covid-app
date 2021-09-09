import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CovidServiceService } from 'src/app/core/services/covid-service.service';



@Component({
  selector: 'app-mainstream',
  templateUrl: './mainstream.component.html',
  styleUrls: ['./mainstream.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainstreamComponent implements OnInit {

  displayedColumns: string[] = ['cases', 'test', 'hospitalized', 'outcomes', 'total'];
  dataSource;

  states: Array<any>;
  statesInfo: Array<any>;

  constructor(private covidServiceService: CovidServiceService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.covidServiceService.getUsInfo().subscribe((res) => {
      this.dataSource = new MatTableDataSource([
        {
          cases: res[0].positive ? res[0].positive : 'N/A', 
          negative: res[0].negative ? res[0].negative : 'N/A', 
          pending: res[0].pending ? res[0].pending : 'N/A', 
          hospitalized: res[0].hospitalized ? res[0].hospitalized : 'N/A', 
          recovered: res[0].recovered ? res[0].recovered : 'N/A', 
          deaths: res[0].death ? res[0].death : 'N/A', 
          total: res[0].totalTestResults ? res[0].totalTestResults : 'N/A', 
        }
      ]);
      this.ref.markForCheck();
    })

    this.covidServiceService.getStataesInfo().subscribe((res) => {
      this.statesInfo = res;
      this.ref.markForCheck();
    })
    this.covidServiceService.getStataes().subscribe((res) => {
      this.states = res;
      this.ref.markForCheck();
    })
  }

  get statesListLoading() {
    return !(this.states && this.statesInfo);
  }
}
