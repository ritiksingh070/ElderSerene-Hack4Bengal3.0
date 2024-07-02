import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='blogs'>
      <header>
        <div className="container container-flex">
          <div className="site-title">
            <h1>Caring for the Elderly</h1>
            <p className="subtitle">A blog dedicated to eldercare and health.</p>
          </div>
          
        </div>
      </header>
      {/* header ends */}
      
      {/* container starts */}
      <div className="container container-flex">
        <main role="main">
          <article className="article-featured">
            <h2 className="article-title">Promoting Mental Health in Seniors</h2>
            <img src="https://images.pexels.com/photos/158701/elderly-man-old-viking-beard-158701.jpeg" alt="Senior person smiling" className="article-image" />
            <p className="article-info">June 28, 2024 | 5 comments</p>
            <p className="article-body">Mental health is crucial at any age, but it's particularly important for seniors. This article explores various activities and habits that can help promote mental well-being among the elderly.</p>
            <a href="#" className="article-read-more">CONTINUE READING</a>
          </article>
          
          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Nutritional Needs of Older Adults</h2>
              <p className="article-body">As we age, our nutritional needs change. Ensuring a balanced diet can significantly improve overall health and quality of life for seniors.</p>
              <a href="#" className="article-read-more">CONTINUE READING</a>
            </div>
            <div className="article-recent-secondary">
              <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="Healthy meal on a plate" className="article-image" />
              <p className="article-info">June 25, 2024 | 2 comments</p>
            </div>
          </article>
          
          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">Exercise for Elderly People</h2>
              <p className="article-body">Regular exercise is beneficial for people of all ages. This article discusses safe and effective exercises tailored specifically for seniors.</p>
              <a href="#" className="article-read-more">CONTINUE READING</a>
            </div>
            <div className="article-recent-secondary">
              <img src="https://images.pexels.com/photos/1138703/pexels-photo-1138703.jpeg" alt="Elderly person exercising" className="article-image" />
              <p className="article-info">June 20, 2024 | 4 comments</p>
            </div>
          </article>
          
          <article className="article-recent">
            <div className="article-recent-main">
              <h2 className="article-title">The Importance of Regular Check-Ups</h2>
              <p className="article-body">Regular medical check-ups can catch health issues early and ensure seniors receive the care they need. Learn why regular visits to the doctor are essential for elderly health.</p>
              <a href="#" className="article-read-more">CONTINUE READING</a>
            </div>
            <div className="article-recent-secondary">
              <img src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg" alt="Doctor checking a senior patient" className="article-image" />
              <p className="article-info">June 15, 2024 | 3 comments</p>
            </div>
          </article>
        </main>
        
       
      </div>
    </div>
  );
};

export default Blogs;
