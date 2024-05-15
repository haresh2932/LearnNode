const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('institute get')
})

router.post('/',(req,res)=>{
    res.send('institute post')
})

router.put('/',(req,res)=>{
    res.send('institute put')
})

router.delete('/',(req,res)=>{
    res.send('institute delete')
})

module.exports=router