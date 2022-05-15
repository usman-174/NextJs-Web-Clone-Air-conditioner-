import React from "react";
import SolutionBox from "./SolutionBox";
import parse from "html-react-parser";
import Lists from "./Lists";
import ContactSection from "./ContactSection";
const data = [
  {
    svg: ' <svg className="mx-auto" id="Layer_1" x="0px"  y="0px" width="80" height="80" viewBox="0 0 30 30"> <path fill="currentColor" d="M10.587,14.45c0.366,0.366,0.959,0.366,1.326,0l4.962-4.961l5.133,5.133l-1.729,1.728c-0.886,0.886-0.258,2.4,0.994,2.4  h5.914c0.518,0,0.938-0.42,0.938-0.938v-5.914c0-1.252-1.515-1.88-2.4-0.994l-1.729,1.729l-6.459-6.458  c-0.365-0.366-0.959-0.366-1.325,0l-4.962,4.961l-3.03-3.03c-0.366-0.366-0.96-0.366-1.326,0L6.231,8.769  c-0.366,0.366-0.366,0.96,0,1.326L10.587,14.45z M29.063,23.438H2.813V4.688c0-0.518-0.419-0.938-0.938-0.938H0.938  C0.419,3.75,0,4.169,0,4.688v19.688c0,1.035,0.84,1.875,1.875,1.875h27.188c0.518,0,0.938-0.42,0.938-0.938v-0.938  C30,23.857,29.58,23.438,29.063,23.438z" > </path> </svg>',
    heading: "Poor Performance",
    description:
      "Slow airflow getting you down? Boost the efficiency of your HVAC heating and cooling system and save massive energy costs.",
  },
  {
    svg: '<svg className="mx-auto"  id="Layer_1" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30" ><path fill="currentColor" d="M26.25,9.75v3h1.5v4.5h-1.5v3h-24V9.75H26.25 M26.25,7.5h-24C1.007,7.5,0,8.507,0,9.75v10.5c0,1.242,1.007,2.25,2.25,2.25  h24c1.242,0,2.25-1.008,2.25-2.25V19.5h0.375c0.621,0,1.125-0.504,1.125-1.125v-6.75c0-0.621-0.504-1.125-1.125-1.125H28.5V9.75  C28.5,8.507,27.492,7.5,26.25,7.5z"></path></svg>',
    heading: "No Power ",

    description:
      "No more power problems! Our expert air conditioning contractors will take care of your AC unit repair and have it running in no time! ",
  },
  {
    svg: '<svg className="mx-auto" id="Layer_1" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30" > <path fill="currentColor" d="M20.625,12.697c0.867,1.658,1.828,2.953,2.66,4.078c1.365,1.846,2.027,2.795,2.027,4.172c0,2.402-2.104,4.359-4.688,4.359  s-4.688-1.957-4.688-4.359c0-1.365,0.662-2.32,2.033-4.178C18.803,15.645,19.758,14.35,20.625,12.697 M11.25,1.875  c-0.229,0-0.463,0.135-0.545,0.404C9.832,5.168,7.969,5.953,7.969,7.986c0,1.805,1.465,3.264,3.281,3.264s3.281-1.459,3.281-3.264  c0-2.045-1.863-2.807-2.736-5.707C11.719,2.016,11.484,1.875,11.25,1.875z M20.625,7.5c-0.527,0-1.055,0.293-1.242,0.891  c-1.998,6.352-6.258,8.08-6.258,12.563c0,3.967,3.352,7.172,7.5,7.172s7.5-3.211,7.5-7.172c0-4.5-4.254-6.176-6.258-12.563  C21.697,7.805,21.164,7.5,20.625,7.5z M5.156,13.125c-0.229,0-0.463,0.135-0.545,0.404c-0.873,2.889-2.736,3.674-2.736,5.707  c0,1.805,1.465,3.264,3.281,3.264s3.281-1.459,3.281-3.264c0-2.045-1.863-2.807-2.736-5.707C5.625,13.266,5.391,13.125,5.156,13.125  z"></path> </svg>',
    heading: " Water Leakage ",
    description:
      "Leaking water from the AC can mean big problems. Do not fret! We will take care of it with unparalleled air conditioner repair solutions.",
  },
  {
    svg: '<svg className="mx-auto"  id="Layer_1" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30" > <path fill="currentColor" d="M0.938,13.125h19.688c3.504,0,6.258-3.199,5.496-6.838c-0.445-2.127-2.162-3.844-4.289-4.289  c-3.275-0.686-6.199,1.488-6.744,4.488c-0.094,0.527,0.34,1.008,0.873,1.008h1.078c0.422,0,0.756-0.305,0.861-0.709  c0.387-1.477,1.945-2.484,3.615-1.963c0.838,0.258,1.518,0.943,1.781,1.781c0.604,1.928-0.832,3.709-2.672,3.709H0.938  C0.422,10.313,0,10.734,0,11.25v0.938C0,12.703,0.422,13.125,0.938,13.125z M9.375,15H0.938C0.422,15,0,15.422,0,15.938v0.938  c0,0.516,0.422,0.938,0.938,0.938h8.438c1.84,0,3.275,1.775,2.672,3.709c-0.258,0.838-0.943,1.518-1.781,1.781  c-1.67,0.521-3.229-0.486-3.615-1.963c-0.105-0.404-0.439-0.709-0.861-0.709H4.717c-0.539,0-0.973,0.48-0.873,1.008  c0.545,3,3.469,5.174,6.744,4.488c2.127-0.445,3.844-2.162,4.289-4.289C15.633,18.199,12.879,15,9.375,15z M23.162,15h-8.877  c0.316,0.281,0.639,0.563,0.908,0.896c0.475,0.58,0.814,1.236,1.09,1.916h6.984c1.957,0,3.709,1.43,3.896,3.375  c0.217,2.232-1.541,4.125-3.732,4.125c-1.623,0-2.994-1.037-3.516-2.484c-0.07-0.193-0.24-0.328-0.445-0.328h-1.939  c-0.293,0-0.527,0.27-0.463,0.557c0.68,2.9,3.264,5.068,6.369,5.068c3.691,0,6.668-3.047,6.557-6.762  C29.889,17.771,26.754,15,23.162,15z"></path> </svg>',
    heading: "Bad Smell ",
    description:
      "Go away odours! Bad smells emanating from your HVAC unit can mean danger. We will make sure we get rid of the source of the problem.",
  },
  {
    svg: '<svg className="mx-auto"  id="Layer_1" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30"> <path fill="currentColor" d="M29.438,15.563h-2.441l-0.959-4.335c-0.117-0.504-0.621-0.818-1.125-0.7c-0.347,0.081-0.617,0.351-0.699,0.697l-1.49,6.575  L21.176,6.805c-0.074-0.512-0.549-0.868-1.062-0.794c-0.419,0.061-0.746,0.395-0.797,0.815l-1.383,11.719L15.929,3.81  c-0.071-0.513-0.545-0.871-1.058-0.8c-0.416,0.058-0.742,0.384-0.8,0.8l-2.007,14.735L10.682,6.827  c-0.061-0.514-0.528-0.881-1.042-0.819c-0.422,0.05-0.757,0.378-0.817,0.799L7.276,17.8l-1.488-6.576  c-0.119-0.504-0.624-0.816-1.128-0.697c-0.346,0.082-0.616,0.353-0.697,0.699l-0.958,4.336H0.563C0.252,15.563,0,15.814,0,16.125  v0.75c0,0.311,0.252,0.563,0.563,0.563H3.75c0.437,0.002,0.816-0.301,0.913-0.727l0.218-0.935l1.707,7.5  C6.691,23.73,7.046,24,7.537,24h0.01c0.448-0.022,0.817-0.359,0.879-0.805l1.242-8.876l1.399,11.854  c0.061,0.515,0.527,0.883,1.041,0.822c0.424-0.051,0.761-0.382,0.819-0.806L15,10.986l2.071,15.205  c0.069,0.513,0.54,0.874,1.054,0.806c0.425-0.058,0.758-0.396,0.807-0.822l1.398-11.854l1.242,8.875  c0.063,0.446,0.436,0.786,0.887,0.806c0.466,0.025,0.847-0.264,0.953-0.724l1.707-7.5l0.219,0.934  c0.096,0.427,0.475,0.729,0.912,0.728h3.188c0.311,0,0.563-0.252,0.563-0.563v-0.75C30,15.814,29.748,15.563,29.438,15.563z"></path> </svg>',
    heading: "Noisy Unit",
    description:
      "Bring on the Zen and calm, no more noisy AC units! A noisy AC is a sign that you are in need of an AC repair service. Give our experts a call and we will bring you peace.",
  },
  {
    svg: '<svg className="mx-auto" id="Layer_1" x="0px" y="0px" width="80" height="80" viewBox="0 0 30 30" > <path fill="currentColor" d="M27.52,10.524h-2.585c-1.173,0-2.154,0.819-2.411,1.914h-4.648l-1.115,3.767l-1.729,1.94l-0.357-1.479l-2.018-0.276   l-0.842-3.952H7.478c-0.259-1.095-1.239-1.914-2.411-1.914H2.479c-1.37,0-2.483,1.114-2.483,2.482v13.711   c0,1.369,1.114,2.484,2.483,2.484h2.587c1.173,0,2.152-0.819,2.412-1.915h15.045c0.257,1.096,1.238,1.915,2.411,1.915h2.585   c1.371,0,2.484-1.115,2.484-2.484V13.007C30.004,11.639,28.891,10.524,27.52,10.524z M2.479,26.718V13.007h2.587v13.711H2.479z    M7.549,14.922h2.255l0.787,3.691l2.067,0.285l1.07,4.44l5.255-5.896l0.746-2.521h2.721v9.883H7.549V14.922z M24.935,26.718V13.007   h2.585l0.002,13.711H24.935z"></path> <path fill="currentColor" d="M12.135,10.713l0.993,1.107l2.216,2.469l1.746-2.82l0.814-1.315c0.736-0.269,1.604-0.754,2.217-1.637   c0.678-0.977,0.867-2.204,0.531-3.457l-0.004-0.016l-0.006-0.016c-0.427-1.512-1.646-2.592-3.144-2.848   c-0.81-0.851-1.902-1.383-2.998-1.383c-0.267,0-0.533,0.031-0.788,0.092c-1.283,0.305-2.396,1.311-2.835,2.564   c-0.042,0.12-0.078,0.24-0.108,0.362C9.696,4.45,9.024,5.595,9.024,6.987c-0.002,0.981,0.381,1.907,1.076,2.604   C10.638,10.13,11.346,10.516,12.135,10.713z M12.832,5.761c0.241,0,0.5,0.041,0.768,0.125c-1.046-1.34-0.071-2.4,0.683-2.579   c0.071-0.017,0.142-0.024,0.217-0.024c0.66,0,1.428,0.637,1.707,1.43c0.207-0.072,0.41-0.106,0.604-0.106   c0.693,0,1.256,0.436,1.441,1.097c0.552,2.056-1.935,2.294-1.935,2.294l-1.342,2.166l-1.595-1.78c-0.002,0-0.002,0-0.002,0   c-0.843,0-1.872-0.423-1.87-1.395C11.509,6.178,12.07,5.761,12.832,5.761z"></path> </svg>',
    heading: "Gas Leak",
    description:
      "Coolant leakage from your AC can lead to myriad problems such as nausea, dryness or even asphyxiation. Do not wait and call us for air conditioner repair today! ",
  },
];
const data2 = [
  {
    svg: '<div className="w-28 md:w-36 mx-auto"><svg   viewBox="0 0 93 93" fill="#05A0E2" style={{width:"30%",height:"40%"}}><path class="st0" d="M46.5,0C20.8,0,0,20.8,0,46.5S20.8,93,46.5,93S93,72.2,93,46.5S72.2,0,46.5,0z M46.5,85.9  c-21.7,0-39.4-17.6-39.4-39.4S24.8,7.1,46.5,7.1s39.4,17.6,39.4,39.4S68.2,85.9,46.5,85.9z M36.8,23.3v31.1h-8.4V30.3h-4.6v-7.1  H36.8z M41.9,38.9c0-10,5.3-16.4,13.6-16.4c8.3,0,13.6,6.4,13.6,16.4c0,10-5.4,16.4-13.6,16.4C47.3,55.2,41.9,48.8,41.9,38.9z   M60.6,38.9c0-5.7-1.8-9-5.1-9c-3.3,0-5.1,3.2-5.1,8.9s1.8,8.9,5.1,8.9C58.8,47.8,60.6,44.7,60.6,38.9z M32.1,67v3.3h-2.4V67  l-2.9-5.1h2.6l1.5,3l1.5-3h2.6L32.1,67z M41.4,68.2v2H36v-8.4h5.4v2h-3.1v1.2H41V67h-2.8v1.3L41.4,68.2L41.4,68.2z M47.9,68.9h-3  l-0.5,1.4H42l3.3-8.4h2.3l3.4,8.4h-2.5L47.9,68.9z M46.4,64.5l-0.9,2.6h1.8L46.4,64.5z M54.9,67.7H54v2.6h-2.3v-8.4h3.6  c1.8,0,3.1,1.2,3.1,3c0,1-0.5,1.9-1.3,2.4l1.7,3.1h-2.6L54.9,67.7z M54,65.7h1.1c0.6,0,1-0.4,1-0.9c0-0.5-0.4-0.9-1-0.9H54V65.7z   M59.4,67.5h2.4c0,0.6,0.5,0.9,1,0.9c0.5,0,0.9-0.3,0.9-0.7c0-0.5-0.7-0.7-1.5-0.9c-1.2-0.3-2.8-0.7-2.8-2.6c0-1.7,1.2-2.6,3.2-2.6  c2,0,3.2,1,3.2,2.7h-2.3c0-0.5-0.4-0.8-0.9-0.8c-0.4,0-0.8,0.2-0.8,0.6c0,0.5,0.6,0.6,1.4,0.8c1.2,0.3,2.9,0.7,2.9,2.6  c0,1.8-1.4,2.8-3.4,2.8C60.7,70.5,59.4,69.4,59.4,67.5z"></path></svg></div>',
    heading: "10 years of experience ",
    description: "A sector leader and trusted team. ",
  },
  {
    svg: '<div className="w-28 md:w-36 mx-auto "><svg  fill="#91D5F2" viewBox="0 0 92.978 93.025" style={{width:"30%",height:"40%"}}><path fill="#05A0E2"d="M56.061,34.885l2.055,2.056c1.131,1.134,2.971,1.136,4.105,0l0,0L92.127,7.018  c1.135-1.136,1.135-2.977,0-4.111l-2.055-2.057c-1.133-1.134-2.973-1.134-4.109,0L56.061,30.773  C54.926,31.909,54.926,33.75,56.061,34.885z M43.587,16.591c1.133,1.134,2.973,1.136,4.108,0l0,0l9.566-9.573  c1.137-1.136,1.137-2.977,0-4.111l-2.053-2.057c-1.135-1.134-2.975-1.134-4.109,0l-9.566,9.574c-1.135,1.135-1.135,2.977,0,4.11  L43.587,16.591z M90.072,35.735c-1.133-1.133-2.973-1.133-4.109,0l-9.566,9.574c-1.135,1.135-1.135,2.978,0,4.111l2.055,2.055  c1.131,1.137,2.971,1.137,4.107,0c0,0,0,0,0.002,0l9.566-9.572c1.135-1.136,1.135-2.977,0-4.111L90.072,35.735z M66.158,48.561  l-19.031-2.779L38.61,28.484c-1.014-2.067-3.511-2.918-5.576-1.903c-0.828,0.407-1.496,1.077-1.902,1.903l-8.517,17.297  L3.586,48.561c-3.412,0.49-4.795,4.707-2.306,7.121l13.783,13.445l-3.269,19.006c-0.389,2.283,1.144,4.443,3.423,4.832  c0.227,0.039,0.456,0.061,0.686,0.061c0.676,0,1.342-0.17,1.937-0.496l17.032-8.973l17.033,8.973c0.594,0.32,1.26,0.488,1.938,0.49  c2.305-0.006,4.17-1.877,4.17-4.186c-0.004-0.236-0.023-0.469-0.061-0.701l-3.25-19.006l13.781-13.445  C70.951,53.268,69.572,49.051,66.158,48.561z M45.338,66.084l2.467,14.43l-12.934-6.814l-12.922,6.809l2.48-14.422L13.948,55.863  l14.461-2.113l6.462-13.127l6.464,13.127l14.475,2.113L45.338,66.084z"></path></svg></div>',
    heading: "Highest quality service",
    description: "Dedicated to your complete satisfaction.",
  },
  {
    svg: '<div className="w-28 md:w-36 mx-auto" ><svg fill="#91D5F2" viewBox="0 0 92.943 93.025" ><path fill="#05A0E2" d="M46.472,32.674c-6.416,0-11.618,6.258-11.618,13.978c0,7.721,5.2,13.979,11.618,13.979  c6.414,0,11.617-6.259,11.617-13.979C58.089,38.932,52.886,32.674,46.472,32.674z M90.207,17.289  c-5.634-2.357-11.273-3.256-16.906-3.256c-17.886-0.002-35.772,9.04-53.66,9.04c-4.484,0-8.969-0.568-13.453-1.989  c-0.506-0.16-1.011-0.234-1.505-0.234C2.184,20.85,0,22.779,0,25.462v46.003c0,1.83,1.049,3.563,2.736,4.271  c5.632,2.36,11.27,3.257,16.904,3.257c17.888,0,35.774-9.04,53.66-9.04c4.488,0,8.971,0.57,13.457,1.989  c0.502,0.157,1.011,0.235,1.501,0.235c2.499,0,4.685-1.934,4.685-4.614V21.563C92.943,19.731,91.892,17.996,90.207,17.289z   M85.972,56.089c-3.902,0.495-7.056,3.383-7.896,7.178c-1.567-0.133-3.131-0.274-4.774-0.274c-9.812,0-19.333,2.405-28.541,4.732  c-8.764,2.217-17.044,4.308-25.119,4.308c-1.164,0-2.302-0.049-3.413-0.137c-0.206-4.963-4.255-8.931-9.256-8.931V37.331  c4.513,0,8.268-3.224,9.111-7.502c1.182,0.074,2.336,0.204,3.56,0.204c9.812,0,19.332-2.406,28.541-4.733  c8.763-2.214,17.04-4.306,25.117-4.306c1.573,0,3.08,0.113,4.563,0.275c0.124,4.636,3.612,8.387,8.108,8.955V56.089z"></path></svg></div>',
    heading: "Unbeatable Prices",
    description: "Try our quote-match, price-beating promise.",
  },
];

const Solution = () => {
  return (
    <div className="py-10 bg-white   ">
      <h1 className="text-center text-[#333333] text-4xl font-extrabold">
        Best HVAC Repair Solutions
      </h1>
      <p
        style={{ lineHeight: "2.15em", fontWeight: "400" }}
        className="mx-auto w-[60%]   text-[#47494b] text-center my-4"
      >
        Whatever issue you might be facing regarding HVAC air conditioning
        repair and servicing, provide you with best-in-class services for all
        domestic and commercial properties. With our efficient aircon repair
        services, you will have access to clean air and optimum temperature in
        no time.
      </p>
      {/* Service Boxes */}
      <div className="wrapper md:mt-28 md:w-[80%] md:mx-auto">
        <div className="box-list md:grid md:grid-cols-3 md:justify-center  text-center md:gap-x-6 md:gap-y-20">
          {data.map((item) => (
            <SolutionBox
              key={item.description + item.heading}
              svg={parse(item.svg)}
              desc={item.description}
              heading={item.heading}
            />
          ))}
        </div>
        <hr className="my-20 " />
      </div>
      {/* Price Section */}
      <div className="price-section my-10 solution  ">
        <h1 className="my-3 w-[90%] md:w-full text-4xl text-center mx-auto font-bold text-[#333333]">
          Air Conditioning Repair Price
        </h1>
        <div className="flex flex-col md:flex-row md:justify-around mt-20 md:w-[76%] mx-auto text-center">
          <div className="one mt-8 md:mt-0">
            <h1 className="my-1 text-2xl text-center font-extrabold text-[#333333]">
              £150 + VAT{" "}
            </h1>
            <p className=" mt-2 md:mt-4 text-[#465156]">
              a single wall mounted unit{" "}
            </p>
          </div>
          <div className="two mt-8 md:mt-0">
            <h1 className="my-1 text-2xl text-center font-extrabold text-[#333333]">
              £90 + VAT{" "}
            </h1>
            <p className=" mt-2 md:mt-4 text-[#465156]">
              for more then 3 wall mounted indoor unit{" "}
            </p>
          </div>
          <div className="tree mt-8 md:mt-0">
            <h1 className="my-1 text-2xl text-center font-extrabold text-[#333333]">
              £200 + VAT{" "}
            </h1>
            <p className=" mt-2 md:mt-4 text-[#465156]">
              for one ducted AC unit{" "}
            </p>
          </div>
        </div>
        {/* LISTS */}
        <Lists />
      </div>

      <h1 className="my-4 w-[90%] md:w-full text-4xl text-center mx-auto font-bold text-[#333333]">
        Conditions
      </h1>
      <div className="mt-12 md:w-[70%] w-[80%] mx-auto text-[#465156] ">
        <ol type="1">
          <li className="my-3">
            <p>
              <strong>INSPECTIONS:</strong>&nbsp;
              <span>This quotation covers the cost of labour only</span>
            </p>
          </li>
          <li className="my-5">
            <p>
              <span>
                <b>PARTS:</b>&nbsp;
              </span>
              <span>
                Parts will be charged for at the supplier’s current list price
              </span>
            </p>
          </li>
          <li className="my-3">
            <p>
              <span>
                <b>EXCLUSIONS:</b>&nbsp;
              </span>
              <span>
                This does not include responsibility by the Company for anything
                not specifically mentioned or previously excluded here. Such as
                electricity supply, water supply or drainage, repairs to
                structures of equipment, doors or fittings,complete overhauls,
                major repairs or replacement of major components or any repairs
                which cannot be done on Site. Cleaning of evaporators &amp;
                condensers where major work involving specialist-cleaning
                equipment is necessary.
              </span>
            </p>
          </li>
        </ol>
      </div>
      <div className="wrapper mt-20 md:mt-28 md:w-[80%] md:mx-auto">
        <div className="box-list md:grid md:grid-cols-3 md:justify-center items-center  text-center md:gap-x-6 md:gap-y-20">
          {data2.map((item) => (
            <SolutionBox
              key={item.description + item.heading}
              svg={parse(item.svg)}
              desc={item.description}
              heading={item.heading}
            />
          ))}
        </div>
      </div>
      <ContactSection/>
    </div>
  );
};

export default Solution;
