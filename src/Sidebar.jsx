import ReactDOM from "react-dom/client";
import { useState } from 'react'
import reactLogo from './assets/reactgray.svg'
import reactColor from './assets/reactlogo.svg'
import viteLogo from '/vite.svg'
import cppLogo from './assets/c++gray.svg'
import cppColor from './assets/c++.svg'
import goLogo from './assets/gogray.svg'
import goColor from './assets/go-gopher.svg'
import mongoLogo from './assets/mongodb.svg'
import mongoColor from './assets/ogmongo.svg'
import nodeLogo from './assets/nodejs-gray.svg'
import nodeColor from './assets/nodejs-icon.svg'

import './App.css'

function Sidebar() {

	const imgsColor = [
		reactColor,
		nodeColor,
		cppColor,
		goColor,
		mongoColor
	]

	const imgsGray = [
		reactLogo,
		nodeLogo,
		cppLogo,
		goLogo,
		mongoLogo
	]

	const [imgRefs, updateRefs] = useState(imgsGray);

	const techHover = (id) => {
		const techItems = imgRefs.map((r, i) => {
			if(i === id) {
				return imgsColor[i];
			}
			return imgsGray[i];
		})
		updateRefs(techItems);
	}

	const techLeave = (id) => {
		const techItems = imgRefs.map((r, i) => {
			return imgsGray[i];
		})
		updateRefs(techItems);
	}

	return (
		<>
			
    <div className="header">
        <div className="contactme">
            <div className="line">
                <p>Luke Schaefer</p> <span className="vertical"></span>
                <div className="techused">
                    <a className="tech" onMouseEnter={() => {techHover(0)}} onMouseLeave={() => {techLeave(0)}}
                        href="https://reactjs.org/"><img className="techimg" src={imgRefs[0]}/></a>
                    <a className="tech" onMouseEnter={() => {techHover(1)}} onMouseLeave={() => {techLeave(1)}}
                        href="https://nodejs.org/en/"><img className="techimg" src={imgRefs[1]}/></a>
                    <a className="tech" onMouseEnter={() => {techHover(2)}} onMouseLeave={() => {techLeave(2)}}
                        href="https://www.cplusplus.com/"><img className="techimg" src={imgRefs[2]}/></a>
                    <a className="tech" onMouseEnter={() => {techHover(3)}} onMouseLeave={() => {techLeave(3)}}
                        href="https://go.dev/"><img className="techimg" src={imgRefs[3]}/></a>
                    <a className="tech" onMouseEnter={() => {techHover(4)}} onMouseLeave={() => {techLeave(4)}}
                        href="https://www.mongodb.com/"><img className="techimg" src={imgRefs[4]}/></a>

                </div>
            </div>
            <div className="contacts">
            <hr/>
            <p className="contact"><a href="mailto:lukeschaefer@gmail.com">Email</a></p>
            <p className="contact"><a href="https://www.linkedin.com/in/schaef16/">LinkedIn</a></p>
            <p className="contact"><a href="https://github.com/jls47">GitHub</a></p>
            </div>
        </div>
    </div>
		</>
	)
}

export default Sidebar