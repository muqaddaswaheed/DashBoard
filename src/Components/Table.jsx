import React, { useState } from "react";
import logo from "../assets/photos/logo2.png";
import searchIcon from "../assets/photos/Group_2.png";
import colIcon from "../assets/photos/coolicon.png";
import profileImg from "../assets/photos/board1.png";
import actionIcon from "../assets/photos/action.png";

export const Table = () => {
  const initialTableData = [
    { name: "Peter Charles", email: "peter@gmail.com", type: "Basic User", group: "Sep 30, 2022", lastActive: "Active" },
    { name: "John Doe", email: "john@example.com", type: "Premium User", group: "Oct 5, 2022", lastActive: "InActive" },
    { name: "Jane Smith", email: "jane.smith@example.com", type: "Admin", group: "Jul 20, 2022", lastActive: "InActive" },
    { name: "Alice Johnson", email: "alice.j@example.com", type: "Basic User", group: "Jun 15, 2022", lastActive: "Active" },
    { name: "Robert Brown", email: "robert.brown@example.com", type: "Premium User", group: "Nov 3, 2022", lastActive: "InActive" },
    { name: "Emily Davis", email: "emily.davis@example.com", type: "Admin", group: "Aug 18, 2022", lastActive: "InActive" },
    { name: "Michael Scott", email: "michael.scott@example.com", type: "Basic User", group: "Dec 1, 2022", lastActive: "InActive" },
    { name: "Dwight Schrute", email: "dwight.schrute@example.com", type: "Admin", group: "Sep 25, 2022", lastActive: "Active" },
    ...Array.from({ length: 42 }, (_, i) => ({
      name: `Dummy User ${i + 9}`,
      email: `dummy${i + 9}@example.com`,
      type: ["Basic User", "Premium User", "Admin"][i % 3],
      group: `Aug ${i + 10}, 2022`,
      lastActive: i % 2 === 0 ? "Active" : "InActive",
    })),
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(initialTableData);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle status filter selection
  const handleFilterStatus = () => {
    const sortedData = [...initialTableData].sort((a, b) => {
      if (a.lastActive === "Active" && b.lastActive !== "Active") return -1;
      if (a.lastActive !== "Active" && b.lastActive === "Active") return 1;
      return 0;
    });

    setFilteredData(sortedData); // Update filtered data with sorted records
    setDropdownOpen(false); // Close dropdown after selecting filter
  };


  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = initialTableData.filter(
      (row) =>
        row.name.toLowerCase().includes(query) || row.email.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const currentTableData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <div className="bg-navy-600 flex items-center justify-between mt-4 p-4">
        <img src={logo} alt="logo" className="ml-11" />
        <button className="bg-blue-950 text-white px-4 py-1 rounded mr-4">
          +Add User
        </button>
      </div>
      <div className="flex items-center justify-between bg-white p-4 px-10 mr-10 shadow rounded-md pb-10">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search By Name and Email"
            className="w-full px-10 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-gray-500"
            value={searchQuery}
            onChange={handleSearch}
          />
          <img
            src={searchIcon}
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
          />
        </div>
        {/* Select Dropdown */}
        <div className="relative w-1/3">
          <div
            className="flex items-center px-2 py-2 bg-gray-100 border border-gray-300 text-gray-400 rounded-md hover:bg-gray-200 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Filter
            <img
              src={colIcon}
              alt="Toggle Dropdown"
              className="w-2 h-1 mt-1 ml-auto"
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10">
              <li
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={handleFilterStatus} // Apply the status filter
              >
                Status
              </li>
            </ul>
          )}
        </div>

        <select
          className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
          value={rowsPerPage}
          onChange={handleRowsChange}
        >
          <option value={5}>Show 5 rows</option>
          <option value={10}>Show 10 rows</option>
          <option value={20}>Show 20 rows</option>
          <option value={30}>Show 30 rows</option>
          <option value={40}>Show 40 rows</option>
          <option value={50}>Show 50 rows</option>
        </select>
      </div>

      <div className="bg-white shadow-md rounded-md p-4 mt-4 mx-10">
        <div className="grid grid-cols-12 border-b border-gray-300 font-bold text-gray-700 text-sm">
          <div className="col-span-3 px-2 py-1">Name</div>
          <div className="col-span-3 px-2 py-1">Email</div>
          <div className="col-span-2 px-2 py-1">Type</div>
          <div className="col-span-2 px-2 py-1">Date</div>
          <div className="col-span-1 px-2 py-1">Status</div>
          <div className="col-span-1 px-2 py-1 text-right">Action</div>
        </div>
        <div className="grid grid-rows-auto py-4">
          {currentTableData.length > 0 ? (
            currentTableData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-12 text-gray-600 text-sm hover:bg-gray-50 transition"
              >
                <div className="col-span-3 px-2 py-2 flex items-center space-x-2">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="truncate">{row.name}</span>
                </div>
                <div className="col-span-3 px-2 py-2">{row.email}</div>
                <div className="col-span-2 px-2 py-2">{row.type}</div>
                <div className="col-span-2 px-2 py-2">{row.group}</div>
                <div className="col-span-1 px-2 py-2">{row.lastActive}</div>
                <div className="col-span-1 px-2 py-2 text-right">
                  <img
                    src={actionIcon}
                    alt="Action"
                    className="w-1 h-4 cursor-pointer ml-8"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-4">No records found.</div>
          )}
        </div>
      </div>

      <div className="flex justify-around mt-4 py-2 border-t border-gray-300">
        <div className="text-sm text-gray-700">
          Showing {currentTableData.length} of {filteredData.length} entries
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 bg-gray-200 rounded-md text-gray-400 hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-950 text-gray-200"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-300 transition"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 bg-blue-950 rounded-md text-gray-100 hover:bg-gray-300 transition"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
