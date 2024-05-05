import { MercadoPagoConfig, Preference } from "mercadopago";
import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

router.post("/Api/Create_Preference", async (req, res) => {
const url_return = "http://localhost:3001"
const {title, precio_final} = req.body

  const client = new MercadoPagoConfig({
    accessToken: process.env.TOKEN_MP,
    options: { timeout: 5000 },
  });

  const preference = new Preference(client);

  preference
    .create({
      body: {
        items: [
          {
            title: title,
            quantity: 1,
            unit_price: precio_final,
          },
        ],
        back_urls: {
        success: url_return,
          failure: url_return,
          pending: url_return
      },
      auto_return: "approved",
      },
      
    })
    .then((response) => {
      res.json({ PreferenceId: response.id });
    })
    .catch((error) => console.log(error));
});

export default router;
