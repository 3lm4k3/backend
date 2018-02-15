
export class User {
    constructor(x:string="Ahmed Khamis") {
    this.x=x;
  }
  private x:string;
  findAll():Array<User>{
    return [new User("Ahmed Khamis"),new User("Mahmoud Hassan")];
  }
  
}

 
