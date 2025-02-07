import React from "react";
import { useSelector } from "react-redux";
import ProfileItem from "../components/admin/ProfileItem";
import CreateProfileModal from "../components/admin/CreateProfileModal";

const Admin = () => {
  // redux
  const profilesData = useSelector((state) => state.profile.profilesData);
  return (
    <div className="max-w-xl mx-auto overflow-auto px-4">
      <h1 className="font-primary font-semibold text-3xl my-2">
        Add, Update or Delete
      </h1>
      {profilesData?.map((profile) => (
        <ProfileItem data={profile} />
      ))}
      <CreateProfileModal />
    </div>
  );
};

export default Admin;
