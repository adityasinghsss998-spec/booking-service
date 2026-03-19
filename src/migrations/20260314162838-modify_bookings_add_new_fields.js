'use strict';

module.exports = {
  async up (q, s) {
    await q.addColumn('Bookings', 'NoOfSeats', {
      type: s.INTEGER,
      allowNull: false,
      defaultValue: 1
    });
    
    await q.addColumn('Bookings', 'TotalCost', {
      type: s.INTEGER,
      allowNull: false,
      defaultValue: 0
    });
  },

  async down (q, s) {
   await q.removeColumn('Bookings', 'NoOfSeats');
   await q.removeColumn('Bookings', 'TotalCost');
  }
};