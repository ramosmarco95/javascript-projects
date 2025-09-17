import '../styles/floating-bubbles-canvas.css';
import { useEffect, useRef } from "react";

export default function FloatingBubblesCanvas () {

    //Marco ramos, 11/30/2023
   const canvasRef =useRef(null);


useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // safety check

    // Handle HiDPI screens for crisp rendering
    const setupCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset
      ctx.scale(dpr, dpr);
      return ctx;
    };

    let c = setupCanvasSize();

    // Circle constructor
    function Circle(x, y, dx, dy, radius) {
      this.x = x; this.y = y;
      this.dx = dx; this.dy = dy;
      this.radius = radius;
      this.color = `hsla(${Math.random()*360}, 80%, 60%, 0.2)`; //controls colors


      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.strokeStyle = "blue";
        c.stroke();
      };

      this.update = function () {
        const W = window.innerWidth;
        const H = window.innerHeight;
        if (this.x + this.radius > W || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > H || this.y - this.radius < 0) this.dy = -this.dy;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      };
    }

    // Generate circles
    const circleArray = [];
    for (let i = 0; i < 100; i++) {
      const radius = 10 + Math.random() * 25;
      const x = Math.random() * (window.innerWidth - radius * 2) + radius;
      const y = Math.random() * (window.innerHeight - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 1.5;
      const dy = (Math.random() - 0.5) * 1.5;
      circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    // Animate
    let rafId;
    function animate() {
      rafId = requestAnimationFrame(animate);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight); //no trail effect
      //c.fillStyle = "rgba(255,255,255,0.08)"; //trail effect
      //c.fillRect(0, 0, window.innerWidth, window.innerHeight); //trail effect

      circleArray.forEach((circle) => circle.update());
    }
    animate();

    // Optional: resize canvas when window changes
    const handleResize = () => { c = setupCanvasSize(); };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
        <>
        <section class="project-description">
          <h2>Floating Bubbles Canvas (JavaScript Animation)</h2>
          <p>
            This project demonstrates proficiency with the HTML5 Canvas API and object-oriented JavaScript. 
            I built a system that dynamically sizes the canvas to the browser viewport, creates hundreds of 
            bubble objects with randomized properties, and animates them using <code>requestAnimationFrame</code>. 
            Each bubble responds to edge detection with bounce physics for natural motion, while the program 
            supports responsive resizing for smooth, adaptive visuals.
          </p>
          <p>
            This highlights my ability to combine math, physics logic, and efficient rendering techniques with 
            JavaScript to create interactive, visually appealing animations.
          </p>
        </section>

        <div className='floating-container'>
          <canvas ref={canvasRef} className="floating-bubbles-canvas" id='floating-bubbles-canvas'></canvas>
        </div>
            

        </>
    )
}