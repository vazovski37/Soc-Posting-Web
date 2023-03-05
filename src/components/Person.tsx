import * as React from 'react';
import { useState } from 'react';

interface Props {
    name : string;
    email: string;
    age: number;
    isMarried: boolean;
    friends : string[];
    country : Country;
}

export enum Country{
    Brazil = 'Brazil',
    Canada = 'Canada',
    France = 'Framce',
}


export const Person = (props: Props) =>{

    const [name, setName] = useState<string>('');

    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>email: {props.email}</h1>
            <h1>age: {props.age}</h1>
            <h1>this perton {props.isMarried ? 'is':'is not' } married </h1>
            { 
             props.friends.map((friend: string)=>(
                <h1>{friend}</h1>
             ))
            }
            <h1> country {props.country} </h1>
        </div>
    )
}