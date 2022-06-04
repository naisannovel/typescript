const func1: Function = ()=>{};

let func2: Function;
    func2 = ()=>{};

const func3 = (a: string, b: string, c?:string)=>{      // c is optional
    console.log(`a is ${a} and b is ${b}`);
}
    func3('naisan','novel');


const func4 = (a: string, b: string, c:string = 'dev')=>{      // c is optional but we set default parameter for c args, that's why we remove question mark.
    console.log(`a is ${a} and b is ${b}`);
}
    func4('naisan','novel');


const func5 = (): string =>{        // this func will return string
    return 'naisan';
}

const func6 = (): number =>{        // this func will return number
    return 4;
}

const func7 = (): void =>{        // this func will return void
    return;
}


let add: (x: number, y:number, c: string) => number;
    add = (x: number,y: number, c: string) =>{
        if(c === "add"){
            return x + y;
        }else{
            return x - y;
        }
    }



function func9(): void {            // will return void
    console.log('hello world');
}