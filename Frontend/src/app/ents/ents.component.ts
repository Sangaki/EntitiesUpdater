import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Entity} from '../../classes/Entity';
import {EntsService} from './ents.service';
import {Subscription, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';


@Component({
  selector: 'app-ents',
  templateUrl: './ents.component.html',
  styleUrls: ['./ents.component.scss']
})
export class EntsComponent implements OnInit, OnDestroy {
  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
  ents: Array<Entity>;
  summary: Array<number>;
  indexes: Array<number>;
  summarySelected: Array<string>;
  sumArr: object;
  minArr: object;
  maxArr: object;
  avgArr: object;

  title = 'Frontend';

  public timerSub: Subscription;
  public value: number;

  public startTimer() {
    this.stopTimer();
    // For demonstration purposes
    const startValue = 10;

    this.timerSub = timer(0, 1000).pipe(
      take(startValue + 1),
      map(value => startValue - value)
    ).subscribe(
      value => this.value = value,
      null,
      () => this.updateEnts()
    );
  }

  ngOnInit(): void {
    this.loadEnts();
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  public stopTimer() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }

  constructor(private serv: EntsService) {
    this.ents = new Array<Entity>();
    this.summarySelected = Array(20).fill('sum');
    // @ts-ignore
    this.indexes = Array(20).fill().map((x, i) => i);
  }

  updateEnts() {
    this.loadEnts();
    this.startTimer();
  }

  getBGColor(val) {
    if (val < 0) {
      return 'rgba(255, 140, 0, ' + Math.abs(val) + ')';
    } else if (val === 0) {
      return 'rgb(255, 255, 255)';
    } else {
      return 'rgba(0, 0, 0, ' + Math.abs(val) + ')';
    }
  }

  getColor(val) {
    if (val > 0.6) {
      return 'rgb(255, 255, 255)';
    } else {
      return 'rgb(0, 0, 0)';
    }
  }

  loadTemplate(ent: Entity) {
    return this.readOnlyTemplate;
  }

  // TODO отрефакторить к более читаемому виду
  getSum() {
    const sumArr = this.ents.reduce((acc, cur) => {
      for (const key in cur) {
        if (key !== 'name') {
          if (acc[key]) {
            acc[key] += cur[key];
          } else {
            acc[key] = cur[key];
          }
        }
      }
      return acc;
    }, {});
    return sumArr;
  }

  getMin() {
    const minArr = this.ents.reduce((min, cur) => {
      for (const key in cur) {
        if (key !== 'name') {
          if (!min[key]) {
            min[key] = cur[key];
          } else if (cur[key] < min[key]) {
            min[key] = cur[key];
          }
        }
      }
      return min;
    }, {});
    return minArr;
  }

  getMax() {
    const maxArr = this.ents.reduce((max, cur) => {
      for (const key in cur) {
        if (key !== 'name') {
          if (!max[key]) {
            max[key] = cur[key];
          } else if (cur[key] > max[key]) {
            max[key] = cur[key];
          }
        }
      }
      return max;
    }, {});
    return maxArr;
  }

  getAvg() {
    const avgArr = this.ents.reduce((avg, cur) => {
      let counter = 0;
      for (const key in cur) {
        if (key !== 'name') {
          if (avg[key]) {
            avg[key] += cur[key];
          } else {
            avg[key] = cur[key];
          }
          counter++;
        }
      }
      for (const key in avg) {
        if (key) {
          avg[key] /= counter;
        }
      }
      return avg;
    }, {});
    return avgArr;
  }

  makeSummaryView() {
    this.summary = [];
    let countPar = 0;
    for (const selected in this.summarySelected) {
      if (selected) {
        switch (this.summarySelected[selected]) {
          case ('sum') :
            this.summary.push(this.sumArr['par' + countPar]);
            break;
          case ('min') :
            this.summary.push(this.minArr['par' + countPar]);
            break;
          case ('max') :
            this.summary.push(this.maxArr['par' + countPar]);
            break;
          case ('avg') :
            this.summary.push(this.avgArr['par' + countPar]);
            break;
        }
        countPar++;
      }
    }
  }

  setSummarySelect(index, value) {
    this.summarySelected[index] = value;
    this.makeSummaryView();
  }

  private loadEnts() {
    this.serv.getEnts().subscribe((data: Entity[]) => {
      this.ents = data;
      this.sumArr = this.getSum();
      this.minArr = this.getMin();
      this.maxArr = this.getMax();
      this.avgArr = this.getAvg();
      this.makeSummaryView();
    });
  }
}
