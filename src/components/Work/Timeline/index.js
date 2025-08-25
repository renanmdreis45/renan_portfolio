import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
    const [events, setEvents] = useState([
        {
            date: 'Jun 2022 - Sep 2022',
            title: "GREat",
            description: [
                "Achievements: This application facilitated academic activities of more than 70% of the students interviewed, who reported not knowing how to locate the bus on campus, which prejudice their academic activities due to the delay in transportation.",
                "Context: I worked on a college extension project to develop a mobile iOS/Android application that monitors the campus' internal bus through a tracker, offers bus routes, its location in real time, waiting time at bus stops, as well as a university map with the location of blocks",
                "Technologies: Dart, Flutter,Firebase",
                "Activities: Development of screens for routes and bus lines / Integration of the application with Google Maps, use of its API and location of the main points within the internal campus"
            ],
            "expanded": true
        },
        {
            date: "Oct 2022 - Sep 2024",
            title: "Rav Tecnologia",
            description: [
                "Achievements: Increased local storage persistence by 2x, replacing local caching with SQLite database and refactoring the app's offline mode with Flutter. Furthermore, I developed synchronization between data from offline mode with the application's online mode / Increased application test coverage by approximately 50%, implementing unit tests and Widget tests with Flutter Test and Mocktail and adopting Clean Code and Design Patterns / Improved application security by implementing AWS WAF Captcha through a Flutter Widget with webview / Decreased the loading time of screens with large amounts of data by 90% by adjusting requests with Node and Express on the backend and optimizing with React on the frontend. / Decreased the number of renderings of some components using memoization hooks like useCallback and useMemo and reducing the use of hooks like useEffect and useState, which improved performance and user experience on the frontend",
                "Context: Mobile development of features with Dart and Flutter for an iOS/Android application to monitor agricultural fields with IoT / I developed features of a web system that manages activities and plans projects for an industry.",
                "Technologies: Dart, Flutter, Next, ReactJS, NodeJS, Express, AWS, TypeORM, PostgreSQL",
                "Activities: Database implementation with SQLite to store data in the application's offline mode. / creen implementation with internet connection tests, power and location of transmission towers that use measurements with IoT / Documentation and implementation of unit tests and widget tests with Flutter Test and Mocktail / Generation of some application notifications / Presentation of completed activities related to the application in end-of-sprint meetings / Password validations / Development of screens with lists, graphs, schedules, forms, modals and user interfaces with TypeScript, JavaScript, React and Next in Frontend / Creating reusable components and styling interfaces with CSS modules and Styled Components / Bug fixes in features, tests and improvements in application performance / Building REST APIs and request handling with Node.js and Express / Database management, manipulation of entities and development of functions and logics in the Backend with Express, TypeORM and Oracle Database"
            ],
            "expanded": true
        },
        {
            date: "Sep 2024 - Current",
            title: "Megaleios Desenvolvimento Mobile",
            description: [
                "Achievements: Application development from scratch / Improved performance of dynamic listings and user experience, with the use of infinite scroll and pagination / ddition of Pix as a payment method, integrating Iugu and using webhooks to ensure fast, secure, and real-time transactions, as well as to provide more payment options for the app",
                "Context: Application development from scratch and maintenance of existing applications",
                "Technologies: Flutter, Dart, Firebase, Swift, Kotlin",
                "Activities: Implementation of login screens and functionalities, registration, forgot password, data registration and editing with photos, logout, dynamic and paginated listings with registration, data editing and deletion, filters, bottom sheets, modals, graphs and dashboards with animations, maps with geolocation and filters, payment method and card registration screens, interfaces with data change history, among other implementations / Functionality and screen integrations with Backend REST APIs / Feature integration with Google Maps / Code refactoring and technical improvements to the architecture / Integration with camera and photo gallery / Implementation of responsive interfaces for mobile and tablet on Android and IOS / Integration of payment and subscription screens with PIX and Credit Card / Integration with webhooks / Version publications and distribution in the Firebase console and Test Flight"
            ],
            "expanded": true
        }


    ]);

    const handleItemClick = (index) => {
        setEvents((prevEvents) => {
            const updatedEvents = prevEvents.map((event, idx) => {
                if (idx === index) {
                    return { ...event, expanded: !event.expanded };
                }
                return event;
            });
            return updatedEvents;
        });
    };

    return (
        <div className="timeline-container">
            {events.map((event, index) => (
                <div
                    className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
                    key={index}
                    onClick={() => handleItemClick(index)}
                >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h2>{event.title}</h2>
                        {event.expanded ? (
                            <div>
                                {event.description.map((desc, descIndex) => (
                                    <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                                ))}
                            </div>
                        ) : (
                            <>
                                <div className="more">
                                    <p>Click for more</p>
                                </div>
                                <div className="date">{event.date}</div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;