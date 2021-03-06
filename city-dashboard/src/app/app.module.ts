import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SuiModule } from "ng2-semantic-ui";
import { ChartsModule } from "ng2-charts";
import { AgmCoreModule } from "@agm/core";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SuiModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAuFeSreL0UefHrw_HKXkXeYZPtapIJdMg"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
