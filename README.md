# Basic Banking System

This app uses the transactions feature of mongoDB API to combine multiple operations into one [**automic**](<https://en.wikipedia.org/wiki/Atomicity_(database_systems)>) operation and either:

- commit if all of them are successful
- abort if even one of them fails.

## App Tree

- APP -> routes and fetches data
- Home -> directs to users or all transactions
- Users -> All users passes
- UsersList -> indivisual user
- Transactions -> show all transactions
