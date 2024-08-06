export const toBRL = (price: number) => {
  const convertedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return convertedPrice;
};
