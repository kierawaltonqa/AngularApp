import { NgModule } from '@angular/core'; // importing the decorator to provide metadata for the module
import { BrowserModule } from '@angular/platform-browser'; // has directives inside of it

import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // because we had an export we can import it
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    SharedModule,
    CoreModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
