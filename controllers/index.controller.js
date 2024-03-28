const messages = [
  {
    text: 'Hi, ',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello, ',
    user: 'Charles',
    added: new Date(),
  },
]

const indexController = (req, res) => {
  res.render('index', { messages })
}

const formControllerGet = (req, res) => {
  res.render('new-form')
}

const formControllerPost = (req, res) => {
  let { user, text } = req.body
  messages.push({ user, text, added: new Date() })
  res.redirect('/')
}

module.exports = {
  indexController,
  formControllerGet,
  formControllerPost,
}
