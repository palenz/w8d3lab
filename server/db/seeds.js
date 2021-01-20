use booking_manager;
db.dropDatabase();

db.bookings.insertMany([
    {name: 'Angelo', email: 'angelo@gmail.com', status:'checkedIn'},
    {name: 'Confucius', email: 'configuy@china.gov', status:'notCheckedIn'},
    {name: 'Mario', email: 'mario@yahoo.com', status:'checkedOut'},
    {name: 'Yolanda', email: 'yo@hey.com', status:'checkedIn'},
    {name: 'Alfred', email: 'a@me.com', status:'notCheckedIn'},
]);