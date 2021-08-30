import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog2';
  isHomePage:boolean=false
  pageTitle(){
    return this.isHomePage?'home page':'about page';
  }
  defaultEmail:string='heba@gmail.com';
  isHeader:boolean=true
  styleClass=this.isHeader?' bold italic Header':'bold italic subHeader'
  headerClass(){
    return {Header:this.isHeader,
      bold:this.isHeader,
      italic:!this.isHeader};
    }
    proStyle(){
     return  {color : this.isHeader? 'red':'green',
      fontWeight : this.isHeader? 'bold':'2rem'
  }
  }
  toggelHeaderState(){
    return this.isHeader=!this.isHeader;
  }
  //////////////////////////////////////////////
  yearNow:any; 
  yearOfBirth:any;
  result:any;
  
  onKey(e:any){
    return this.yearNow=e.value

  }
  onKey2(ee:any){
    return this.yearOfBirth=ee.value

  }
  calcAge(){
    
 return this.result=this.yearNow-this.yearOfBirth;
    
 }
 

}


