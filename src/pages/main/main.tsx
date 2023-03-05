import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { Post } from './post';
import '../../App.css'

export interface Post {
    id: string;
    userId: string;
    username: string;
    description: string;
    title: string;
}





export const Main = () =>{

    const [postsList, setPostsList]  = useState<Post[] | null >(null);

   
   const postsRef = collection(db, 'posts');


    const getPosts = async () =>{
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map((doc) => ({ ...doc.data(),id: doc.id})) as Post[] );
    };
    getPosts()

    useEffect(() => {
        getPosts();
    },[])
    return(
        <div className='posts_body'>
                {
                    postsList?.map( (post) => <Post post={post} /> )
                }
        </div>

    )
    
}