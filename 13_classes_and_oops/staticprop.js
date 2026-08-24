class User{
    constructor(username){
        this.usernamee = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
    //static makes it inaccesible 
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
} 

const Iphone = new Teacher()
Iphone.logMe()