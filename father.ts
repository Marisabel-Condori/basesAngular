abstract class Father{
    abstract walk(): void;
    greeting(greet: string): string{
        return greet;
    }
}

class Son extends Father{
    walk(): void {
        console.log('Im walking...')
    }
}

const newSon = new Son();
newSon.walk();