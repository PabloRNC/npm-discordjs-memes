# DISCORD.JS-MEMES
This is a powerful module that allows you to generates randomly memes, to start this porcess you have to type in your shell:
```yarn
npm i discord.js-memes
```
Then you have to put in your command a constant called meme and require this npm like this: 
```js
const meme = require("discord.js-memes")
```
To finish if you want to generate a random meme just type this in your commmand: 
```js
const Discord = require("discord.js")
const meme = require("discord.js-meme")

const all = new meme.Meme()
.setType(1)
 //generates a random meme in spanish or english

const embed = new Discord.MessageEmbed()
.setTitle("MEME")
.setImage(all)
.setFooter({text: "Powered by discord.js-memes"})

message.channel.send({embeds: [embed]})

```
There are more types of memes: 
```js

const all = new meme.Meme()
.setType(1) //for all the memes in spanish or english

const total = new meme.Meme()
.setType(2) //for all the memes only in spanish

const famousmemes = new meme.Meme()
.setType(3) //for famous people memes in spanish

const cinemamemes = new meme.Meme()
.setType(4) //for cinema memes in spanish

const english = new meme.Meme()
.setType(5) //for only english memes

//Coming soon more types and new type of memes in english
```
If you want to report an issue or a bug you can go to this GitHub link and report it you can [clik here](https://github.com/PabloRNC/npm-discordjs-memes/issues) to report it and I will fixed as fast as I can




