import React from 'react';
import data from '../data.json';
import { motion } from 'framer-motion';

const IndexPage = () => {
  return (
      <div className="container mx-auto">
          <h1 className="text-2xl font-bold my-4">Items List</h1>
          <ul className="list-none p-0">
              {data.map(item => (
                  <li key={item.id} className="my-4 flex items-center justify-between border-b-2 border-gray-200 py-4">
                      <div className="flex items-center">
                          <motion.img
                              src={item.images[0].url}
                              alt={item.images[0].alt}
                              className="w-32 h-32 rounded-full mr-4 object-cover"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                          />
                          <div>
                              <h2 className="text-xl font-semibold">{item.name}</h2>
                              <p className="text-gray-600">{item.description}</p>
                              <p className="text-green-500">${item.price.toFixed(2)}</p>
                              {item.discount.isAvailable && (
                                  <p className="text-red-500">Discount: {item.discount.percentage}% off</p>
                              )}
                          </div>
                      </div>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default IndexPage;
