const mongoose = require ('mongoose');
const slug = require('slug')
//Schema é a explicação de como é um portifolio 
const { Schema } = mongoose //mongoose.Schema -> destruting

const portfolioSchema = new Schema ({
    //descrever o que quer armazenar em um portifolio
    //sempre que fachar o bd para um portifolio, tera de passar esses dados
    title: {
        type: String,
        required: true, //obrigando a ter titulo para criar portfolio
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function(){ return slug(this.title)} //slug do title
    },
    description: {
         type: String, 
         required: true 
    },
    createdAt: {
         type: Date,
          default: Date.now()
    }
}  )


module.exports = mongoose.model('portfolio', portfolioSchema)