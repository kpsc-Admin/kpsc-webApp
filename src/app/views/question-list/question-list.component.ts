import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {NgForm} from '@angular/forms'
//import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers: [ServiceService]
})
export class QuestionListComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getData();
    this.resetClick();
  }

  onSubmit(data: NgForm) {
    debugger
    var tempData  = new Array<dataSet>();

    var answer: number = 0;
    switch(data.value.options) {
      case "option1":
        answer = 1;
      break;
      case "option2":
        answer = 2;
      break;
      case "option3":
        answer = 3;
      break;
      case "option4":
        answer = 4;
      break;
    }
   
    tempData.push({
      AnswerIndex: answer,
      Answers: {
        Option1:{
          Name: data.value.option1,
          Id: 1
        },
        Option2:{
          Name: data.value.option2,
          Id: 2
        },
        Option3:{
          Name: data.value.option3,
          Id: 3
        },
        Option4:{
          Name: data.value.option4,
          Id: 4
        }
      },
      CategoryId: data.value.category,
      Description: data.value.description,
      Question: data.value.question
    })

// tempData.push({
//       AnswerIndex : answer,
//       Answers:{Option1 : data.value.option1,
//         Option2 : data.value.option2,
//         Option3 : data.value.option3,
//         Option4 : data.value.option4},
//       CategoryId : data.value.category,
//       Description : data.value.description,
//       Question : data.value.question
//     })

    
    this.service.insertData(tempData[0]);
    this.resetClick(data);
   // this.toastr.success('Successfully submitted Question','KPSC Jwala');
  }

  resetClick(data?: NgForm) {
    if(data != null)
     data.reset();
    // this.service.selectedData = {
    //   $key: null,
    //   category: "",
    //   question: "",
    //   answers: "",
    //   description: ""
    // }

  }
}
export interface dataSet{
  $key?: string;
  AnswerIndex: number,
  Answers: options,
  CategoryId: number,
  Description: string,
  Question: string
}
export interface options{
    Option1:answer,
    Option2:answer,
    Option3:answer,
    Option4:answer,
}
export interface answer{
    Name:string,
    Id:  number,
}