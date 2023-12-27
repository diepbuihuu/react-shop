import axios from 'axios';
import { IGetProductsResponse } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => {
  let response: IGetProductsResponse;

  if (1 || isProduction) {
    response = await axios.get(
      'http://local.wordpress/wp-json/react-shop/products/get'
    );
  } else {
    response = require('static/json/products2.json');
  }

  const { products } = response.data || [];

  return products;
};
