require('dotenv').config();
require('./database.cjs');

const CategoryList = require('../models/categoryList.cjs');
const Item = require('../models/item.cjs');

(async function() {

  await CategoryList.deleteMany({});
  const myList= await CategoryList.create([
    {name: 'Herbs and Spices', sortOrder: 10},
    {name: 'Teas', sortOrder: 20},
    {name: 'Herbal Supplements', sortOrder: 30},
    {name: 'Bath and Body', sortOrder: 40},
    {name: 'Plants', sortOrder: 50},
    {name: 'Essential Oils', sortOrder: 60},
    {name: 'Wellness Kits', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Burdock Root', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[0], price: 5.95},
    {name: 'Basil', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[0], price: 6.95},
    {name: 'Yellow Dock', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[0], price: 3.95},
    {name: 'Red Reishi Mushroom Tea', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[1], price: 14.95},
    {name: 'Dandilion Tea', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[1], price: 13.95},
    {name: 'Green Matcha', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[1], price: 25.95},
    {name: 'Burdock Root Supplements', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[2], price: 1.95},
    {name: 'Supplement', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[2], price: 4.95},
    {name: 'Bath and Body', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[3], price: 3.95},
    {name: 'Bath and Body', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[3], price: 7.95},
    {name: 'Bath and Body', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[3], price: 1.95},
    {name: 'Plants', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[4], price: 2.95},
    {name: 'Plants', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[4], price: 3.95},
    {name: 'Essential Oils', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[5], price: 1.95},
    {name: 'Essential Oils', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[5], price: 0.95},
    {name: 'Essential Oils', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[5], price: 2.95},
    {name: 'Essential Oils', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[5], price: 3.95},
    {name: 'Wellness Kits', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[6], price: 0.95},
    {name: 'Wellness Kits', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[6], price: 0.95},
    {name: 'Wellness Kits', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myLists[6], price: 8.95},
    {name: 'Wellness Kits', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[6], price: 3.95},
    {name: 'Wellness Kits', photo: path.join(__dirname, 'path/to/your/photo.jpg'), category: myList[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();