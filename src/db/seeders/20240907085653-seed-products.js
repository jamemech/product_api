'use strict';
const path = require('path')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()

    })
    await queryInterface.bulkInsert('Products', data, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

const data = [
  {
    name: 'AirPod Pro',
    image: '',
    price: 10000,
    stock: 1
  }
]