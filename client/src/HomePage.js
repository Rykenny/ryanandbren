import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [partyCode, setPartyCode] = useState(""); // Store the party code input
  const [invalidCodeError, setInvalidCodeError] = useState(""); // Error message for invalid code
  const navigate = useNavigate(); // Use for redirection
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

  // Handle the form submission for the party code
  const handlePartyCodeSubmit = async (event) => {
    event.preventDefault();
    if (!partyCode) return;

    try {
      const response = await fetch(`${API_URL}/partyData/${partyCode}`);
      if (response.ok) {
        const data = await response.json();

        // Check if the entered party code exists in the response
        if (data && data[partyCode]) {
          navigate(`/rsvp/${partyCode}`); // Navigate to RSVP page if the code is valid
        } else {
          setInvalidCodeError(
            "Invalid party code. Check your email for your code, or let Ryan and Brenna know if you're having trouble finding it!"
          );
        }
      } else {
        console.error("Error fetching party data");
        setInvalidCodeError(
          "Something went wrong. If you continue having issues please reach out to Ryan or Brenna!"
        );
      }
    } catch (error) {
      console.error("Error fetching party data:", error);
      setInvalidCodeError(
        "Something went wrong. If you continue having issues please reach out to Ryan or Brenna!"
      );
    }
  };

  return (
    <div className="home-container">
      <div className="inner-container">
      {/* Add both images */}
      {/* <img src="/engagement-mobile.jpg" alt="Mobile View" className="mobile-image" />
      <img src="/engagement-desktop.jpg" alt="Desktop View" className="desktop-image" /> */}
      <div className="image-container">
      <img src="/wedding-mobile.jpg" alt="Mobile View" className="mobile-image" />
  <img src="/wedding-desktop.jpg" alt="Desktop View" className="desktop-image" />
  <img src="/guest-ill1.png" alt="Guest Illustration" className="guest-illustration" />
</div>
      

      <h1>Thank you so much for celebrating with us!</h1>
      <p>
        Thank you all so much for celebrating with us for a second time! We had the absolute time of our lives, and we
        love each and every one of you from the bottom of our hearts.
      </p>
      <p>
        Here's all the photos from the day!
      </p>
      
      <div >
        <a className="photos" target='_blank' rel='noreferrer' href='https://charlieoliviagranthamphotography.pixieset.com/brennaandryan/'>
          <button>
           Official photos
          </button>
        </a>
        
        <a className="photos" target='_blank' rel='noreferrer' href='https://drive.google.com/drive/folders/1qSNGBPPXZCmi_LUwlym1svUwej3SAGd8?usp=drive_link'>
          <button>
           Lauren's Camp Snap
          </button>
        </a>

        <a className="photos" target='_blank' rel='noreferrer' href='https://photos.app.goo.gl/cWZpKsbKRDwwCy7n9'>
          <button>
           David's Photos
          </button>
        </a>
      </div>

     
    
      </div>
    </div>
  );
}

export default HomePage;
