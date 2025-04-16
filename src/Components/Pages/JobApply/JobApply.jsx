import React, { useState } from 'react';
import axios from 'axios';

const JobApply = ({ user, job }) => {
    const [formData, setFormData] = useState({
        career_summary: '',
        skills: '',
        experience: '',
        reason_to_hire: '',
        min_salary: '',
        max_salary: '',
        portfolio_link: '',
        linkedin_link: '',
        resume_link: '',
        checkboxes: {
            ready_to_work: false,
            skills_aligned: false,
            confident_in_role: false
        }
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name in formData.checkboxes) {
            setFormData((prev) => ({
                ...prev,
                checkboxes: {
                    ...prev.checkboxes,
                    [name]: checked
                }
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            user,
            job,
            application: formData
        };

        try {
            await axios.post('/apply', payload);
            alert('Application submitted successfully!');
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl my-10 space-y-6">
            <h2 className="text-2xl font-bold text-orange-500">Job Application Form</h2>

            {/* Career Summary */}
            <textarea
                name="career_summary"
                rows="4"
                placeholder="Career Summary"
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
            />

            {/* Skills */}
            <input
                type="text"
                name="skills"
                placeholder="Skills (comma separated)"
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
            />

            {/* Experience */}
            <input
                type="text"
                name="experience"
                placeholder="Your experience"
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
            />

            {/* Reason to hire */}
            <textarea
                name="reason_to_hire"
                rows="3"
                placeholder="Why should we hire you?"
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
            />

            {/* Salary Range */}
            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="number"
                    name="min_salary"
                    min={0}
                    placeholder="Minimum Salary"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    required
                />
                <input
                    type="number"
                    name="max_salary"
                    min={0}
                    placeholder="Maximum Salary"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                    required
                />
            </div>

            {/* Links */}
            <input
                type="url"
                name="portfolio_link"
                placeholder="Portfolio Link"
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
            />
            <input
                type="url"
                name="linkedin_link"
                placeholder="LinkedIn Link"
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
            />
            <input
                type="url"
                name="resume_link"
                placeholder="Resume Link"
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
            />

            {/* Checkboxes */}
            <div className="space-y-2">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="ready_to_work"
                        checked={formData.checkboxes.ready_to_work}
                        onChange={handleChange}
                        className="accent-orange-500"
                    />
                    Ready to work on preferred location
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="skills_aligned"
                        checked={formData.checkboxes.skills_aligned}
                        onChange={handleChange}
                        className="accent-orange-500"
                    />
                    My skills are aligned with job requirement
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="confident_in_role"
                        checked={formData.checkboxes.confident_in_role}
                        onChange={handleChange}
                        className="accent-orange-500"
                    />
                    I believe I can resolve all the job responsibilities
                </label>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
                Apply
            </button>
        </form>
    );
};

export default JobApply;
