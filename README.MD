# Frontend Mentor - FAQ accordion card solution

<p align="left">
	<a href="./docs/readme_pt-br.md">In portuguese</a>   
</p>

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked
### Screenshot

Desktop 1920px  
![](/screenshots/screencapture-desktop.gif)

Mobile 375px  
![](/screenshots/screencapture-mobile.gif)
## My process

### Built with

- Semantic HTML5 markup
- CSS variables
- CSS with adjacent selectors
- Responsive layout
- Interaction with pure JavaScript

### What I learned

I learned to use adjacent selectors in CSS to add actions to the question container and the answer container, using just an "active" class.  
And in javascript use only the "active" class to do all the accordion interactivity.  

CSS Class e adjacent selector
```css
.active{
	font-weight: 700;
}

.active::after{
	transform: rotate(180deg);
}

.container-question.active + .container-answer{
	max-height: 8rem;
	padding: 0 0 1rem 0;
	border-bottom: .063rem solid var(--divires-color-light-grayish-blue);
}
```
