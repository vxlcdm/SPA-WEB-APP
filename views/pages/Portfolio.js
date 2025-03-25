const Portfolio={

    render:async()=>{
        return `
        <div>

        




 <div class="portfolio-us-big-banner">
    <div class="portfolio-us-big-banner-child">
        <div class="portfolio-us-secondary-div">
            <h1 class="portfolio-usheadfgin">
                PORTFOLIO GRID
            </h1>
            <p class="portfolio-us-pearagrph">
                Home &nbsp; / &nbsp; Portfolio &nbsp; / &nbsp; Grid
            </p>
        </div>
    </div>
</div> 








<!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PORTFOLIO///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->



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

<!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PORTFOLIO///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->






        </div>
        
        `;
    },

    after_render:async()=>{
        
        
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


}
export default Portfolio;
