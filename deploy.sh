#!/bin/sh
# ./deploy

rm -rf ./dist

npm run build

git add .

git commit -m update

git status

git push origin master


# heroku login
# heroku git:remote -a refugees2022

git push heroku master