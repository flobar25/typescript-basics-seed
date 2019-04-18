const pizzas = [{ name: "Pepperoni", toppings: ["pepperonis"] }];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);
