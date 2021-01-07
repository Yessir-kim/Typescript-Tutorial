const name = "Kim",
    age = 25,
    gender = "mail" ;

    // type을 정하지 않으면 any type이 된다. (return type도 마찬가지)
const sayHi = (name : string , age : number, gender : string): void => {
    // `사용해야됨 
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`) ;
} ;

sayHi(name, age, gender) ;

export {} ;