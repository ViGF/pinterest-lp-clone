import Column from "../../Column"; 

import './style.css'

export function Images() {
    return (
        <div className="grid-container">
            <div className="grid">
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
            </div>
            <div className="grid">
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
            </div>
            <div className="grid">
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
                <Column />
            </div>
        </div>
    )
}