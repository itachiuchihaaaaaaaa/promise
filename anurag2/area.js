function area(r,callback){
    var carea = Math.PI*r*r;
    console.log(`the area is ${carea}`);
    callback(r)
}
function circumference(r){
    var  circumferencee = 2*Math.PI*r
    console.log(`the circumference is ${circumferencee}`)
}
area(4,circumference)