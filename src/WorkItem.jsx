import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Just accept items as props

function WorkItem(props) {

	var links = [];

	const [displaying, updateDisplay] = useState(props.display);

	const styles = {
		"contents": "10%",
		"none": "40%"
	};

	const imgWidth = {
		"contents": "15%",
		"none": "30%"
	}

	props.item.links.forEach((link) => {
		links.push(<a href={ link.url } target="_blank" key={link.id}>{link.title} {link.tail}</a>);
	});

	useEffect(() => {
		updateDisplay(props.display);
	}, [props]);

		return(
		<>
			<div className="workContent" style={{marginTop: styles[displaying]}}>
				<img src={ props.item.imgsrc } style={{width: imgWidth[displaying]}}/>
				<div className="workInfo" style={{display:displaying, top:"-200px"}}>
					<p><b>{ props.item.title }</b><br/>
					{ props.item.content }
					</p>
					<b>
					{ links }
					</b>
				</div>
			</div>
		</>
		)

}

export default WorkItem