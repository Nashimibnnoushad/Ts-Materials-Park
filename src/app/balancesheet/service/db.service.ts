import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication.service';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  
  isHide:boolean
  public dbName="FinDemoDb";
  public key="xxx";
  public pyUrl="http://104.196.62.213:81/"
  // public dbName;
  // public key;
  // public pyUrl;
  public isAutherisedUser:boolean
  public isLogin:boolean
  public forHide:boolean
  constructor(private http: HttpClient,
  ) { 
// this.dbName=this.auth.dbName
// this.pyUrl=this.auth.pyUrl
// this.key=this.auth.key
  }
  public AddRow(data, tableName) {
    const body = {
      "DbName": this.dbName,
      "Key": this.key,
      "Table": tableName,
      "Data": data
    };

   return this.http.post(this.pyUrl + 'AddRow', body)
     

  }
  /**
   * 
   * @param tableName eg:- {"Student"}
   * @param whereBody eg:- { "invoiceId": "100" }
   */
  public GetRows(tableName, whereBody = null): Observable<any> {
   console.log(whereBody)
    // whereBody = condtion for data eg {"id":10}

    var body;

    //Get all table data 
    if (whereBody == null) {
      body = {
        "DbName": this.dbName,
        "Key": this.key,
        "Table": tableName,
      };
    }

    //Get table data with where condition
    else {
      body = {
        "DbName": this.dbName,
        "Key": this.key,
        "Table": tableName,
        "Where": whereBody
      };
    }
    console.log(this.dbName,'con')
    console.log('GETROWS****', body);
    return this.http.post<any>(this.pyUrl + 'GetRows', body)


  }


  public UpdateRows(tableName, updateCode, whereBody = null, Mode = null) {
    // updatecode = data to be updated eg : {"data":'10'}
    // whereBody = which data to be updated eg : {"id":'10'}
    // Mode = multiple entry updation. mode is always {"ALL"}

    var body;

    // single value updation
    if (Mode == null) {
      body = {

        "DbName": this.dbName,
        "Table": tableName,
        "Key": this.key,
        "Where": whereBody,
        "Data": updateCode

      };
    }

    // multiple value updation
    else {

      body = {
        "DbName": this.dbName,
        "Table": tableName,
        "Key": this.key,
        "Where": whereBody,
        "Data": updateCode,
        "Mode": Mode
      }
    }

    console.log('UPDATE ROWS****', body);
   return this.http.post(this.pyUrl + 'UpdateRows', body)
      // .subscribe(data => { },
      //   err => {
      //     console.log('Error: ' + err.error);
      //     console.log('Name: ' + err.name);
      //     console.log('Message: ' + err.message);
      //     console.log('Status: ' + err.status);
      //   });
  }
  public LogError(err){
    console.log('Error: ' + err.error);
    console.log('Name: ' + err.name);
    console.log('Message: ' + err.message);
    console.log('Status: ' + err.status);

}
public DeleteRow(tableName,whereBody){
  console.log(whereBody)
  const body = {
    "DbName": this.dbName,
    "Key": this.key,
    "Table": tableName,
    "Where": whereBody
  };

 return this.http.post(this.pyUrl + 'DeleteRow', body)
}
public changeFormDate(date) {
  let mon
  let month = date.slice(0, 3)
  let year = date.slice(7)
  let day = date.slice(4, 6)
  if (month == 'Jan') {
    mon = '01'
  } else if (month == 'Feb') {
    mon = '02'
  }
  else if (month == 'Mar') {
    mon = '03'
  }
  else if (month == 'Apr') {
    mon = '04'
  }
  else if (month == 'May') {
    mon = '05'
  }
  else if (month == 'Jun') {
    mon = '06'
  }
  else if (month == 'July') {
    mon = '07'
  }
  else if (month == 'Aug') {
    mon = '08'
  }
  else if (month == 'Sep') {
    mon = '09'
  }
  else if (month == 'Oct') {
    mon = '10'
  }
  else if (month == 'Nov') {
    mon = '11'
  }
  else if (month == 'Dec') {
    mon = '12'
  }
   return[day,mon,year].join('-')
}
public formDate(date) {
  let mon
  let day = date.slice(0, 2)
  let year = date.slice(6)
  let month = date.slice(3, 5)
  if (month.length < 2) month = '0' + month;
  if (month == '01') {
    mon = 'Jan'
  } else if (month == '02') {
    mon = 'Feb'
  }
  else if (month == '03') {
    mon = 'Mar'
  }
  else if (month == '04') {
    mon = 'Apr'
  }
  else if (month == '05') {
    mon = 'May'
  }
  else if (month == '06') {
    mon = 'Jun'
  }
  else if (month == '07') {
    mon = 'July'
  }
  else if (month == '08') {
    mon = 'Auq'
  }
  else if (month == '09') {
    mon = 'Sep'
  }
  else if (month == '10') {
    mon = 'Oct'
  }
  else if (month == '11') {
    mon = 'Nov'
  }
  else if (month == '12') {
    mon = 'Dec'
  }
  return [mon, day, year].join(' ')
}
}
