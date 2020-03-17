import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})


    // const clickHandler = () => {
        
        
    // }

    useEffect(() => {
    
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                // setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(err => {
                // setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
               
    }, [])


    return (
        <div>
            <button onClick={() => setLoading(!loading)}>Load posts</button>
            <br></br>
        <div>
            {loading ? post.title : ''}
            {error ? error : null}
        </div>
        </div>
                    
    )
}

export default DataFetchingOne
