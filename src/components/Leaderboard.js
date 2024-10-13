import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = () => {
      axios.get('/api/leaderboard').then((response) => setLeaderboard(response.data));
    };
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h3>Leaderboard</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Points</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.totalPoints}</td>
              <td>{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
