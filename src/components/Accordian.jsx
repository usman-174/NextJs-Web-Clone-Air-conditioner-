import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaCaretDown } from "react-icons/fa";
export default function Accordian() {
  return (
    <div className=" hidden md:block mx-auto p-5 md:w-[65%]">
      <h1 className=" my-5 text-4xl text-center font-bold text-[#333333]">
        Air conditioning unit Repair FAQs
      </h1>
      <Accordion className="mt-10">
        <AccordionSummary
          expandIcon={<FaCaretDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is Air Conditioner Repair Worth the Cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If your AC is less than 10 years old, has been well maintained, and
            has not experienced any kind of major failures, then it is worth
            repairing and in all probability, the cost of repair will not be too
            high, thus making the air-conditioner repair cost worth it. However,
            to get an accurate understanding of whether you should get your AC
            repaired, it is best to let our air-conditioning contractors have a
            look at your AC and give you an estimation so that you can decide if
            the cost is worth it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaCaretDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            How Much Does it Cost to Repair an Air Conditioner?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Air-conditioner repair cost is generally dependent upon the kind of
            repair work that needs to be done on the AC unit. Hence to get an
            accurate quote regarding air-conditioner repair, it is best that you
            reach out to our experts, who will visit the space and assess the
            problem and provide you with an accurate AC repair cost. Rest
            assured, our experts try to give you the most cost-effective
            solutions so that you can have a comfortable indoor space as soon as
            possible and can continue to enjoy the benefits of having an air
            conditioned room.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaCaretDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            What Should I Check Before Calling for an Air Conditioner Repair?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A few things that you can check before you call an HVAC repair
            expert include, testing the AC is power supply, the thermostat
            settings, checking if the air filters or vents are not clogged and
            if the condenser unit is still working. All the above things are
            easy to assess, and if you feel that they are working alright and
            yet your AC is not functioning the way it should be, then it is best
            that you contact experts who can take care of air-conditioner repair
            London and will be able to offer you the solution to the problem
            being experienced
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-10">
        <AccordionSummary
          expandIcon={<FaCaretDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"

        >
          <Typography 
          
          >
            How Do I Know If My Air Conditioner Needs to Be Repaired or
            Replaced?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The general life expectancy of a well-maintained HVAC unit is about
            10 to 15 years, and most of the time any problems that occur after
            this time frame, require replacement as opposed to AC unit repair.
            Having said that, however, it is always best that you get the
            problem checked by a professional so that they can give you an
            accurate answer. Sometimes a well-maintained AC might be able to
            work longer, hence if the repair costs are not too high, you can
            continue to use the air-conditioner for a little while longer before
            replacing it.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
