import React, { useState } from 'react';
import { Briefcase, MapPin, CalendarDays, DollarSign, User, Mail } from 'lucide-react';

const JobAddStepper = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    jobType: '',
    category: '',
    applicationStart: '',
    applicationDeadline: '',
    salaryMin: '',
    salaryMax: '',
    currency: 'bdt',
    company: '',
    description: '',
    requirements: '',
    responsibilities: '',
    status: 'active',
    hr_email: '',
    hr_name: '',
    company_logo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Post formData to backend here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Post a Job</h2>

      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-6">
        <span className={`font-semibold ${step === 1 ? 'text-blue-600' : ''}`}>Step 1: Job Info</span>
        <span className={`font-semibold ${step === 2 ? 'text-blue-600' : ''}`}>Step 2: Company Info</span>
      </div>

      {/* Step 1: Job Info */}
      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Title */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              <Briefcase size={16} className="inline mr-1" />
              Job Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter Job Title"
              className="input w-full rounded-lg border shadow-none focus:border-blue-500 focus:ring-blue-500"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              <MapPin size={16} className="inline mr-1" />
              Job Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="e.g. Halishohor, Chittagong"
              className="input w-full rounded-lg border shadow-none focus:border-blue-500"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Job Type</label>
            <select
              name="jobType"
              className="select w-full rounded-lg border"
              value={formData.jobType}
              onChange={handleChange}
              required
            >
              <option disabled value="">Select Type</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Job Category</label>
            <select
              name="category"
              className="select w-full rounded-lg border"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option disabled value="">Select Category</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Design</option>
              <option>Data Science</option>
              <option>Sales</option>
              <option>Finance</option>
              <option>Customer Support</option>
              <option>Education</option>
              <option>Legal</option>
              <option>Human Resource</option>
            </select>
          </div>

          {/* Application Start */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              <CalendarDays size={16} className="inline mr-1" />
              Application Start
            </label>
            <input
              type="date"
              name="applicationStart"
              className="input w-full rounded-lg border"
              value={formData.applicationStart}
              onChange={handleChange}
              required
            />
          </div>

          {/* Application Deadline */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              <CalendarDays size={16} className="inline mr-1" />
              Application Deadline
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input w-full rounded-lg border"
              value={formData.applicationDeadline}
              onChange={handleChange}
              required
            />
          </div>

          {/* Salary */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold">Min Salary</label>
              <input
                type="number"
                name="salaryMin"
                placeholder="40000"
                className="input w-full rounded-lg border"
                value={formData.salaryMin}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">Max Salary</label>
              <input
                type="number"
                name="salaryMax"
                placeholder="60000"
                className="input w-full rounded-lg border"
                value={formData.salaryMax}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">Currency</label>
              <select
                name="currency"
                className="select w-full rounded-lg border"
                value={formData.currency}
                onChange={handleChange}
              >
                <option value="bdt">BDT</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
                <option value="gbp">GBP</option>
                <option value="aud">AUD</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Company Info */}
      {step === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Company */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="e.g. Favorite IT"
              className="input w-full rounded-lg border"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          {/* HR Name */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              <User size={16} className="inline mr-1" />
              HR Name
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="Farhan Rahman"
              className="input w-full rounded-lg border"
              value={formData.hr_name}
              onChange={handleChange}
            />
          </div>

          {/* HR Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              <Mail size={16} className="inline mr-1" />
              HR Email
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="hr@company.com"
              className="input w-full rounded-lg border"
              value={formData.hr_email}
              onChange={handleChange}
            />
          </div>

          {/* Logo URL */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Company Logo URL</label>
            <input
              type="url"
              name="company_logo"
              placeholder="https://..."
              className="input w-full rounded-lg border"
              value={formData.company_logo}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-semibold">Job Description</label>
            <textarea
              name="description"
              placeholder="Job description goes here..."
              className="textarea w-full rounded-lg border"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
          </div>

          {/* Requirements */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-semibold">Requirements (comma separated)</label>
            <input
              type="text"
              name="requirements"
              placeholder="JavaScript, React, Node.js"
              className="input w-full rounded-lg border"
              value={formData.requirements}
              onChange={handleChange}
            />
          </div>

          {/* Responsibilities */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-semibold">Responsibilities (comma separated)</label>
            <input
              type="text"
              name="responsibilities"
              placeholder="Develop, Review, Collaborate"
              className="input w-full rounded-lg border"
              value={formData.responsibilities}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
          >
            Back
          </button>
        )}
        {step < 2 ? (
          <button
            type="button"
            onClick={handleNext}
            className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit Job
          </button>
        )}
      </div>
    </form>
  );
};

export default JobAddStepper;
