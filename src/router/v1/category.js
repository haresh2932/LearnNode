const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('category get')
})

module.exports=router