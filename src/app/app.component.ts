import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'binding';

  //directives- ng for , ngif, ngswitch
  // one form -->  users:string[] = ["lachu","cheenu"];

  // users:any[]=[
  //   {id:1,name:'achu',city:'blr'},
  //   {id:2,name:'sanchu',city:'blr'},
  //   {id:3,name:'lachu',city:'blr'}

    
  // ]


  //ngif directive
  // isUserLoggedIn:boolean=false;


  //ngswitch
  selectedcountry: string ="";
  countries:any[]=[
    {code:'ind',country:'India'},
    {code:'pak',country:'Pakistan'}

  ];
  choice(code: any){

    this.selectedcountry = code

  }

 // parent to child communication
   parentvar1:string="sai"


  //child to parent communication
  childdata:string | any
  errormessage: string="loading..."
  parentMethod(data: string | any){
    this.childdata=data

   }

  //built-in pipes

   pageTitles:string="builtin pipes in angular "
  
  // services
  users : any

  constructor(private userService:UsersService){

     

 }
   ngOnInit(){
    this.userService.getAllUsers().subscribe((data)=>{
      this.users = data;
    },(err)=> {
      this.errormessage =" some inetrnal issues ";
    });
  }




// }


  }