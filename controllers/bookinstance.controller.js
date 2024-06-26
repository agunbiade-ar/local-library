const BookInstance = require('../models/bookinstance')
const asyncHandler = require('express-async-handler')

// Display list of all BookInstances.
const bookinstance_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance list')
})

// Display detail page for a specific BookInstance.
const bookinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`)
})

// Display BookInstance create form on GET.
const bookinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance create GET')
})

// Handle BookInstance create on POST.
const bookinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance create POST')
})

// Display BookInstance delete form on GET.
const bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance delete GET')
})

// Handle BookInstance delete on POST.
const bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance delete POST')
})

// Display BookInstance update form on GET.
const bookinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance update GET')
})

// Handle bookinstance update on POST.
const bookinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance update POST')
})

module.exports = {
  bookinstance_list,
  bookinstance_detail,
  bookinstance_create_get,
  bookinstance_create_post,
  bookinstance_delete_get,
  bookinstance_delete_post,
  bookinstance_update_get,
  bookinstance_update_post,
}
