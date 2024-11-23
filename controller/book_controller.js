import ApiError from "../utils/api_error.js";
import Book from "../model/book.js";
import User from "../model/user.js";

const createBook = async (req, res, next) => {
  try {
    const { title, author, genre, publishedYear, availableCopies } = req.body;

    if (
      !title ||
      !author ||
      !genre ||
      !publishedYear ||
      availableCopies === undefined
    ) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required (title, author, genre, publishedYear, availableCopies)",
      });
    }

    const newBook = new Book({
      title,
      author,
      genre,
      publishedYear,
      availableCopies,
    });

    const savedBook = await newBook.save();

    res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: savedBook,
    });
  } catch (error) {
    console.error("erro:", error);
    throw new ApiError(500, "Failed to add book");
  }
};

const getBooks = async (req, res, next) => {
  try {
    const { genre, author } = req.query;

    const filters = {};
    if (genre) {
      filters.genre = genre;
    }
    if (author) {
      filters.author = author;
    }

    const books = await Book.find(filters);

    res.status(200).json({
      success: true,
      message: "Books fetched successfully",
      data: books,
    });
  } catch (error) {
    console.error("erro:", error);
    throw new ApiError(500, "Failed to fetch books");
  }
};

const borrowBook = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { bookId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
        data: null,
      });
    }

    if (book.availableCopies <= 0) {
      return res.status(400).json({
        success: false,
        message: "No available copies of the book",
        data: null,
      });
    }

    book.availableCopies -= 1;
    await book.save();

    user.borrowedBooks.push(bookId);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Book borrowed successfully",
      data: {
        user: user,
        book: book,
      },
    });
  } catch (error) {
    console.error("erro:", error);
    throw new ApiError(500, "Failed to borrow book");
  }
};

export { createBook, getBooks, borrowBook };
