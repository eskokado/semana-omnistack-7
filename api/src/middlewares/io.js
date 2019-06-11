module.exports = (req, res, next, io) => {
  req.io = io
  next()
}
