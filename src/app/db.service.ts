import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  
  public pyUrl;
  public dbName;
  // public dbName = "TestDB";
  // public dbName = "AccademicDBTest"
  //  public dbName = "TestDB";
  public key;
  constructor(private http: HttpClient) { }

  




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

    console.log('GETROWS****', body);
    return this.http.post<any>(this.pyUrl + 'GetRows', body)


  }





  public DeleteRow(tableName, whereBody = null): Observable<any> {

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

    console.log('GETROWS****', body);
    return this.http.post<any>(this.pyUrl + 'DeleteRow', body)


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
        "Data": updateCode,

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
  }

  public LogError(err) {
    console.log('Error: ' + err.error);
    console.log('Name: ' + err.name);
    console.log('Message: ' + err.message);
    console.log('Status: ' + err.status);
  }
  

}

