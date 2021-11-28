import React from 'react';
import { Launch } from '../Launches/launches';

export class LaunchList extends React.Component{
    render(){
        return(
            <div>
                 <Launch 
                    images="https://images2.imgbox.com/40/e3/GypSkayF_o.png"
                    title="FalconSat"
                    date="2006-03-24T22:30:00.000Z" 
                    description="Successful first stage burn and transition to second stage,
                     maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s,
                    Failed to reach orbit, Failed to recover first stage"/>
            </div>
        )
    }

}