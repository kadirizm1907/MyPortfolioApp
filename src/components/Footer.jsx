/* eslint-disable jsx-a11y/anchor-has-content */
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div style={{ marginTop: "10rem" }}>
      <nav className="justify-content-around m-2 fixed-bottom bg-primary rounded-2 d-flex align-items-center kadir">
        <div className="text-light text-center ">
          Created by Kadir Y.
          <span className="text-light opacity-50 ms-3">
            All rights reserved {new Date().getFullYear()}
          </span>
        </div>
        <div id="footer-items" className="d-flex text-white display-6 align-items-centerm-2 p-3 justify-content-between">
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="m-2 text-white" />
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareXTwitter className="m-2 text-white" />
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord className="m-2 text-white" />
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="m-2 text-white" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Footer;