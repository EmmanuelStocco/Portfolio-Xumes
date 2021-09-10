const router = require('express').Router()
const Portfolio = require('../models/Portfolio')   

router.get('/', async (req, res)=>{
    try{      
        const portfolio = await Portfolio.find()

        res.json({
            success: true,
            data: portfolio
        })
    } catch(err){
        res.json({
            success: false,
            message: err
        })
    }
}) 

//create
router.post('/', async (req, res)=>{
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    })

    try{
        const portfolio = await portfolio.save()
        res.json({
            success: true,
            data: portfolio
        })
    }
    catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})

//Read
router.get('/:slug', async (req, res) => {
    try{
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})
 
//Update
router.patch('/:slug', async (req, res)=> {
    try{
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug},
        {
            $set: {
            title: req.body.title,
            description: req.body.description
            }
        })

        res.json({
            success: true,
            updated: updatedPortfolio.nModified
        })
    }catch{
        res.json({
            success:false,
            message: err
        })
    }
})

//Delete
router.delete('/:slug', async(req, res)=>{
    try{
    const deletedPortfolio = await Portfolio.deleteOne({
        slug: req.params.slug
    }) 
    
    res.json({
        success: true,
        data: deletedPortfolio.deletedCount
    })

    }
    catch(err){
        res.json({
            sucess: false
        })
    }
})

module.exports = router

