const messageList = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

const HttpError = (status, message = messageList[status]) => {
  console.log(
    "Creating HttpError with status:",
    status,
    "and message:",
    message
  ); // Додайте цей рядок
  const error = new Error(message);
  error.status = status;
  return error;
};

export default HttpError;
