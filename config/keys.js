dbPassword =
  "mongodb+srv://username:" +
  encodeURIComponent("password") +
  "@(db cluster name).mongodb.net/test?retryWrites=true&w=majority";

module.exports = {
  mongoURI: dbPassword
};
