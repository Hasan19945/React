import React from "react";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <h1 className="text-center text-2xl text-purple-700 dark:text-gray-50 font-bold my-2">
        Profile
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {arr.map((item, i) => (
          <ProfileCard key={i} id={item} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
