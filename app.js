import express from "express";
import logger from "morgan";
import cors from "cors";
// import swaggerUi from "swagger-ui-express";
import "dotenv/config";
// import usersRouter from "./routes/api/user.js";
// import waterRouter from "./routes/api/water.js";
// import swaggerDocument from "./swagger.json" assert { type: "json" };
import authRouter from "./routes/authRouter.js";
import HttpError from "./helpers/HttpError.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use("/api/users", usersRouter);
// app.use("/api/water", waterRouter);
app.use("/api/users", authRouter);

// Один middleware для обробки всіх помилок
app.use((err, req, res, next) => {
  if (typeof err.status !== "undefined" && typeof err.message !== "undefined") {
    // Перевіряємо, чи err має властивості status та message
    res.status(err.status).json({ message: err.message });
  } else {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default app;
