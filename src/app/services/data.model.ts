
// export class dataDetails {
// $key: string;
// category: string;
// question: string;
// answers: options;
// description: string;
// }

// export interface options{
//     opt1:string,
//     opt2:string,
//     opt3:string,
//     opt4:string,
// }

export class dataDetails{
    $key?: string;
    AnswerIndex: number;
    Answers: options;
    CategoryId: number;
    Description: string;
    Question: string;
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