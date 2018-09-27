'use strict'

const micro = require('micro')
const tree = require('micro-tree').default

const hello = async function (req, res) {
  return micro.send(res, 200, { hello: 'world' })
}
const server = micro(
  tree({
    GET: hello
  })
)

server.listen(3000)
