const mongoose = require("mongoose");
const User = require("./user.js");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost/testdb"); // mongodb is locally installed so this is the url
  console.log("running");
}

run();

async function run() {
  try {
    // 2 ways to create a user

    // first one
    /*
  const user = new User({ name: "Rock", age: 123 });
  await user.save(); */

    // second one
    /* const user = await User.create({
      name: "Rock",
      age: 15,
      hobbies: ["gaming"],
      email: "sTone932gmail.com",
      address: { street: "east colony", city: "chittagong" },
    }); */
    // const result = await User.findById("650c115114919e44dabbf140"); // find documents with object id given by mongoDB
    // const result = await User.find({ name: "Rock" }); // find documents by property name and value
    // const result = await User.where('name).equals('Rock'); //find documents by property name and value (mongoose syntax only)
    // const result = await User.where('age).gt(120).where('name').equals('Stone'); // find documents by property name and value (mongoose syntax only)
    // const result = await User.updateMany({ age: { $lte: 123 } },{ name: "buslk" }); // update documents by property name and value
    // const result = await User.deleteMany({ name: "Rock" }); // delete documents by property name and value
    // const result = await User.where('age).gt(120).where('name').equals('Stone').limit(2).select('age');// this'll return me only the age field(mongoose syntax only)

    // to update a user
    // user.name = "Stone"; // it'll change the name locally if not saved
    // await user.save(); // to save it on mongoDB

    console.log(result);
  } catch (error) {
    console.log("✨ 🌟  run  error:", error.message);
  }
}
22:17 push it to github with mongoDB notes made previously