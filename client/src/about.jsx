//about.jsx, Syed Kazmi, 301330922, 2024/05/31
import React from 'react';
import { Link } from 'react-router-dom';
export default function About() {
     return (
     <>
    <p>Name: Syed Murtaza Kazmi</p>
    <p>I am a second year software engineering student at Centennial College.</p>
    <p>
        You can view my resume by clicking the following link:  
        <a href="file:C:/Users/syedm/OneDrive/Documents/Centennnial_Sem_3_again/COMP_229/COMP229_Assignment1/client/public/resumes/Syed_KazmiResume2024.pdf" target="_blank"> Resume</a>
        

    </p>
    <p>Heres a recente picture of me: </p>
    <img src="/public/images/me.png" width="50%" 
     height="50%" alt="Logo"></img>
    </>
    );
    }
    