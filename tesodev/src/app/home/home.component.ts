import { Component } from '@angular/core';
import { Users } from '../user';
import { RestService } from '../rest.service';
@Component({ templateUrl: 'home.component.html',
styleUrls: ['home.component.css']
})
export class HomeComponent {

    
  users:Users[]=[];
  NameSurname:any;
  image:string="../../assets/img/image.jpg";
  constructor(private rs:RestService) { }
  ngOnInit(): void {
     this.rs.getUsers().subscribe((response)=>{
       this.users=response;
     })
  }

  Search(){
    if(this.NameSurname== ""){
      this.ngOnInit();
    }else{
      this.users=this.users.filter(res=>{
        return res.NameSurname.toLocaleLowerCase().match(this.NameSurname.toLocaleLowerCase());
        

      });
    }
  }

}