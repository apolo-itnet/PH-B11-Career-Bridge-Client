import React from "react";
import {
  Briefcase,
  MapPin,
  CalendarDays,
  DollarSign,
  Star,
  ListChecks,
  User,
  Mail,
  Building2,
  Tags,
  ClipboardList,
  LandPlot,
  Image,
} from "lucide-react";
import JobAddStepper from "./JobAddStepper";

const AddJob = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-xl shadow-md border border-gray-300  mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          📝 Post a New Job
        </h2>
        <form className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow space-y-5">
          {/* Job Title */}
          <div>
            <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Job Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter Job Title"
              className="input w-full rounded-lg border shadow-none focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
            />
          </div>

          {/* Location */}
          <div>
            <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              Job Location
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="e.g. Halishohor, Chittagong"
              className="input w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
            />
          </div>

          {/* Job Type */}
          <div>
            <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              Job Type
            </label>
            <select
              name="jobType"
              className="select w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              required
            >
              <option disabled value="">
                Select Type
              </option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Job Category */}
          <div>
            <label className=" mb-1 text-sm font-semibold">
              <Tags className="w-4 h-4 text-blue-600" />
              Category
            </label>
            <select
              defaultValue={"Select a Category"}
              name="jobCategory"
              required
              className="select w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
            >
              <option disabled={true}>Select a Category</option>
              <option>Engineering</option>
              <option>UI/UX Design</option>
              <option>Digital Marketing</option>
              <option>Developer</option>
              <option>Finance</option>
              <option>Customer Support</option>
              <option>Operations</option>
              <option>HR</option>
              <option>Legal</option>
              <option>Others</option>
            </select>
          </div>

          {/* Application Timeline */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-blue-600 " />
                Application Start Date
              </label>
              <input
                type="date"
                name="startDate"
                required
                className="input w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              />
            </div>
            <div>
              <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-blue-600" />
                Application Deadline
              </label>
              <input
                type="date"
                name="applicationDeadline"
                required
                className="input w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              />
            </div>
          </div>

          {/* Salary Range */}
          <div>
            <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-blue-600" />
              Salary Range
            </label>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="number"
                name="salaryMin"
                required
                placeholder="Min Salary"
                className="input rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              />
              <input
                type="number"
                name="salaryMax"
                required
                placeholder="Max Salary"
                className="input rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              />
              <select
                defaultValue={"Select a Currency"}
                name="salaryCurrency"
                required
                className="select rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              >
                <option disabled>Select a Currency</option>
                <option value="bdt">BDT</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="cad">CAD</option>
                <option value="inr">INR</option>
              </select>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
              <ListChecks className="w-4 h-4 text-blue-600" />
              Requirements
            </label>
            <textarea
              name="requirements"
              required
              placeholder="e.g. JavaScript, React, Node.js"
              className="textarea w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              rows={3}
            ></textarea>
          </div>

          {/* Responsibilities */}
          <div>
            <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-blue-600" />
              Responsibilities
            </label>
            <textarea
              name="responsibilities"
              required
              placeholder="e.g. Develop software, collaborate with team"
              className="textarea w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              rows={3}
            ></textarea>
          </div>

          {/* HR Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                HR Name
              </label>

              <input
                type="text"
                name="hr_name"
                required
                placeholder="HR Name"
                className="input rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              />
            </div>

            <div>
              <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                HR Email
              </label>
              <input
                type="email"
                name="hr_email"
                required
                placeholder="HR Email"
                className="input rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              />
            </div>
          </div>

          {/* Company Info */}
          <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
            <LandPlot className="w-4 h-4 text-blue-600" />
            Company Name
          </label>
          <input
            type="text"
            name="company"
            required
            placeholder="Company Name"
            className="input w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
          />

          <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
            <Image className="w-4 h-4 text-blue-600" />
            Company Logo
          </label>
          <input
            type="url"
            name="company_logo"
            required
            placeholder="Company Logo URL"
            className="input w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
          />

          <button
            type="submit"
            className="btn btn-primary inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit Job
          </button>
        </form>
      </div>
      <div className="py-10">
        <JobAddStepper />
      </div>
    </div>
  );
};

export default AddJob;
