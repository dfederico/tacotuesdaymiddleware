import { LocationsResult } from './types/locations-result';
import { LocationsService } from './services/locations.service';
import { Component } from "@angular/core";
import * as buttonModule from "tns-core-modules/ui/button";
import * as bindable from "tns-core-modules/ui/core/bindable";
import * as observable from "tns-core-modules/data/observable";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Taco Tuesday" class="action-bar"></ActionBar>
    <StackLayout orientation="vertical">
      <Button text="Login" class="btn btn-primary" (tap)="login()"></Button>
      <Button text="Find Tacos!" class="btn btn-primary" (tap)="search()"></Button>
    
    </StackLayout>
  `,
  styles: [`
  `],
  providers: [LocationsService]
})
export class AppComponent  {
  constructor(private locationsService: LocationsService){
  
  }

  login(){
    alert("not implemented");
  }

  search(){
    this.locationsService.GetInfo(94, 95).subscribe((result: LocationsResult) => {
        console.log("pressed");
    });
  }
}