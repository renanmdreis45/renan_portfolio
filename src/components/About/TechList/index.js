import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
    const [techs] = useState([
        { name: "Flutter", progress: 100, className: "react-progress", years: 3 },
        { name: "ReactJS", progress: 100, className: "react-progress", years: 2 },
        { name: "Next", progress: 80, className: "flutter-progress", years: 2 },
        { name: "AWS", progress: 80, className: "flutter-progress", years: 2 },
        { name: "Firebase", progress: 80, className: "sql-progress", years: 2 },
        { name: "Swift", progress: 60, className: "sql-progress", years: 1 },
        { name: "Kotlin", progress: 60, className: "kotlin-progress", years: 1 },
        { name: "React Native", progress: 60, className: "swift-progress", years: 1 },
        { name: "NodeJS", progress: 100, className: "node-progress", years: 1 },
        { name: "Express", progress: 100, className: "node-progress", years: 1 },
        { name: "PostgreSQL", progress: 100, className: "postgre-progress", years: 1 },
        { name: "Oracle", progress: 60, className: "sql-progress", years: 1 },
    ]);

    return (
        <div>
            <h2>Frameworks & Technologies</h2>
            <ul>
                {techs.map((tech, index) => (
                    <li key={index}>
                        <span>{tech.name}: {`${tech.years} years`}</span>
                        <ProgressBar progress={tech.progress} className={tech.className} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechList;