> [!NOTE]
> This is a raw js script, the output of the feed is only listed in the console. This is simply the bareminimum skeleton of a reader.

# RSS Feed Reader
_Uses RSS-Parser from JS to spit out a feed._

## Prequisites
> Node 14 or higher
> NPM

## Setup
We will be using Yarn to manage our dependencies. To install Yarn, run this in windows powershell:
```
npm install -g yarn
```
To test if you've installed Yarn, check the version:
```
yarn -v
```
Go to the directory where you wish to host the reader. (EG: cd'ing into the folder)
Run: 
```
npm init -y
```
Then:
```
yarn add rss-parser
```

Download the files from the github and paste them into the project folder.
It should look like this:
```
app
├── node_modules
├── index.js
├── package-lock.json
└── package.json
```
(You may need to delete the old package.json)

## Editing
To edit the feed that the parser will search, edit the const-feed url.

## Running
```
node index.js
```


