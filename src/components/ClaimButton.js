import React from 'react';
import axios from 'axios';

const ClaimButton = ({ selectedUser, onPointsClaimed }) => {
  const claimPoints = () => {
    if (selectedUser) {
      axios.post(`/api/claim/${selectedUser}`).then((response) => {
        onPointsClaimed(response.data.points);
      });
    }
  };

  return <button onClick={claimPoints}>Claim Points</button>;
};

export default ClaimButton;
