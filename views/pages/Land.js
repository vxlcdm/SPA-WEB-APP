const Land={
    render:async()=>{
       return        `
        
<div class="bomdie">
    <div class="white-section">
        <div class="container-border-main-only">
            <div class="white-section-container">
            
                <h1 class="white-section-heading">
                    WHITE
                </h1>
                <p class="white-para-section">
                    DESIGN &nbsp;
                    |&nbsp;
                    DEVELOPMENT
                    &nbsp;|&nbsp;
                    BRANDING
        
        
                </p>
                </div>
        </div>
        
    </div>

</div>
 



<div class="wrapperforportfolio">
    <section id="portfolio">
        <div class="portolio-title">
             
             
        </div>
        <ul>
            <li class="listitemBox active" data-filter="all">
                ALL
                <p class="slightline"></p>
                
            </li>
            <li class="listitemBox" data-filter="Photoshop">
                WEB DESIGN
                <p class="slightline"></p>
                
            </li>
            <li class="listitemBox" data-filter="Web Design">
                WEB DEVELOPMENT
                <p class="slightline"></p>
                
            </li>
            <li class="listitemBox" data-filter="Branding">
                PHOTOGRAPHY
                <p class="slightline"></p>
                
            </li>
        </ul>
    
        <div class="product">
    
            <div class="itemBox" data-item="Photoshop"><img src="https://picsum.photos/id/69/300/300" alt=""></div>
    
            <div class="itemBox" data-item="Web Design"><img src="https://picsum.photos/id/227/300/300" alt=""></div>
    
            <div class="itemBox" data-item="Photoshop"><img src="https://picsum.photos/id/238/300/300" alt=""></div>
    
            <div class="itemBox" data-item="Branding"><img src="https://picsum.photos/id/212/300/300" alt=""></div>

            <div class="itemBox" data-item="Branding"><img src="https://picsum.photos/id/62/300/300" alt=""></div>
    
            <div class="itemBox" data-item="Photoshop"><img src="https://picsum.photos/id/37/300/300" alt=""></div>
    
            <div class="itemBox" data-item="Branding"><img src="https://picsum.photos/id/99/300/300" alt=""></div>
    
            <div class="itemBox" data-item="Web Design"><img src="https://picsum.photos/id/29/300/300" alt=""></div>
    
            <div class="itemBox" data-item="Branding"><img src="https://picsum.photos/id/71/300/300" alt=""></div>
    
        </div>
    </section>
    <div class="button-holder-div">
        <button>VIEW MORE</button>
    </div>
</div> 

 



<div class="parent-container-ofblog">
    <div class="child-container-of-blog">
        <h1 class="heading-of-the-blog">
            OUR BLOG
        </h1>
        <p class="paragraph-for-the-blog">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe quaerat error, culpa accusantium voluptate consectetur molestias.
        </p>
        <div class="cards-for-the-blog">
            <div class="card-item-blog">
                <img src="https://picsum.photos/id/272/700/600" alt="" class="card-item-blog-img">
                <p>By Mark Stoner, 23 November, 2025</p>
                <a href="">
                    <h3>THE ULTIMATE RENTERS GUIDE</h3>
                </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, officia.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Read more -></a>
            </div>
            <div class="card-item-blog">
                <img src="https://picsum.photos/id/319/700/600" alt="" class="card-item-blog-img">
                <p>By Mark Stoner, 23 November, 2025</p>
                <a href="">
                    <h3>THE ULTIMATE RENTERS GUIDE</h3>
                </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, officia.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Read more -></a>
            </div>
            <div class="card-item-blog">
                <img src="https://picsum.photos/id/299/700/600" alt="" class="card-item-blog-img">
                <p>By Mark Stoner, 23 November, 2025</p>
                <a href="">
                    <h3>THE ULTIMATE RENTERS GUIDE</h3>
                </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, officia.</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">Read more -></a>
            </div>
        </div>
    </div>
</div>

 
        `;
         
         

    },
    after_render:async()=>
    {
   let list = document.querySelectorAll(".listitemBox");
        let itemBox = document.querySelectorAll(".itemBox");
        for(let i=0; i<list.length; i++){
            list[i].addEventListener("click",function(){
                for(let j = 0; j<list.length; j++){
                    list[j].classList.remove("active");
                }
                this.classList.add("active");
                let dataFilter = this.getAttribute("data-filter");
                for(let k = 0; k<itemBox.length; k++){
                    itemBox[k].classList.remove("active");
                    itemBox[k].classList.add("hide");
        
                    if(itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
                        itemBox[k].classList.remove("hide");
                        itemBox[k].classList.add("active");
                    }
                }
            })
        }
    }
};
export default Land;
