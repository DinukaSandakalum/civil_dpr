import React from 'react';
import './index.css';
import TopBar from "../../../templates/topBar";

const ServicesPage = () => {
    return (
        <>
            <TopBar/>
            <div className="services-page">
                <h1>Our Services</h1>
                <div className="service-list">
                    <div className="service-item">
                        <h2>Consultation & Planning</h2>
                        <p>We provide expert consultation and planning services to help bring your vision to life. Our team works closely with you to understand your needs and outline a plan that meets your objectives and budget.</p>
                    </div>

                    <div className="service-item">
                        <h2>Design & Engineering</h2>
                        <p>Our in-house design and engineering team offers innovative solutions tailored to your project's requirements. We utilize the latest technology to ensure efficiency, sustainability, and durability in our designs.</p>
                    </div>

                    <div className="service-item">
                        <h2>Construction Management</h2>
                        <p>With a focus on quality and timing, our construction management services ensure your project is completed on schedule and within budget. Our experienced managers coordinate all aspects of the construction process, from material procurement to labor management.</p>
                    </div>

                    <div className="service-item">
                        <h2>Renovation & Expansion</h2>
                        <p>Whether you're looking to renovate an existing space or expand your premises, we offer comprehensive solutions that include the latest construction techniques and materials, ensuring a balance between aesthetics and functionality.</p>
                    </div>

                    <div className="service-item">
                        <h2>Safety & Compliance</h2>
                        <p>Safety is our top priority. We adhere to strict safety standards and regulations to ensure a safe working environment for our team and the communities we serve. Compliance with local and national building codes is guaranteed.</p>
                    </div>

                    <div className="service-item">
                        <h2>Post-Construction Services</h2>
                        <p>Our commitment to your project continues even after construction is complete. We offer post-construction services, including maintenance, inspections, and warranty support, to ensure your satisfaction and peace of mind.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;