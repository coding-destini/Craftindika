import React,{useEffect} from 'react';
import Navbar from '../components/Navbar';
import AddRecord from '../components/AddRecords';
import Salary from '../components/statitics/Salary';
import Contracted from '../components/statitics/Contracted';
import Department from '../components/statitics/Department';
import Detailed from '../components/statitics/Detailed';

const Home = ({isLoggedIn}) => {

    return (
        <>
            <Navbar />
            <div className='grid grid-cols-2 mx-4 px-4'>
                    <AddRecord />
                <div className='grid grid-cols-2'>
                    <div><Salary/></div>
                    <div><Contracted /></div>
                    <div><Department/></div>
                    <div><Detailed/></div>
                </div>
            </div>
        </>
    );
}

export default Home;
