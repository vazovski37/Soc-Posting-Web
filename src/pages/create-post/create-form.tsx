import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate} from 'react-router-dom'

interface CreateFormData {
    title : string;
    description: string;
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const scheme = yup.object().shape({
        title: yup.string().required('title unda daawero'),
        description: yup.string().required("description unda daweroo"),

    });

    const {register, handleSubmit,formState:{errors}} = useForm< CreateFormData>({
        resolver: yupResolver(scheme),
    })

    const postsRef = collection( db, 'posts')

    const onCreatePost = async (data:CreateFormData) =>{
        await addDoc(postsRef, {
            title : data.title,
            description: data.description,
            username : user?.displayName,
            userId: user?.uid
        });
        navigate('/')
    };

    return (
    <form onSubmit={handleSubmit(onCreatePost)} >
        <input type="text" placeholder='Title..' {...register('title')} />
        <p style={{color:"red"}} >{errors.title?.message}</p>
        <textarea placeholder='description..' {...register('description')} />
        <p style={{color:"red"}} >{errors.description?.message}</p>
        <input type="submit" placeholder='Title..'  />

    </form>
    )
}