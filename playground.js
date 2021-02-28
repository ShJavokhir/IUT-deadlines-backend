const checkNumberAdded = (a, b, ans) => {
    return new Promise((resolve, reject)=>{
        if(a + b == ans) {
            resolve("Correct");
        }else{
            reject("Incorrect");
        }
    });
}



checkNumberAdded(5,5,0).then((data)=>{
    //console.log(data);
}).catch((err)=>{
   // console.log(err);
})

checkNumberAdded(5,5,10).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

//const b = await checkNumberAdded(5,5,10);

//const a = await checkNumberAdded(5,1,5);

