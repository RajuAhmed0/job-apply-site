import React from 'react';
import Banner from './Banner/Banner';
import AnimationImg from './AnimationImg/AnimationImg';
import All_Jobs from './All_Jobs/All_Jobs';
import MyApplications from '../Pages/MyApplications/MyApplications';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AnimationImg></AnimationImg>
            <All_Jobs></All_Jobs>
            <MyApplications></MyApplications>
        </div>
    );
};

export default Home;