import React from "react";

const Footer = () => {
  return (
    <section className="mt-10 px-20 pb-5 max-md:px-4" id="section-contact">
      <div className="flex justify-between border-t-2 border-gray-light pt-10">
        {/* <p></p> */}
        <h4 className="mt-auto text-gray-light">
          @Navneet Kumar. All right reserver 2024
        </h4>
        <ul className="space-y-2 text-end *:*:transition-colors hover:*:*:text-secondary">
          <li>
            <a href="https://www.linkedin.com/in/navneet-k-7b5287262/">Linkedin</a>
          </li>
          <li>
            <a href="https://x.com/navneet__7744">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/navneetnavs">GitHub</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
