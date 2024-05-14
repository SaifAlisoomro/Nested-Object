// nested object ek block men dosra block banana

type mydata = {
    name:string,
    age:number,
    proffession:string,
    future_son : {
        name:string,
        age:null,
        proffession:null
    }
}

let data = {
    name:"SAiF SOOMRO",
    age:26,
    proffession:"Student",
    future_son:{
        name:"Arhaam SOOMRO",
        age:null,
        proffession:null
    }
}
console.log(data);
