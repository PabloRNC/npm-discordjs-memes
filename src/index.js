const Discord = require("discord.js")
const etotal = require("../functions/total")
const famous = require("../functions/famous")
const cinema = require("../functions/cinema")
const english = require("../functions/english")
const all = require("../functions/allmemes")


class Meme {
    constructor(_type){
        this.setType(_type)
    }

    setType(_type){

        
       if(_type === 1){
         return all()
       }else
       if(_type === 2){
           return etotal()
       } else
       if(_type === 3){
           return famous()
       } else
       if(_type === 4){
           return cinema()
       
       }else
       if(_type === 5){
           return english()
       }
       if(_type && _type !== 1 && 2 && 3){
           throw new Error("[DISCORD.JS-MEMES] INVALID TYPE OF MEME WAS PROVIDED: You provide an invalid type of meme")
       }

       

        
    
}
}












module.exports = {
    Meme
    
}

