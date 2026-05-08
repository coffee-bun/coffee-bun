import React from "react";
import { useState } from 'react';
import "../styles/Education.css";
import Footer from "../components/footer";
import GradPic from "../assets/kyle-hover.jpg"; 
import PUPLogo from "../assets/pup-icon.png"; 
import SampleImage from "../assets/portfolio1colored.png"; 
import Cert1 from "../assets/certificates/1 Data Analyst 101.jpg"; 
import Cert2 from "../assets/certificates/1 Introduction to Excel.jpg"; 
import Cert3 from "../assets/certificates/Data Analytics Fundamentals.jpg"; 
import Cert4 from "../assets/certificates/Front End Certification.jpg"; 
import Cert5 from "../assets/certificates/introduction to CSS Certificate.jpg"; 
import Cert6 from "../assets/certificates/Introduction to Front End Development.jpg"; 
import Cert7 from "../assets/certificates/Introduction to HTML Certificate.jpg"; 
import Cert8 from "../assets/certificates/introduction to JavaScript Certificate.jpg"; 
import Cert9 from "../assets/certificates/mabl Skills Certification Advanced.jpg"; 
import Cert10 from "../assets/certificates/mabl Skills Certification Non-functional testing.jpg"; 
import Cert11 from "../assets/certificates/mabl Skills Certification.jpg"; 
import Cert12 from "../assets/certificates/Web Development Certificate.jpg"; 




function Education() {
  const [selectedImage, setSelectedImage] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

// Function to open modal with selected image
const openImageModal = (imageSrc, imageAlt) => {
  setSelectedImage({ src: imageSrc, alt: imageAlt });
  setIsModalOpen(true);
};

// Function to close modal
const closeImageModal = () => {
  setIsModalOpen(false);
  setSelectedImage(null);
};
  return (
    <>
      <div className="education-page">
        <div className="education-content">

        <div className="education-page1">

          {/* LEFT SIDE */}
          <div className="education-left">
            <img src={GradPic} alt="Graduate" className="graduate-img" />
            <img src={PUPLogo} alt="PUP Logo" className="pup-logo" />
          </div>

          {/* RIGHT SIDE */}
          <div className="education-right">

            <h2 className="education-title">
              UNIVERSITY EDUCATION
            </h2>

            <div className="education-divider"></div>

            <h1 className="university-name">
              Polytechnic University of the Philippines Quezon City Campus
            </h1>

            <p className="education-location">📍 Don Fabian St., Brgy. Commonwealth, Quezon City, Philippineses</p>
            <p className="education-year">🎓 Graduated: October 29 2025</p>

            <p className="education-description">
              The Polytechnic University of the Philippines is one of the leading state
              universities in the country, known for providing quality and accessible
              education. It has developed my technical skills, discipline, and adaptability
              through both academic and practical experiences, preparing me for real-world
              challenges in the field of technology.
            </p>

          </div>
        </div>
      </div>
    </div>
    <div className="education-page2">

  {/* TITLE */}
  <div className="education-page2-header">
    <h2>College Relevant Subjects</h2>
    <div className="education-page2-divider"></div>
  </div>

        {/* SUBJECTS */}
        <div className="education-subjects">

          {/* TECHNICAL SIDE */}
          <div className="subject-group">
            <h3>Technical Foundations</h3>

            <div className="subject-cards">

              <div className="subject-card">
                <h4>Computer Programming</h4>
                <p>
                  Built foundational coding skills and logical thinking.
                  <span className="subject-more">
                    {" "}Focused on writing efficient code and solving real-world problems through structured programming.
                  </span>
                </p>
              </div>

              <div className="subject-card">
                <h4>Data Communications and Networking</h4>
                <p>
                  Studied how systems communicate over networks.
                  <span className="subject-more">
                    {" "}Explored protocols, data transmission, and network infrastructure fundamentals.
                  </span>
                </p>
              </div>

              <div className="subject-card">
                <h4>Data Structures and Algorithms</h4>
                <p>
                  Learned efficient data organization and processing.
                  <span className="subject-more">
                    {" "}Applied sorting, searching, and optimization techniques in system development.
                  </span>
                </p>
              </div>

              <div className="subject-card">
                <h4>Integrative Programming and Technologies</h4>
                <p>
                  Combined multiple technologies into systems.
                  <span className="subject-more">
                    {" "}Developed full solutions by integrating APIs, frameworks, and tools.
                  </span>
                </p>
              </div>

              <div className="subject-card">
                <h4>Object-Oriented Programming</h4>
                <p>
                  Focused on modular and reusable code.
                  <span className="subject-more">
                    {" "}Implemented OOP principles such as encapsulation, inheritance, and abstraction.
                  </span>
                </p>
              </div>

              <div className="subject-card">
                <h4>IT Elective</h4>
                <p>
                  Explored specialized IT topics.
                  <span className="subject-more">
                    {" "}Gained additional skills depending on selected field and emerging technologies.
                  </span>
                </p>
              </div>

              <div className="subject-card">
                <h4>Database Administration</h4>
                <p>
                  Managed and organized data systems.
                  <span className="subject-more">
                    {" "}Designed databases, optimized queries, and ensured data integrity.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* DESIGN SIDE */}
          <div className="subject-group">
            <h3>Creative & Design Exploration</h3>

            <div className="subject-cards">

              <div className="subject-card">
                <h4>Multimedia</h4>
                <p>
                  Created digital and visual content.
                  <span className="subject-more">
                    {" "}Worked on graphics, video, and interactive media projects.
                  </span>
                </p>
              </div>

              <div className="subject-card">
                <h4>Reading Visual Arts</h4>
                <p>
                  Analyzed visual communication and design.
                  <span className="subject-more">
                    {" "}Developed interpretation skills for visual elements and artistic expression.
                  </span>
                </p>
              </div>

              <div className="subject-card">
                <h4>Art Appreciation</h4>
                <p>
                  Explored artistic styles and principles.
                  <span className="subject-more">
                    {" "}Enhanced creativity and understanding of design aesthetics.
                  </span>
                </p>
              </div>

              <div className="subject-card">
                <h4>Web Development</h4>
                <p>
                  Built responsive web interfaces.
                  <span className="subject-more">
                    {" "}Focused on UI/UX design and modern frontend technologies.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="education-page3">
        {/* HEADER */}
        <div className="education-page3-header">
          <h2>GROWTH & LEARNINGS</h2>
          <div className="education-page3-divider"></div>
        </div>

        {/* SECTION 1: WHAT I LEARNED */}
        <div className="learning-section">
          <h3>What I Learned</h3>
          <div className="learning-cards">
            <div className="learning-card">
              <h4>Technical Growth</h4>
              <p>
                Gained strong foundations in programming, system design, and problem-solving.
                Applied theoretical knowledge into practical applications through projects.
              </p>
            </div>
            <div className="learning-card">
              <h4>Adaptability</h4>
              <p>
                Learned how to adapt to different technologies, tools, and project requirements.
                Developed confidence in learning new skills independently.
              </p>
            </div>
            <div className="learning-card">
              <h4>Collaboration</h4>
              <p>
                Worked with teams to complete academic and system-based projects.
                Improved communication and coordination skills.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: VALUES */}
        <div className="values-section">
          <h3>Work Habits & Values Developed</h3>
          <div className="values-cards">
            <div className="value-card">Discipline</div>
            <div className="value-card">Consistency</div>
            <div className="value-card">Problem-Solving Mindset</div>
            <div className="value-card">Attention to Detail</div>
            <div className="value-card">Team Collaboration</div>
            <div className="value-card">Time Management</div>
          </div>
        </div>

        {/* SECTION 3: CLASS GALLERY */}
        <div className="gallery-section">
          <h3>Certification</h3>
          <div className="class-gallery">
            <div className="gallery-item" onClick={() => openImageModal(Cert1, "Class moment 1")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert1} alt="Class moment 1" />
                </div>
              </div>
            </div>
            <div className="gallery-item" onClick={() => openImageModal(Cert2, "Class moment 2")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert2} alt="Class moment 2" />
                </div>
              </div>
            </div>
            <div className="gallery-item" onClick={() => openImageModal(Cert6, "Class moment 3")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert6} alt="Class moment 3" />
                </div>
              </div>
            </div>
            <div className="gallery-item" onClick={() => openImageModal(Cert4, "Class moment 4")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert4} alt="Class moment 4" />
                </div>
              </div>
            </div>
                        <div className="gallery-item" onClick={() => openImageModal(Cert7, "Class moment 5")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert7} alt="Class moment 5" />
                </div>
              </div>
            </div>
                        <div className="gallery-item" onClick={() => openImageModal(Cert5, "Class moment 6")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert5} alt="Class moment 6" />
                </div>
              </div>
            </div>
                        <div className="gallery-item" onClick={() => openImageModal(Cert8, "Class moment 7")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert8} alt="Class moment 7" />
                </div>
              </div>
            </div>
                        <div className="gallery-item" onClick={() => openImageModal(Cert12, "Class moment 8")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert12} alt="Class moment 8" />
                </div>
              </div>
            </div>
                                    <div className="gallery-item" onClick={() => openImageModal(Cert11, "Class moment 9")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert11} alt="Class moment 9" />
                </div>
              </div>
            </div>
                                    <div className="gallery-item" onClick={() => openImageModal(Cert9, "Class moment 10")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert9} alt="Class moment 10" />
                </div>
              </div>
            </div>
                                    <div className="gallery-item" onClick={() => openImageModal(Cert10, "Class moment 11")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert10} alt="Class moment 11" />
                </div>
              </div>
            </div>
                                    <div className="gallery-item" onClick={() => openImageModal(Cert3, "Class moment 12")}>
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={Cert3} alt="Class moment 12" />
                </div>
              </div>
            </div>
          </div>
          <p className="gallery-description">
           A collection of certificates I received from various trainings, workshops, and learning experiences throughout my journey.
          </p>
        </div>
      </div>

{/* MODAL FOR ENLARGED IMAGE */}
{isModalOpen && selectedImage && (
  <div className="educ-image-modal" onClick={closeImageModal}>
    <div className="educ-modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="educ-modal-close" onClick={closeImageModal}>×</button>
      <img src={selectedImage.src} alt={selectedImage.alt} />
    </div>
  </div>
)}

      <Footer />
    </>
  );
}

export default Education;