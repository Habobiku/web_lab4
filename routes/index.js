var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


const uri = "mongodb+srv://Laba3:Laba123321123@cluster0.xxlcw.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(uri);

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb+srv://Laba3:Laba123321123@cluster0.xxlcw.mongodb.net/Cluster0?retryWrites=true&w=majority");
}

const recordSchema = new mongoose.Schema({
 square_speed: String,
  img: String,
});


const Record = mongoose.model('Record', recordSchema);

// const record = new Record({ title: 'Test1', description: "zxc", img: "https://loremflickr.com/cache/resized/65535_51292800312_16b63e08ac_n_200_200_nofilter.jpg" });


(async () => {
  // await record.save();
  const kittens = await Record.find();
  console.log(kittens);
})()

router.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index3.html');
});

router.get('/info', function (req, res, next) {
  (async () => {
    const kittens = await Record.find();
    console.log(kittens);
    res.send(kittens);
  })()
});

module.exports = router;
