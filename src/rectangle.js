const area=(l,w)=>{
    let ans=l*w
    console.log("Area of reactangle is :",ans);
}

const perameter=(l,w)=>{
    let ans= 2*(l+w)
    return ans
}

module.exports={
    area,
    perameter
}