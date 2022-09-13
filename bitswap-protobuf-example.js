const protobuf = require('protobufjs')

const WorkWithPBExample = async () => {
  const content = {
    entries: [
      {
        block: 'QmZFaw79bE2sW41rV1DsR1oRw4z4As5ZDDYpwbFSJNFonA',
        wantType: 1,
        sendDontHave: true
      }
    ]
  }

  // encode
  const root = await protobuf.load('message.proto')
  const wantList = root.lookupType('Message.Wantlist')
  console.log(wantList.verify(content))
  const buf = wantList.encode(content).finish()
  // decode
  const decodedObj = wantList.decode(buf)
  console.log(decodedObj)
}

WorkWithPBExample()
