// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(3000).json(
    { name: 'John Doe', age: '21' },
    { name: 'Juan Perez', age: '30'},
    { name: 'Mario Perez', age: '12'}
  )
}
