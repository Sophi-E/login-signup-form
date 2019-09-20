dbPassword =
  "mongodb+srv://username:" +
  encodeURIComponent("password") +
  "@cluster0-qxyv5.mongodb.net/test?retryWrites=true&w=majority";

module.exports = {
  mongoURI: dbPassword
};
