class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const firstUser = new Teacher("firstUser", "firstUser@teacher.com","123345")
firstUser.addCourse()

const secondUser = new User("secondUser")
secondUser.logMe()

console.log(firstUser instanceof User)
console.log(firstUser instanceof Teacher)
