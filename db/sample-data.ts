import { hashSync } from "bcrypt-ts-edge"; //para hacerle hash a la contraseña

const sampleData = {
  users: [
    {
      name: "Sebastián",
      email: "admin@example.com",
      password: hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Ani",
      email: "user@example.com",
      password: hashSync("123456", 10),
      role: "user",
    },
    {
      name: "Carlos Rodríguez",
      email: "carlos@example.com",
      phone: "099123456",
      role: "user",
    },
    {
      name: "María González",
      email: "maria@example.com",
      phone: "098765432",
      role: "user",
    },
    {
      name: "Lucas Pérez",
      email: "lucas@example.com",
      phone: "097654321",
      role: "user",
    },
  ],
  services: [
    {
      name: "Corte de cabello",
      description:
        "Corte clásico con tijera o máquina, incluye lavado y secado.",
      duration: 30,
      price: 15.0,
      isActive: true,
    },
    {
      name: "Corte + Barba",
      description:
        "Corte de cabello completo más perfilado y arreglo de barba.",
      duration: 50,
      price: 25.0,
      isActive: true,
    },
    {
      name: "Arreglo de barba",
      description: "Perfilado, degradado y definición de barba con navaja.",
      duration: 20,
      price: 10.0,
      isActive: true,
    },
    {
      name: "Afeitado clásico",
      description:
        "Afeitado tradicional con navaja, toalla caliente y productos premium.",
      duration: 30,
      price: 18.0,
      isActive: true,
    },
    {
      name: "Corte infantil",
      description: "Corte de cabello para niños menores de 12 años.",
      duration: 20,
      price: 10.0,
      isActive: true,
    },
    {
      name: "Degradado / Fade",
      description: "Corte especializado en degradado bajo, medio o alto.",
      duration: 40,
      price: 20.0,
      isActive: true,
    },
    {
      name: "Tratamiento capilar",
      description:
        "Hidratación profunda con productos nutritivos, incluye masaje de cuero cabelludo.",
      duration: 45,
      price: 22.0,
      isActive: true,
    },
    {
      name: "Color / Tintura",
      description:
        "Aplicación de color completo o mechas según el largo del cabello.",
      duration: 60,
      price: 35.0,
      isActive: true,
    },
  ],
};

export default sampleData;
