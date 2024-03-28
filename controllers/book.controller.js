const Book = require('../models/book')

const asyncHandler = require('express-async-handler')

const index = asyncHandler(async (req, res, next) => {
  res.send('not implemented: site home page')
})

//display list of all books
const book_list = asyncHandler(async (req, res, next) => {
  res.send('not implemented: book list')
})

//display detail page of specific book
const book_detail = asyncHandler(async (req, res, next) => {
  res.send('not implemented: book detail: ${req.params.id}')
})

const book_create_get = asyncHandler(async (req, res, next) => {
  res.send('not impelemented: book create get')
})

const book_create_post = asyncHandler(async (req, res, next) => {
  res.send('not impelemented: book create post')
})

const book_delete_get = asyncHandler(async (req, res, next) => {
  res.send('not implemented:  book delete get')
})

const book_delete_post = asyncHandler(async (req, res, next) => {
  res.send('not implemented:  book delete post')
})

const book_update_get = asyncHandler(async (req, res, next) => {
  res.send('not implemented:  book update get')
})

const book_update_post = asyncHandler(async (req, res, next) => {
  res.send('not implemented:  book update post')
})

module.exports = {
  book_create_post,
  book_update_post,
  book_create_get,
  book_update_get,
  book_delete_post,
  book_delete_get,
  book_detail,
  book_list,
  index,
}
