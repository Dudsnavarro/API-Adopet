import express from "express";
import petRouter from "../routes/petRoutes"

const router=(app:express.Router) => {
    app.use("/pets", petRouter)
}

export default router