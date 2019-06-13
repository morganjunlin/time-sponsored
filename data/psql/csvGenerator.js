const fs = require('fs');

let image = [
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/aluminous-749358_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/chicken-soup-1346310_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1503392968123-ceabe9e5e630.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/food-1380275_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-5699a35584f4.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/bibimbap-1738580_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-b3fd986e4e67.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1546069901-eacef0df6022.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/cooking-4124108_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1531263539449-56fdf29dfc4d.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1553163147-622ab57be1c7.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/herbs-749360_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/kimchi-fried-rice-241051_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/tofu-597228_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-c75d3a99540d.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1498654896293-37aacf113fd9.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/vegetable-1582920_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/korean-cabbage-in-chili-sauce-1120406_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/toppokki-1607479_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1540138279543-b3728f037467.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-4126108_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tacos-245241_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-4126116_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/grilled-pineapple-pork-burrito-2944562_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tacos-1613795_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tamales-1990080_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-gratin-1564287_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/taco-2610649_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/food-1090619_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1464219222984-216ebffaaf85.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/food-2580200_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/food-791614_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1536184071535-78906f7172c2.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/mexican-2456038_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/grill-1599035_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1552332386-f8dd00dc2f85.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/mexican-food-1885616_1280.jpg',
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1550951957-3ab761159b8f.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/quesadilla-4034046_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tortilla-1386757_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/broiled-1238582_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/chinese-food-951889_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/Szechuan-Chicken_.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/image-951834_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/duck-479701_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/eggplant-1317917_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/dumplings-632206_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/fried-fish-with-sweet-peppers-906248_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/gourmet-667599_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/green-dragon-vegetable-1707089_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/cooking-1835369_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/noodles-3557592_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/photo-1525755662778-989d0524087e.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/photo-1541696432-82c6da8ce7bf.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/sweet-and-sour-pork-1264563_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/prawns-959219_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/dumplings-669901_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/water-spinach-1628620_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/restaurant-1762493_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/spring-rolls-2536526_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/italian-food-2157246_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pasta-4144384_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pasta-salad-1967501_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1551183053-bf91a1d81141.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/tomatoes-1804452_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/salad-2487759_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1528490060256-c345efae4442.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1551443874-e8d6a8e561aa.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1458644267420-66bc8a5f21e4.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/spaghetti-660748_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1528137871618-79d2761e3fd5.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1539586345401-51d5bfba7ac0.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/tomato-mozzarella-2367016_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pasta-329522_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pizza-1209748_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/salad-2487775_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/tortellini-3578016_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/salami-3296478_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/spaghetti-3547078_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pizza-1442946_1280.jpg',  
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-74748_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-951896_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1534790566855-4cb788d389ec.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-2762371_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-500054_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3442227_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3962997_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1512152272829-e3139592d56f.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-2034433_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-4145977_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1550984754-8d1b067b0239.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/snack-2635035_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1536510233921-8e5043fce771.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/hamburger-801942_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1551615593-ef5fe247e8f7.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/hamburger-1281855_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/hamburger-1414423_1280.jpg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1550984754-8d1b067b0239.jpeg', 
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3199088_1280.jpg',  
  'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3946012_1280.jpg'
]

let name1 = [`Bunny's`, `Mickey's`, `Mario's`, `Yoshi's`, `Jeff's`, `Calvin's`, `Kathleen's`, `Ramin's`, `Victor's`, `Matt's`, 'Korean', 'Japanese', 'Chinese', 'Mexican', 'American', 'North Korean', 'Thai', 'Taiwanese', 'Vietnamese', 'Canadian']
let name2 = ['BBQ', 'Salad', 'Lunch', 'Dinner', 'Wings', 'Sushi', 'Cafe', 'Pizza', 'Food', 'Special']

let category = ['Korean', 'Japanese', 'Chinese', 'Mexican', 'American'] //5 times from index = 0 to 4
let oneRandom = Math.floor(Math.random() * 5)
let twoRandom = Math.floor(Math.random() * 5) //from 0 to 4

let rating = [2.5,3,3.5,4,4.5,5]
let waitingtime = ['15-25', '25-35', '35-45', '45-55', '55-65']

// csv generator file

let writeStream = fs.createWriteStream('psql.csv', {flags: 'a'})

function generateRecord(id) {
  let record = '';
  record += id + ',';
  record += image[Math.floor(Math.random() * 100)] + ',';
  record += name1[Math.floor(Math.random() * 20)] + ' ' + name2[Math.floor(Math.random() * 10)] + ',';
  record += `"{${category[oneRandom]}, ${category[twoRandom]}}"` + ',';
  record += rating[Math.floor(Math.random() * 6)] + ',';
  record += Math.floor(Math.random() * 200) + 10 + ',';
  record += waitingtime[Math.floor(Math.random() * 5)] + '\n'; 
  return record;
}

let columns = 'id,image,name,categories,ratings,counts,waitingtime\n'

console.time('Finish generating CSV data')
async function dataGenerator() {
  for (let i = 1; i <= 10000000; i++) {
    if (!writeStream.write(generateRecord(i))) {
      await new Promise(resolve => writeStream.once('drain', resolve))
    }

    if (i === 10000000) {
      console.timeEnd('Finish generating CSV data')
    }
  }
}

writeStream.write(columns, dataGenerator)

