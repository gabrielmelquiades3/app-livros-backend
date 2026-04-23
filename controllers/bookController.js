const Book = require('../models/Book');

// Listar todos
exports.listBooks = async (req, res) => {
  const books = await Book.find().sort({ readAt: -1 });
  res.json(books);
};

// Buscar por ID
exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Livro não encontrado.' });
  res.json(book);
};

// Criar
exports.createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
};

// Atualizar
exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!book) return res.status(404).json({ message: 'Livro não encontrado.' });
  res.json(book);
};

// Deletar
exports.deleteBook = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).json({ message: 'Livro não encontrado.' });
  res.json({ message: 'Livro removido com sucesso.' });
};