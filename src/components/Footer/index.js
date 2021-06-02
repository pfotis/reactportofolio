import React from "react";
import { Row } from "../Grid";
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaRegFilePdf } from 'react-icons/fa';
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer font-small sticky bg-dark pt-4">
        <div className="container-fluid text-md-left">
            <Row>
                <hr className="clearfix w-100 d-md-none pb-3"/>
                <div className="col-md-12 mb-md-0 mb-3 links">
                    <a href="https://www.linkedin.com/in/peter-fotis-6a740a11a/" target="_blank" rel="noreferrer">
                        <SiLinkedin size={30} style={{ fill: 'white' }}/>
                    </a>
                    <a href="https://github.com/pfotis" target="_blank" rel="noreferrer">
                        <SiGithub size={30} style={{ fill: 'white' }}/>
                    </a>
                    <a href="./assets/download/resume.pdf" target="_blank" rel="noreferrer">
                        <FaRegFilePdf size={30} style={{ fill: 'white' }}/>
                    </a>
                </div>
            </Row>
        </div>
        <div className="footer-copyright text-center py-3">
            © 2021 Copyright: Peter Fotis
        </div>
    </footer>
  );
}

export default Footer;
