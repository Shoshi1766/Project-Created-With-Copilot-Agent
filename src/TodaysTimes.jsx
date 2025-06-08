import React, { useEffect, useState } from 'react';

function TodaysTimes({ city }) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://www.hebcal.com/shabbat?cfg=json&city=${city}`);
        if (!response.ok) {
          throw new Error('Failed to fetch times data');
        }
        const data = await response.json();
        setDetails(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setDetails(null);
      }
    };

    if (city.trim()) {
      fetchDetails();
    }
  }, [city]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div>
      <h2>Today's Times</h2>
      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>
      )}
      {details ? (
        <div>
          <p>Location: {details.location?.title || 'N/A'}</p>
          <p>Date: {details.date ? formatDate(details.date) : 'N/A'}</p>
          <p>Time: {details.date ? formatTime(details.date) : 'N/A'}</p>
          <ul>
            {details.items?.map((item, index) => (
              <li key={index}>{item.title || 'N/A'}</li>
            ))}
          </ul>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}

export default TodaysTimes;