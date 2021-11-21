import { Component } from '@angular/core';
import { Users } from '../user';
import { RestService } from '../rest.service';

@Component({ templateUrl: 'result.component.html',
styleUrls: ['result.component.css']

})
export class ResultComponent {

    image:string="../../assets/img/image.jpg";

    NameSurname:any;
    users:Users[]=[];
    p:number=1;
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
  key: string= 'NameSurname';
  reverse:boolean=false;
sort(key: string){
  this.key=key;
  this.reverse=!this.reverse

}

}