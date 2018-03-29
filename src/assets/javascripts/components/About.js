import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="about-page text-center" data-page="about">
        <img
          src="/static/images/koa_logo.png"
          alt="Koa boilerplate is very cool"
          className="logo img-responsive"
        />
        <h2>
          Learn about {" "}
          <a href="https://github.com/koajs-templates/ejs">koajs-templates/ejs</a>
        </h2>
        <Link to="/">Go to home</Link>
        <h3>
          This template is generated by
          <a href="https://www.npmjs.com/package/koajs-cli">koajs-cli</a>
        </h3>
      </div>
    );
  }
}

export default About;