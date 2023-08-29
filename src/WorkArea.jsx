import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkItem from './WorkItem';

function WorkArea() {
	//use state to determine if something has been clicked
	//then what should actually be displayed.  Mirror the old js

	const handleClick = (id) => {
		console.log(id);
	}

	const handleMouseEnter = (id) => {
		console.log(id);
	}

	const works = [
		{
			title: "Computer Science Tutoring",
			content: `
				I tutored Computer Science students at Shoreline Community College for two years between 2020 and 2022
            	before I started my current role in Solutions Engineering at <a href="https://www.healthnote.com/">Health Note</a>.  
            	I helped students of all sorts get their feet wet in Python and Java, learning along the way how best to
            	explain and teach everything from syntax to Data Structures & Algorithms.
			`,
			imgsrc: "assets/react.svg",
			links: [
			{
				title: "App",
				url: "https://www.google.com",
				tail: " | "
			}
			],
			display: "none"
		},
		{
			title: "Computer Science Tutoring1",
			content: `
				I tutored Computer Science students at Shoreline Community College for two years between 2020 and 2022
            	before I started my current role in Solutions Engineering at <a href="https://www.healthnote.com/">Health Note</a>.  
            	I helped students of all sorts get their feet wet in Python and Java, learning along the way how best to
            	explain and teach everything from syntax to Data Structures & Algorithms.
			`,
			imgsrc: "assets/react.svg",
			links: [
			{
				title: "App",
				url: "https://www.google.com",
				tail: " | "
			}
			],
			display: "none"
		},
		{
			title: "Computer Science Tutoring2",
			content: `
				I tutored Computer Science students at Shoreline Community College for two years between 2020 and 2022
            	before I started my current role in Solutions Engineering at <a href="https://www.healthnote.com/">Health Note</a>.  
            	I helped students of all sorts get their feet wet in Python and Java, learning along the way how best to
            	explain and teach everything from syntax to Data Structures & Algorithms.
			`,
			imgsrc: "assets/react.svg",
			links: [
			{
				title: "App",
				url: "https://www.google.com",
				tail: " | "
			}
			],
			display: "none"
		},
		{
			title: "Computer Science Tutoring3",
			content: `
				I tutored Computer Science students at Shoreline Community College for two years between 2020 and 2022
            	before I started my current role in Solutions Engineering at <a href="https://www.healthnote.com/">Health Note</a>.  
            	I helped students of all sorts get their feet wet in Python and Java, learning along the way how best to
            	explain and teach everything from syntax to Data Structures & Algorithms.
			`,
			imgsrc: "assets/react.svg",
			links: [
			{
				title: "App",
				url: "https://www.google.com",
				tail: " | "
			}
			],
			display: "none"
		},
		{
			title: "Computer Science Tutoring4",
			content: `
				I tutored Computer Science students at Shoreline Community College for two years between 2020 and 2022
            	before I started my current role in Solutions Engineering at <a href="https://www.healthnote.com/">Health Note</a>.  
            	I helped students of all sorts get their feet wet in Python and Java, learning along the way how best to
            	explain and teach everything from syntax to Data Structures & Algorithms.
			`,
			imgsrc: "assets/react.svg",
			links: [
			{
				title: "App",
				url: "https://www.google.com",
				tail: " | "
			}
			],
			display: "none"
		},
	]

	return (
		<>
			<div class="works">
			{works.map((work, index) => {
				var id = "sw" + (index + 1);
				return ( 
					<div className="subwork" id={id} onClick={handleClick({index})} onMouseEnter={() => {handleMouseEnter({index})}}>
						<WorkItem key={index} item={works[index]} /> 
					</div>
					
					


					)
			})}
			</div>
		</>
	)
}

export default WorkArea