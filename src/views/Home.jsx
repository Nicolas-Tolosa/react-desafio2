import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TwitterCard from '../components/TwitterCard'
import TweetInput from '../components/TweetInput'

const Home = () => {
  console.log('data', tweetData);
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h2 className="text-center">Bienvenidos a nuestra app</h2>
        <TweetInput></TweetInput>
        <div>
          {tweetData.map( (tweet) => (
            <TwitterCard key={tweet.id} author={tweet.author} content={tweet.content}></TwitterCard>
          ))}
        </div>
      </div>
      <TwitterCard></TwitterCard>
      <Footer></Footer>
    </>

  )
}

export default Home