import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import { ArrowLeft, Briefcase, Mail, MapPin, Wallet } from "lucide-react";

const Jobs_Details = () => {
    const jobsData = useLoaderData()
    console.log(jobsData);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const job = {
        _id: "67f4a27e9c60a210700076b0",
        title: "Software Engineer",
        location: "Halishohor, Chittagong",
        jobType: "Hybrid",
        category: "Engineering",
        applicationDeadline: "2024-12-31",
        salaryRange: {
            min: 40000,
            max: 60000,
            currency: "bdt",
        },
        description:
            "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
        company: "Favorite IT",
        requirements: ["JavaScript", "React", "Node.js", "MongoDB"],
        responsibilities: [
            "Develop and maintain software",
            "Collaborate with the team",
            "Participate in code reviews",
        ],
        status: "active",
        hr_email: "hr@techsolutions.com",
        hr_name: "Farhan Rahman",
        company_logo: "https://i.ibb.co/mXD5MNf/facebook.png",
    };
    return (
        <div>
            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-10">
                <div className="card bg-base-100 shadow-xl rounded-2xl">
                    <div className="card-body p-6 sm:p-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <img
                                src={jobsData.company_logo}
                                alt={jobsData.company}
                                className="w-20 h-20 object-contain rounded-xl border"
                            />
                            <div className="flex-1">
                                <h1 className="text-3xl font-bold text-orange-500 mb-1">
                                    {jobsData.title}
                                </h1>
                                <p className="text-gray-600 text-sm">{jobsData.company}</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <div className="badge badge-outline flex items-center gap-1">
                                        <MapPin className="w-4 h-4" /> {jobsData.location}
                                    </div>
                                    <div className="badge badge-outline flex items-center gap-1">
                                        <Briefcase className="w-4 h-4" /> {jobsData.jobType}
                                    </div>
                                    <div className="badge badge-outline flex items-center gap-1">
                                        <Wallet className="w-4 h-4" /> Salary: {jobsData.salaryRange.min.toLocaleString()} - {jobsData.salaryRange.max.toLocaleString()} {jobsData.salaryRange.currency.toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-6">
                            <section>
                                <h2 className="text-xl font-semibold text-orange-500 mb-2">Job Description</h2>
                                <p className="text-gray-700 leading-relaxed">{jobsData.description}</p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-orange-500 mb-2">Responsibilities</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {jobsData.responsibilities.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-orange-500 mb-2">Requirements</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {jobsData.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-orange-500 mb-2">Application Details</h2>
                                <div className="text-gray-700">
                                    <p>Deadline: {jobsData.applicationDeadline}</p>
                                    <p className="flex items-center gap-1">
                                        <Mail className="w-4 h-4" /> {jobsData.hr_email} ({jobsData.hr_name})
                                    </p>
                                </div>
                            </section>
                            <Link to={"/showAllJobs"}><button className='hover:text-orange-500 flex mt-2'><span>  <ArrowLeft className='w-4' /></span> Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs_Details;