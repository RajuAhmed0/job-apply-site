import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const JobApply = ({ user, job }) => {
    const applyData = {
        career_summary: '', skills: '', experience: '', reason_to_hire: '',
        min_salary: '', max_salary: '', portfolio_link: '',
        linkedin_link: '', resume_link: '',
        checkboxes: {
            ready_to_work: false,
            skills_aligned: false,
            confident_in_role: false,
        }
    };

    const [formData, setFormData] = useState(applyData);

    const handleChange = ({ target: { name, value, type, checked } }) => {
        if (name in formData.checkboxes) {
            setFormData(prev => ({
                ...prev,
                checkboxes: { ...prev.checkboxes, [name]: checked }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/applications', { user, job, application: formData });
            toast.success('Application submitted successfully!');
            setFormData(applyData); 
        } catch (err) {
            console.error(err);
            toast.error('Something went wrong. Try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl my-10 space-y-6">
            <h2 className="text-2xl font-bold text-orange-500">Job Application Form</h2>
     
            <textarea
                name="career_summary"
                rows="4"
                placeholder="Career Summary"
                onChange={handleChange}
                value={formData.career_summary}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
            />

            <input
                type="text"
                name="skills"
                placeholder="Skills (comma separated)"
                onChange={handleChange}
                value={formData.skills}
                className="w-full border rounded-lg p-3"
                required
            />

            <input
                type="text"
                name="experience"
                placeholder="Your experience"
                onChange={handleChange}
                value={formData.experience}
                className="w-full border rounded-lg p-3"
                required
            />

            <textarea
                name="reason_to_hire"
                rows="3"
                placeholder="Why should we hire you?"
                onChange={handleChange}
                value={formData.reason_to_hire}
                className="w-full border rounded-lg p-3"
                required
            />

            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="number"
                    name="min_salary"
                    min={0}
                    placeholder="Minimum Salary"
                    onChange={handleChange}
                    value={formData.min_salary}
                    className="w-full border rounded-lg p-3"
                    required
                />
                <input
                    type="number"
                    name="max_salary"
                    min={0}
                    placeholder="Maximum Salary"
                    onChange={handleChange}
                    value={formData.max_salary}
                    className="w-full border rounded-lg p-3"
                    required
                />
            </div>

            <input
                type="url"
                name="portfolio_link"
                placeholder="Portfolio Link"
                onChange={handleChange}
                value={formData.portfolio_link}
                className="w-full border rounded-lg p-3"
            />
            <input
                type="url"
                name="linkedin_link"
                placeholder="LinkedIn Link"
                onChange={handleChange}
                value={formData.linkedin_link}
                className="w-full border rounded-lg p-3"
            />
            <input
                type="url"
                name="resume_link"
                placeholder="Resume Link"
                onChange={handleChange}
                value={formData.resume_link}
                className="w-full border rounded-lg p-3"
                required
            />

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
