interface IPerson {
    name: string;
    email: string;
    sayMyName: (name: string) => void;
}

class Person implements IPerson {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    sayMyName (name: string){
        console.log(`say my name ${name}`)
    }
}