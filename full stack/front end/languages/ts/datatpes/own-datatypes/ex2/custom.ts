class human{
    eye:number 
    hand:number
   constructor(num){
        this.eye=num
        this.hand=2
    }
   
}
class shop{
    belt:string
}


class animal extends human{

}
let cat = new animal(2)

let sudarshan=new human(3)
console.log(sudarshan.eye)
