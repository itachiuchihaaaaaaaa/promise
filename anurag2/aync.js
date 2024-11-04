function makewaffle(){
    return new Promise((resolve,rejet)=>{
        setTimeout(() => {
            console.log("Waffle is ready")
           resolve("waffle is ready") 
        }, 2500);
    })
}
function geticecream(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           let icecream=false;
           if(icecream){
               console.log("Got icecream")
              resolve("Got icecream")
           }else{
            reject("Did not get icecream")
           } 
        }, 1500);
    })
}

async function snack(){
    try {
        await makewaffle();
        await geticecream();
        console.log("set up the table")
    } catch (error) {
        console.log(`${error} so make chocolate syrup`)
    }
}
snack()
