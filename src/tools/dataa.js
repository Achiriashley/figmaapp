 export const products = [
    {    id: 1,
        image: '/images/image1.png',
         name: 'Samsung s20',
         price: 10.99,
         slugFun: function () {
            let a = this.name.split(" ")[0].toLowerCase(); // 'Air'
            let b = this.name.split(" ")[1].toLowerCase(); // 'jordan'
            let result = a + "-" + b + "-" + new Date().getDay() + this.id;
            return result;
          },
          get slug() {
            return this.slugFun(); // Calculate the slug dynamically
          },                
        },
    {    id: 2,
        image: '/images/image2.png',
         name: 'Samsung s20ultra|64G',
         price: 30.99
         ,
         slugFun: function () {
            let a = this.name.split(" ")[0].toLowerCase(); // 'Air'
            let b = this.name.split(" ")[1].toLowerCase(); // 'jordan'
            let result = a + "-" + b + "-" + new Date().getDay() + this.id;
            return result;
          },
          get slug() {
            return this.slugFun(); // Calculate the slug dynamically
          },                
        },
    {    id: 3,
        image: '/images/image3.png',
         name: 'Samsung s22|64G',
         price: 20.99
         ,
         slugFun: function () {
            let a = this.name.split(" ")[0].toLowerCase(); // 'Air'
            let b = this.name.split(" ")[1].toLowerCase(); // 'jordan'
            let result = a + "-" + b + "-" + new Date().getDay() + this.id;
            return result;
          },
          get slug() {
            return this.slugFun(); // Calculate the slug dynamically
          },                
        },
    {    id: 4,
        image: '/images/image4.png',
         name: 'Samsung s10|64G',
         price: 60.99
         ,
         slugFun: function () {
            let a = this.name.split(" ")[0].toLowerCase(); // 'Air'
            let b = this.name.split(" ")[1].toLowerCase(); // 'jordan'
            let result = a + "-" + b + "-" + new Date().getDay() + this.id;
            return result;
          },
          get slug() {
            return this.slugFun(); // Calculate the slug dynamically
          },                
        },
    {    id: 5,
        image: '/images/image5.png',
         name: 'Samsung s20|64G',
         price: 80.99
         ,
         slugFun: function () {
            let a = this.name.split(" ")[0].toLowerCase(); // 'Air'
            let b = this.name.split(" ")[1].toLowerCase(); // 'jordan'
            let result = a + "-" + b + "-" + new Date().getDay() + this.id;
            return result;
          },
          get slug() {
            return this.slugFun(); // Calculate the slug dynamically
          },                
        },
];
