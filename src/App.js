import React, { useState } from 'react';
import UserSelect from './components/UserSelect';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState('');
  const [pointsClaimed, setPointsClaimed] = useState(null);

  return (
    <div>
      <h1>Leaderboard System</h1>
      <UserSelect selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ClaimButton selectedUser={selectedUser} onPointsClaimed={setPointsClaimed} />
      {pointsClaimed !== null && <p>Points Claimed: {pointsClaimed}</p>}
      <Leaderboard />
    </div>
  );
}

export default App;
