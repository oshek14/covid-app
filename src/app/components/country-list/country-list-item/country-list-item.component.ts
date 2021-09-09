import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListItemComponent implements OnInit {

  windowScrolled: boolean;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } 
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  @Input() state: any;

  displayedColumns: string[] = ['cases', 'test', 'hospitalized', 'inIcu', 'onVent', 'outcomes', 'total'];
  dataSource;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([
      {
        cases: this.state.stateCovidInfo.positive ? this.state.stateCovidInfo.positive : 'N/A', 
        negative: this.state.stateCovidInfo.negative ? this.state.stateCovidInfo.negative : 'N/A', 
        pending: this.state.stateCovidInfo.pending ? this.state.stateCovidInfo.pending : 'N/A', 
        hospitalizedCurrently: this.state.stateCovidInfo.hospitalizedCurrently ? this.state.stateCovidInfo.hospitalizedCurrently : 'N/A', 
        hospitalizedCumulative: this.state.stateCovidInfo.hospitalizedCumulative ? this.state.stateCovidInfo.hospitalizedCumulative : 'N/A', 
        inIcuCurrently: this.state.stateCovidInfo.inIcuCurrently ? this.state.stateCovidInfo.inIcuCurrently : 'N/A', 
        inIcuCumulative: this.state.stateCovidInfo.inIcuCumulative ? this.state.stateCovidInfo.inIcuCumulative : 'N/A',
        onVentCurrently: this.state.stateCovidInfo.onVentilatorCurrently ? this.state.stateCovidInfo.onVentilatorCurrently : 'N/A', 
        onVentCumulative: this.state.stateCovidInfo.onVentilatorCumulative ? this.state.stateCovidInfo.onVentilatorCumulative : 'N/A', 
        recovered: this.state.stateCovidInfo.recovered ? this.state.stateCovidInfo.recovered : 'N/A', 
        deaths: this.state.stateCovidInfo.death ? this.state.stateCovidInfo.death : 'N/A', 
        total: this.state.stateCovidInfo.totalTestResults ? this.state.stateCovidInfo.totalTestResults : 'N/A', 
      }
    ]);
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

}
