import React from 'react';
import './index.css';
import TopBar from "../../../templates/topBar";
import {Link} from "react-router-dom"; // Make sure to create a corresponding CSS file for styling

const ProjectsPage = () => {
    // Example project data (replace with actual data from your database or API)
    const projects = [
        {
            id: 1,
            name: 'Residential Complex',
            location: 'City, State',
            duration: '2019 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
            image: 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2019/11/27/661527/413059/residential_complex_or_hotel_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4259187_o.png', // Image file name (you need to have the image available in your project)
        },
        {
            id: 2,
            name: 'Commercial Building',
            location: 'City, State',
            duration: '2018 - 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
            image: 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/04/04/507091/460906/residential_commercial_building_lowpoly_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4728053.jpg',
        },
        {
            id: 3,
            name: 'Express way',
            location: 'Horana, Colombo',
            duration: '2021 - 2023',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
            image: 'https://images.unsplash.com/photo-1496055401924-5e7fdc885742?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        // Add more projects as needed
    ];

    return (
        <>
            <TopBar/>
            <div className="projects-page">
                <h1>Our Projects</h1>
                <div className="project-list">
                    {projects.map((project) => (
                        <div key={project.id} className="project-item">
                            <Link to={`/projects/${project.id}`}>
                                <img src={project.image} alt={project.name} />
                            </Link>
                            <div className="project-details">
                                <h2>{project.name}</h2>
                                <p>{project.location}</p>
                                <p>{project.duration}</p>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;
