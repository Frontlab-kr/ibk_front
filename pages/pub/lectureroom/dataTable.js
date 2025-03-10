export const ProductService = {
  getProductsData() {
    return [
      {
        th01: 'IB > 자본시장 > 리스크글로벌 > IB',
        th02: '디지털',
        th03: '2025 기업구조조정의 이해 및 활용 ',
        th04: '통신',
        th05: '10',
        th06: '2025.06.00 - 2025.07.00',
        th07: '100',
        th08: '11.1',
        th09: 'Y',
        th10: 'Y',
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
