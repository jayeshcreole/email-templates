// Require:
var postmark = require("postmark");
//  / Send an email:
var client = new postmark.ServerClient("a8192565-05cc-4c0f-96a4-29241c982f5d");

try {
  client
    .sendEmailWithTemplate({
      From: "jayesh@sapahk.ai",
      To: "jayeshp.creolestudios@gmail.com",
      TemplateAlias: "Thankyou-layout",
      MessageStream: "outbound",
      Attachments: [
        {
          Name: "welcome-img.png",
          Content:
            "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",
          ContentType: "image/png",
          ContentID: "cid:part1.01030607.contactus-img",
        },
      ],
      TemplateModel: {},
    })
    .then((res) => console.log(res));
} catch (error) {
  console.log(error.message);
}

// const mongoose = require("mongoose");

// async function main() {
//   mongoose
//     .connect(process.env.DB_URI || "mongodb://127.0.0.1/needHelpNow", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("Connected"))
//     .catch((err) => console.log(err));

//   const Schema = mongoose.Schema;

//   const userSchema = new Schema({
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//   });

//   const User = mongoose.model("User", userSchema);

//   // Create a new user
//   const newUser = new User({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     password: "password123",
//   });

//   newUser
//     .save()
//     .then(() => console.log("User created"))
//     .catch((err) => console.log(err));

//   // Read all users
//   User.find()
//     .then((users) => console.log(users))
//     .catch((err) => console.log(err));

//   // Update a user
//   User.findOneAndUpdate({ name: "John Doe" }, { name: "Jane Doe" })
//     .then(() => console.log("User updated"))
//     .catch((err) => console.log(err));

//   // Delete a user
//   User.deleteOne({ name: "Jane Doe" })
//     .then(() => console.log("User deleted"))
//     .catch((err) => console.log(err));
// }
// main();

// const mongoose = require("mongoose");
