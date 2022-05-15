import React from "react";

const Lists = () => {
  return (
    <div className="mt-20 md:w-[80%] w-[85%] mx-auto text-[#465156] ">
      <ol type="1" className=" md:ml-20 m-3 px-1">
        <li className="my-4">
          <strong>Condensing units</strong>
          <ol className="ml-20 mt-4">
            <li>
              Examine and clean condenser if necessary or report condition to
              the Customer.
            </li>
            <li className="my-3">
              Clean and examine condensing unit. Ensure all nuts, bolts, screws
              etc. are fitted and tight. Ensure there is no chafing or rubbing
              of capillaries tubing etc.
            </li>
            <li>
              Clean and Examine belt/s (if applicable) & adjust or replace.
              Ensure blades are secure & in balance. Lubricate motor if
              necessary.
            </li>
          </ol>
        </li>
        <li className="my-4">
          <strong>Evaporator</strong>
          <ol className="ml-20 mt-4">
            <li>
            Examine evaporator block. Ascertain cause of any frost accumulation. Clean if necessary or report condition to Customer.
            </li>
            <li className="my-3">
            Clean and examine fan motor/s & blade/s. Ensure blades secure & in balance. Lubricate motor/sif necessary.
            </li>
            <li>
            Clean or change air filters as necessary.
            </li>
            <li>Ensure drip tray is sound & outlet clear. Any drain faults or blockages to be reported to the Customer.</li>
          </ol>
        </li>
        <li className="my-4">
          <strong>Electrical & Controls</strong>
          <ol className="ml-20 mt-4">
            <li>
            Check electrical terminal & contacts for tightness & signs of overheating.
            </li>
            <li className="my-3">
            Ensure all electrical & refrigeration controls are correctly set & functioning.
            </li>
           
          </ol>
        </li>
        <li className="my-4">
          <strong>Rerigerant Charge</strong>
          <ol className="ml-16 mt-4">
          Check system contains correct refrigerant and charge is correct.
           
          </ol>
        </li>
        <li className="my-4">
          <strong>Operation & Performance</strong>
          <ol className="ml-20 mt-4">
            <li>
            Check plant operates correctly without any undue noise and vibration.
            </li>
            <li className="my-3">
            Check plant maintains correct temperature and humidity.
            </li>
           
          </ol>
        </li>
      </ol>
     
       
      
    </div>
  );
};

export default Lists;
