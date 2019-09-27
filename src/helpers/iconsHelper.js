import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutubeSquare, faQuora, faFreeCodeCamp, faFirefox, faGithubSquare, faMedium, faDev, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const getIcon = (site) => {
    switch (site) {
        case "youtube":
            return (<FontAwesomeIcon icon={faYoutubeSquare} size="lg" />)
        case "quora":
            return (<FontAwesomeIcon icon={faQuora} size="lg" />)
        case "stack-overflow":
            return (<FontAwesomeIcon icon={faStackOverflow} size="lg" />)
        case "free-code-camp":
            return (<FontAwesomeIcon icon={faFreeCodeCamp} size="lg" />)
        case "firefox":
            return (<FontAwesomeIcon icon={faFirefox} size="lg" />)
        case "github":
            return (<FontAwesomeIcon icon={faGithubSquare} size="lg" />)
        case "medium":
            return (<FontAwesomeIcon icon={faMedium} size="lg" />)
        case "dev":
            return (<FontAwesomeIcon icon={faDev} size="lg" />)
        default:
            return (<FontAwesomeIcon icon={faGlobe} size="lg" />)
    }
}

export default getIcon;