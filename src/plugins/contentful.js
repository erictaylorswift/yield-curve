const contentful = require('contentful')

const config = {
    space: '8l52i8keu6j4',
    accessToken: '100e4667977792b14d2f0c2e95d905a03b5760d60da401b267d90afebc9c0eef'
}

module.exports = {
    createClient () {
        return contentful.createClient(config)
    }
}