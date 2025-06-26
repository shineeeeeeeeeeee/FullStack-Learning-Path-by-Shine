MongoDB is non sql database -> We'll learn about how to set this up
Non sql is a data store in document format -> json / Bson (Binary JSON) is a binary-encoded serialization of JSON-like documents.

Easy to use, scale and integrate.

Steps to install:
    Open terminal
    brew tap mongodb/brew
    brew update
    brew install mongodb-community@8.0

    brew services start mongodb-community@8.0
    brew services stop mongodb-community@8.0

    brew services list
    mongosh

Collection: Grouping of mongoDB docs having different fields equivalent to table in relational db.

connection -> database -> collections [structure of db]

MongoDB Atlas -> Machine's resources are used by mongo but to use cloud, to set up at cloud instance we use atlas.