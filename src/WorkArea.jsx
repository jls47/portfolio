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
			]
		},
	]

	return (
		<>
			<h1>Work Area</h1>
			{works.map((work, index) => {
				return ( 
					<div className="subwork" id="sw1" onClick={() => {handleClick(1)}} onMouseEnter={() => {handleMouseEnter(1)}}>
						<WorkItem key={index} item={works[index]} /> 
					</div>
					
					


					)
			})}
		</>
	)
}

export default WorkArea