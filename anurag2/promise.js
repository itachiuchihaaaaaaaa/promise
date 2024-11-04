function makewaffle(){
    return new Promise((resolve,rejet)=>{
        setTimeout(() => {
           resolve("waffle is ready") 
        }, 2500);
    })
}
function geticecream(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           let icecream=false;
           if(icecream){
              resolve("Got icecream")
           }else{
            reject("Did not get icecream")
           } 
        }, 1500);
    })
}
function snack(){
    makewaffle().then(function(data){
    console.log(data)
    return geticecream()
    })
    .then(function(data){
        console.log(data);
        console.log("set up the table")
    })
    .catch(function(error){
    console.log(`${error} so make chocolate syrup`) 
})
}
        
snack()