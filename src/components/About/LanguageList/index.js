import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
    const [languages] = useState([
        { name: "Dart", progress: 100, className: "flutter-progress", years: 3 },
        { name: "Typescript", progress: 80, className: "flutter-progress", years: 2 },
        { name: "HTML/CSS/JS", progress: 80, className: "web-progress", years: 2 },
    ]);

    return (
        <div>
            <h2>Languages</h2>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}>
                        <span>{language.name}: {`${language.years} years`}</span>
                        <ProgressBar progress={language.progress} className={language.className} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageList;