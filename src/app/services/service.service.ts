
import { Injectable } from '@angular/core';
import {dataDetails} from './data.model'; 
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database'; 


@Injectable()
export class ServiceService {
  dataList: AngularFireList<any>;
  selectedData: dataDetails = new dataDetails(); 

  constructor(private firbase: AngularFireDatabase) { }

  getData() {
    this.dataList = this.firbase.list("Questions");
    return this.dataList;
  }

  insertData(data: dataDetails) {
    debugger
    this.dataList.push({
    AnswerIndex: data.AnswerIndex,
    Answers:{Option1 : data.Answers.Option1,
        Option2 : data.Answers.Option2,
        Option3 : data.Answers.Option3,
        Option4 : data.Answers.Option4},
     CategoryId: data.CategoryId,
     Description: data.Description,
     Questions: data.Question   
    });
  }

  updateData (data: dataDetails) {
    this.dataList.update(data.$key,
      {
     // N      ame: data.name
      }
    );
   }
   
  deleteData($key: string) {
      this.dataList.remove($key);
  }

  insertDataIntoFireBase(data: any, path: string)
  {
    
    let handle = this.firbase.list(path);
    handle.push(data);
    
  }


}
