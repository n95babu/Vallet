# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(
  first_name: "YoYo",
  last_name: "T",
  email: "i@vallet.com",
  phone: "917-678-5630"
)

currency1 = Currency.create(
  coin: "Bitcoin",
  amount: 40.50, 
)

currency3 = Currency.create(
  coin: "XRP",
  amount: 100, 
)

currency4 = Currency.create(
  coin: "ETH",
  amount: 900, 
)

currency5 = Currency.create(
  coin: "EOS",
  amount: 10, 
)


user1.currencies << currency1
user1.currencies << currency3
user1.currencies << currency4
user1.currencies << currency5
user2 = User.create(
  first_name: "JD",
  last_name: "Adams",
  email: "jadams@vallet.com",
  phone: "917-678-5630"
)

currency2 = Currency.create(
  coin: "LitCoin",
  amount: 40.50, 
)
user2.currencies << currency2
user2.currencies << currency3
user2.currencies << currency4