import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveProfile } from "../../redux/reducers/profileReducer";

const ProfileItem = ({ data }) => {
  const dispatch = useDispatch();
  const activeProfile = useSelector((state) => state.profile.activeProfile);

  const {
    id,
    photoUrl,
    name,
    description,
    address: { city, state },
  } = data;

  const handleChangeActiveProfile = () => {
    dispatch(changeActiveProfile(data));
  };

  return (
    <div
      key={id}
      className={`flex items-center gap-2 mb-2 py-2 p-4  bg-gray-500/10 rounded border ${
        id === activeProfile?.id && "border border-gray-500"
      }`}
    >
      <img
        className="w-16 h-16 object-cover rounded grayscale"
        src={photoUrl}
        alt=""
      />
      <div className="flex-1">
        <p className="font-semibold">{name}</p>
        <p className="text-xs">{description}</p>
        <div className="flex gap-2 text-xs text-gray-500">
          <p>City: {city}</p>
          <p>State: {state}</p>
        </div>
      </div>
      <button
        onClick={handleChangeActiveProfile}
        className="btn uppercase text-xs font-bold"
      >
        Summary
      </button>
    </div>
  );
};

export default ProfileItem;
