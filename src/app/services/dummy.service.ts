import { Injectable } from "@angular/core";

// @Injectable({providedIn: 'root'}) soit tdir hakda wela tnahih mena w tdiro f providers ta3 appModule wela fel core module c kifkif
export class DummyService{
    logMessage: string;
    printLog(message : string){
        console.log(message);
        console.log(this.logMessage);
        this.logMessage = message;  
    }
}