interface Greeting {
    name: string;
    greet(frase: string): void;
}

class Person implements Greeting {
    name:string;
    age = 30;
    constructor(name_:string) {
        this.name = name_;
    }
    greet(frase: string) {
        console.log(frase+' '+this.name)
    }
}

let user1: Greeting;
user1 = new Person('mari');
user1.greet('holaaa...');

console.log('11', user1)