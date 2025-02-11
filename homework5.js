let services = {
    "Експрес-мийка без сушіння": "300 грн",
    "Експрес-мийка з піною без сушіння": "500 грн",
    "Безконтактне миття (кузов, килимки, пороги) ": "800 грн",
};

services["Безконтактна наномийка (кузов, килимки, пороги)"] = "1100 грн";
const values = Object.values(services);

function price() {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum = sum + parseInt(values[i]);
        }
    return sum + " грн";
}

function minPrice() {
    let min = parseInt(values[0]);
    for (let i = 0; i < values.length; i++) {
        if (parseInt(values[i]) < min) {
            min = parseInt(values[i]);
        };
    };
    return (min + ' грн');
};

function maxPrice() {
    let max = parseInt(values[0]);
    for (let i = 0; i < values.length; i++) {
        if (parseInt(values[i]) > max) {
            max = parseInt(values[i]);
        };
    };
    return (max + ' грн');
};

services["Сума"] = price();
services['Мінімальна ціна'] = minPrice();
services['Максимальнв ціна'] = maxPrice();
console.log(services);