import React from "react";

const Service = () => {
  return (
    <div className="bg-[#EAF3F6] md:py-10">
      <div className="box flex flex-col md:flex-row justify-center my-10 mx-auto md:w-[70%] ">
        <div className="photo mx-auto md:mx-3">
          <img
            src="https://1mbys2xvv1i3i04op1tfwqjb-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/hvca-heating-service-repairs-feature-300x300.jpg"
            alt="img "
            width={260}
            height={260}
            className=" rounded-[50%] md:mt-12 "
          />
        </div>
        <div className="details md:w-[65%] p-5 text-[#333333] md:mx-5">
            {/* SVG */}
          <div className="text-[#05A0E2] md:text-7xl my-6">
            <svg
             
              id="Layer_1"
              x="0px"
              y="0px"
              width="42"
              viewBox="0 0 30 30"
         
            >
              <path
                fill="currentColor"
                d="M29.363,23.184l-6.861-6.861c-1.354-1.353-3.375-1.617-5.004-0.814l-6.246-6.246V5.624l-7.5-5.625l-3.75,3.75l5.625,7.5   h3.639l6.246,6.246c-0.797,1.629-0.539,3.65,0.814,5.004l6.861,6.861c0.855,0.855,2.238,0.855,3.088,0l3.088-3.088   C30.213,25.416,30.213,24.033,29.363,23.184z M19.438,13.182c1.658,0,3.217,0.645,4.389,1.816l1.137,1.136   c0.926-0.404,1.805-0.966,2.566-1.728c2.174-2.174,2.912-5.232,2.221-8.01c-0.129-0.527-0.791-0.709-1.178-0.322l-4.359,4.359   l-3.979-0.662l-0.662-3.979l4.359-4.359c0.387-0.387,0.199-1.049-0.334-1.184c-2.777-0.686-5.836,0.053-8.004,2.221   c-1.67,1.67-2.455,3.873-2.414,6.07l4.811,4.811C18.465,13.241,18.957,13.182,19.438,13.182z M13.35,17.986l-3.322-3.322   L1.098,23.6c-1.465,1.465-1.465,3.838,0,5.303s3.838,1.465,5.303,0l7.242-7.242C13.197,20.494,13.063,19.223,13.35,17.986z    M3.752,27.654c-0.773,0-1.406-0.633-1.406-1.406c0-0.779,0.627-1.406,1.406-1.406s1.406,0.627,1.406,1.406   C5.158,27.021,4.531,27.654,3.752,27.654z"
              ></path>
            </svg>
          </div>
          <h1 className="text-4xl font-bold mx-auto">
            Air Conditioning Repair Service
          </h1>
          <p
            className="my-3 text-[#465156]"
            style={{ fontWeight: "400", lineHeight: "2em", fontSize: "16px" }}
          >
            We understand how uncomfortable and frustrating it can be, if your
            air conditioning system or heat pump breaks down, leaving you in
            need of Aircon repair or servicing. This is why our air conditioning
            repair experts are available throughout London for all kinds of
            repair and service work. We excel at finding the root cause of the
            problem and getting it fixed fast, hence, whether it is AC
            compressor repair or heating service that you require, call our
            experts today and will schedule a visit for your air conditioning
            repair London.
          </p>
        </div>
      </div>
      <div className="box flex flex-col md:flex-row justify-center md:mt-20 mx-auto  md:w-[70%] ">
        <div className="details md:w-[65%] p-5 text-[#333333] md:mx-8">
          <h1 className="text-4xl font-bold">
            Why Air Con Company For AC Repair
          </h1>
          <p
            className="my-1  text-[#465156]"
            style={{ fontWeight: "400", lineHeight: "2em", fontSize: "16px" }}
          >
            With more than a decade of experience in air conditioning and
            heating systems, repair and servicing across London and beyond, we
            at the AirCon Company understand how important it is to have an
            optimum temperature at your home or workplace to ensure comfort as
            well as productivity. Thus, our air conditioning contractors make
            sure that your HVAC or heating systems are working at optimum
            performance levels.
          </p>
        </div>
        <div className="photo mx-auto md:mx-3 md:mt-8">
          <img
            src="https://1mbys2xvv1i3i04op1tfwqjb-wpengine.netdna-ssl.com/wp-content/uploads/2022/01/Untitled-design-2022-01-10T184658.610-300x300.png"
            alt="img"
            width={260}
            height={260}
            className=" rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
