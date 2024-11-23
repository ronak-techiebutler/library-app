# library-app

This is a Node.js application that uses Mongoose for MongoDB to manage a library system where users can borrow and return books. The project supports various API routes like creating books, fetching books, borrowing books, and returning them.

## Prerequisites

Before setting up and running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (for local development)

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```
git clone https://github.com/yourusername/library-app.git
cd library-app
```
### 2. Install Dependencies
Install all the required dependencies using npm:

```
npm install
```

### 3. Setup Environment Variables
Create a .env file in the root of the project with the following content:
```
PORT=3000
NODE_ENV=development
ALLOW_ORIGIN=*
MONGODB_CONNECTION_URL=mongodb://localhost:27017/library-app
```

### 4. Running MongoDB Locally

### 5. Run the Application
Now you can start the application:

```
npm run dev
```
### 6. Access the API
Once the server is running, you can access the API at http://localhost:3000.

### 7. API Endpoints
Here are the available endpoints you can use:

POST /books: Add a new book to the library.
Request Body: title, author, genre, publishedYear, availableCopies
GET /books: Fetch a list of all books, optionally filtered by genre or author.
Query Params: genre, author
POST /users/:userId/borrow: Allow a user to borrow a book (reduce available copies by 1).
Body: bookId
POST /users/:userId/return: Allow a user to return a book (increase available copies by 1).
Body: bookId

