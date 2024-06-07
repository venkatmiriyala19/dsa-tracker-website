import React, { useState } from "react";
import buttonClick from "../sounds/buttonClick.mp3";

import CookieConsent from "react-cookie-consent";
import { toast } from "react-toastify";

const CookieConsentComponent = () => {
  const [showConsent, setShowConsent] = useState(true);
  const sound = new Audio(buttonClick);

  const handleAccept = () => {
    sound.play();
    setShowConsent(false); 
    toast.success("Cookies accepted"); 
  };

  const handleReject = () => {
    sound.play()
    setShowConsent(false); 
    toast.error("Cookies declined");
  };

  return (
    <>
      
      {showConsent && (
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="I reject"
          enableDeclineButton
          cookieName="myAwesomeCookieName"
          style={{
            background: "#fff",
            color: "#000",
            textAlign: "center",
            border:"1px solid #ccc",
            borderRadius: "1.25rem",
            padding: "1.25rem",
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.98)",
            position: "fixed",
            bottom: "20px",
            left: "2rem",
            width: "25rem",
            zIndex: 1000,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          buttonStyle={{
            backgroundColor: "#4cb892",
            color: "#fff",
            fontSize: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "2rem",
            cursor: "pointer",
            marginLeft: "0.5rem",
          }}
          declineButtonStyle={{
            backgroundColor: "#f0f0f0",
            color: "#333",
            fontSize: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: "2rem",
            cursor: "pointer",
            marginLeft: "12rem",
          }}
          onAccept={handleAccept} 
          onDecline={handleReject} 
          expires={150}
        >
          <div style={{ fontSize: "1.5rem", marginBottom: "10px", fontWeight: "750" }}>
            We use cookies for analytics and advertising.
          </div>
          <div style={{ fontSize: "1rem" }}>
            By clicking 'Accept', you agree to our use of cookies and similar technologies as specified in the{" "}
            <a href="/privacy" style={{ color: "#61d8ad" }}>Privacy Policy</a>.
          </div>
        </CookieConsent>
      )}
    </>
  );
};

export default CookieConsentComponent;
