import '../styles/fortune-teller.css'
import { useState } from "react";

export default function FortuneTeller () {
 // State to hold the current fortune
  const [fortune, setFortune] = useState("");

    /*const fortune1 = "Your cat will look very cuddly today.";
    const fortune2 = "The weather will be nice tomorrow.";
    const fortune3 = "Be cautious of your new neighbors.";
    const fortune4 = "You will find a new hobby soon.";
    const fortune5 = "It would be wise to avoid the color red today.";

    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);

    let selectedFortune = "";

    if (randomNumber === 1) {
    selectedFortune = fortune1;
    } else if (randomNumber === 2) {
    selectedFortune = fortune2;
    } else if (randomNumber === 3) {
    selectedFortune = fortune3;
    } else if (randomNumber === 4) {
    selectedFortune = fortune4;
    } else if (randomNumber === 5) {
    selectedFortune = fortune5;
    }
    console.log(selectedFortune);*/


    const fortunes = [
    "Your cat will look very cuddly today.",
    "The weather will be nice tomorrow.",
    "Be cautious of your new neighbors.",
    "You will find a new hobby soon.",
    "It would be wise to avoid the color red today.",
    "A taco will bring you unexpected joy this week.",
    "Beware of ducks… they are plotting against you.",
    "You will laugh so hard today, people will stare."
    ];

    
    const getFortune = (e) => {
        e.preventDefault(); // prevent form from refreshing page
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        setFortune(fortunes[randomIndex]);
        console.log(fortunes[randomIndex])
    };
    

    return (
        <>
            <section class="project-description">
                <h2>Fortune Teller App</h2>
                <p>
                    This project demonstrates how JavaScript can be used to generate random outcomes and update the user interface dynamically. 
                    The app uses an array of fortune messages and the <code>Math.random()</code> function to select one at random each time the 
                    button is clicked. React’s <code>useState</code> hook stores the selected fortune and updates the input field in real time 
                    without refreshing the page.
                </p>
                <ul>
                    <li>Random fortune selection using <code>Math.random()</code></li>
                    <li>Array of fun and quirky fortune messages</li>
                    <li>Dynamic UI updates with React <code>useState</code></li>
                    <li>Prevents default form refresh for a smooth experience</li>
                </ul>
            </section>

            <div className="container-fluid fortune-container">
                <form onSubmit={getFortune} className="fortune-form">
                    <button type="submit" className='fortune-button'>Look Your Fortune</button>
                    <label htmlFor="display-fortune" className="fortune-label">
                    Good Luck:
                    </label>
                    <input
                        type="text"
                        name="display-fortune"
                        className="fortune-input"
                        value={fortune}
                        readOnly
                    />                    
                </form>
            </div>
        </>
    )
}