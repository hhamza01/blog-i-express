app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.get('/posts', (req, res) => {

    res.status(200).send(store.posts)
})

app.post('/posts', (req, res) => {

    let newAccount = req.body
    let id = store.posts.length
    store.posts.push(newAccount)

    res.status(201).send({id: id})
})

app.put('/posts', (req, res) => {

    store.posts[req.params.id] = req.body

    res.status(200).send(store.posts[req.params.id])
})

app.delete('/posts/:id', (req, res) => {

    store.posts.splice(req.params.id, 1)

    res.status(204).send()
