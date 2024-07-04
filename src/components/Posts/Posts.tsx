import { useState, useEffect } from "react";
import { fetchPosts } from "@services/fetchPosts";
import { Post } from 'src/types';

const PostsData = () => {
  const [posts, setPosts] = useState<Post[]>([]);


  useEffect(() => {
    async function getPosts() {
      const response = await fetchPosts();
      setPosts(response);
    }
    getPosts();
  }, []);

  
  return(
    <div className='p-4 sm:ml-64'>
      <div className='container mx-auto px-4'>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="border-solid p-2.5 border">
              <h2 className="font-semibold text-xl">{post.title}</h2>
              <p className='text-lg'>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};



export default PostsData;