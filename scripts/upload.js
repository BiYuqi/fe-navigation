const uploadQcloud = require('qcloud-upload')
const COS_ENV = process.argv.slice(2)
const [AppId, Region, SecretId, SecretKey, Bucket] = COS_ENV

const options = {
  AppId,
  Region,
  SecretId,
  SecretKey,
  Bucket,
  Headers: {
    CacheControl: 'max-age=31536000'
  },
  prefix: 'fe',
  src: '../dist',
  overWrite: 1
}

uploadQcloud(options)
