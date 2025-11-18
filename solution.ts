type value1Type=string | number | boolean
const formatValue=(value1: value1Type ): value1Type=>{
    if(typeof value1==="string"){
        return value1.toUpperCase()
    }else if(typeof value1==="number"){
        return value1*10
    }else if(typeof value1==="boolean"){
        return value1=!value1
    }

}




function getLength<T>(value2: T ): T{
    if(typeof value2==="string"){
        return value2.length
    }else {
        return value2.length
    }
}



class Person{
    name:string
    age:number

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    
    getDetails(): string{
        return "'"+`Name: ${this.name}, Age: ${this.age}`+"'"+";"
    }

}


type book={
   title: string,
   rating: number
}

function filterByRating(value4:book[]):book[]{
   return value4.filter(book=>book.rating >= 4.0 && book.rating<=5.0).map(book => ({
      ...book,
      rating: Number(book.rating.toFixed(1)) 
    }))
}



const user2:object[]=[]

const filterActiveUsers=(value5:object[])=>{
   value5.map((user)=>{
    if(user.isActive===true){
        user2.push(user)
        
        
    }
   })
   return user2
}




interface Book{
    title :string,
    author :string,
    publishedYear:number,
    isAvailable:boolean,
}

const printBookDetails=(book:Book)=>{
   const text=`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'yes':'no'}`
  console.log(text); 
}





type arrayType=(string|number|undefined)[]
const array3:arrayType=[]
function getUniqueValues(array1: arrayType, array2: arrayType) : arrayType{
   for (let i =0; i<array1.length;i++){
    array3[i]=array1[i]
   }
    
   
   for (let i of array2) {
    let isPresent=false
    
    for(let j of array3){
        
        if(j==i){
            
            isPresent=true
     }
    
    }
    if(isPresent==false){
        
      array3.push(i)
    }
     
}
return array3
}


type product={
    name: string,
    price: number,
    quantity: number,
    discount?: number
}

function calculateTotalPrice(product:product[]){
   const price=product.reduce((total,item)=>{
    if(item?.discount){
        return total+ item.price*item.quantity-((item?.discount)/100*item.price*item.quantity)

    }else{
        return total+ item.price*item.quantity
    }
     
   },0)
   return price
}
