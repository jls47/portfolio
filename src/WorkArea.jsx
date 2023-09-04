import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import chessLogo from './assets/chess.png'
import tutoringLogo from './assets/tutoring.png'
import itchLogo from './assets/itchio-textless-black-w.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkItem from './WorkItem';
import {isMobile} from 'react-device-detect';

function WorkArea() {
	//use state to determine if something has been clicked
	//then what should actually be displayed.  Mirror the old js

	const [workFocus, addFocus] = useState(false);
	const [displaying, updateDisplaying] = useState(0);
	const [displayWork, updateWorkDisplay] = useState(["none","none","none","none","none"]);
	const [hovering, updateHovering] = useState(["50%","50%","50%","50%","50%"]);

	const zIndices = (percent, id) => {
		if(percent == "60%") {
			return "999";
		} else {
			return "" + id;
		}
	}


	const handleClick = (id) => {
		if(!workFocus) {
			addFocus(true);
			console.log(id.index);
			updateDisplaying(id.index + 1);
			const displaySettings = displayWork.map((d, i) => {
				if(i === id.index) {
					return "contents";
				}
				return d;
			})
			updateWorkDisplay(displaySettings);
			console.log(displayWork);
		} else {
			console.log(displayWork);
			addFocus(false);
			const displaySettings = displayWork.map((d, i) => {
				if(i === id.index) {
					return "none";
				}
				return d;
			})
			updateWorkDisplay(displaySettings);
		}
	}

	const handleClickOut = () => {
		console.log(workFocus);
		if(workFocus) {
			addFocus(false);
		}
	}

	const handleMouseEnter = (id) => {
		if(!isMobile) {
			const hoverSettings = displayWork.map((d, i) => {
				if(i === id.index) {
					return "60%";
				}
				return "40%";
			})
			updateHovering(hoverSettings);
		}
	}

	const handleMouseLeave = (id) => {
		const hoverSettings = displayWork.map((d, i) => {
			return "50%";
		})
		updateHovering(hoverSettings);
	}

	const works = [
		{
			title: "itch.io",
			content: `
				I tutored Computer Science students at Shoreline Community College for two years between 2020 and 2022
            	before I started my recent role in Solutions Engineering at Health Note.  
            	I helped students of all sorts get their feet wet in Python and Java, learning along the way how best to
            	explain and teach everything from syntax to Data Structures & Algorithms.
			`,
			imgsrc: itchLogo,
			links: [
			{
				title: "App",
				url: "https://www.google.com",
				tail: " | ",
				id: 0
			}
			]
		},
		{
			title: "Computer Science Tutoring",
			content: `
				I tutored Computer Science students at Shoreline Community College for two years between 2020 and 2022
            	before I started my recent role in Solutions Engineering at Health Note.  
            	I helped students of all sorts get their feet wet in Python and Java, learning along the way how best to
            	explain and teach everything from syntax to Data Structures & Algorithms.
			`,
			imgsrc: tutoringLogo,
			links: [
			{
				title: "App",
				url: "https://www.google.com",
				tail: " | ",
				id: 0
			}
			]
		},
		{
			title: "Chess",
			content: `
				I tutored Computer Science students at Shoreline Community College for two years between 2020 and 2022
            	before I started my current role in Solutions Engineering at <a href="https://www.healthnote.com/">Health Note</a>.  
            	I helped students of all sorts get their feet wet in Python and Java, learning along the way how best to
            	explain and teach everything from syntax to Data Structures & Algorithms.
			`,
			imgsrc: chessLogo,
			links: [
			{
				title: "App",
				url: "https://www.google.com",
				tail: " | ",
				id: 0
			}
			]
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
				tail: " | ",
				id: 0
			}
			]
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
				tail: "",
				id: 0
			}
			]
		},
	]

	return (
		<>
			<div className="works" onClick={(id) => {handleClickOut}}>
			{works.map((work, index) => {
				var id = "sw" + (index + 1);
				if((workFocus && displaying != (index + 1))) {

					return ( 
						<div key={index} className="subwork" data-noshow="1" id={id} onClick={() => {handleClick({index})}} onMouseEnter={() => {handleMouseEnter({index})}} onMouseLeave={() => {handleMouseLeave({index})}}>
							<WorkItem item={works[index]} display={displayWork[index]} /> 
						</div>
					)

				} else if((workFocus && displaying == (index + 1))) {

					return(
					<div key={index} className="subwork" id="sw1" onClick={() => {handleClick({index})}} onMouseEnter={() => {handleMouseEnter({index})}} style={{width: "70vw",height:"70vh",position:"relative"}} onMouseLeave={() => {handleMouseLeave({index})}}>
						<WorkItem item={works[index]} display={displayWork[index]} /> 
					</div>
					)

				}

				return (
					<div key={index} className="subwork" id={id} onClick={() => {handleClick({index})}} onMouseEnter={() => {handleMouseEnter({index})}} onMouseLeave={() => {handleMouseLeave({index})}} style={{width: hovering[index],height:hovering[index],zIndex:zIndices(hovering[index],5 - index)}}>
						<WorkItem item={works[index]} display={displayWork[index]} /> 
					</div>
				)
				

			})}
			</div>
		</>
	)
}

export default WorkArea