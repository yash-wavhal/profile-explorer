import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  profilesData: [
    {
      id: 1,
      name: "Vairat Kohli",
      photoUrl:
        "https://pbs.twimg.com/profile_images/1741467102719127552/yW6JaRPy_400x400.jpg",
      description:
        "One of the best batsmen in the world, known for his aggressive style and consistency.",
      address: {
        street: "123 Cricket Lane",
        city: "Delhi",
        state: "Delhi",
        country: "India",
        postalCode: "110001",
        latitude: 28.613939,
        longitude: 77.209021,
      },
      contact: {
        email: "virat.kohli@example.com",
        phone: "+91-9123456789",
      },
      interests: ["Cricket", "Fitness", "Traveling"],
      summary:
        "A world-class cricketer, known for his match-winning innings and leadership skills. Passionate about fitness and philanthropy.",
    },
    {
      id: 2,
      name: "Rohit Surma",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKd2GpeBdoXnW8QC9s85IF94CuQUtKBuQe4K091fjgM4_Cos6ZkRUIF7iLbgT0ApnjnCo&usqp=CAU",
      description:
        "An elegant batsman with a knack for big scores, Rohit is India's premier opener.",
      address: {
        street: "456 Opening Drive",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        postalCode: "400001",
        latitude: 19.07609,
        longitude: 72.877426,
      },
      contact: {
        email: "rohit.sharma@example.com",
        phone: "+91-9234567890",
      },
      interests: ["Cricket", "Wildlife Conservation", "Movies"],
      summary:
        "Renowned for his effortless batting style and ability to score double centuries in ODIs, Rohit is one of India's most successful cricketers.",
    },
    {
      id: 3,
      name: "Sky Yadav",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyn1-3FCwmSLSbUpQb8EkGUwFZ9AyVEV4mcQ&s",
      description:
        "Known as the '360-degree' player, Suryakumar is famous for his innovative shots.",
      address: {
        street: "789 T20 Avenue",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        postalCode: "400002",
        latitude: 19.4199,
        longitude: 72.8117,
      },
      contact: {
        email: "suryakumar.yadav@example.com",
        phone: "+91-9345678901",
      },
      interests: ["Cricket", "Fitness", "Video Games"],
      summary:
        "A dynamic middle-order batsman with a flair for scoring quick runs, Suryakumar is a key player in India's T20 setup.",
    },
    {
      id: 4,
      name: "Hardik Pandya",
      photoUrl:
        "https://i.pinimg.com/originals/39/4b/ef/394bef8e4ee9f460c999121ffe26a897.jpg",
      description:
        "An all-rounder known for his explosive batting and effective bowling in limited-overs cricket.",
      address: {
        street: "101 Allrounder Street",
        city: "Vadodara",
        state: "Gujarat",
        country: "India",
        postalCode: "390001",
        latitude: 22.3072,
        longitude: 73.1812,
      },
      contact: {
        email: "hardik.pandya@example.com",
        phone: "+91-9456789012",
      },
      interests: ["Cricket", "Fashion", "Music"],
      summary:
        "A versatile all-rounder, Hardik has been a match-winner for India with his ability to change the game with both bat and ball.",
    },
    {
      id: 5,
      name: "KL Rahul",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDuB-sTvc8LKoONrzy1hnDOIlLjUD5OOctbnhfz3phwNdvM_IDg5G1qulWV0xFRTqPjU&usqp=CAU",
      description:
        "A stylish and dependable opener, KL Rahul is known for his technique and composure.",
      address: {
        street: "202 Opener Lane",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        postalCode: "560001",
        latitude: 12.9716,
        longitude: 77.5946,
      },
      contact: {
        email: "kl.rahul@example.com",
        phone: "+91-9567890123",
      },
      interests: ["Cricket", "Fitness", "Movies"],
      summary:
        "KL Rahul is a consistent performer in all formats of the game, appreciated for his ability to anchor the innings as well as accelerate when needed.",
    },
  ],
  activeProfile: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // add profile
    addProfile: (state, action) => {
      let id = state.profilesData.length + 1;
      state.profilesData.push({ ...action.payload, id });
      toast.success("Profile added successfully!");
    },

    // delete profile
    deleteProfile: (state, action) => {
      state.profilesData = state.profilesData.filter(
        (profile) => profile.id !== action.payload
      );
      toast.success("Profile deleted successfully!");
    },

    // update profile
    updateProfile: (state, action) => {
      let index = state.profilesData.findIndex(
        (profile) => profile.id === action.payload.id
      );
      state.profilesData[index] = action.payload;
      toast.success("Profile updated successfully!");
    },

    // change active profile
    changeActiveProfile: (state, action) => {
      state.activeProfile = action.payload;
    },

    //search
    searchProfiles: (state, action) => {
      state.profilesData = state.profilesData.filter((profile) =>
        profile.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const {
  addProfile,
  deleteProfile,
  updateProfile,
  changeActiveProfile,
  searchProfiles,
} = profileSlice.actions;
export default profileSlice.reducer;
