//  const name = "Deepesh"
//  const userage = 20;

//  const user = {
//      name,
//      age:userage
//  }

//  console.log(user)


const product = {
    label:'JEet Aapki',
    price:202,
    stock:222,
    author:"Shiv KHera"
}

// const {label ,stock,price:ChangePrice} = product;
// console.log(label)
// console.log(stock)
// console.log(ChangePrice)

const transaction = (type,{label,author})=>{
    console.log(type+" " + label+" "+author)
}

transaction('order',product)