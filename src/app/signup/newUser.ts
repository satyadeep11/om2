export class newUser {

    constructor(
        public uuid: string,
        public fname: string,
        public lname: string,
        public email: string,
        public password: string,
        public password2: string,
        public company: string,
        public phone: string,
        public admin:number
    ) {  }
  
  }