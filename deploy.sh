#!/bin/sh
# ./deploy

rm -rf ./dist

npm run build

cd ./dist

# sed -i '' 's/old/new/g' index.html
# sed -i '' 's/base href=\"/base href=\"\/refugees/g' index.html

# sed -i '' 's/src=\"/src=\"\/refugees\//g' index.html
# sed -i '' 's/href=\"styles/href=\"\/refugees\/styles/g' index.html

git add .

git commit -m update

git status

git push origin master

git push heroku master
# heroku login
# heroku git:remote -a refugees2022