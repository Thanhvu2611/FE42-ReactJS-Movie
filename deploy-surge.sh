#Build reactjs app with production mode
npm run build

#Move to build folder
cd build

#Copy index.html to 200.html
cp index.html 200.html

#Start deploying via Surge
# Deploy current folder to my kdq-react-movie-app.surge.sh domain
surge . fe42cinema.surge.sh