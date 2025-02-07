import React from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addProfile, updateProfile } from "../../redux/reducers/profileReducer";
import { IconEdit } from "@tabler/icons-react";

// modal styling
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

const UpdateProfileModal = ({ data }) => {
  // destructuring data
  const {
    id,
    name,
    photoUrl,
    description,
    address: { street, city, state, country, postalCode, latitude, longitude },
    contact: { email, phone },
    interests,
    summary,
  } = data;
  const dispatch = useDispatch();
  // local states for modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // local states for form fields
  const [updatedName, setName] = React.useState(name);
  const [updatedPhotoUrl, setPhotoUrl] = React.useState(photoUrl);
  const [updatedDescription, setDescription] = React.useState(description);
  const [updatedStreet, setStreet] = React.useState(street);
  const [updatedCity, setCity] = React.useState(city);
  const [updatedState, setState] = React.useState(state);
  const [updatedPostalCode, setPostalCode] = React.useState(postalCode);
  const [updatedLatitude, setLatitude] = React.useState(latitude);
  const [updatedLongitude, setLongitude] = React.useState(longitude);
  const [updatedEmail, setEmail] = React.useState(email);
  const [updatedPhone, setPhone] = React.useState(phone);
  const [updatedInterests, setInterests] = React.useState(interests.join(", "));
  const [updatedSummary, setSummary] = React.useState(summary);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //   handeling submission
  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      id,
      name: updatedName,
      photoUrl: updatedPhotoUrl,
      description: updatedDescription,
      address: {
        street: updatedStreet,
        city: updatedCity,
        state: updatedState,
        country,
        postalCode: updatedPostalCode,
        latitude: updatedLatitude,
        longitude: updatedLongitude,
      },
      contact: {
        email: updatedEmail,
        phone: updatedPhone,
      },
      interests: updatedInterests.split(",").map((interest) => interest.trim()),
      summary: updatedSummary,
    };
    dispatch(updateProfile(newUser));
    closeModal();
  }

  return (
    <>
      <button onClick={openModal} className="btn">
        <IconEdit />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="mx-auto bg-white rounded-lg p-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Update Profile
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                placeholder="Enter name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="photoUrl"
              >
                Photo URL
              </label>
              <input
                type="url"
                id="photoUrl"
                defaultValue={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                placeholder="Enter photo URL"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="3"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                placeholder="Enter description"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="street"
                >
                  Street
                </label>
                <input
                  type="text"
                  id="street"
                  defaultValue={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                  placeholder="Enter street"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  defaultValue={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="state"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  defaultValue={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                  placeholder="Enter state"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="postalCode"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  defaultValue={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                  placeholder="Enter postal code"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="latitude"
                >
                  Latitude
                </label>
                <input
                  type="text"
                  id="latitude"
                  defaultValue={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                  placeholder="Enter latitude"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="longitude"
                >
                  Longitude
                </label>
                <input
                  type="text"
                  id="longitude"
                  defaultValue={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                  placeholder="Enter longitude"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  defaultValue={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="interests"
              >
                Interests
              </label>
              <input
                type="text"
                id="interests"
                defaultValue={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                placeholder="Enter interests separated by commas"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="summary"
              >
                Summary
              </label>
              <textarea
                id="summary"
                rows="3"
                defaultValue={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700"
                placeholder="Enter a brief summary"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gray-700 text-white font-semibold rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default UpdateProfileModal;
