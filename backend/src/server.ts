import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({
      error: err.message,
    });
  }

  res.status(500).json({
    status: "Error",
    message: "Internal server error",
  });
});

app.listen(process.env.PORT),
  () => {
    console.info("App is running!");
  };
