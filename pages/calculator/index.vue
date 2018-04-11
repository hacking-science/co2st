<template>
    <div>
        <main-container>
            <div class="calculation" slot="content">
                <div class="calculation-container w-85">
                    <div class="calculator__header">
                        <h2>Carbon Allowance Calculator</h2>
                    </div>
                    <div class="calculator__explanation">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ante cursus, fringilla diam aliquam, bibendum ex. Maecenas laoreet condimentum mi sed mollis. </p>
                    </div>
                    <div class="calculator">
                        <div class="inputs box-shadow">
                            <div class="inputs-container">
                                <div class="input">      
                                    <input type="text" v-model="input" placeholder="Enter amount">
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Amount</label>
                                </div>
                            </div>
                            <div class="select">
                                <div class="select-container">
                                    <select class="select-text" v-model="units" height="50" required>
                                        <option v-for="(option, index) in options" v-bind:value="option" :key="index">
                                            {{ option }}
                                        </option>
                                    </select>
                                    <span class="select-highlight"></span>
                                    <span class="select-bar"></span>
                                    <label class="select-label">Units</label>
                                </div>
                            </div>
                        </div>
                        <div class="percentage box-shadow">
                            <div class="percentage-container">
                                <img src="img/logo.png" alt="co2t percentage">
                            </div>
                            <div class="percentage__text">
                                <p>{{ percentageText }}</p>
                            </div>
                        </div>
                        <div class="equivalent box-shadow">
                            <div class="equivalent-image">
                                <div class="equivalent-image-container">
                                    <object type="image/svg+xml" data="svg/airplane.svg" class="logo"></object>
                                </div>
                            </div>
                            <div class="equivalent__text">
                                <p>{{ equivalentText }}</p>
                            </div>
                        </div>
                    </div>
                    <photo-text-blocks :infoList="infoList"></photo-text-blocks>
                </div>
            </div>
        </main-container>
    </div>
</template>

<script>
import MainContainer from '@/components/shared/MainContainer'
import PhotoTextBlocks from '@/components/PhotoTextBlocks'

export default {
    components: {
        MainContainer,
        PhotoTextBlocks
    },
    data () {
        return {
            input: '',
            units: 'g',
            options: [
                'g',
                'tonnes'
            ],
            equivalentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque nunc neque.',
            percentageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque nunc neque.',
            infoList: [
                {
                    title: 'Allowance',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo massa, vel pretium nulla viverra in. Vestibulum ornare luctus sem in rutrum. Proin vel orci in erat elementum mollis. Ut gravida aliquam sodales. Cras ut justo tellus. Donec lobortis in neque quis vulputate. Vestibulum vitae massa ac lacus tempor elementum.',
                    image: 'img/home/coin-trick.jpg'
                },
                {
                    title: 'How the calculator works',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo massa, vel pretium nulla viverra in. Vestibulum ornare luctus sem in rutrum. Proin vel orci in erat elementum mollis. Ut gravida aliquam sodales. Cras ut justo tellus. Donec lobortis in neque quis vulputate. Vestibulum vitae massa ac lacus tempor elementum.',
                    image: 'img/home/slow-down.jpg'
                }
            ]
        }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/util.scss';

.calculation-container {
}
.calculator {
    display: grid;
    justify-content: space-between;
    height: 100%;
    grid-gap: 32px;
}
.calculator__explanation {
    line-height: 1.5;
    margin: 16px 0;
}

.equivalent {
    @include center-child-horiz-vert;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin-bottom: 32px;
    height: 160px;
}

.equivalent__text {
    @include center-child-vert;
}

.equivalent-image {
    position:  relative;
    margin-left:  auto;
    margin-right:  auto;
    width: 100px;
}

// .equivalent-image svg {
//     width: 100%;
// }

.percentage {
    @include center-child-horiz-vert;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    height: 160px;
}
.percentage-container {
    @include center-child-horiz-vert;
}
.percentage-container img {
    width: 100px;
}

.percentage__text {
    @include center-child-vert;
}

.inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @include center-child-vert;
        height: 120px;

}
.inputs-container {
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 8px;
}

.box-shadow {
    position: relative;
}

.box-shadow:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    // box-shadow: 0px 10px 33px -9px rgba(0,0,0,0.75);
    box-shadow: 0px 4px 20px -2px rgba(0,0,0,0.47);
    border-radius: 10px;
}
.input { 
  position:relative; 
  width: 150px;
//   margin-top: 8px;
}
input {
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:150px;
  border:none;
  border-bottom:1px solid #757575;
}
input:focus 		{ outline:none; }

/* LABEL ======================================= */
label 				 {
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color:#5264AE;
}

/* BOTTOM BARS ================================= */
.bar 	{ position:relative; display:block; width:300px; }
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#5264AE; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%; 
  width:150px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}

.select {
	position: relative;
    width: 85%;
    margin-top: 8px;
}
.select-container {

}

.select-text {
	position: relative;
	font-family: inherit;
	background-color: transparent;
	width: 100%;
	padding: 10px 10px 10px 0;
	font-size: 18px;
	border-radius: 0;
	border: none;
    border-bottom: 1px solid rgba(0,0,0, 0.12);
    line-height: 1.3;
}

/* Remove focus */
.select-text:focus {
	outline: none;
	border-bottom: 1px solid rgba(0,0,0, 0);
}

	/* Use custom arrow */
.select .select-text {
	appearance: none;
	-webkit-appearance:none
}

.select:after {
	position: absolute;
	top: 18px;
	right: 10px;
	/* Styling the down arrow */
	width: 0;
	height: 0;
	padding: 0;
	content: '';
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid rgba(0, 0, 0, 0.12);
	pointer-events: none;
}


/* LABEL ======================================= */
.select-label {
	color: rgba(0,0,0, 0.26);
	font-size: 18px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 0;
	top: 10px;
	transition: 0.2s ease all;
}

/* active state */
.select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
	color: #2F80ED;
	top: -20px;
	transition: 0.2s ease all;
	font-size: 14px;
}

/* BOTTOM BARS ================================= */
.select-bar {
	position: relative;
	display: block;
	width: 100%;
}

.select-bar:before, .select-bar:after {
	content: '';
	height: 2px;
	width: 0;
	bottom: 1px;
	position: absolute;
	background: #2F80ED;
	transition: 0.2s ease all;
}

.select-bar:before {
	left: 50%;
}

.select-bar:after {
	right: 50%;
}

/* active state */
.select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {
	width: 50%;
}

/* HIGHLIGHTER ================================== */
.select-highlight {
	position: absolute;
	height: 60%;
	width: 100px;
	top: 25%;
	left: 0;
	pointer-events: none;
	opacity: 0.5;
}
</style>

