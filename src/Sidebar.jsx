import ReactDOM from "react-dom/client";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Sidebar() {

	const techHover = (id) => {
		console.log(id);
		console.log("hover");
	}

	const techLeave = (id) => {
		console.log(id);
	}

	return (
		<>
			
    <div className="header">
        <div className="navigation">

        </div>
        <div className="contactme">
            <div className="line">
                <p>Luke Schaefer</p> <span className="vertical"></span>
                <div className="techused">
                    <a className="tech" onMouseEnter={techHover(0)} onMouseLeave={techLeave()}
                        href="https://www.cplusplus.com/"><img className="techimg" src="assets/react.svg"/></a>
                    <a className="tech" onMouseEnter={techHover(1)} onMouseLeave={techLeave()}
                        href="https://nodejs.org/en/"><img className="techimg" src="assets/react.svg"/></a>
                    <a className="tech" onMouseEnter={techHover(2)} onMouseLeave={techLeave()}
                        href="https://www.python.org/"><img className="techimg" src="assets/react.svg"/></a>
                    <a className="tech" onMouseEnter={techHover(3)} onMouseLeave={techLeave()}
                        href="https://reactjs.org/"><img className="techimg" src="assets/react.svg"/></a>
                    <a className="tech" onMouseEnter={techHover(4)} onMouseLeave={techLeave()}
                        href="https://www.postgresql.org/"><img className="techimg" src="assets/react.svg"/></a>

                </div>
            </div>
            <hr/>
            <p className="contact"><a href="mailto:lukeschaefer@gmail.com">Email</a></p>
            <p className="contact"><a href="https://www.linkedin.com/in/schaef16/">LinkedIn</a></p>
            <p className="contact"><a href="https://github.com/jls47">GitHub</a></p>
        </div>
    </div>
		</>
	)
}

export default Sidebar