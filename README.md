documentación 

post http://localhost:3000/comidas/searchFoodCategory

body: {
  "categoria":"nuts&seeds"
}

```js
post http://localhost:3000/comidas/searchFoodCategory

body: {
  "categoria":"nuts&seeds"
}

it return's food by category's

post http://localhost:3000/comidas/searchFoodCategory

body: {
  "categoria":"nuts&seeds" <= for instance {categoria}
}


**return's:

[
  {
    "_id": "6706e7faf50b0b083892fbc2",
    "nombre": "Tazon de Acai",
    "categoria": "nuts&seeds",
    "ocasion": "breakfast",
    "calorias": 300,
    "descripcion": "Rico en antioxidantes y delicioso.",
    "ingredientes": [
      "pure de acai",
      "platano",
      "granola",
      "miel"
    ],
    "valoraciones": [
      5,
      5,
      4
    ],
    "promedioValoracion": 4.67,
    "Delivery": 15,
    "foto": "https://example.com/tazon_acai.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbc5",
    "nombre": "Tazon de Quinoa",
    "categoria": "nuts&seeds",
    "ocasion": "dinner",
    "calorias": 400,
    "descripcion": "Nutritivo y lleno de sabor.",
    "ingredientes": [
      "quinoa",
      "aguacate",
      "tomate",
      "nueces"
    ],
    "valoraciones": [
      4,
      5,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 20,
    "foto": "https://example.com/tazon_quinoa.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbc6",
    "nombre": "Garbanzos Asados",
    "categoria": "nuts&seeds",
    "ocasion": "lunch",
    "calorias": 150,
    "descripcion": "Crujientes y llenos de sabor.",
    "ingredientes": [
      "garbanzos",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "valoraciones": [
      4,
      5,
      4
    ],
    "promedioValoracion": 4.33,
    "Delivery": 8,
    "foto": "https://example.com/garbanzos_asados.jpg"
  },
  {
    "_id": "6706e813f50b0b083892fbca",
    "nombre": "Pudding de Chia",
    "categoria": "nuts&seeds",
    "ocasion": "breakfast",
    "calorias": 220,
    "descripcion": "Saludable y lleno de fibra.",
    "ingredientes": [
      "semillas de chia",
      "leche de almendras",
      "miel",
      "frutas"
    ],
    "valoraciones": [
      5,
      5,
      4
    ],
    "promedioValoracion": 4.67,
    "Delivery": 10,
    "foto": "https://example.com/pudding_chia.jpg"
  }
]
```

```js
this API lets you get the info of a specific dish 
GET http://localhost:3000/comidas/6706e7faf50b0b083892fbc2 <= ID as a instance 

return's: 

{
  "_id": "6706e7faf50b0b083892fbc2",
  "nombre": "Tazon de Acai",
  "categoria": "nuts&seeds",
  "ocasion": "breakfast",
  "calorias": 300,
  "descripcion": "Rico en antioxidantes y delicioso.",
  "ingredientes": [
    "pure de acai",
    "platano",
    "granola",
    "miel"
  ],
  "valoraciones": [
    5,
    5,
    4
  ],
  "promedioValoracion": 4.67,
  "Delivery": 15,
  "foto": "https://example.com/tazon_acai.jpg"
}
```

```js
this API search dished by name, it is for the search bar

GET http://localhost:3000/comidas/foodSearchBar?searchTerm=tortilla <= for instance

Return's:

[
  {
    "_id": "6706e7faf50b0b083892fbbf",
    "nombre": "Tortilla de Espinacas",
    "categoria": "protein",
    "ocasion": "breakfast",
    "calorias": 250,
    "descripcion": "Deliciosa y perfecta para comenzar el dia.",
    "ingredientes": [
      "huevos",
      "espinaca",
      "cebolla",
      "queso feta"
    ],
    "valoraciones": [
      4,
      5,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 12,
    "foto": "https://example.com/tortilla_espinacas.jpg"
  }
]

```

variables de entorno 

```js
KEY_SECRET="MIID0zCCArsCFFDT4GSs1jca9YDmQW5KC5ZwM7lHMA0GCSqGSIb3DQEBCwUAMIGlMQswCQYDVQQGEwJDTzESMBAGA1UECAwJU2FudGFuZGVyMRQwEgYDVQQHDAtCdWNhcmFtYW5nYTEUMBIGA1UECgwLQ2FtcHVzTGFuZHMxFDASBgNVBAsMC0J1Y2FyYW1hbmdhMRIwEAYDVQQDDAlsb2NhbGhvc3QxLDAqBgkqhkiG9w0BCQEWHW1pZ3VlbGNhc3Ryby5jYW1wdXNAZ21haWwuY29tMB4XDTI0MDkxMjIxMzQyMVoXDTI1MDkxMjIxMzQyMVowgaUxCzAJBgNVBAYTAkNPMRIwEAYDVQQIDAlTYW50YW5kZXIxFDASBgNVBAcMC0J1Y2FyYW1hbmdhMRQwEgYDVQQKDAtDYW1wdXNMYW5kczEUMBIGA1UECwwLQnVjYXJhbWFuZ2ExEjAQBgNVBAMMCWxvY2FsaG9zdDEsMCoGCSqGSIb3DQEJARYdbWlndWVsY2FzdHJvLmNhbXB1c0BnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCdeduogD/qN9q7oG2PjajgP0elss21BauwCbWvjp9mfzwZRVVzG+Vtt8buFNbBg1XQi2vbdzi2LSHr6CaBo7CWEUvEqqqQQkRDva4G7PmDycq3OT0IRCsfaik2dkRtPKG/JgPI1f2DQWaN6azcyfbDIhRnT/4TgNRVEutn2J15bA5Mud0YNOTKA6Qtfv6+JGBVMfWgTzklfW4JC+l57LuqBaLJu83hIaZg9Co97ih2n3uluJposzoNu9D8fL5PKRndoMY/dUNDZs7pmwHTLJB8zkfOcAYYzo7bUS+touBcWCBW2mfp2W0Nt07o22/na0iGbGamXhnTUMLyDsCyWUa1AgMBAAEwDQYJKoZIhvcNAQELBQADggEBAE8o2N1wBE9bY/79SXx74iguWzQq9JUCqG/9Ln0xoSClbSXqPGaWwr8WEy5aVKlfj74xcYUAxqr0zkknNinQH4VzGuPYb/6a2otHIm9TDk+4mJllMq2Htal/QhQkWz26m+Z2Nv6lBZAuB7g93VgxcAP3pC2z8FdBYG5/HQDdngaizz+keP0W6RipzzBRD925npvzQSjCUvkGY5EjX9VaYIhPFXy3dUmudObdr1gjTVMrCflHKOvdZodv+DUlgros3F1BGmdSt2Cb8XdkfJK1z1OhoTbDWXRLRxCYdswxualsPIEqxB4GTW/2H60Qw/xQlDMHu2nekRyh1tQA1iLcY9k="
EXPRESS_EXPIRE=1800000
EXPRESS_PORT=3000
EXPRESS_HOST="localhost"

MONGO_ACCESS="mongodb://"
MONGO_USER="martinezRojas"
MONGO_PWD="developer"
MONGO_HOST="3.134.90.81"
MONGO_PORT=27017
MONGO_DB_NAME="martinezRojasFiltro"

GOOGLE_CLIENT_ID="818450291253-qvh989qr2ei6i3iprqdr6ai9ro5f4pno.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="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"

GITHUB_CLIENT_ID="Ov23lipagnwMStmTpSUs"
GITHUB_CLIENT_SECRET="204fd33f195ed28e62955152551574177af08b49"

DISCORD_CLIENT_ID="1291725579543908434"
DISCORD_CLIENT_SECRET="xjXae3ljWGFMAHBqv0Ph8Yz0I5ZexJiu"
```

```js
npm i
```

```js
npm run dev
```



```
http://localhost:3000/comidas/getFoot


[
  {
    "_id": "6706e7faf50b0b083892fbbe",
    "nombre": "Smoothie Verde",
    "categoria": "vegetables",
    "ocasion": "breakfast",
    "calorias": 180,
    "descripcion": "Refrescante y lleno de nutrientes.",
    "ingredientes": [
      "espinaca",
      "manzana",
      "platano",
      "agua de coco"
    ],
    "valoraciones": [
      5,
      4,
      4
    ],
    "promedioValoracion": 4.33,
    "Delivery": 10,
    "foto": "https://example.com/smoothie_verde.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbbf",
    "nombre": "Tortilla de Espinacas",
    "categoria": "protein",
    "ocasion": "breakfast",
    "calorias": 250,
    "descripcion": "Deliciosa y perfecta para comenzar el dia.",
    "ingredientes": [
      "huevos",
      "espinaca",
      "cebolla",
      "queso feta"
    ],
    "valoraciones": [
      4,
      5,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 12,
    "foto": "https://example.com/tortilla_espinacas.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbc0",
    "nombre": "Pasta Integral con Verduras",
    "categoria": "vegetables",
    "ocasion": "lunch",
    "calorias": 350,
    "descripcion": "Sana y satisfactoria.",
    "ingredientes": [
      "pasta integral",
      "brocoli",
      "zanahoria",
      "salsa de tomate"
    ],
    "valoraciones": [
      4,
      5,
      3
    ],
    "promedioValoracion": 4,
    "Delivery": 20,
    "foto": "https://example.com/pasta_integral_verduras.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbc1",
    "nombre": "Hamburguesa de Pavo",
    "categoria": "protein",
    "ocasion": "lunch",
    "calorias": 400,
    "descripcion": "Deliciosa y baja en grasas.",
    "ingredientes": [
      "carne de pavo",
      "pan integral",
      "lechuga",
      "tomate"
    ],
    "valoraciones": [
      5,
      4,
      4
    ],
    "promedioValoracion": 4.33,
    "Delivery": 18,
    "foto": "https://example.com/hamburguesa_pavo.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbc2",
    "nombre": "Tazon de Acai",
    "categoria": "nuts&seeds",
    "ocasion": "breakfast",
    "calorias": 300,
    "descripcion": "Rico en antioxidantes y delicioso.",
    "ingredientes": [
      "pure de acai",
      "platano",
      "granola",
      "miel"
    ],
    "valoraciones": [
      5,
      5,
      4
    ],
    "promedioValoracion": 4.67,
    "Delivery": 15,
    "foto": "https://example.com/tazon_acai.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbc3",
    "nombre": "Sopa de Lentejas",
    "categoria": "protein",
    "ocasion": "dinner",
    "calorias": 250,
    "descripcion": "Reconfortante y nutritiva.",
    "ingredientes": [
      "lentejas",
      "zanahoria",
      "apio",
      "especias"
    ],
    "valoraciones": [
      4,
      4,
      5
    ],
    "promedioValoracion": 4.33,
    "Delivery": 10,
    "foto": "https://example.com/sopa_lentejas.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbc4",
    "nombre": "Ensalada de Atun",
    "categoria": "protein",
    "ocasion": "lunch",
    "calorias": 350,
    "descripcion": "Rapida y llena de proteinas.",
    "ingredientes": [
      "atun",
      "lechuga",
      "tomate",
      "mayonesa"
    ],
    "valoraciones": [
      5,
      4,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 12,
    "foto": "https://example.com/ensalada_atun.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbc5",
    "nombre": "Tazon de Quinoa",
    "categoria": "nuts&seeds",
    "ocasion": "dinner",
    "calorias": 400,
    "descripcion": "Nutritivo y lleno de sabor.",
    "ingredientes": [
      "quinoa",
      "aguacate",
      "tomate",
      "nueces"
    ],
    "valoraciones": [
      4,
      5,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 20,
    "foto": "https://example.com/tazon_quinoa.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbc6",
    "nombre": "Garbanzos Asados",
    "categoria": "nuts&seeds",
    "ocasion": "lunch",
    "calorias": 150,
    "descripcion": "Crujientes y llenos de sabor.",
    "ingredientes": [
      "garbanzos",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "valoraciones": [
      4,
      5,
      4
    ],
    "promedioValoracion": 4.33,
    "Delivery": 8,
    "foto": "https://example.com/garbanzos_asados.jpg"
  },
  {
    "_id": "6706e7faf50b0b083892fbc7",
    "nombre": "Sushi Vegetal",
    "categoria": "vegetables",
    "ocasion": "dinner",
    "calorias": 300,
    "descripcion": "Fresco y lleno de sabor.",
    "ingredientes": [
      "arroz",
      "nori",
      "pepino",
      "aguacate"
    ],
    "valoraciones": [
      5,
      4,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 20,
    "foto": "https://example.com/sushi_vegetal.jpg"
  },
  {
    "_id": "6706e813f50b0b083892fbc8",
    "nombre": "Ensalada Mediterranea",
    "categoria": "vegetables",
    "ocasion": "lunch",
    "calorias": 300,
    "descripcion": "Llena de frescura y sabor mediterraneo.",
    "ingredientes": [
      "tomate",
      "pepino",
      "aceitunas",
      "queso feta"
    ],
    "valoraciones": [
      5,
      4,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 15,
    "foto": "https://example.com/ensalada_mediterranea.jpg"
  },
  {
    "_id": "6706e813f50b0b083892fbc9",
    "nombre": "Tacos de Pollo",
    "categoria": "protein",
    "ocasion": "dinner",
    "calorias": 450,
    "descripcion": "Deliciosos y faciles de preparar.",
    "ingredientes": [
      "pollo",
      "tortillas de maiz",
      "aguacate",
      "salsa"
    ],
    "valoraciones": [
      5,
      4,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 20,
    "foto": "https://example.com/tacos_pollo.jpg"
  },
  {
    "_id": "6706e813f50b0b083892fbca",
    "nombre": "Pudding de Chia",
    "categoria": "nuts&seeds",
    "ocasion": "breakfast",
    "calorias": 220,
    "descripcion": "Saludable y lleno de fibra.",
    "ingredientes": [
      "semillas de chia",
      "leche de almendras",
      "miel",
      "frutas"
    ],
    "valoraciones": [
      5,
      5,
      4
    ],
    "promedioValoracion": 4.67,
    "Delivery": 10,
    "foto": "https://example.com/pudding_chia.jpg"
  },
  {
    "_id": "6706e813f50b0b083892fbcb",
    "nombre": "Pollo al Limon",
    "categoria": "protein",
    "ocasion": "dinner",
    "calorias": 350,
    "descripcion": "Sabroso y aromatico.",
    "ingredientes": [
      "pollo",
      "limon",
      "ajo",
      "especias"
    ],
    "valoraciones": [
      4,
      5,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 25,
    "foto": "https://example.com/pollo_al_limon.jpg"
  },
  {
    "_id": "6706e813f50b0b083892fbcc",
    "nombre": "Ensalada de Frutas",
    "categoria": "vegetables",
    "ocasion": "breakfast",
    "calorias": 150,
    "descripcion": "Refrescante y dulce.",
    "ingredientes": [
      "frutas de temporada",
      "miel",
      "jugo de limon"
    ],
    "valoraciones": [
      5,
      5,
      4
    ],
    "promedioValoracion": 4.67,
    "Delivery": 10,
    "foto": "https://example.com/ensalada_frutas.jpg"
  },
  {
    "_id": "6706ebe0f50b0b083892fbd7",
    "nombre": "Protein Shake de Chocolate",
    "categoria": "shakes",
    "ocasion": "breakfast",
    "calorias": 200,
    "descripcion": "Delicioso batido de chocolate rico en proteínas.",
    "ingredientes": [
      "proteína de suero",
      "leche",
      "cacao en polvo",
      "miel"
    ],
    "valoraciones": [
      5,
      4,
      4
    ],
    "promedioValoracion": 4.33,
    "Delivery": 10,
    "foto": "https://example.com/protein_shake_chocolate.jpg"
  },
  {
    "_id": "6706ebe0f50b0b083892fbd8",
    "nombre": "Protein Shake de Vainilla",
    "categoria": "shakes",
    "ocasion": "breakfast",
    "calorias": 180,
    "descripcion": "Batido de vainilla cremoso y nutritivo.",
    "ingredientes": [
      "proteína de suero",
      "leche de almendras",
      "extracto de vainilla",
      "plátano"
    ],
    "valoraciones": [
      5,
      5,
      4
    ],
    "promedioValoracion": 4.67,
    "Delivery": 10,
    "foto": "https://example.com/protein_shake_vainilla.jpg"
  },
  {
    "_id": "6706ebe0f50b0b083892fbd9",
    "nombre": "Protein Shake Verde",
    "categoria": "shakes",
    "ocasion": "breakfast",
    "calorias": 250,
    "descripcion": "Nutritivo batido verde con espinacas y plátano.",
    "ingredientes": [
      "proteína de guisante",
      "espinaca",
      "plátano",
      "agua de coco"
    ],
    "valoraciones": [
      4,
      5,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 15,
    "foto": "https://example.com/protein_shake_verde.jpg"
  },
  {
    "_id": "6706ebe0f50b0b083892fbda",
    "nombre": "Protein Shake de Fresa",
    "categoria": "shakes",
    "ocasion": "snack",
    "calorias": 210,
    "descripcion": "Refrescante batido de fresa ideal para media tarde.",
    "ingredientes": [
      "proteína de suero",
      "fresas",
      "yogur",
      "miel"
    ],
    "valoraciones": [
      5,
      4,
      5
    ],
    "promedioValoracion": 4.67,
    "Delivery": 12,
    "foto": "https://example.com/protein_shake_fresa.jpg"
  },
  {
    "_id": "6706ebe0f50b0b083892fbdb",
    "nombre": "Protein Shake de Mango",
    "categoria": "shakes",
    "ocasion": "snack",
    "calorias": 220,
    "descripcion": "Tropical y delicioso, perfecto para cualquier momento.",
    "ingredientes": [
      "proteína de suero",
      "mango",
      "leche de coco",
      "hielo"
    ],
    "valoraciones": [
      5,
      5,
      4
    ],
    "promedioValoracion": 4.67,
    "Delivery": 10,
    "foto": "https://example.com/protein_shake_mango.jpg"
  }
]
```

