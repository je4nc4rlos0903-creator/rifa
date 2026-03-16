export default async function handler(req, res) {

const accessToken = "SEU_ACCESS_TOKEN_AQUI";

const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
method: "POST",
headers: {
"Content-Type": "application/json",
Authorization: `Bearer ${accessToken}`
},
body: JSON.stringify({
items: [
{
title: "Rifa Solidária",
quantity: 1,
currency_id: "BRL",
unit_price: 5
}
]
})
});

const data = await response.json();

res.status(200).json({
link: data.init_point
});

}