import { Component } from '@angular/core';
import { EstimoteBeacons, EstimoteBeaconRegion } from '@ionic-native/estimote-beacons/ngx';
import { RestBeaconsService } from '../services/restbeacons.service';
import { Point } from '../models/Point';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    regionA: EstimoteBeaconRegion = {};
    distanceTr = 0.00025;
    point: Point;

  constructor(
      private eb: EstimoteBeacons,
      public beaconRest:RestBeaconsService
  ) {}

  ngOnDestroy() {
    this.eb.stopRangingBeaconsInRegion(this.regionA)
  }


  checkDistances(beacons) {
    for (let i = 0 ; i < beacons.length ; i++) {
        if (beacons[i].distance < this.distanceTr) {
            console.log('FOUND');
            console.log(beacons[i].macAddress)
            this.beaconRest.GetPoint(beacons[i].macAddress).subscribe((point: Point)=>{
                this.point = point;
            })
            break;
        }
    }
  }

  ngAfterViewInit() {
    //https://ionicframework.com/docs/v3/native/estimote-beacons/
    // this.eb.requestAlwaysAuthorization();
    // this.eb.enableAnalytics(true);

    // this.eb.startRangingBeaconsInRegion(this.regionA).subscribe(info => {
    //     console.log(info);
    //     this.checkDistances(info.beacons);
    // });

    this.beaconRest.GetPoint('45:34:34:56:34').subscribe((point: Point)=>{
        this.point = point;
    })

  }

}
