import React from "react";
import { 
  FiSearch, FiUsers, FiMail, FiPhone, FiList, FiSettings, FiLock, FiMapPin 
} from "react-icons/fi";
import { AiOutlineAppstore, AiOutlineUser } from "react-icons/ai";
import { BsPeople, BsGraphUp, BsBuilding } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";

function App() {
  return (
    <div className="flex h-screen bg-[#2b2b2d] text-white">
      {/* Sidebar */}
      <div className="w-64 bg-[#2b2b2d] border-r border-black/40 flex flex-col">
        <div className="p-4 text-xl font-bold">☸</div>
        <nav className="flex-1 p-2 space-y-1 text-gray-300">
          <button className="flex items-center w-full px-3 py-2 rounded hover:bg-[#3a3a3c]">
            For you
          </button>
          <button className="flex items-center w-full px-3 py-2 rounded hover:bg-[#3a3a3c]">
            Tasks
          </button>
          <button className="flex items-center w-full px-3 py-2 rounded hover:bg-[#3a3a3c]">
            Workflows
          </button>

          <div className="text-xs uppercase px-2 mt-4 mb-2">Prospect</div>
          <button className="flex items-center w-full px-3 py-2 rounded bg-white text-black font-semibold">
            <FiSearch className="mr-3" /> Find people
          </button>
          <button className="flex items-center w-full px-3 py-2 rounded bg-[#2b2b2d] hover:bg-[#3a3a3c]">
            <BsPeople className="mr-3" /> Find companies
          </button>

          <div className="text-xs uppercase px-2 mt-4 mb-2">Outreach</div>
          <button className="flex items-center w-full px-3 py-2 rounded bg-[#2b2b2d] hover:bg-[#3a3a3c]">
            <FiMail className="mr-3" /> Emails
          </button>
          <button className="flex items-center w-full px-3 py-2 rounded bg-[#2b2b2d] hover:bg-[#3a3a3c]">
            <FiPhone className="mr-3" /> Calls
          </button>
          <button className="flex items-center w-full px-3 py-2 rounded bg-[#2b2b2d] hover:bg-[#3a3a3c]">
            <FiUsers className="mr-3" /> Meetings
          </button>

          <div className="text-xs uppercase px-2 mt-4 mb-2">Manage</div>
          <button className="flex items-center w-full px-3 py-2 rounded bg-[#2b2b2d] hover:bg-[#3a3a3c]">
            <FiList className="mr-3" /> Lists
          </button>
          <button className="flex items-center w-full px-3 py-2 rounded bg-[#2b2b2d] hover:bg-[#3a3a3c]">
            <BsGraphUp className="mr-3" /> Deals
          </button>
          <button className="flex items-center w-full px-3 py-2 rounded bg-[#2b2b2d] hover:bg-[#3a3a3c]">
            <AiOutlineAppstore className="mr-3" /> Data enrichment
          </button>

          {/* Space before upgrade */}
          <div className="mt-6 px-3 py-2 bg-yellow-400 text-black rounded font-semibold cursor-pointer">
            Upgrade
          </div>

          <button className="flex items-center w-full mt-4 px-3 py-2 rounded bg-[#2b2b2d] hover:bg-[#3a3a3c]">
            <BsGraphUp className="mr-3" /> Analytics
          </button>
          <button className="flex items-center w-full px-3 py-2 rounded bg-[#2b2b2d] hover:bg-[#3a3a3c]">
            <FiSettings className="mr-3" /> Admin Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-3 border-b border-black/40 bg-[#2b2b2d]">
          <input
            type="text"
            placeholder="Search Apollo..."
            className="bg-[#2b2b2d] px-3 py-2 rounded-lg text-sm w-1/3 focus:outline-none"
          />
          <div className="flex items-center space-x-3">
            <button className="bg-[#2b2b2d] px-4 py-2 rounded-lg">Assistant</button>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 font-bold">
              CH
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 p-5 overflow-auto">
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-lg font-semibold">Find people</h1>
            <div className="flex space-x-2">
              <button className="bg-[#2b2b2d] px-3 py-1 rounded-lg text-sm">Import</button>
              <button className="bg-[#2b2b2d] px-3 py-1 rounded-lg text-sm">Sort</button>
              <button className="bg-[#2b2b2d] px-3 py-1 rounded-lg text-sm">Search settings</button>
            </div>
          </div>

          <div className="flex gap-4 h-full">
            {/* Filters with icons */}
            <div className="w-64 bg-[#2b2b2d] border border-black/20 rounded-2xl p-4 space-y-4 text-sm">
              <div className="flex items-center gap-2"><FiList /> Lists</div>
              <div className="flex items-center gap-2"><AiOutlineUser /> Persona</div>
              <div className="flex items-center gap-2"><FiMail /> Email Status</div>
              <div className="flex items-center gap-2"><FaUserTag /> Job Titles</div>
              <div className="flex items-center gap-2"><BsPeople /> People Lookalikes</div>
              <div className="flex items-center gap-2"><BsBuilding /> Company</div>
              <div className="flex items-center gap-2"><BsGraphUp /> Company Lookalikes</div>
              <div className="flex items-center gap-2"><FiMapPin /> Location</div>
              <button className="text-xs mt-2">More Filters</button>
            </div>

            {/* Results Section */}
            <div className="flex-1 bg-[#2b2b2d] border border-black/20 rounded-2xl flex flex-col">
              {/* Metrics Row */}
              <div className="flex gap-4 mb-6 w-full p-6">
                <div className="bg-[#232324] rounded-lg p-4 text-center flex-1 border border-gray-700">
                  <div className="text-xl font-bold">234.2M</div>
                  <div className="text-sm text-gray-400">Total</div>
                </div>
                <div className="bg-[#232324] rounded-lg p-4 text-center flex-1 border border-gray-700">
                  <div className="text-xl font-bold">234.2M</div>
                  <div className="text-sm text-gray-400">Net New</div>
                </div>
                <div className="bg-[#232324] rounded-lg p-4 text-center flex-1 border border-gray-700">
                  <div className="text-xl font-bold">26</div>
                  <div className="text-sm text-gray-400">Saved</div>
                </div>
              </div>

              {/* Quick Filters Box */}
              <div className="bg-[#232324] rounded-lg border border-gray-700 p-5 w-full flex-1 mx-6 mb-6">
                <h2 className="text-sm font-medium mb-4">Quick filters</h2>

                {/* Locations */}
                <div className="mb-4">
                  <div className="text-xs uppercase text-gray-400 mb-2">Locations</div>
                  <div className="flex gap-2 flex-wrap text-xs">
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">United States</span>
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">Canada</span>
                  </div>
                </div>

                {/* Email Status */}
                <div className="mb-4">
                  <div className="text-xs uppercase text-gray-400 mb-2">Email Status</div>
                  <div className="flex gap-2 flex-wrap text-xs">
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">Verified</span>
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">Unverified</span>
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">Unavailable</span>
                  </div>
                </div>

                {/* Job Titles */}
                <div className="mb-4">
                  <div className="text-xs uppercase text-gray-400 mb-2">Job Titles</div>
                  <div className="flex gap-2 flex-wrap text-xs">
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">Founder</span>
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">Sales Manager</span>
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">Marketing Director</span>
                  </div>
                </div>

                {/* Industry */}
                <div className="mb-4">
                  <div className="text-xs uppercase text-gray-400 mb-2">Industry</div>
                  <div className="flex gap-2 flex-wrap text-xs">
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">Information Technology & Services</span>
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">Marketing & Advertising</span>
                    <span className="border border-gray-600 px-3 py-1 rounded-lg">Retail</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-[#1e1e20] border-t border-gray-700 flex items-center justify-between px-4 py-3 rounded-b-lg -mx-5 -mb-5 mt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <FiLock className="text-gray-500" />
                    <span>Unlock advanced filters:</span>
                    <span className="ml-2">$ Revenue</span>
                    <span>Funding</span>
                    <span>Company Lookalikes</span>
                  </div>
                  <button className="bg-yellow-400 text-black px-3 py-1 rounded font-medium text-xs">
                    View plans
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
