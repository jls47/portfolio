import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Just accept items as props

function WorkItem(props) {

	var links = "";
	console.log(props);

	props.item.links.forEach((link) => {
		links += <a href={ link.url } target="_blank">{link.title}</a>;
	});

	var disp = props.item.display;

	return (
		<>
			<div className="workContent">
				<img src={ props.item.imgsrc }/>
				<div className="workInfo" style={{display: disp}}>
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