import { Component } from "@angular/core";
import * as buttonModule from "tns-core-modules/ui/button";
import * as bindable from "tns-core-modules/ui/core/bindable";
import * as observable from "tns-core-modules/data/observable";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Taco Tuesday" class="action-bar"></ActionBar>
    <StackLayout orientation="vertical">
    
    <Button text="blah">clicky</Button>
    <Image src="~/images/apple.jpg"></Image>
    </StackLayout>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin; animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class AppComponent {}