import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery';

const NavRing = () => {
  const Wider = useMediaQuery("(min-width: 768px)");
   
  return (
    

    <div className="absolute top-0 pt-36 nav-overlay">
        <svg className="svg " style={{width : Wider ? "600px":"390px",height : Wider ? "600px":"390px"}} id="svg" viewBox="0 0 500 500">
          <a   href="/contact-us/">
            <g className="circle-group" transform="translate(250, 250)">
              <circle r="110" fill="#FFFFFF"></circle>
              <line
              
                className="circle-line"
                x1="0"
                y1="0"
                x2="80"
                y2="0"
                transform="translate(-40, 40)"
              ></line>
              <text textAnchor="middle" y="60">
                CONTACT US
              </text>
              <image
                className="logo-image"
                x="0"
                y="0"
                width="140"
                height="100"
                href="https://uploads-ssl.webflow.com/5eb52600d4d4d906bb75029c/5f567cda596748341d3dde10_logo-stacked-lightbg.svg"
                transform="translate(-70, -70)"
              ></image>
            </g>
          </a>
          <a 
          
          href="/hot-water-system-installation/">
            <g>
              <path
                className="targetx"
                d="M 64.33012701892231,101.42304845413257A 120.10412149464314 120.10412149464314 0 0 0 120 5.000000000000135 L 240,5A 240.05207768315609 240.05207768315609 0 0 1 124.33012701892224 205.34609690826525 L 64.33012701892231,101.42304845413257z"
                transform-origin="center center"
                fill="#e8e1e1"
                style={{ transform: "rotate(60deg) translate(250px, 250px)" }}
              ></path>
              <text  textAnchor="middle" transform="translate(250, 445)">
             

                <tspan  x="0" dy="0">
                  HEATINGx
                </tspan>
                <tspan x="0" dy="15">
                  &amp; HOT WATER
                </tspan>
              </text>
              
              <g className="image-group" transform="translate(235, 400)">
                <svg
                
                  version="1.1"
                  id="Layer_1"
                  focusable="false"
                  x="0px"
                  fill="#06a1e4"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  enableBackground={"new 0 0 30 30"}
                >
                  <path d="M16.045,17.606c-0.656-0.882-1.472-1.772-2.395-2.606c-2.368,2.138-4.05,4.922-4.05,6.6c0,2.981,2.418,5.4,5.4,5.4           s5.4-2.419,5.4-5.4c0-1.246-1.252-3.824-3-5.399C16.898,16.65,16.443,17.128,16.045,17.606z M16.771,24.023           C16.275,24.385,15.661,24.6,15,24.6c-1.655,0-3-1.144-3-3c0-0.923,0.558-1.738,1.669-3.131c0.159,0.192,2.264,3.005,2.264,3.005           l1.346-1.604c0.094,0.164,0.183,0.323,0.258,0.479C18.164,21.596,17.901,23.198,16.771,24.023z M29.25,3H0.75           C0.337,3,0,3.337,0,3.75V9c0,0.413,0.337,0.75,0.75,0.75H1.5v16.125C1.5,26.498,2.001,27,2.625,27h3.75           C6.999,27,7.5,26.498,7.5,25.875v-4.528c0-3.923,2.854-7.439,6.76-7.814c0.248-0.023,0.496-0.038,0.74-0.038           c4.144,0,7.5,3.356,7.5,7.5v4.875c0,0.624,0.502,1.125,1.125,1.125h3.75c0.623,0,1.125-0.501,1.125-1.125V9.75h0.75           C29.662,9.75,30,9.413,30,9V3.75C30,3.337,29.662,3,29.25,3z M26.25,24.75h-1.5V21c0-5.377-4.373-9.75-9.75-9.75           c-0.314,0-0.633,0.014-0.951,0.047C9.117,11.766,5.25,16.172,5.25,21.323v3.427h-1.5v-15h22.5V24.75z M27.75,7.5H2.25V5.25h25.5V7.5           z"></path>
                </svg>
              </g>
            </g>
          </a>
          <a   href="/heat-recovery-system-installation/">
            <g>
              <path
                fill="#e8e1e1"
                d="M 64.33012701892231,101.42304845413257A 120.10412149464314 120.10412149464314 0 0 0 120 5.000000000000135 L 240,5A 240.05207768315609 240.05207768315609 0 0 1 124.33012701892224 205.34609690826525 L 64.33012701892231,101.42304845413257z"
                transform-origin="center center"
                style={{ transform: "rotate(120deg) translate(250px, 250px)" }}
              ></path>
              <text
                textAnchor="middle"
                transform="translate(94.11542731880104, 355)"
              >
                <tspan x="0" dy="0">
                  HEAT RECOVERY
                </tspan>
                <tspan x="0" dy="15">
                  SYSTEMS
                </tspan>
              </text>
              <g
                className="image-group"
                transform="translate(79.11542731880104, 310)"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  focusable="false"
                  x="0px"
                  fill="#06a1e4"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  enableBackground={"new 0 0 30 30"}
                >
                  <g>
                    <path d="M8.299,18.469V9.763c0-0.458-0.372-0.83-0.83-0.83s-0.83,0.372-0.83,0.83v8.706c-1.296,0.459-1.976,1.881-1.518,3.178                 c0.458,1.297,1.881,1.977,3.177,1.518c1.296-0.459,1.976-1.879,1.518-3.176C9.566,19.279,9.008,18.721,8.299,18.469z M13.278,7.532                 c0-3.208-2.601-5.809-5.809-5.809S1.661,4.324,1.661,7.532v8.636c-1.021,1.275-1.66,2.877-1.66,4.641                 c0,4.125,3.344,7.469,7.468,7.469s7.468-3.344,7.468-7.469c0-1.764-0.638-3.365-1.66-4.641V7.532z M7.469,25.787                 c-2.748-0.002-4.975-2.23-4.979-4.979c0-1.4,0.606-2.453,1.115-3.086l0.544-0.68V7.532c0-1.833,1.486-3.319,3.319-3.319                 s3.319,1.486,3.319,3.319v9.505l0.544,0.68c0.509,0.639,1.115,1.691,1.115,3.092C12.444,23.557,10.217,25.785,7.469,25.787z"></path>
                    <path d="M26.129,6.5c-0.906-0.851-2.084-1.316-3.335-1.315c-2.249,0.002-4.191,1.544-4.727,3.684                 c-0.041,0.156-0.179,0.267-0.34,0.267h-1.664c-0.218,0-0.383-0.197-0.342-0.412c0.627-3.336,3.558-5.86,7.076-5.86                 c1.93,0,3.681,0.758,4.976,1.994l1.037-1.037c0.438-0.439,1.188-0.128,1.188,0.493v3.893c0,0.386-0.312,0.697-0.696,0.697H25.41                 c-0.621,0-0.933-0.751-0.494-1.19L26.129,6.5z M16.294,11.226h3.893c0.62,0,0.931,0.75,0.493,1.189l-1.213,1.212                 c0.908,0.851,2.086,1.315,3.336,1.315c2.246-0.001,4.19-1.543,4.727-3.683c0.04-0.158,0.179-0.268,0.339-0.268h1.664                 c0.218,0,0.383,0.198,0.343,0.412c-0.628,3.337-3.558,5.863-7.077,5.863c-1.93,0-3.682-0.76-4.976-1.996l-1.035,1.039                 c-0.44,0.438-1.191,0.125-1.191-0.494v-3.894C15.596,11.538,15.907,11.226,16.294,11.226z"></path>
                  </g>
                </svg>
              </g>
            </g>
          </a>
          <a   href="/air-conditioning-repair-london/">
            <g>
              <path
                fill="#e8e1e1"
                d="M 64.33012701892231,101.42304845413257A 120.10412149464314 120.10412149464314 0 0 0 120 5.000000000000135 L 240,5A 240.05207768315609 240.05207768315609 0 0 1 124.33012701892224 205.34609690826525 L 64.33012701892231,101.42304845413257z"
                transform-origin="center center"
                style={{ transform: "rotate(180deg) translate(250px, 250px)" }}
              ></path>
              <text
                textAnchor="middle"
                transform="translate(94.11542731880104, 175)"
              >
                <tspan x="0" dy="0">
                  SERVICE
                </tspan>
                <tspan x="0" dy="15">
                  &amp; REPAIRS
                </tspan>
              </text>
              <g
                className="image-group"
                transform="translate(79.11542731880104, 130)"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  focusable="false"
                  fill="#06a1e4"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  enableBackground="new 0 0 30 30"
                >
                  <path d="M13.126,5.629v2.859l1.74,1.74c-0.398-2.039,0.205-4.119,1.67-5.584c1.189-1.189,2.766-1.828,4.395-1.828h0.07l-3.363,3.352               l0.885,5.309l5.309,0.885l3.357-3.357c0.018,1.658-0.621,3.252-1.828,4.459c-0.545,0.545-1.184,0.961-1.863,1.266               c0.105,0.094,0.229,0.17,0.328,0.27l1.799,1.799c0.615-0.369,1.201-0.814,1.723-1.342c2.232-2.232,3.146-5.525,2.385-8.59               c-0.176-0.715-0.727-1.277-1.43-1.477c-0.715-0.199-1.477,0.006-1.992,0.527L22.87,9.35l-1.898-0.316l-0.316-1.898l3.434-3.434               C24.61,3.18,24.81,2.418,24.61,1.709C24.417,1,23.849,0.45,23.134,0.274c-3.117-0.773-6.322,0.117-8.59,2.379               c-0.598,0.598-1.084,1.271-1.482,1.986l0.064,0.047V5.629z M6.212,26.601c-0.75,0.75-2.068,0.75-2.818,0               c-0.375-0.375-0.586-0.879-0.586-1.406c0-0.533,0.205-1.031,0.586-1.406l7.875-7.875l-1.986-1.987l-7.875,7.87               c-0.908,0.908-1.406,2.115-1.406,3.398s0.498,2.49,1.406,3.398s2.115,1.406,3.398,1.406s2.49-0.498,3.398-1.406l5.912-5.912               c-0.568-0.926-0.891-1.98-0.92-3.053L6.212,26.601z M29.362,23.185l-6.861-6.861c-1.354-1.354-3.375-1.618-5.004-0.814l-6.246-6.247               V5.624l-7.5-5.625l-3.75,3.75l5.625,7.5h3.639l6.246,6.247c-0.797,1.629-0.539,3.65,0.814,5.004l6.861,6.861               c0.855,0.855,2.238,0.855,3.088,0l3.088-3.088C30.212,25.417,30.212,24.034,29.362,23.185z"></path>
                </svg>
              </g>
            </g>
          </a>
          <a   href="/air-conditioning-installation-london/">
            <g>
              <path
                fill="#e8e1e1"
               
                d="M 64.33012701892231,101.42304845413257A 120.10412149464314 120.10412149464314 0 0 0 120 5.000000000000135 L 240,5A 240.05207768315609 240.05207768315609 0 0 1 124.33012701892224 205.34609690826525 L 64.33012701892231,101.42304845413257z"
                transform-origin="center center"
                style={{ transform: "rotate(240deg) translate(250px, 250px)" }}
              ></path>
              <text
                textAnchor="middle"
                transform="translate(249.99999999999997, 85)"
              >
                <tspan x="0" dy="0">
                  AIR
                </tspan>
                <tspan x="0" dy="15">
                  CONDITIONING
                </tspan>
              </text>
              <g
                className="image-group"
                transform="translate(234.99999999999997, 40)"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  focusable="false"
                  fill="#06a1e4"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  enableBackground="new 0 0 30 30"
                >
                  <path d="M28.334,1.666H1.667C0.746,1.666,0,2.413,0,3.333v8.333c0,0.921,0.746,1.667,1.667,1.667h26.667               c0.92,0,1.666-0.746,1.666-1.667V3.333C30,2.413,29.254,1.666,28.334,1.666z M26.666,10H3.333V8.333h23.333V10z M11.25,23.75               c0,1.15-0.933,2.084-2.083,2.084H8.843c-1.042,0-1.989-0.724-2.15-1.751c-0.15-0.959,0.36-1.782,1.137-2.16               c0.298-0.145,0.503-0.43,0.503-0.762v-0.918c-0.001-0.463-0.377-0.838-0.84-0.837c-0.094,0-0.188,0.016-0.276,0.047               c-2.031,0.712-3.288,2.748-3.015,4.883c0.29,2.321,2.388,3.998,4.728,3.998h0.236c2.531,0,4.583-2.053,4.583-4.584V15h-2.5V23.75z                 M22.782,17.787c-0.437-0.154-0.915,0.076-1.068,0.514c-0.031,0.089-0.047,0.182-0.048,0.275v0.918c0,0.332,0.205,0.617,0.504,0.762               c0.777,0.378,1.287,1.201,1.137,2.16c-0.16,1.027-1.109,1.75-2.149,1.75h-0.323c-1.151,0-2.084-0.932-2.084-2.082V15h-2.5v7.084               c0,2.531,2.053,4.582,4.584,4.582h0.235c2.339,0,4.438-1.676,4.728-3.997C26.07,20.533,24.813,18.498,22.782,17.787z"></path>
                </svg>
              </g>
            </g>
          </a>
          <a    href="/renewable-energy-system-installation/">
            <g>
              <path
                fill="#e8e1e1"
                d="M 64.33012701892231,101.42304845413257A 120.10412149464314 120.10412149464314 0 0 0 120 5.000000000000135 L 240,5A 240.05207768315609 240.05207768315609 0 0 1 124.33012701892224 205.34609690826525 L 64.33012701892231,101.42304845413257z"
                transform-origin="center center"
                
                style={{ transform: "rotate(300deg) translate(250px, 250px)" }}
              ></path>
              <text
                textAnchor="middle"
                transform="translate(405.8845726811989, 174.99999999999991)"
              >
                <tspan x="0" dy="0">
                  RENEWABLE
                </tspan>
                <tspan x="0" dy="15">
                  ENERGY
                </tspan>
              </text>
              <g
                className="image-group"
                transform="translate(390.8845726811989, 129.99999999999991)"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  focusable="false"
                  fill="#06a1e4"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  enableBackground="new 0 0 30 30"
                >
                  <path d="M23.761,28.075h-1.416l-0.176-2.686l-3.036-3.577l0.408,6.263h-2.542l0.528-8.153l-1.569-1.849           c-0.232-0.287-0.568-0.472-0.935-0.513l-0.147-0.017l-0.683,10.531h-1.417c-0.815,0-1.561,0.462-1.926,1.191           c-0.115,0.23-0.021,0.512,0.209,0.627c0.063,0.031,0.134,0.049,0.205,0.049h14.008c0.258,0,0.467-0.209,0.467-0.467           c0-0.072-0.017-0.145-0.049-0.209C25.325,28.536,24.578,28.075,23.761,28.075z M26.597,24.911L21.44,14.269           c-0.346-0.794-0.361-1.692-0.043-2.497L25.675,1.32c0.188-0.474-0.044-1.01-0.518-1.197c-0.393-0.156-0.84-0.025-1.088,0.317           l-6.66,9.144c-0.508,0.702-1.273,1.172-2.129,1.308L4.104,12.663c-0.455,0.072-0.787,0.47-0.777,0.931v0.014           c0.011,0.463,0.363,0.847,0.823,0.896l11.074,1.199c0.861,0.093,1.65,0.525,2.191,1.201l7.605,8.96           c0.289,0.361,0.803,0.451,1.198,0.211l0.011-0.007C26.624,25.827,26.78,25.334,26.597,24.911z M18.269,14.534           c-0.773,0-1.4-0.627-1.4-1.4s0.627-1.401,1.4-1.401s1.4,0.628,1.4,1.401S19.042,14.534,18.269,14.534z"></path>
                </svg>
              </g>
            </g>
          </a>
          <a   href="/ventilation-installation/">
            <g>
              <path
                fill="#e8e1e1"
                d="M 64.33012701892231,101.42304845413257A 120.10412149464314 120.10412149464314 0 0 0 120 5.000000000000135 L 240,5A 240.05207768315609 240.05207768315609 0 0 1 124.33012701892224 205.34609690826525 L 64.33012701892231,101.42304845413257z"
                transform-origin="center center"
                style={{ transform: "rotate(360deg) translate(250px, 250px)" }}
              ></path>
              <text
                textAnchor="middle"
                transform="translate(405.884572681199, 354.9999999999999)"
              >
                <tspan x="0" dy="0">
                  VENTILATION
                </tspan>
              </text>
              <g
              
                className="image-group"
                transform="translate(390.884572681199, 309.9999999999999)"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                
                  data-prefix="far"
                  data-icon="fan-table"
                  role="img"
               
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-fan-table fa-w-14 fa-9x"
                  width="30"
                  height="30"
                >
                  <path
                  fill="#06a1e4"
                    d="M448,224C448,100.29,347.71,0,224,0S0,100.29,0,224C0,339.6,87.58,434.69,200,446.68V464H112c-21.32,0-41.21,13.89-47.48,33.12C62.11,504.53,68.41,512,76.2,512H371.81c7.78,0,14.08-7.47,11.67-14.88C377.22,477.89,357.32,464,336,464H248V446.68C360.42,434.69,448,339.6,448,224ZM224,400c-97,0-176-78.95-176-176S127,48,224,48s176,79,176,176S321.05,400,224,400ZM354.06,266.31a17.49,17.49,0,0,0,20.34-17.25,87.62,87.62,0,0,0-144.35-66.88L195.62,90.24c-2.57-6.85-13-15.9-25.1-9l0,0a87.06,87.06,0,0,0-40.87,53.25c-8.85,33.12,2.3,86.06,55.38,104.9l-62.65,76.1c-8.76,10.6-1.81,22.47,4.77,26.26a87.71,87.71,0,0,0,119.77-32.11,86.67,86.67,0,0,0,9.95-59.52ZM224,240a16,16,0,1,1,16-16A16,16,0,0,1,224,240Z"
                    className=""
                  ></path>
                </svg>
              </g>
            </g>
          </a>
        </svg>
        </div>

  )
}

export default NavRing