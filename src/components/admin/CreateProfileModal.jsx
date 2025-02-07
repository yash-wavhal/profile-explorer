import React from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addProfile } from "../../redux/reducers/profileReducer";
import toast from "react-hot-toast";

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

const CreateProfileModal = () => {
  const dispatch = useDispatch();
  // local states for modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // local states for form fields
  const [name, setName] = React.useState("");
  const [photoUrl, setPhotoUrl] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [allInterests, setInterests] = React.useState("");
  const [summary, setSummary] = React.useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // handeling submission
  function handleSubmit(event) {
    event.preventDefault();

    // basic validation
    if (
      !name ||
      !photoUrl ||
      !description ||
      !street ||
      !city ||
      !state ||
      !postalCode ||
      !latitude ||
      !longitude ||
      !email ||
      !phone ||
      !allInterests ||
      !summary
    ) {
      toast.error("Please fill all the fields!");
      return;
    }
    const newUser = {
      name,
      photoUrl,
      description,
      address: {
        street,
        city,
        state,
        country: "India",
        postalCode,
        latitude,
        longitude,
      },
      contact: {
        email,
        phone,
      },
      interests: allInterests.split(",").map((interest) => interest.trim()),
      summary,
    };
    dispatch(addProfile(newUser));
    closeModal();
  }

  return (
    <>
      <button
        onClick={openModal}
        className="w-full hover:bg-gray-500/20 flex justify-center items-center text-blue-500 font-semibold gap-2 mb-2 py-2 p-4  bg-gray-500/10 rounded border"
      >
        Create New
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="mx-auto bg-white rounded-lg p-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Create New Profile
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
                value={name}
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
                value={photoUrl}
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
                value={description}
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
                  value={street}
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
                  value={city}
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
                  value={state}
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
                  value={postalCode}
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
                  value={latitude}
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
                  value={longitude}
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
                  value={email}
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
                  value={phone}
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
                value={allInterests}
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
                value={summary}
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
                Create Profile
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default CreateProfileModal;
