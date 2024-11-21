import React from 'react'

const TweetInput = () => {
    const [newTweet, setNewTweet] = useState("")

    const toggleClick = () => {
        if(newTweet.trim() === ''){
            alert('Debes escribir algo')
            return;
        }
    }
  return (
    <div className="m-4">
        <input 
        type="text"
        className="border p-2 w-full"
        placeholder="Tweetea algo"
        value={newTweet}
        onChange={(event) => setNewTweet(event.target.value)}
        />
        <button className="border bg-blue-800 w-full rounded mt-2 text-white"
        onClick={handleClick}>
            Enviar
        </button>
    </div>
  )
}

export default TweetInput