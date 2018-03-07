import * as firebase from 'firebase';
export class Notification {
    title: string;
    content: string;
    url: string;
    imageURL: string;
    date: any;

    constructor(title: string, content: string, url: string, imageURL: string)
    {
        this.title = title;
        this.content = content;
        this.url = url;
        this.imageURL = imageURL;
        this.date = firebase.database.ServerValue.TIMESTAMP;
        
    }

}
