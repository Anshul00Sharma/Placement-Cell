const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

const MongoStore = require("connect-mongo");
// setting up layout
const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);
// extract style and script from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//set view engine ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded());

app.use(cookieParser());

// setting up assets folder
app.use(express.static("assets"));

// * mongo store is used to store the session cookie in the db
app.use(
  session({
    name: "PlacementCell",
    secret: "blahsomthing",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost/PlacementCell",
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
