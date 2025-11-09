import '../styles/home-page.css'
import { Link } from 'react-router-dom'

export default function HomePage () {

    return (
        <>
            <h1 className='home-page-heading'>Projects:</h1>
            <ul className='project-ul'>
                <li className='project-li'>
                    <Link className='project-link' to="/fortune-teller-page">01 - Fortune Teller Page</Link>
                </li>
                <li className='project-li'>
                    <Link className='project-link' to="/floating-bubbles-canvas">02 - Floating Bubbles Canvas</Link>
                </li>
                <li className='project-li'>
                    <Link className='project-link' to="https://offline-habit-tracker.netlify.app/">03 - Offline Habit Tracker</Link>
                </li>
                <li className='project-li'>
                    <Link className='project-link' to="https://img-optimizer.netlify.app/">04 - Image Optimizer & MetaData Stripper</Link>
                </li> 
                <li className='project-li'>
                    <Link className='project-link' to="https://ramosmarco95.github.io/real-time-kanban/">05 - Real Time Kanban (Project Management Tool)</Link>
                </li>               
            </ul>
        </>
    )
}