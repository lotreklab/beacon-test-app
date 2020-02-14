import { Component } from '@angular/core';
import { EstimoteBeacons, EstimoteBeaconRegion } from '@ionic-native/estimote-beacons/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    // regionV: EstimoteBeaconRegion = {
    //     major: 23137, //25536
    //     minor: 52358,
    //     uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
    // };

    // regionG: EstimoteBeaconRegion = {
    //     major: 25536, //25536
    //     minor: 33899,
    //     uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
    // };

    regionA: EstimoteBeaconRegion = {};
    distanceTr = 0.00025;

  constructor(private eb: EstimoteBeacons) {}

  ngOnDestroy() {
    this.eb.stopRangingBeaconsInRegion(this.regionA)
  }

  checkDistances(beacons) {
    for (let i = 0 ; i < beacons.length ; i++) {
        if (beacons[i].distance < this.distanceTr) {
            console.log('FOUND');
            console.log(beacons[i].macAddress)
        }
    }
  }

  ngAfterViewInit() {
      //https://ionicframework.com/docs/v3/native/estimote-beacons/
    console.log('ENTER 2');
    this.eb.requestAlwaysAuthorization();
    this.eb.enableAnalytics(true);


    this.eb.startRangingBeaconsInRegion(this.regionA).subscribe(info => {
        console.log(info);
        this.checkDistances(info.beacons);
    });




    // this.eb.connectToBeacon({
    //     proximityUUID: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'
    // }).then(info => {
    //     console.log(info);
    // });

    // this.eb.startEstimoteBeaconDiscovery().subscribe(beacons => {
    //     console.log(JSON.stringify(beacons));
    //   });

  }

}
