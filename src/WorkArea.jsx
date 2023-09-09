import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import chessLogo from './assets/chess.png'
import tutoringLogo from './assets/tutoring.png'
import itchLogo from './assets/itchio-textless-black-w.svg'
import cruiseLogo from './assets/cruise.png'
import karaokeLogo from './assets/karaoke.png'
import yuzuLogo from './assets/modded_yuzu_logo.png'
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
			const hoverSettings = displayWork.map((d, i) => {
				if(i === id.index) {
					return "60%";
				}
				return "40%";
			})
			updateHovering(hoverSettings);
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
				I currently contribute to itch.io, the premier indie game library and marketplace.  I currently work
				on the desktop app, which is an Electron and React-based application that also pulls content
				directly from the website for some portions of the app.  Working on a light theme at the moment.
			`,
			imgsrc: itchLogo,
			links: [
			{
				title: "Main Site",
				url: "https://itch.io/",
				tail: " | ",
				id: 0
			},
			{
				title: "App Repo",
				url: "https://github.com/itchio/itch",
				tail: " | ",
				id: 1
			},
			{
				title: "Personal Dev Fork",
				url: "https://github.com/jls47/itch",
				tail: "",
				id: 2
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
				title: "Student Tutoring Center",
				url: "https://www.shoreline.edu/apply-and-aid/learning-support-centers/default.aspx",
				tail: "",
				id: 0
			}
			]
		},
		{
			title: "Yuzu",
			content: `
				Yuzu. An open source Switch emulator built in C++ that supports Vulkan.  I did some work that
				fixed a bug with the QT WebEngine implementation that was causing navigation issues and in 
				general learned a great deal about how UIs are set up with this framework.
			`,
			imgsrc: yuzuLogo,
			links: [
			{
				title: "App Repo",
				url: "https://github.com/yuzu-emu/yuzu",
				tail: "",
				id: 0
			}
			]
		},
		{
			title: "Monkey Pub Songbook",
			content: `
				An early fullstack app: a karaoke song browser for the Monkey Pub.  Unfinished, but operational. 
				Built with Vue and Node, with the backend hosted on Heroku.  Scaling was resolved by sharding the 
				database by section of the alphabet, with up to 7 shards able to hold a couple thousand songs each 
				and maintain moderately decent search time.
			`,
			imgsrc: karaokeLogo,
			links: [
			{
				title: "Live App",
				url: "https://jls47.github.io/monkeyfront/#/",
				tail: " | ",
				id: 0
			},
			{
				title: "Frontend Code",
				url: "https://github.com/jls47/monkeyfront",
				tail: " | ",
				id: 1
			},
			{
				title: "Backend Code",
				url: "https://github.com/jls47/monkeyback",
				tail: "",
				id: 2
			}
			]
		},
		{
			title: "Holland America Scraping Utilities",
			content: `
				Holland America Line. Web scraping utilities and an API to save dozens of man-hours over a
                three month project.  With the help of Python, Celery, RabbitMQ, and Selenium, I scraped
                hundreds of pages at a time in search of content that was missing, compiled the results
                in a .csv, and emailed the results.  It was honestly a godsend, freeing me and others up to 
                do work that was infinitely less menial.
			`,
			imgsrc: cruiseLogo,
			links: [
			{
				title: "Main Scraper",
				url: "https://github.com/jls47/holam",
				tail: " | ",
				id: 0
			},
			{
				title: "Django API",
				url: "https://github.com/jls47/holamapi",
				tail: " | ",
				id: 1
			},
			{
				title: "Task Scheduler",
				url: "https://github.com/jls47/celery",
				tail: " | ",
				id: 2
			},
			{
				title: "Current Holland America Site",
				url: "https://www.hollandamerica.com/en_US.html",
				tail: "",
				id: 3
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