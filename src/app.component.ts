import {Component} from 'angular2/core';

@Component({
    selector:'my-app',
    template:`
    <input type="text" (keyup.enter)="onKeyUp($event.target.value)">    
    <ul>    
        <li *ngFor="#hero of heroes">
            {{hero}}
        </li>
    </ul>
    ` 
})
export class AppComponent{
    title:string;
    //text:string;  
    heroes = ['Pradeep', 'Manasa'];  
    
    constructor(){
        this.title="Pradeep";
    }    
    
    welcomeText(){
        return "Hello " + this.title;
    }
    
    onKeyUp(value){
        //this.text = value;
        this.heroes.push(value);
    }
}