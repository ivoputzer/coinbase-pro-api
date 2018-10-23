exports.toString = (stream, chunks = [], encoding = 'utf8', {concat} = Buffer) => {
  return new Promise((resolve, reject) => {
    stream.on('data', (data) => chunks.push(data))
    stream.on('error', reject)
    stream.on('end', (_) => resolve(concat(chunks).toString(encoding)))
  })
}
