function makewaffle(callback){
    setTimeout(() => {
        console.log("set the table");
        console.log("waffle is ready");
        callback()
    }, 2500);
}
 function geticecream(){
    setTimeout(() => {
        let icecream=false;
        if(icecream){
            console.log("Got the icecream")
        }else{
            console.log("Did not get the icecream")
        }
    }, 1500);
 }
 makewaffle(geticecream)