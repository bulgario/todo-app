module.exports = function(req, res, next) {
  res.header("Acess-Control-Alllow-Origin", "*");
  res.header(
    "Acess-Control-Alllow-Origin",
    GET,
    POST,
    OPTIONS,
    PUT,
    PATCH,
    DELETE
  );
  res.header(
    "Acess-Control-Alllow-Origin",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};
