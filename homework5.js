let services = {
    "Express wash without drying": "300 UAH",
    "Express wash with foam without drying": "500 UAH",
    "Contactless washing (body, mats, thresholds)": "800 UAH",
    prices: function price() {
      let sum = 0;
      Object.values(this).forEach(value => {
            if (typeof value === 'string') {
                sum = sum + parseInt(value); 
            }
          }
        );
      return ('Sum: ' + sum + ' UAH');
    },
    minPrice: function() {
      let min = Infinity; 
      Object.values(this).forEach(value => {
        if (typeof value === 'string') {
          let price = parseInt(value); 
              if (price < min) {
                  min = price; 
              }
            }
          }
        );
      return ('Min price: ' + min + ' UAH');
    },
    maxPrice: function() {
      let max = 0; 
      Object.values(this).forEach(value => {
        if (typeof value === 'string') {
          let price = parseInt(value); 
              if (price > max) {
                  max = price; 
              }
            }
          }
        );
      return ('Max price: ' + max + ' UAH');
  } 
  };  
  
services["Contactless nano washing (body, mats, thresholds)"] = "1100 UAH";

console.log(services.prices());
console.log(services.minPrice());
console.log(services.maxPrice());
console.log(services);