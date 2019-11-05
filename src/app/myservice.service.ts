import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

    checkNamePass(uname: string, pwd : string)
    {
      if((uname == "admin" && pwd =="admin")||(uname=="demo"&&pwd=="demo")){
      localStorage.setItem('username',"admin");
        return true;
    }
    else{
      return false;
    }
  }
    
}
