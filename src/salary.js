module.exports = (sal, bonusVal) => {
    ;
    if(sal<0){
        bonusVal(new Error("Salary must be grater then zero"), null)
    }else if (sal<=10000) {
        bonusVal(null,sal*0.10);
    }else if (sal<=20000) {
        bonusVal(null,sal*0.15);        
    } else if (sal>=20000) {
        bonusVal(null,sal*0.20);        
    }  ;
}
