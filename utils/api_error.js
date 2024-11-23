class ApiError extends Error {
  constructor(statusCode, message, data = null) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}

export default ApiError;
