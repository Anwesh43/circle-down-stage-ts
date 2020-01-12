const {readdirSync, readFileSync, writeFileSync} = require('fs')
const path = require('path')

const files = readdirSync('./src')
const {spawn} = require('child_process')
const srcDirPath = path.join(__dirname, 'src')
var msg = ""
files.forEach((file) => {
    const filePath = path.join(srcDirPath, file)
    console.log(filePath)
    msg = `${msg}${readFileSync(filePath).toString()}`
    msg = `${msg}\n`
    console.log(msg)
})
writeFileSync('index.ts', Buffer.from(msg))
const tsc = spawn('tsc', ['index.ts'])
const errors = []
tsc.stderr.on('data', (data) => {
    console.log(data.toString())
    errors.push(data.toString())
})
tsc.stdout.on('data', (data) => {
    console.log(data.toString())
    errors.push(data.toString())
})
tsc.on('close', () => {
    if (errors.length == 0) {
        console.log("compiled successfully")
    } else {
        const errorMsg = errors.length == 1 ? 'error' : 'errors'
        console.log(`compiled with ${errors.length} ${errorMsg}`)
    }
})
