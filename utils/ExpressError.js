class ExpressError extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;  // Corrected to use 'message' instead of 'Message'
    }
  }
  
  module.exports = ExpressError;
  