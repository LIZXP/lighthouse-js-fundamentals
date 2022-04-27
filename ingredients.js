const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
console.log("ingredients");
let i = 0;
for (i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
};

console.log("ingredients while loop");
let i = 0;
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
};
console.log("ingredients backwards");
for (i = ingredients.length - 1; i >= 0; i--) {
    console.log(ingredients[i]);
};