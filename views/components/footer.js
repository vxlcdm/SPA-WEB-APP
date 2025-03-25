const footer={
    render:async()=>{
        
        return  `
</footer>        
    <div class="container">
        <h1 class="white-heading-elemtnt">WHITE</h1>
          <div class="footercontent">
            <div class="footersocialmedia"> 
                <a id="footer-icons" href="">
                    <i class="bi bi-facebook"></i>
                </a> 
                <a id="footer-icons" href="">
                    <i class="bi bi-twitter-x"></i>
                </a> 
                <a id="footer-icons" href="">
                    <i class="bi bi-linkedin"></i>
                </a>
                <a id="footer-icons" href="">
                    <i class="bi bi-slack"></i>
                </a>
            </div>
            <div >
                <ul class="footer-link-blow">
                   <li>    <a href="" class="f-links-blow">HOME</a></li>
                   <li>    <a href="" class="f-links-blow">PORTFOLIO</a></li>
                   <li>    <a href="" class="f-links-blow">ABOUT</a></li>
                   <li>    <a href="" class="f-links-blow">BLOG</a></li>
                   <li>    <a href="" class="f-links-blow">CONTACT</a></li>

                </ul>
                
            </div>
            <p class="copyrightedsection">All copyright © reserved by ThemePure 2025
            </p>
            <p class="copyrightedsection" id="time"></p>  
          </div>
    </div>
</footer>
        `;
        
       
    },
    after_render:async()=>{
        const time = document.querySelector('#time');
        const updateTime = () => {
            
            const newDate = new Date();
            const clock = newDate.toTimeString().slice(0, 8);
            const date = newDate.toLocaleDateString().slice(0, 9);
           
            time.innerHTML = `${clock} &nbsp;&nbsp; ${date}`;
          };
           
            updateTime();
            setInterval(updateTime, 1000);
    }

}
export default footer;
