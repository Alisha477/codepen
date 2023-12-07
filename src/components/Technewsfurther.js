import React, { useState, useEffect } from 'react';
import Technewsimg from '../photos/technews9.webp';

function Technewsfurther() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://hacker-news.firebaseio.com/v0';

        fetch(`${apiUrl}/topstories.json`)
            .then(response => response.json())
            .then(topStoryIds => {
                const firstTenIds = topStoryIds.slice(0, 8);

                // Fetch details of each story
                Promise.all(firstTenIds.map(id =>
                    fetch(`${apiUrl}/item/${id}.json`).then(response => response.json())
                ))
                    .then(storiesData => {
                        setStories(storiesData);
                        console.log(storiesData);
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
        <>
            <div class="card my-5 mx-0 " style={{ border: "none" }} >
                <div class="row g-0">
                    <div class="col-lg-6">
                        <img src={Technewsimg} class="img-fluid rounded-start" alt="..." style={{ width: "500px" }} />
                    </div>
                    <div class="col-lg-6">
                        <div class="card-body my-5">
                            <div class="accordion" id="accordionExample">

                                {

                                    
                                        stories.map((story, index) => (
                                            <div class="accordion-item" key={index}>
                                                <h2 class="accordion-header">
                                                    <button
                                                        class="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${index}`} // Use a unique identifier
                                                        aria-expanded="true"
                                                        aria-controls={`collapse${index}`} // Use a unique identifier
                                                    >
                                                        {story.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${index}`} // Use a unique identifier
                                                    class="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div class="accordion-body">
                                                        <button className='btn btn-info btn-sm' ><a href={story.url} style={{textDecoration:"none", color:"white"}}>Click to know more!</a></button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    

                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default Technewsfurther;




{/* //   return (
    //     <div>
    //       <h1>Hacker News Top Stories</h1>
    //       <ul>
    //         {stories.map((story, index) => ( */}
{/* //           <li key={index}>
    //             <a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   ); */}
