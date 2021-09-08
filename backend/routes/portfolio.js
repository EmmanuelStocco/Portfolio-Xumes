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
        const savedPortfolio = await portfolio.save()
        res.json({
            success: true,
            data: savedPortfolio
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
router.get('/:slug', async (req, res)=>{
    try{
        const portfolio = await Portfolio.findOne({
            slug: req.params.slug
        })

        res.json({
            sucess: true,
            data: portfolio
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })    
    }
})


/*
router.get('/:slug', async (req, res)=> {
        try{
            const portfolio = await Portfolio.findOne ({
                slug: req.params.slug ///conferidno se o slug passado do parametro é igual a algum do banco
            })

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


    /*
    portfolio
        .save()
        .then((data)=> { res.json({ success: true, data}) })
        .catch((err)=> { res.json({ success: false, message: err })})
    */
 

module.exports = router

