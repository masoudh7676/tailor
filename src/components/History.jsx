import React from 'react'
import './services&history.css'
import HistoryC from './HistoryC';
import Footer from './Footer';
export default function HistoryPage() {
    return (
        <div style={{backgroundColor: '#212529'}}>
            <div className='position-relative d-flex justify-content-end  img__containerH bg-white'>
                <img src="./images/about.jpg.webp" className='image__custom object-fit-cover' alt="" />
                <h2 className='text-capitalize position-absolute text-white top-50 fw-bold history__title'>history</h2>
            </div>
                <HistoryC/>
                <Footer/>
        </div>
    )
}
