const logger_ii = (req, res, next) =>{
  console.log(
    `${req.protocol}://${req.get('host')} ${req.originalUrl} ${moment().format()}`
  );
  console.log('server log')
  next();
};
module.exports = logger_ii;
