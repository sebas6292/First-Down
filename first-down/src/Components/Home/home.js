import React from 'react'
import './home.styles.css';

const Home = () => {
return (
    <>
        <div className='main-container'>
            <div className='left-container'>
                <h1>It's time to get down and dirty y'all! It's First Down!</h1>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining 
                essentially unchanged. It was popularised in the 1960s with the release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently 
                with desktop publishing software like Aldus PageMaker including versions
                of Lorem Ipsum.</p>

                <button className='cta'>CTA</button>
                <button className='learn-more'>Learn More</button>
                
                <h4>Works with</h4>
                    <div className='social-media'>
                        <div className='Instagram'>
                            <img src={require('../../assets/instagram.png')} alt ='' />
                        </div>
                        <div className='Facebook'>
                        <img src={require('../../assets/facebook.png')} alt ='' />
                        </div>
                        <div className='Twitter'>
                        <img src={require('../../assets/twitter.png')} alt ='' />
                        </div>
                    </div>
            </div>
            <div className='right-container'>
            <img src={require('../../assets/Ballast Point.png')} 
                alt='The whole gang at Ballast Point'
                />
            </div>
        </div>
    </>
)
}

export default Home; 