import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AppService } from './services/app.service';
import { TestingComponent } from './testing/testing.component';
import { SortByPipe } from './sort-by.pipe';
import { ProductOwnerComponent } from './product-owner/product-owner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { TestCatalogComponent } from './test-catalog/test-catalog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    TestingComponent,
    ProductOwnerComponent,
    SortByPipe,
    DashboardComponent,
    HistoryComponent,
    TestCatalogComponent,
    SidebarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
     HighchartsChartModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
