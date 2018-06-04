# CO2ST

## Requirements 

**node JS**

Install from [here](https://nodejs.org/en/download/)

## Installing 

```
git clone https://github.com/hacking-science/co2st.git
cd co2st 
npm install
```

## Running development server

```
npm run dev
```

## Referencing images and video assets 

Assets such as images and videos will be found in the static folder. 
The static folder is served by webpack and will therefore appear in the root directory of the compiled website. 

### Examples 

```
// Images
<img src="img/example.jpg">

// Videos
<video autoplay>
  <source src="videos/movie.mp4" type="video/mp4">
</videos>

```
test: CHAM
