import express, { Application, Request, Response } from "express"
import cors from 'cors'
import { ProductRoutes } from "./app/modules/ProductModule/product.route";
import { OrderRoutes } from "./app/modules/OrdersModule/order.route";
import { UsersRouter } from "./app/modules/UserModule/user.route";
const app : Application = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/products", ProductRoutes)
app.use("/api/v1/orders", OrderRoutes)
app.use("/api/v1/users", UsersRouter)

app.get("/", (req : Request, res : Response)=> {
    res.status(200).json({
        success: true,
        message: "Server is running... Welcome to Redison Hotel"
    })
})

export default app;