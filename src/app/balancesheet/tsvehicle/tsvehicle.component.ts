import { Component, OnInit } from '@angular/core';
import { Tsvehicle } from 'src/app/model/tsvehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../service/db.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Common } from '../model/common';

@Component({
  selector: 'app-tsvehicle',
  templateUrl: './tsvehicle.component.html',
  styleUrls: ['./tsvehicle.component.css']
})
export class TsvehicleComponent implements OnInit {
  isAuthenticityChecked:boolean
  vehiclelist:Tsvehicle[]=[]
  samename:boolean = false
  vehiclenumber
  temp1
  temp2
  constructor(    private route: ActivatedRoute,
    private router: Router,
    private dbservice: DbService,
    public authenticationService: AuthenticationService,
    private cookieService: CookieService) {
    this.isAuthenticityChecked = true
    this.vehiclelist = JSON.parse(localStorage.getItem("Vehicles"))
    console.log(this.vehiclelist)
   }
   register(){
    this.samename = false
    if(this.vehiclelist==null){
      let uniqueId = "V" + Common.newGuid();
      let vehicle:Tsvehicle = new Tsvehicle()
      vehicle.ID = uniqueId
      vehicle.vehicleNumber = this.vehiclenumber
      let templist = []
      templist.push(vehicle)
      localStorage.setItem("Vehicles",JSON.stringify(templist));
      this.vehiclelist = JSON.parse(localStorage.getItem("Vehicles"))
      this.Reset()
    }
    else if(this.vehiclelist!=null){
      this.temp1 = this.vehiclenumber.toLowerCase()
      this.temp1 = this.temp1.replace(/\s/g, "")
      for(let i=0;i<this.vehiclelist.length;i++){
        this.temp2 = this.vehiclelist[i].vehicleNumber.toLowerCase()
        this.temp2 = this.temp2.replace(/\s/g, "")
        if(this.temp1==this.temp2){
          alert('This Vehicle is Already Exist')
          this.samename = true
        }
      }
      if(this.samename!=true){
        let uniqueId = "V" + Common.newGuid();
        let vehicle:Tsvehicle = new Tsvehicle()
        vehicle.ID = uniqueId
        vehicle.vehicleNumber = this.vehiclenumber
      this.vehiclelist.push(vehicle)
      localStorage.setItem("Vehicles",JSON.stringify(this.vehiclelist));
      this.vehiclelist = JSON.parse(localStorage.getItem("Vehicles"))
      this.Reset()
    }
    }
  }
  Delete(i){
    this.vehiclelist.splice(i,1)
    localStorage.setItem("Vehicles",JSON.stringify(this.vehiclelist))
    this.vehiclelist = JSON.parse(localStorage.getItem("Vehicles"))
   }
  Reset(){
    this.vehiclenumber = null
  }
  ngOnInit() {
  }

}
