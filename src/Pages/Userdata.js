import React, { useState, useEffect } from "react";

const Userdata = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://192.168.68.17:8080/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any necessary authorization headers here
          },
        });
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {/* <h2 style={{ textAlign: "center" }}>User Account Details</h2> */}
      {userData ? (
        <div>
          <p>
            Name: {userData.firstName} {userData.lastName}
          </p>
          _<p>Email: {userData.email}</p>
          {/* Display other user data fields as necessary */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Userdata;
