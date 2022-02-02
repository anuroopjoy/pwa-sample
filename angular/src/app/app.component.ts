import { Component, OnInit } from '@angular/core';
import {
  SwUpdate,
  UnrecoverableStateEvent,
  VersionEvent,
  VersionReadyEvent,
} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private updateService: SwUpdate) {}
  ngOnInit() {
    console.log('AppComponent.ngOnInit');
    this.updateService.versionUpdates.subscribe((event: VersionEvent) => {
      console.log(event);
      alert(event.type);
      if (
        event.type === 'VERSION_READY' &&
        confirm(
          `New version ${
            (event as VersionReadyEvent).latestVersion.hash
          } available. Load New Version?`
        )
      ) {
        window.location.reload();
      }
    });
    // const interval = setInterval(async () => {
    //   const shouldUpdate = await this.updateService.checkForUpdate();
    //   alert('Checked for update with result: ' + shouldUpdate);
    //   if (shouldUpdate) {
    //     const result = await this.updateService.activateUpdate();
    //     alert('Activate Update completed with result: ' + result);
    //     clearInterval(interval);
    //   }
    // }, 1000);

    this.updateService.unrecoverable.subscribe(
      (event: UnrecoverableStateEvent) => {
        alert('Error reason : ' + event.reason);
      }
    );
  }
}
