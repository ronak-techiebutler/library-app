import ApiError from "../utils/api_error";
import Book from "../model/book.js";

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
    console.error("Error creating book:", error);
    throw new ApiError(500, "Failed to add book");
  }
};

export { createBook };
