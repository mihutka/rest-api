const express = require('express');
const cors = require('cors');
const { error } = require('console');
const { type } = require('os');
const app = express();

app.use(cors());
app.use(express.json()); 

const widgets =
[
    {id : 1, name : "Super Mario Bros. Wonder"},
    {id : 2, name : "Animal Crossing"},
    {id : 3, name : "Seiklus"},

]


//get method, returns one game from array, by id. If id doesn't exist
//return statuscode 404 - not found =>


app.get('/games/:id',(req,res) =>
{
    res.send(games)
})




app.get('/games', (req,rest) =>
{
    if (typeof games[req.param.id - 1] === 'undefined')
    {
        return res.status(404).send({error: "Game not found, game not gaming"})
    }

    res.send(games[req.params.id-1])
})




app.post('/games', (req,res) => {
if(!req.body.name || !req.body.price) {
    return res.status(400).send({error: 'One or multiple parameters missing'});

}
let newGame = {
    id: games.lenght + 1,
    price: req.body.price,
    name: req.body.name
}
games.push(newGame)
res.status(201).location('localhost:8000/games/' + (games.lenght -1)).send(newGame)
})


//delete a game, where id is specified, if game is not found,
//returns statuscode 4
//d

app.delete('/games/:id', (req, res) =>
{
   if (typeof games[req.params.id] - 1 === 'undefined')
   {
    return res.status(404).send(
        {error: 'Game not found, no gaming for you'}
    )
   }
   games.splice(req.params.id -1, 1)
   res.status(204).send({error: 'Content not contenting (no content)'})
}
)


app.put('/games', (req, res) => {
    res.send("Oh no")
})

//define the adress upon which the app is running

app.listen (8080, () =>
console.log('Api töötab aadressil: http://localhost:8080')
)
