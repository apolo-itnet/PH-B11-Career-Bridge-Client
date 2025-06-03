import React, { use } from "react";
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
  Building,
} from "lucide-react";
import JobAddStepper from "./JobAddStepper";
import axios from "axios";
import { showSweetNotify } from "../../Utility/notification";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

const AddJob = () => {
  const { user } = use(AuthContext);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    //process salary range data
    const { salaryMin, salaryMax, salaryCurrency, ...newJob } = data;
    newJob.salaryRange = { salaryMin, salaryMax, salaryCurrency };

    //process requirements
    const requirementsString = newJob.requirements;
    const requirementsSpace = requirementsString.split(",");
    const requireSpaceTrim = requirementsSpace.map((req) => req.trim());
    newJob.requirements = requireSpaceTrim;

    //
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    // console.log(newJob);

    //save job to the database
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          // console.log(res);
          showSweetNotify("Successfully added you job post");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-xl shadow-md border border-gray-300  mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          📝 Post a New Job
        </h2>
        <form onSubmit={handleAddJob} className="p-6 space-y-5">
          {/* Job Title */}
          <fieldset>
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
          </fieldset>

          {/* Company Info */}
          <fieldset>
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
          </fieldset>

          <fieldset>
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
          </fieldset>

          {/* Location */}
            <fieldset className="w-full">
              <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Job Location
              </label>
              <div className="flex justify-between gap-4">
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Bashundara R/A..."
                  className="input w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
                />
                <select
                  name="district"
                  defaultValue={"Select District"}
                  className="select w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
                  required
                >
                  <option disabled>Select District</option>
                  <option value="Onsite">Dhaka</option>
                  <option value="Remote">Chittagong</option>
                  <option value="Hybrid">Khulna</option>
                  <option value="Hybrid">Rajshahi</option>
                  <option value="Hybrid">Sylhet</option>
                </select>
              </div>
            </fieldset>

          {/* Job Type & Status */}
          <div className="flex justify-between items-center gap-4">
            {/* Type */}
            <fieldset className="w-full">
              <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                Job Type
              </label>
              <select
                name="jobType"
                defaultValue={"Select Job Type"}
                className="select w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
                required
              >
                <option disabled>Select Job Type</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </fieldset>

            {/* Status*/}
            <fieldset className="w-full">
              <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-600" />
                Job Status
              </label>
              <select
                name="jobStatus"
                defaultValue={"Select Job Status"}
                className="select w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
                required
              >
                <option disabled>Select Job Status</option>
                <option value="Active">Active</option>
                <option value="Hired">Hired</option>
                <option value="Pending">Pending</option>
                <option value="Interview">Interview</option>
              </select>
            </fieldset>
          </div>

          {/* Job Category */}
          <fieldset>
            <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
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
              <option value={"Engineering"}>Engineering</option>
              <option value={"UI/UX Design"}>UI/UX Design</option>
              <option value={"Digital Marketing"}>Digital Marketing</option>
              <option value={"Developer"}>Developer</option>
              <option value={"Finance"}>Finance</option>
              <option value={"Customer Support"}>Customer Support</option>
              <option value={"Operations"}>Operations</option>
              <option value={"HR"}>HR</option>
              <option value={"Legal"}>Legal</option>
              <option value={"Others"}>Others</option>
            </select>
          </fieldset>

          {/* Application Timeline */}
          <div className="grid grid-cols-2 gap-4">
            <fieldset>
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
            </fieldset>

            <fieldset>
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
            </fieldset>
          </div>

          {/* Salary Range */}
          <fieldset>
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
          </fieldset>

          {/* Requirements */}
          <fieldset>
            <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
              <ListChecks className="w-4 h-4 text-blue-600" />
              Requirements
            </label>
            <input
              name="requirements"
              required
              placeholder="e.g. JavaScript, React, Node.js"
              className="input w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
            />
          </fieldset>

          {/* Responsibilities */}
          <fieldset>
            <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-blue-600" />
              Responsibilities
            </label>
            <input
              type="text"
              name="responsibilities"
              required
              placeholder="e.g. Develop software, collaborate with team"
              className="input w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
            />
          </fieldset>

          {/* Description */}
          <fieldset>
            <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-blue-600" />
              Description
            </label>
            <textarea
              type="text"
              name="description"
              required
              placeholder="e.g. Develop software, collaborate with team"
              className="textarea w-full h-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              rows={3}
            ></textarea>
          </fieldset>

          {/* HR Info */}
          <div className="flex justify-between items-center  gap-4">
            <fieldset className="w-full">
              <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                HR Name
              </label>

              <input
                type="text"
                name="hr_name"
                defaultValue={user?.displayName}
                readOnly
                required
                placeholder="HR Name"
                className="input w-full rounded-lg bg-gray-200 border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300 cursor-not-allowed"
              />
            </fieldset>

            <fieldset className="w-full">
              <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                HR Email
              </label>
              <input
                type="email"
                name="hr_email"
                defaultValue={user?.email}
                readOnly
                required
                placeholder="HR Email"
                className="input w-full rounded-lg bg-gray-200 border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300 cursor-not-allowed"
              />
            </fieldset>

            <fieldset className="w-full">
              <label className=" mb-1 text-sm font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                HR Email (Optional)
              </label>
              <input
                type="email"
                name="hr_email_optional"
                required
                placeholder="HR Email"
                className="input w-full rounded-lg border focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:duration-300"
              />
            </fieldset>
          </div>

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
