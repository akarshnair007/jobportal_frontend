import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Construction = () => {
  return (
    <div className="main w-full h-full bg-[#000236]">
      <Header />
      <div className="center h-screen flex items-center justify-center">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGt3NjY2MTU0YzN2cWU4bGphZjN5YWE4Nnc0d3hicTVwaXJtYzFrYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cfGmVRsJI6wq6noGxP/giphy.webp"
          alt="No Image"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Construction;
