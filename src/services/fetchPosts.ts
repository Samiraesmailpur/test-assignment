import axios from 'axios';
import { Post } from 'src/types';

const URL = 'https://jsonplaceholder.typicode.com';

async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await axios.get<Post[]>(
      `${URL}/users/1/posts`
    );
    return response.data;

  } catch (error) {
    console.log(error);
  }

}

export {
  fetchPosts
};