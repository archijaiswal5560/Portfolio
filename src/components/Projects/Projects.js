import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/MMA.png";
import shiptracker from "../../Assets/Projects/Shiptracker.png";
import MMA from "../../Assets/Projects/MMA.png";
import smartgroww from "../../Assets/Projects/smartgroww.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shiptracker}
              isBlog={false}
              title="Ship Tracker"
              description="Engineered a real-time ship tracking system using MarineTraffic API, providing instant ETA updates for over 1,000 vessels daily.Implemented role-based access control, securing sensitive maritime data for multiple user roles.Optimized front-end (React.js) and back-end (Express.js) workflows, achieving 30% faster request processing on AWS."
              ghLink=""
              demoLink="https://track.shipsmithgroup.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MMA}
              isBlog={false}
              title="MMA"
              description="Developed a full-stack maritime course management platform supporting 500+ simultaneous enrollments with secure payment processing.Enhanced real-time seat tracking and dynamic discount logic, improving enrollment efficiency and customer satisfaction.My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink="https://mmakolkata.marineorg.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartgroww}
              isBlog={false}
              title="SmartGrow"
              description="AI-powered waterless indoor plantation system. Developed a modular indoor plantation system leveraging hydroporation-based watering and sensor automation (moisture, pH, light, temperature) for optimal plant growth. Integrated an AI-powered web application for real-time monitoring, plant health analysis, and growth recommendations."
              ghLink="https://github.com/archijaiswal5560/SmartGroww"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
