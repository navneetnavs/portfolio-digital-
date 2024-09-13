import React from "react";
import OutlinedButton from "../../buttons/Outlined";

const Collaboration = () => {
  return (
    <div className="px-20 max-md:px-4" id="section-collab">
      <div className="mt-10 flex w-full flex-col items-center px-20 py-12 text-center">
        <h3 className="text-xl font-medium text-secondary">Collaboration</h3>
        <h1 className="text-9xl font-medium tracking-tighter max-md:text-5xl">
          Let&apos;s talk to <br />
          Collaboration
        </h1>
        <div className="mt-10 flex gap-5 max-md:flex-col">
          <OutlinedButton
            title="Get in touch"
            className="border-secondary bg-secondary font-medium text-black hover:text-white"
          />
          <OutlinedButton title="Hire me now" className="font-medium" />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
