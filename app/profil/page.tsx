import React from "react";
import Footer from "../components/Footer";
import HeaderProfil from "../components/header/HeaderProfil";

function Profile() {
  return (
    <section className="mx-auto items-center justify-center font-medium bg-white max-w-[400px] mt-[-50px]">
      <HeaderProfil />
      <div>
        <h1 className="text-4xl font-bold text-[#029A4D] ml-5 mt-5">Profile</h1>
      </div>
      <Footer />
    </section>
  );
}

export default Profile;
