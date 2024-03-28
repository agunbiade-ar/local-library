const express = require('express')
const router = express.Router()

const {
  book_create_post,
  book_update_post,
  book_create_get,
  book_update_get,
  book_delete_post,
  book_delete_get,
  book_detail,
  book_list,
  index,
} = require('../controllers/book.controller')

const {
  bookinstance_list,
  bookinstance_detail,
  bookinstance_create_get,
  bookinstance_create_post,
  bookinstance_delete_get,
  bookinstance_delete_post,
  bookinstance_update_get,
  bookinstance_update_post,
} = require('../controllers/bookinstance.controller')

//get catalog home page
router.get('/', index)

//get request for creating a book
router.get('/book/create', book_create_get)

router.post('/book/create', book_create_post)

router.get('book/:id/delete', book_delete_get)

router.post('book/:id/delete', book_delete_post)

//get request to update book
router.get('book/:id/update', book_update_get)

//shouldn't this be a put request
//post request to update book
router.post('book/:id/update', book_update_post)

//get request for one book
router.get('/book/:id', book_detail)

//get request for list of all books
router.get('/books', book_list)

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', author_controller.author_create_get)

// POST request for creating Author.
router.post('/author/create', author_controller.author_create_post)

// GET request to delete Author.
router.get('/author/:id/delete', author_controller.author_delete_get)

// POST request to delete Author.
router.post('/author/:id/delete', author_controller.author_delete_post)

// GET request to update Author.
router.get('/author/:id/update', author_controller.author_update_get)

// POST request to update Author.
router.post('/author/:id/update', author_controller.author_update_post)

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail)

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list)

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get)

//POST request for creating Genre.
router.post('/genre/create', genre_controller.genre_create_post)

// GET request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get)

// POST request to delete Genre.
router.post('/genre/:id/delete', genre_controller.genre_delete_post)

// GET request to update Genre.
router.get('/genre/:id/update', genre_controller.genre_update_get)

// POST request to update Genre.
router.post('/genre/:id/update', genre_controller.genre_update_post)

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail)

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list)

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  '/bookinstance/create',
  book_instance_controller.bookinstance_create_get
)

// POST request for creating BookInstance.
router.post(
  '/bookinstance/create',
  book_instance_controller.bookinstance_create_post
)

// GET request to delete BookInstance.
router.get(
  '/bookinstance/:id/delete',
  book_instance_controller.bookinstance_delete_get
)

// POST request to delete BookInstance.
router.post(
  '/bookinstance/:id/delete',
  book_instance_controller.bookinstance_delete_post
)

// GET request to update BookInstance.
router.get(
  '/bookinstance/:id/update',
  book_instance_controller.bookinstance_update_get
)

// POST request to update BookInstance.
router.post(
  '/bookinstance/:id/update',
  book_instance_controller.bookinstance_update_post
)

// GET request for one BookInstance.
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail)

// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_controller.bookinstance_list)

module.exports.catalogRouter = router
