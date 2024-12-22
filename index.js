const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to our Service';
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  return 'Hello ' + username + '!';
}
app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPassword(password) {
  if (password.length < 15) return 'Password is weak';
  else return 'Password is strong';
}
app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function calculateSum(n1, n2) {
  let result;
  result = n1 + n2;
  return result.toString();
}
app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
});

function checkSubscriptionStatus(name, subscription) {
  if (subscription === 'true') return name + ' Subscribed';
  else return name + ' Not Subscribed';
}
app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(checkSubscriptionStatus(username, isSubscribed));
});

function finalPrice(price, discount) {
  let result;
  result = price - (price * discount) / 100;
  return result.toString();
}
app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);

  res.send(finalPrice(price, discount));
});

function getGreeting(age, gender, name) {
  return 'Hello, ' + name + '! You are a ' + age + ' year old ' + gender + '.';
}
app.get('/personalized-greeting', (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;

  res.send(getGreeting(age, gender, name));
});

function finalDiscountedPrice(price, discount, tax) {
  let disPrice = price - price * (discount / 100);
  let finalPrice = disPrice + disPrice * (tax / 100);
  return finalPrice.toString();
}
app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(finalDiscountedPrice(price, discount, tax));
});

function totalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}
app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);

  res.send(totalExerciseTime(running, cycling, swimming).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
