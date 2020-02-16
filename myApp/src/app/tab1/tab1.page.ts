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
    distanceTr:number = 0.00025;
    point: Point = null;

  constructor(
      private eb: EstimoteBeacons,
      public beaconRest:RestBeaconsService
  ) {}

  ngOnDestroy() {
    this.eb.stopRangingBeaconsInRegion(this.regionA)
  }


  checkDistances(beacons) {
    let nearestBeacon = null;
    if (beacons.length > 0) {
        nearestBeacon = beacons[0];
    } else {
        this.point = null;
    }
    for (let i = 0 ; i < beacons.length ; i++) {
        if (beacons[i].distance < nearestBeacon) {
            nearestBeacon = beacons[i];
        }
    }
    if (nearestBeacon && nearestBeacon.distance < this.distanceTr) {
        console.log('FOUND');
        console.log(nearestBeacon.macAddress)
        this.beaconRest.GetPoint(nearestBeacon.macAddress).subscribe((point: Point)=>{
            this.point = point;
        })
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
