import React from "react";

let Footer = () => {
  return (
    <>
      <div className="card bg-dark" data-bs-theme="dark">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">@2023 Ashutoshkumar Singh</h5>
          <p className="card-text">
            Github: Ashutoshbot1/portfolio Gmail: sashutoshkumar082@gmail.com
          </p>
          {/* <a href="/" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Footer;