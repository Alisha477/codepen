import React, { useState, useEffect } from 'react';

function HackerNews() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://hacker-news.firebaseio.com/v0';

    fetch(`${apiUrl}/topstories.json`)
      .then(response => response.json())
      .then(topStoryIds => {
        const firstTenIds = topStoryIds.slice(0, 10);

        // Fetch details of each story
        Promise.all(firstTenIds.map(id =>
          fetch(`${apiUrl}/item/${id}.json`).then(response => response.json())
        ))
          .then(storiesData => {
            setStories(storiesData);
          })
          .catch(error => {
            console.error('Error fetching stories:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching top stories:', error);
      });
  }, []);

  return (
    <div>
      <h1>Hacker News Top Stories</h1>
      <ul>
        {stories.map((story, index) => (
          <li key={index}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HackerNews;
