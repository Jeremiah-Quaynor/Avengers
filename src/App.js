import React from 'react'
import {birthday} from './data';

const useStateBirthday=()=>{
    const [Birthday, setBirthday] = React.useStateBirthday(birthday);
    const SetBirthday = () =>{
        setBirthday([]);
    } 
    return(
        <>
        {Birthday.map((person)=>{
            const{id,img,name,dob}=person;
            return(
                <div className="" key={id}>
                <img src={img} alt=""></img>
                <h3>{name}</h3>
                <h6>{dob}</h6>
            </div>
            )})
            };
            <buton type="button"  className="btn btn-success btn-lg" onClick={SetBirthday([])}>
            Clear Button
            </buton>
        </>
    )
    };


export default useStateBirthday;
