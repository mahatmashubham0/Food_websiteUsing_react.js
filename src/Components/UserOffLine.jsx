import React from "react";

const UserOffline = () => {
  return (
    <div className="user-offline-container w-full h-full flex justify-center items-center gap-8 flex-col my-10">
      <h1 className="user-offline-heading">🔴 Offline!</h1>
      <img className="offline-image" src={'https://img.freepik.com/free-vector/modern-currently-offline-twitch-banner-with-colorful-splash-background_1361-3376.jpg'} alt="Offline" />
      <p className="user-offline-message font-bold text-3xl">
        Sorry, it seems that you are currently offline.
      </p>
    </div>
  );
};

export default UserOffline;