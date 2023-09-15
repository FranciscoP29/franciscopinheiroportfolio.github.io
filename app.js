
//scroll to footer smoothly
    const contactButton = document.getElementById('contact-nav-id');

    contactButton.addEventListener('click', ()=>{
        const footerSection = document.getElementById('footer-id');
        footerSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    })
//-------------------------------------------------------------------------------------------

// custom cursor
    const m = window.matchMedia('(max-width: 768px)');

    if(!m.matches) {
        const coords = { x: 0, y: 0 };
        const circles = document.querySelectorAll(".circle");
                
        circles.forEach(function (circle) {
          circle.x = 0;
          circle.y = 0;
          circle.style.backgroundColor = '#424949';
        });
        
        window.addEventListener("mousemove", function(e){
          coords.x = e.clientX;
          coords.y = e.clientY;
          
        });
        
        function animateCircles() {
          
          let x = coords.x;
          let y = coords.y;
          
          circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";
            
            circle.style.scale = (circles.length - index) / circles.length;
            
            circle.x = x;
            circle.y = y;
        
            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
          });
         
          requestAnimationFrame(animateCircles);
        }
        animateCircles();
    }

//-----------------------------------------

//parallax function
    (function() {
        // Add event listener
        document.addEventListener("mousemove", parallax);
        const elem = document.querySelector("#parallax");
        // Magic happens here
        function parallax(e) {
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
            let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
            let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
            let x = `${_depth3}, ${_depth2}, ${_depth1}`;
            elem.style.backgroundPosition = x;
        }
    
    })();
//-----------------------------------

//fading text
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

//------------------------------------------------

//arrow up button not showing on hero section

    const arrowUp = document.getElementById('arrow-up-id');
    window.onscroll = function(){
        if(this.scrollY >= 500){
            arrowUp.classList.add('show-arrow')
        }else{
            arrowUp.classList.remove('show-arrow')
        }
    }

    arrowUp.addEventListener("click", function(){  
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    });

//-------------------------------------------------

//scroll to company's card ( needs refactoring change the 'top' value)

    const faroButton = document.getElementById('faro-button');
    const exaudButton = document.getElementById('exaud-button');
    const tlanticButton = document.getElementById('tlantic-button');
    const questionButton = document.getElementById('???-button');
    const div = document.getElementById("scrollable-cards");
    
    faroButton.addEventListener('click', ()=>{
            console.log(div.scrollHeight);
            div.scrollTo({
                top: div.scrollHeight/5,
                behavior: 'smooth'
            });
    })

   
    exaudButton.addEventListener('click', ()=>{
            div.scrollTo({
                top: div.scrollHeight/5*2,
                behavior: 'smooth'
            });
    })

    
    tlanticButton.addEventListener('click', ()=>{
            div.scrollTo({
                top: div.scrollHeight/5*3,
                behavior: 'smooth'
            });
    })

    

    questionButton.addEventListener('click', ()=>{
            // smooth scroll to the bottom of the div
            div.scrollTo({
                top: div.scrollHeight,
                behavior: 'smooth'
            });
    })
