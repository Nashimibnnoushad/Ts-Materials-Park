import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { DbService } from './app/db.service';

if (environment.production) {
  enableProdMode();
}
export class Index {
  n

 constructor(private dbservice : DbService ) {
   let whereBody ={
     "status":"OnGoing"
   }
   this.dbservice.GetRows('quotation',whereBody).subscribe(resdata => {
    //  this.newQuotations= resdata['Data'];
     let where ={
       "Status":"On Going"       
     }
     this.dbservice.GetRows('purchaseorder',where).subscribe(resdata =>{
      //  this.initialPurchaseOrders = resdata['Data'];
      //  console.log(this.initialPurchaseOrders)
     });
     let Where ={
       "Status":"Closed"
     }
     this.dbservice.GetRows('purchaseorder',Where).subscribe(resdata =>{
      //  this.completedPurchaseOrders = resdata['Data'];
      //  console.log(this.completedPurchaseOrders)
     });
   });
   
}}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
