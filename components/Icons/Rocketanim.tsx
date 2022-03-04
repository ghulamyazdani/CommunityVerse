import React, { useRef, useEffect, useState } from 'react'
export default function Rocketanim() {
    const [Show, setShow] = useState(false)
    //https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

    //Get the button:

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    }
    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    }
    return (
        <svg
            className={Show ? `grow cursor-pointer z-10` : ` hidden`}
            id="myBtn"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 500"
            onClick={topFunction}
        >
            <defs>
                <linearGradient
                    id="Degradado_sin_nombre_129"
                    x1="69.85"
                    y1="426.9"
                    x2="173.08"
                    y2="329.66"
                    gradientTransform="translate(-103.55 251.88) rotate(-45.31)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#ff8533" />
                    <stop offset="1" stopColor="#ffd052" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_144"
                    x1="117.03"
                    y1="382.84"
                    x2="180.66"
                    y2="320.24"
                    gradientTransform="translate(-103.55 251.88) rotate(-45.31)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#ffd052" />
                    <stop offset="1" stopColor="#ffe9ae" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_106"
                    x1="235.86"
                    y1="351.32"
                    x2="176.29"
                    y2="253.95"
                    gradientTransform="translate(-103.55 251.88) rotate(-45.31)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#767b7f" />
                    <stop offset="1" stopColor="#a3a3a3" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_92"
                    x1="147"
                    y1="246.46"
                    x2="242.46"
                    y2="355.56"
                    gradientTransform="translate(-103.55 251.88) rotate(-45.31)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#f02e54" />
                    <stop offset="1" stopColor="#8f1931" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_92-2"
                    x1="248.04"
                    y1="381.87"
                    x2="217.36"
                    y2="227.27"
                    xlinkHref="#Degradado_sin_nombre_92"
                />
                <linearGradient
                    id="Degradado_sin_nombre_36"
                    x1="276.04"
                    y1="151.46"
                    x2="346.66"
                    y2="318.25"
                    gradientTransform="translate(-103.55 251.88) rotate(-45.31)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#eef4fa" />
                    <stop offset="1" stopColor="#cddeed" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_36-2"
                    x1="285.68"
                    y1="169.95"
                    x2="345.59"
                    y2="311.45"
                    xlinkHref="#Degradado_sin_nombre_36"
                />
                <linearGradient
                    id="Degradado_sin_nombre_13"
                    x1="173.01"
                    y1="238.2"
                    x2="236.75"
                    y2="316.85"
                    gradientTransform="translate(-103.55 251.88) rotate(-45.31)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#c7c7c7" />
                    <stop offset="1" stopColor="#a3a3a3" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_126"
                    x1="219.38"
                    y1="276.73"
                    x2="232.42"
                    y2="316.95"
                    gradientTransform="translate(-103.55 251.88) rotate(-45.31)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#1d262d" />
                    <stop offset="1" stopColor="#1d262d" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_92-3"
                    x1="360.39"
                    y1="107.81"
                    x2="492.19"
                    y2="213.52"
                    xlinkHref="#Degradado_sin_nombre_92"
                />
                <clipPath id="clip-path">
                    <path
                        className="cls-1"
                        d="M284.73,66.75C259.71,33,247,31.92,247,31.92s-12.67,1.33-37.11,35.63c-25.82,36.22-26.23,75-26.24,101.7,0,34.54,11.23,102.62,31.58,149.68l34.18-.54,34.19-.19c19.55-47.48,29.64-115.79,29.05-150.32C312.21,141.19,311.15,102.41,284.73,66.75Z"
                    />
                </clipPath>
                <linearGradient
                    id="Degradado_sin_nombre_159"
                    x1="528.68"
                    y1="336.91"
                    x2="284.68"
                    y2="83.91"
                    gradientTransform="translate(-105.73 246.35) rotate(-44.41)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#8f1931" />
                    <stop offset="1" stopColor="#f02e54" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_159-2"
                    x1="521.26"
                    y1="344.07"
                    x2="277.27"
                    y2="91.07"
                    gradientTransform="translate(-105.57 246.33) rotate(-44.41)"
                    xlinkHref="#Degradado_sin_nombre_159"
                />
                <linearGradient
                    id="Degradado_sin_nombre_92-4"
                    x1="171.3"
                    y1="278.15"
                    x2="246.03"
                    y2="385.04"
                    xlinkHref="#Degradado_sin_nombre_92"
                />
                <linearGradient
                    id="Degradado_sin_nombre_153"
                    x1="300.98"
                    y1="223.31"
                    x2="327.97"
                    y2="279.8"
                    gradientTransform="translate(-68.96 23.86) rotate(-7.72)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#1d262d" />
                    <stop
                        offset="0.68"
                        stopColor="#1d262d"
                        stopOpacity="0.32"
                    />
                    <stop offset="1" stopColor="#1d262d" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_13-2"
                    x1="273.29"
                    y1="159.33"
                    x2="326.29"
                    y2="283.31"
                    gradientTransform="translate(-45.65 -15.66) rotate(-0.31)"
                    xlinkHref="#Degradado_sin_nombre_13"
                />
                <linearGradient
                    id="Degradado_sin_nombre_6"
                    x1="266.98"
                    y1="166.52"
                    x2="329.62"
                    y2="262.24"
                    gradientTransform="translate(-43.31 -18.32) rotate(0.28)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#ade5ff" />
                    <stop offset="1" stopColor="#76c9f0" />
                </linearGradient>
                <clipPath id="clip-path-2">
                    <circle
                        className="cls-1"
                        cx="248.07"
                        cy="188.46"
                        r="31.73"
                        transform="translate(-60.16 233.77) rotate(-45.59)"
                    />
                </clipPath>
                <linearGradient
                    id="Degradado_sin_nombre_158"
                    x1="322.99"
                    y1="178.97"
                    x2="256.03"
                    y2="223.31"
                    gradientTransform="translate(59.99 -112.89) rotate(23.83)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#f9fbfc" />
                    <stop offset="1" stopColor="#f9fbfc" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="Degradado_sin_nombre_158-2"
                    x1="331.57"
                    y1="191.93"
                    x2="264.61"
                    y2="236.27"
                    gradientTransform="translate(75.3 -122.45) rotate(23.83)"
                    xlinkHref="#Degradado_sin_nombre_158"
                />
                <clipPath id="clip-path-3">
                    <path
                        className="cls-1"
                        d="M284.73,66.75C259.71,33,247,31.92,247,31.92s-12.67,1.33-37.11,35.63c-25.82,36.22-26.23,75-26.24,101.7,0,27.56,7.15,76.47,20.37,119a306.5,306.5,0,0,0,11.21,30.66l34.18-.54,34.19-.19c19.55-47.48,29.64-115.79,29.05-150.32C312.21,141.19,311.15,102.41,284.73,66.75Z"
                    />
                </clipPath>
                <linearGradient
                    id="Degradado_sin_nombre_126-2"
                    x1="452.41"
                    y1="295.32"
                    x2="308"
                    y2="205.14"
                    xlinkHref="#Degradado_sin_nombre_126"
                />
                <linearGradient
                    id="Degradado_sin_nombre_126-3"
                    x1="245.78"
                    y1="289.81"
                    x2="260.73"
                    y2="323.3"
                    xlinkHref="#Degradado_sin_nombre_126"
                />
                <linearGradient
                    id="Degradado_sin_nombre_129-2"
                    x1="-133.53"
                    y1="611.26"
                    x2="491.22"
                    y2="22.79"
                    gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                    xlinkHref="#Degradado_sin_nombre_129"
                />
            </defs>
            <g className="cls-2">
                <g className="blink-1" id="fire">
                    <path
                        className="cls-3"
                        d="M250.42,357s-59,27.19-26.07,78.06l7.21-10.94s1.72,22.88,21.31,49.77c18.44-27.68,19.21-50.61,19.21-50.61l7.66,10.62C310.5,381.71,250.42,357,250.42,357Z"
                    />
                    <path
                        className="cls-4"
                        d="M250.42,357s-36.79,17-16.26,48.69l4.5-6.82s1.07,14.27,13.29,31c11.5-17.26,12-31.57,12-31.57l4.78,6.63C287.89,372.41,250.42,357,250.42,357Z"
                    />
                </g>
                <g className="vibrate-1" id="rocket">
                    <polygon
                        className="cls-5"
                        points="278.51 324.33 220.14 324.96 220 308.74 278.37 308.11 278.51 324.33"
                    />
                    <path
                        className="cls-6"
                        d="M195.37,256.15s-29.13,25.39-29,47.82c.2,24.2,5.18,49,18.49,78.23,7.1,15.59,6.65-7.48,7.22-21.92,1-25.28,7.72-31.58,23.12-41.35C215.25,318.93,208,298.32,195.37,256.15Z"
                    />
                    <path
                        className="cls-7"
                        d="M195.37,256.15s-29.13,25.39-29,47.82c.2,24.2,5.18,49,18.49,78.23,1.33,2.92,2.4,4.49,3.26,5,0,0-15.49-38.41-16.07-64.27s2.89-39.27,23.27-66.79"
                    />
                    <path
                        className="cls-8"
                        d="M302.44,255S332,279.78,332.18,302.2c.21,24.2-4.36,49.12-17.17,78.61-6.84,15.75-6.77-7.33-7.58-21.76-1.43-25.25-8.25-31.41-23.81-40.85C283.62,318.2,290.47,297.44,302.44,255Z"
                    />
                    <path
                        className="cls-9"
                        d="M284.73,66.75C259.71,33,247,31.92,247,31.92s-12.67,1.33-37.11,35.63c-25.82,36.22-26.23,75-26.24,101.7,0,34.54,11.23,102.62,31.58,149.68l34.18-.54,34.19-.19c19.55-47.48,29.64-115.79,29.05-150.32C312.21,141.19,311.15,102.41,284.73,66.75Z"
                    />
                    <path
                        className="cls-10"
                        d="M223.92,318.79l25.51-.4,34.19-.19c19.55-47.48,29.64-115.79,29.05-150.32-.46-26.69-1.52-65.47-27.94-101.13C259.71,33,247,31.92,247,31.92"
                    />
                    <line
                        className="cls-11"
                        x1="220.08"
                        y1="318.85"
                        x2="278.59"
                        y2="318.23"
                    />
                    <path
                        className="cls-12"
                        d="M215.25,318.93l34.18-.54,34.19-.19a311.1,311.1,0,0,0,10.68-30.9l-90.25,1A306.71,306.71,0,0,0,215.25,318.93Z"
                    />
                    <polygon
                        className="cls-13"
                        points="250.81 262.46 283.62 318.2 278.1 319.37 278.51 324.33 255.84 324.57 250.81 262.46"
                    />
                    <line
                        className="cls-14"
                        x1="192.6"
                        y1="101.18"
                        x2="302.59"
                        y2="100.01"
                    />
                    <path
                        className="cls-15"
                        d="M247,31.92s-12.67,1.33-37.11,35.63a131.62,131.62,0,0,0-17.31,33.63l110-1.17a130.75,130.75,0,0,0-17.86-33.26C259.71,33,247,31.92,247,31.92Z"
                    />
                    <g className="cls-16">
                        <rect
                            className="cls-17"
                            x="182.88"
                            y="106.88"
                            width="131.77"
                            height="5.68"
                            transform="matrix(1, -0.02, 0.02, 1, -1.69, 3.91)"
                        />
                        <rect
                            className="cls-18"
                            x="184.15"
                            y="118.14"
                            width="131.77"
                            height="3.78"
                            transform="translate(-1.85 3.93) rotate(-0.9)"
                        />
                    </g>
                    <line
                        className="cls-11"
                        x1="204.04"
                        y1="288.27"
                        x2="294.3"
                        y2="287.3"
                    />
                    <path
                        className="cls-19"
                        d="M249,261.09s-6.46-1.35-6,47.76,3.37,93.56,7.24,93.52,6.07-44.55,5.66-93.66S249,261.09,249,261.09Z"
                    />
                    <path
                        className="cls-7"
                        d="M249,261.09s-6.46-1.35-6,47.76,3.37,93.56,7.24,93.52c0,0-3.08-16.66-4.48-54.59S243.72,267.4,249,261.09Z"
                    />
                    <circle
                        className="cls-20"
                        cx="248.77"
                        cy="188.69"
                        r="43.08"
                        transform="translate(-63.46 190.91) rotate(-37.59)"
                    />
                    <circle
                        className="cls-21"
                        cx="247.62"
                        cy="188.01"
                        r="42.84"
                        transform="translate(-60.42 230.16) rotate(-45)"
                    />
                    <circle
                        className="cls-22"
                        cx="248.36"
                        cy="188.01"
                        r="42.32"
                        transform="translate(-60.2 230.68) rotate(-45)"
                    />
                    <circle
                        className="cls-23"
                        cx="247.45"
                        cy="188.18"
                        r="33.07"
                        transform="translate(-60.59 230.09) rotate(-45)"
                    />
                    <circle
                        className="cls-24"
                        cx="248.07"
                        cy="188.46"
                        r="31.73"
                        transform="translate(-60.16 233.77) rotate(-45.59)"
                    />
                    <g className="cls-25">
                        <rect
                            className="cls-26"
                            x="204.5"
                            y="181.93"
                            width="76.88"
                            height="12.48"
                            transform="translate(-19.43 348.15) rotate(-69.13)"
                        />
                        <rect
                            className="cls-27"
                            x="219.09"
                            y="191.36"
                            width="76.88"
                            height="6.28"
                            transform="translate(-15.95 365.86) rotate(-69.13)"
                        />
                    </g>
                    <path
                        className="cls-28"
                        d="M211.67,190.46a1.8,1.8,0,1,0-.51,2.5A1.8,1.8,0,0,0,211.67,190.46Z"
                    />
                    <path
                        className="cls-28"
                        d="M214.29,201.88a1.81,1.81,0,1,0-.51,2.5A1.81,1.81,0,0,0,214.29,201.88Z"
                    />
                    <path
                        className="cls-28"
                        d="M211.82,180.59a1.8,1.8,0,1,0-.51,2.5A1.81,1.81,0,0,0,211.82,180.59Z"
                    />
                    <path
                        className="cls-28"
                        d="M228.39,218.11a1.81,1.81,0,1,0,1.65,2A1.8,1.8,0,0,0,228.39,218.11Z"
                    />
                    <path
                        className="cls-28"
                        d="M239,223.14a1.81,1.81,0,1,0,1.65,2A1.81,1.81,0,0,0,239,223.14Z"
                    />
                    <path
                        className="cls-28"
                        d="M219.64,210.49a1.81,1.81,0,1,0,1.65,1.95A1.8,1.8,0,0,0,219.64,210.49Z"
                    />
                    <path
                        className="cls-28"
                        d="M260,222.71a1.81,1.81,0,1,0,2.56-.09A1.82,1.82,0,0,0,260,222.71Z"
                    />
                    <path
                        className="cls-28"
                        d="M270.5,217.46a1.81,1.81,0,1,0,2.55-.09A1.81,1.81,0,0,0,270.5,217.46Z"
                    />
                    <path
                        className="cls-28"
                        d="M248.63,224.92a1.81,1.81,0,1,0,2.56-.09A1.82,1.82,0,0,0,248.63,224.92Z"
                    />
                    <path
                        className="cls-28"
                        d="M283.11,200.28a1.81,1.81,0,1,0,1.5-2.06A1.81,1.81,0,0,0,283.11,200.28Z"
                    />
                    <path
                        className="cls-28"
                        d="M285.15,189.26a1.81,1.81,0,1,0,1.51-2.06A1.81,1.81,0,0,0,285.15,189.26Z"
                    />
                    <path
                        className="cls-28"
                        d="M277.59,210.22a1.82,1.82,0,0,0,2.07,1.51,1.81,1.81,0,0,0-.56-3.57A1.81,1.81,0,0,0,277.59,210.22Z"
                    />
                    <path
                        className="cls-28"
                        d="M279.07,169.71a1.79,1.79,0,0,0,2.47-.62,1.81,1.81,0,1,0-2.47.62Z"
                    />
                    <path
                        className="cls-28"
                        d="M272.29,161.3a1.81,1.81,0,1,0-.62-2.48A1.81,1.81,0,0,0,272.29,161.3Z"
                    />
                    <path
                        className="cls-28"
                        d="M284.11,179.88a1.81,1.81,0,1,0-.63-2.48A1.81,1.81,0,0,0,284.11,179.88Z"
                    />
                    <path
                        className="cls-28"
                        d="M253.85,151.81a1.81,1.81,0,1,0-2.34-1A1.81,1.81,0,0,0,253.85,151.81Z"
                    />
                    <path
                        className="cls-28"
                        d="M242.28,151.9a1.81,1.81,0,1,0-2.34-1A1.81,1.81,0,0,0,242.28,151.9Z"
                    />
                    <path
                        className="cls-28"
                        d="M264.38,155.48a1.81,1.81,0,1,0-2.34-1A1.81,1.81,0,0,0,264.38,155.48Z"
                    />
                    <circle
                        className="cls-28"
                        cx="220.89"
                        cy="161.71"
                        r="1.81"
                        transform="translate(-51.28 132.33) rotate(-30.05)"
                    />
                    <path
                        className="cls-28"
                        d="M216.13,171.58a1.81,1.81,0,1,0-2.26,1.2A1.81,1.81,0,0,0,216.13,171.58Z"
                    />
                    <circle
                        className="cls-28"
                        cx="230.29"
                        cy="154.55"
                        r="1.81"
                        transform="translate(-40.8 95.99) rotate(-21.68)"
                    />
                    <path
                        className="cls-21"
                        d="M211.14,190.46a1.81,1.81,0,1,0-.52,2.5A1.82,1.82,0,0,0,211.14,190.46Z"
                    />
                    <path
                        className="cls-21"
                        d="M213.75,201.88a1.8,1.8,0,1,0-.51,2.51A1.81,1.81,0,0,0,213.75,201.88Z"
                    />
                    <path
                        className="cls-21"
                        d="M211.29,180.59a1.81,1.81,0,1,0-.52,2.51A1.82,1.82,0,0,0,211.29,180.59Z"
                    />
                    <path
                        className="cls-21"
                        d="M227.85,218.11a1.81,1.81,0,1,0,1.65,2A1.8,1.8,0,0,0,227.85,218.11Z"
                    />
                    <path
                        className="cls-21"
                        d="M238.44,223.15a1.81,1.81,0,1,0,1.64,1.95A1.81,1.81,0,0,0,238.44,223.15Z"
                    />
                    <path
                        className="cls-21"
                        d="M219.1,210.49a1.81,1.81,0,1,0,1.65,1.95A1.8,1.8,0,0,0,219.1,210.49Z"
                    />
                    <path
                        className="cls-21"
                        d="M259.49,222.71a1.8,1.8,0,1,0,2.55-.09A1.81,1.81,0,0,0,259.49,222.71Z"
                    />
                    <path
                        className="cls-21"
                        d="M270,217.47a1.8,1.8,0,1,0,2.56-.1A1.8,1.8,0,0,0,270,217.47Z"
                    />
                    <path
                        className="cls-21"
                        d="M248.09,224.93a1.8,1.8,0,1,0,2.56-.1A1.81,1.81,0,0,0,248.09,224.93Z"
                    />
                    <path
                        className="cls-21"
                        d="M282.57,200.28a1.81,1.81,0,1,0,1.51-2.06A1.8,1.8,0,0,0,282.57,200.28Z"
                    />
                    <path
                        className="cls-21"
                        d="M284.62,189.27a1.81,1.81,0,1,0,1.5-2.07A1.81,1.81,0,0,0,284.62,189.27Z"
                    />
                    <path
                        className="cls-21"
                        d="M277.06,210.23a1.81,1.81,0,0,0,3.57-.56,1.81,1.81,0,1,0-3.57.56Z"
                    />
                    <path
                        className="cls-21"
                        d="M278.53,169.72a1.81,1.81,0,1,0-.63-2.48A1.81,1.81,0,0,0,278.53,169.72Z"
                    />
                    <path
                        className="cls-21"
                        d="M271.75,161.3a1.81,1.81,0,1,0-.62-2.47A1.8,1.8,0,0,0,271.75,161.3Z"
                    />
                    <path
                        className="cls-21"
                        d="M283.57,179.88a1.81,1.81,0,1,0-.62-2.48A1.81,1.81,0,0,0,283.57,179.88Z"
                    />
                    <path
                        className="cls-21"
                        d="M253.31,151.81a1.81,1.81,0,1,0-2.34-1A1.81,1.81,0,0,0,253.31,151.81Z"
                    />
                    <circle
                        className="cls-21"
                        cx="241.09"
                        cy="150.22"
                        r="1.81"
                        transform="translate(-35.82 86.89) rotate(-19.04)"
                    />
                    <path
                        className="cls-21"
                        d="M263.84,155.48a1.8,1.8,0,1,0-2.34-1A1.8,1.8,0,0,0,263.84,155.48Z"
                    />
                    <circle
                        className="cls-21"
                        cx="220.35"
                        cy="161.71"
                        r="1.81"
                        transform="translate(-51.36 132.05) rotate(-30.04)"
                    />
                    <path
                        className="cls-21"
                        d="M215.59,171.59a1.81,1.81,0,1,0-2.26,1.19A1.81,1.81,0,0,0,215.59,171.59Z"
                    />
                    <circle
                        className="cls-21"
                        cx="229.75"
                        cy="154.56"
                        r="1.81"
                        transform="translate(-40.84 95.81) rotate(-21.68)"
                    />
                    <rect
                        className="cls-29"
                        x="207.94"
                        y="191.27"
                        width="3.37"
                        height="0.36"
                        transform="matrix(-0.01, -1, 1, -0.01, 19.29, 402.1)"
                    />
                    <rect
                        className="cls-29"
                        x="210.56"
                        y="202.7"
                        width="3.37"
                        height="0.36"
                        transform="matrix(-0.01, -1, 1, -0.01, 10.5, 416.2)"
                    />
                    <rect
                        className="cls-29"
                        x="208.09"
                        y="181.41"
                        width="3.37"
                        height="0.36"
                        transform="matrix(-0.01, -1, 1, -0.01, 29.31, 392.33)"
                    />
                    <rect
                        className="cls-29"
                        x="226.01"
                        y="219.73"
                        width="3.37"
                        height="0.36"
                        transform="matrix(-0.01, -1, 1, -0.01, 9, 448.78)"
                    />
                    <rect
                        className="cls-29"
                        x="236.59"
                        y="224.77"
                        width="3.37"
                        height="0.36"
                        transform="translate(14.6 464.42) rotate(-90.3)"
                    />
                    <rect
                        className="cls-29"
                        x="217.26"
                        y="212.11"
                        width="3.37"
                        height="0.36"
                        transform="matrix(-0.01, -1, 1, -0.01, 7.83, 432.37)"
                    />
                    <rect
                        className="cls-29"
                        x="259.12"
                        y="223.76"
                        width="3.37"
                        height="0.36"
                        transform="translate(38.26 485.94) rotate(-90.31)"
                    />
                    <rect
                        className="cls-29"
                        x="269.6"
                        y="218.51"
                        width="3.37"
                        height="0.36"
                        transform="translate(54.04 491.14) rotate(-90.31)"
                    />
                    <rect
                        className="cls-29"
                        x="247.73"
                        y="225.97"
                        width="3.37"
                        height="0.36"
                        transform="matrix(-0.01, -1, 1, -0.01, 24.6, 476.77)"
                    />
                    <rect
                        className="cls-29"
                        x="282.67"
                        y="199.82"
                        width="3.37"
                        height="0.36"
                        transform="translate(85.87 485.42) rotate(-90.31)"
                    />
                    <rect
                        className="cls-29"
                        x="284.72"
                        y="188.81"
                        width="3.37"
                        height="0.36"
                        transform="translate(98.93 476.39) rotate(-90.3)"
                    />
                    <rect
                        className="cls-29"
                        x="277.16"
                        y="209.77"
                        width="3.37"
                        height="0.36"
                        transform="translate(70.38 489.91) rotate(-90.31)"
                    />
                    <rect
                        className="cls-29"
                        x="277.77"
                        y="167.98"
                        width="3.37"
                        height="0.36"
                        transform="translate(112.78 448.51) rotate(-90.31)"
                    />
                    <rect
                        className="cls-29"
                        x="270.99"
                        y="159.57"
                        width="3.37"
                        height="0.36"
                        transform="translate(114.38 433.28) rotate(-90.31)"
                    />
                    <rect
                        className="cls-29"
                        x="282.81"
                        y="178.15"
                        width="3.37"
                        height="0.36"
                        transform="translate(107.69 463.77) rotate(-90.31)"
                    />
                    <rect
                        className="cls-29"
                        x="250.97"
                        y="149.95"
                        width="3.37"
                        height="0.36"
                        transform="translate(103.88 403.58) rotate(-90.31)"
                    />
                    <rect
                        className="cls-29"
                        x="239.4"
                        y="150.04"
                        width="3.37"
                        height="0.36"
                        transform="translate(92.15 392.1) rotate(-90.31)"
                    />
                    <rect
                        className="cls-29"
                        x="261.5"
                        y="153.62"
                        width="3.37"
                        height="0.36"
                        transform="translate(110.79 417.8) rotate(-90.31)"
                    />
                    <rect
                        className="cls-29"
                        x="218.67"
                        y="161.53"
                        width="3.37"
                        height="0.36"
                        transform="matrix(-0.01, -1, 1, -0.01, 59.82, 382.92)"
                    />
                    <rect
                        className="cls-29"
                        x="212.18"
                        y="170.87"
                        width="3.37"
                        height="0.36"
                        transform="matrix(-0.01, -1, 1, -0.01, 43.95, 385.83)"
                    />
                    <rect
                        className="cls-29"
                        x="228.07"
                        y="154.38"
                        width="3.37"
                        height="0.36"
                        transform="matrix(-0.01, -1, 1, -0.01, 76.42, 385.13)"
                    />
                    <path
                        className="cls-7"
                        d="M247,31.92s-12.67,1.33-37.11,35.63c-25.82,36.22-26.23,75-26.24,101.7,0,34.54,11.23,102.62,31.58,149.68h0S145.63,125.76,247,31.92Z"
                    />
                    <polygon
                        className="cls-7"
                        points="222.3 318.79 222.28 324.92 220.14 324.96 220.09 318.85 222.3 318.79"
                    />
                    <g className="cls-30">
                        <g className="cls-31">
                            <path
                                className="cls-32"
                                d="M283.62,318.2S344.09,130.07,247,31.92l50.51-20L362,307.24S329.75,322.07,283.62,318.2Z"
                            />
                        </g>
                    </g>
                    <path
                        className="cls-33"
                        d="M283.62,318.2l11.45,6.43s12-35.85,7.37-69.62h0S292,297.51,283.62,318.2Z"
                    />
                    <path
                        className="cls-7"
                        d="M308.94,364.86c.07-14.59-4.19-24.31-5.05-26.12a17.5,17.5,0,0,1,.85,2.64,76.65,76.65,0,0,1,2.69,17.67c.52,9.32.68,22.25,2.57,26,.43.77.9,1.07,1.41,1h0S308.86,381,308.94,364.86Z"
                    />
                </g>
                <g id="cadre">
                    <rect className="cls-34" width="500" height="500" />
                </g>
            </g>
        </svg>
    )
}
