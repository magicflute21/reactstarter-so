TAILWIND
Generally just include the main style file into App.js, the hot reload will update your tailwind style changes.
The build might be useful for creating a tailwind file into the dist folder.

npm run tailwind-build
For building a tailwind optimized build file. Will only include styles that you are using.


OR SCSS
npm run scss
It will create a file into dist/style/mainScss.css, and other scss files get compiled to css too, if you want to use them separately.
Main file is mainScss, all the styles are imported into here.

