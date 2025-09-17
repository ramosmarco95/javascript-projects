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
            </ul>
        </>
    )
}