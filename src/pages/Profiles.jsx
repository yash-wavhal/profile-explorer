import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import MapComponent from "../components/map/MapComponent";
import ProfileItem from "../components/profile/ProfileItem";

// modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80vh",
    overflowY: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const Profiles = () => {
  const profilesData = useSelector((state) => state.profile.profilesData);
  const activeProfile = useSelector((state) => state.profile.activeProfile);

  const [searchedData, setSearchedData] = React.useState(profilesData);
  const [query, setQuery] = React.useState("");

  // search functionalities
  const handleSearch = (query) => {
    const filteredData = profilesData.filter(
      (profile) =>
        // by name
        profile.name.toLowerCase().includes(query.toLowerCase()) ||
        // by city
        profile.address.city.toLowerCase().includes(query.toLowerCase()) ||
        // by state
        profile.address.state.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedData(filteredData);
  };

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div
        className={`w-auto lg:w-[32rem] mx-auto overflow-auto px-4 lg:h-auto ${
          activeProfile != null && "h-1/2"
        }`}
      >
        <h1 className="font-primary font-semibold text-3xl my-2">
          Players Profiles
        </h1>

        {/* search and filters  */}
        <div className="flex items-center justify-between my-2">
          {/* search  */}
          <input
            type="text"
            className="border rounded px-4 py-1 w-72"
            placeholder="Search by Name, City, State"
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* filters  */}
        </div>

        {/* mapping profiles data  */}
        {searchedData.length > 0 ? (
          searchedData?.map((profile) => <ProfileItem data={profile} />)
        ) : (
          <p className="flex items-center mt-4">No Data Found </p>
        )}
      </div>

      {/* active profile details: details and map  */}
      {activeProfile != null && (
        <div className="flex flex-col-reverse flex-1 bg-gray-500/10 p-4 h-auto overflow-auto">
          <div className=" rounded-lg overflow-auto">
            {/* extra details  */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {activeProfile.name}
              </h2>
              <p className="text-gray-600 mt-2">{activeProfile.description}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                <p className="text-gray-600">
                  Email: {activeProfile.contact.email}
                </p>
                <p className="text-gray-600">
                  Phone: {activeProfile.contact.phone}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Interests
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  {activeProfile.interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Map Component  */}
          <MapComponent
            latitude={activeProfile.address.latitude}
            longitude={activeProfile.address.longitude}
          />
        </div>
      )}
    </div>
  );
};

export default Profiles;
