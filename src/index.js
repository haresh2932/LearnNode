// const Ans = require("./rectangle")
// // Ans.area(10,12)

// // console.log("Perameter of Rectangle :",Ans.perameter(4,5));


// const solveRect = (l, w) => {
//     if (l <= 0 || w <= 0) {
//         console.log(new Error("Length and Width must be grater then 0"));
//     } else {
//         Ans.area(l,w)
//         console.log("Perameter of Rectangle :", Ans.perameter(l,w))
//     }
// }
// solveRect(4,5)
// solveRect(4,-5)

const salary = require("./salary");

salary(20000,(err,bonus)=>{
    console.log(bonus);
    if(err){
        console.log(err);
    }else{
       console.log("Bonus of Employee:",bonus);              
    }
})

