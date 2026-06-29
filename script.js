let globalProfit = 0;

const warehouse = {
  cpu: { title: "Процессор V8", price: 30000, count: 5 },
  gpu: { title: "Видеокарта RTX", price: 60000, count: 2 },
  ram: { title: "Оперативная память", price: 8000, count: 10 },

  calculateTotalValue() {
    let total = 0;
    
    for (const key in this ) {
      if (typeof this[key] === "function") {continue};

      total += this[key].price * this[key].count;
    }
    console.log(`Общая стоимость склада: ${total} руб.`);
  },

  acceptProduct(productKey, incomeCount) {
  if (!(productKey in this)) {
    console.log("Продукт под таким названием не найден");
    return;
  }
  const product = this[productKey];

  if(incomeCount > 0) {
    product.count += incomeCount;
    console.log(`Принято: ${product.title}. Новый остаток: ${product.count}`);
  }

  },

  sellProduct(productKey) {
  const product = this[productKey];

  if(product.count === 0) {
    console.log(`Ошибка! Товар "${product.title}" закончился.`);
    return;
  }
  --product.count

  globalProfit += product.price;

  console.log(`Продано: ${product.title}. Осталось ${product.count}`);
  }
}

warehouse.sellProduct("gpu");
warehouse.acceptProduct("gpu", 5);
warehouse.calculateTotalValue();
console.log(`Склад продал на ${globalProfit} рублей`);