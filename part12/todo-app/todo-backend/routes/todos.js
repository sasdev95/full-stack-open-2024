const express = require('express');
const { Todo } = require('../mongo');
const { setAsync, getAsync } = require('../redis');
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  // Increment the counter
  const addedTodos = await getAsync('added_todos');
  await setAsync('added_todos', (Number(addedTodos) || 0) + 1);
  res.send(todo);
});

/* GET /statistics */
router.get('/statistics', async (req, res) => {
  const addedTodos = await getAsync('added_todos');
  res.json({ added_todos: Number(addedTodos) || 0 });
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.json(req.todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.todo._id, req.body, { new: true });
  res.json(updatedTodo);
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
