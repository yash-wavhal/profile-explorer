import { IconEdit, IconTrash } from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile } from "../../redux/reducers/profileReducer";
import UpdateProfileModal from "./UpdateProfileModal";

const ProfileItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, photoUrl, name, description } = data;

  // redux state
  const activeProfile = useSelector((state) => state.profile.activeProfile);

  // handeling deletion
  const handleDelete = () => {
    dispatch(deleteProfile(id));
  };

  return (
    <div
      key={id}
      className={`flex items-center gap-2 mb-2 py-2 p-4  bg-gray-500/10 rounded border`}
    >
      <img
        className="w-16 h-16 object-cover rounded grayscale"
        src={photoUrl}
        alt=""
      />
      <div className="flex-1">
        <p className="font-semibold">{name}</p>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex gap-2">
        {/* update modal  */}
        <UpdateProfileModal data={data} />

        {/* delete trigger  */}
        <button
          onClick={handleDelete}
          className="bg-red-400 hover:bg-red-500 px-2 rounded"
        >
          <IconTrash />
        </button>
      </div>
    </div>
  );
};

export default ProfileItem;
