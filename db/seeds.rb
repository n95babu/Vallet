# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(
  first_name: "Ivonka",
  last_name: "Trump",
  email: "itrump@vallet.com",
  phone: "917-678-5630"
)

currency1 = Currency.create(
  coin: "Bitcoin",
  amount: 40.50, 
)

