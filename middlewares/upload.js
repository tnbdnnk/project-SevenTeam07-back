import multer from "multer";
import path from "path";
import HttpError from "../helpers/HttpError.js";

const destination = path.resolve("temp");

const storage = multer.diskStorage({
  destination,
  filename: (req, file, callback) => {
    const { _id: id } = req.user;
    const filename = `${id}`;
    callback(null, filename);
  },
});

const limits = {
  fileSize: 1024 * 1024 * 5,
};

const fileFilter = (req, file, callback) => {
  const { mimetype } = file;
  if (
    mimetype !== "image/jpeg" &&
    mimetype !== "image/png" &&
    mimetype !== "image/jpg"
  ) {
    return callback(HttpError(400, "File extension should be .jpg or .png"));
  }
  callback(null, true);
};

export const upload = multer({
  storage,
  limits,
  fileFilter,
});
