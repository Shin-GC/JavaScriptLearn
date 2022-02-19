const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  console.log("Connected")
}

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
//
// const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
//
// const shin = new Kitten({name: "Shin"});

