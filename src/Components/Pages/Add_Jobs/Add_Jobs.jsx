import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';


const Add_Jobs = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);

    const mutation = useMutation({
        mutationFn: (data) => toast.promise(
            axios.post('http://localhost:4000/allJobs', data),
            {
                loading: 'Submitting...',
                success: 'Submitted successfully!',
                error: 'Submission failed.',
            }
        )
    })


    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;


        const addedJobs = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            title: form.title.value,
            location: form.location.value,
            jobType: form.jobType.value,
            category: form.category.value,
            applicationDeadline: form.applicationDeadline.value,
            description: form.description.value,
            responsibilities: form.responsibilities.value
                .split('\n')
                .map((item) => item.trim())
                .filter((item) => item),
            requirements: form.requirements.value
                .split('\n')
                .map((item) => item.trim())
                .filter((item) => item),
            salaryRange: {
                min: parseInt(form.min_salary.value),
                max: parseInt(form.max_salary.value),
                currency: form.currency.value,
            },
        };
        mutation.mutate(addedJobs, {
            onSuccess: () => {
                form.reset();
            }
        });

    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white shadow-lg p-6">
                <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">Add New Job</h2>
                <form onSubmit={handleSubmitForm} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="title" type="text" placeholder="Job Title" required className="border p-2 w-full" />
                        <input name="location" type="text" placeholder="Location" required className="border p-2 w-full" />
                        <input name="jobType" type="text" placeholder="Job Type" required className="border p-2 w-full" />
                        <input name="category" type="text" placeholder="Category" required className="border p-2 w-full" />
                        <input name="applicationDeadline" type="date" required className="border p-2 w-full" />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Job Description</h3>
                        <textarea name="description" placeholder="Description" rows={3} required className="border p-2 w-full mt-2" />
                        <textarea name="responsibilities" placeholder="Responsibilities (one per line)" rows={3} className="border p-2 w-full mt-2" />
                        <textarea name="requirements" placeholder="Requirements (one per line)" rows={3} className="border p-2 w-full mt-2" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input name="min_salary" min={0} type="number" placeholder="Minimum Salary" required className="border p-2 w-full" />
                        <input name="max_salary" min={0} type="number" placeholder="Maximum Salary" required className="border p-2 w-full" />
                        <input name="currency" type="text" placeholder="Currency (e.g., USD)" required className="border p-2 w-full" />
                    </div>

                    <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 transition-all">
                        Submit Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Add_Jobs;