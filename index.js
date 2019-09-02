//############ COMMAND - TERMINAL ###############################

//LINUX

cd . / Cd ..	
ls / dir	
Mkdir nameCarpeta		
Touch nameFile.js	

//---
	
Sudo apt-get update	
Sudo apt upload		
Sudo apt-get install	



//MONGOODB

		
mongo	
db	
show dbs	
    
Use dbName	
show collections	
db.createCollection("User")	
db.User.insertOne( { x: 1 } );	
db.getCollection('User').find()	
db.User.find().pretty()	
    
sudo service mongod start	
sudo service mongod stop	
    
Robo 3T - Robomongo  GUI gratuita para MongoDB	




//NODEJS

Node index.js	
		
Postman  --> envío de peticiones HTTP REST	
    
nodemon  / npm install -g nodemon	
        
//<package>	
request 	
express	
mongoose

  



//NPM
	
Npm init -y	
Npm install --save <Package>  / npm i	
npm update / npm update dev / npm update -g	
	
npm start	
npm build	
npm run-script 	
	
npm ls    --> lista de paquetes	
	
BabelJS => npm run-script build	





//GITHUB

git init
git pull
git commit -m “..”

git remote add origin url
git push origin master
.gitignore




//VISUAL STUDIO CODE
		
control + shiff + P   --->  todos los comandos	
control + P ----> todos los archivos	
control + J --> Terminal	
    


		
//REACTJS

npx create-react-app my-app	



    

//BABELJS

SRC >>>> LIB
	
.babelrc / babel.config.js /  o en package.json (npm)
.babelrc.js 

{ "presets": ["@babel/preset-env"] }
npm install --save-dev @babel/preset-env

npx babel src --out-dir lib
./node_modules/.bin/babel src --out-dir lib
 --plugins=@babel/plugin-transform-arrow-functions

