import { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => {
        setUser(response.data.results[0]);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-blue-300 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        {user && (
          <div className="flex items-center">
            <img className="w-36 h-36 rounded-full mr-6  object-cover " src={user.picture.large} alt="User" />
            <div>
              <h2 className="text-2xl uppercase font-semibold">{`${user.name.first} ${user.name.last}`}</h2>
              <div className="text-pink-600 uppercase font-semibold">{user.gender}</div>
              <div className="text-pink-600 uppercase font-semibold">{user.phone}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
