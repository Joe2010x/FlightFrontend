import './PersonInfo.css';
import { useState } from 'react';

const ConfirmPerson = ({ index, type, person }) => {
    person.dateOfBirth = new Date(person.dateOfBirth);
    console.log('confirm person ', person);
    return (
        <div className="personInfo">
            <h2 className='info--title'>{(type === 'adult') ? 'Person' : 'Child'} {index + 1}</h2>
            <div className='info--nameAndContact'>
                <div className='info--name'>
                    <div className='info-label-input'>
                        <span className='info--label'>First Name: </span>
                        <span>{person.firstName}</span>
                    </div>
                    <div className='info-label-input'>
                        <span className='info--label'>Last Name: </span>
                        <span>{person.lastName}</span>
                    </div>
                    <div className='info-label-input'>
                        <span className='info--label'>Email: </span>
                        <span>{person.email}</span>
                    </div>
                    <div className='info-label-input'>
                        <span className='info--label'>Phone: </span>

                        <span>{person.phone}</span>
                    </div>
                </div>
                <div className='info-dobAndSave'>
                    <div className='info--dob'>
                        <span>Date of birth: </span>
                        <span>{person.dateOfBirth.toDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPerson;