function calculateCartPrice(...price) {
  return price;
}

console.log(calculateCartPrice(200, 400, 600));

const user = {
  userName: "Varun",
  price: 199,
};

function handleObject(anyObj) {
  console.log(`username is ${anyObj.userName} and Price is ${anyObj.price}`);
}
handleObject(user);
