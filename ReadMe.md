# New Driver Mile Tracker Backend Application

1. express --view=no-view ndmt_backend
2. cd ndmt_backend
3. npm install
4. npm install --save-dev nodemon
5. npm install --save mysql
6. npm install --save mysql2
7. npm install --save sequelize@4.43.0 
8. sequelize init

## Create the basic user model, an information model and an image model.

sequelize model:generate --name Users --attributes UserId:integer,UserName:string,Password:string

sequelize model:generate --name Info --attributes UserId:integer,FirstName:string,MiddleInitial:string,LastName:string,EmailAddress:string,PhoneNumber:integer,HouseNumber:integer,StreetName:string,StreetCity:string,StreetState:string,StreetZipCode:integer

sequelize model:generate --name Security --attributes UserId:integer,UserPassword:string

sequelize model:generate --name Images --attributes UserId:integer,Image:string

Make a migration
makemigration --name initial_migration

Create the database
sequelize db:create

Merge the migrations
sequelize db:migrate
