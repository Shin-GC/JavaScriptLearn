const crypto = require('crypto')

const createSalt = () => {
  return crypto.randomBytes(32).toString('hex')
}

const cryptoPassword = (password, salt) => {
  return  crypto.pbkdf2Sync(password, salt, 1, 32, 'sha512').toString('hex')
}

module.exports = {
  createSalt,
  cryptoPassword,
}


