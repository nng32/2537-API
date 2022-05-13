const express = require('express');
const mongoose = require('mongoose');
const app = express();

// XZnlJVbkANg6I4vp

mongoose.connect("mongodb+srv://UMP45:XZnlJVbkANg6I4vp@pokemon.etrpp.mongodb.net/pokemon?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });
const pokeSchema = new mongoose.Schema({
    abilities: Array,
    base_experience: Number,
    forms: Array,
    game_indices: Array,
    height: Number,
    held_items: Array,
    id: Number,
    is_default: Boolean,
    location_area_encounters: String,
    moves: Array,
    name: String,
    order: Number,
    past_types: Array,
    species: Object,
    sprites: Object,
    stats: Array,
    types: Array,
    weight: Number
});
const pokeModel = mongoose.model("pokemon", pokeSchema);

app.listen(process.env.PORT || 5000, (err) => {
    if (err) {
        console.log(err);
    }
})

app.get('/api/v2/pokemon/:id', (req, res) => {
    pokeModel.find({id: req.params.id}, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(data[0]);
        }
    }
)})