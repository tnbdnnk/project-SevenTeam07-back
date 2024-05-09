// import mongoose from "mongoose";
// // require('dotenv').config();
// import app from "./app.js";
// import "dotenv/config";

// mongoose.set("strictQuery", true);

// mongoose
//     .connect(process.env.DB_URI)
//     .then(app.listen(process.env.PORT, () => console.log("Server running")))
//     .catch((err) => {
//         console.log(err.message);
//         process.exit();
//     });
import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
import getPort from "get-port";

dotenv.config(); // Завантаження змінних середовища з .env файлу

mongoose.set("strictQuery", true);

// Підключення до бази даних MongoDB
mongoose
    .connect(process.env.DB_URI)
    .then(async () => {
        console.log("Connected to database"); // Повідомлення про успішне підключення
        try {
        // Автоматичний пошук вільного порту
        const port = await getPort({ port: process.env.PORT || 3000 });

        // Прослуховування знайденого порту
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
        } catch (error) {
        console.error("Error finding a free port:", error.message);
        process.exit(1); // Завершення процесу з кодом помилки 1
        }
    })
    .catch((err) => {
        console.error("Database connection error:", err.message);
        process.exit(1); // Завершення процесу з кодом помилки 1
    });