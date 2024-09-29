import React from 'react';
import Header from '../components/Header';

const AboutPage = () => {
  return (
   <div>
    <Header/>
     <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-400 to-blue-500 text-white p-5">
           <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="max-w-2xl text-lg text-center mb-4">
        Welcome to our website! Here, you can learn more about our project or organization, our values, and our mission.
      </p>
      <p className="max-w-2xl text-lg text-center">
        We aim to provide the best services and create a positive impact in the community. Thank you for visiting us!
      </p>
    </main>
   </div>
  );
};

export default AboutPage;
