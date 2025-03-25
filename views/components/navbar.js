const navbar = {
    render: async ()=> {
        return `<nav>
    <div class="inner-nav-div">
        <div class="logo-carrying-div">
            WHITE 
            <!-- <img class="logo-img-navbar-abc" src="blockchain.png" alt="LOGO"> -->
        </div>
            <ul >
     <li class="hideOnMobile"><a href="/#/land" onclick="route()"    >HOME</a></li>
      <li class="hideOnMobile"><a href="/#/about" onclick="route()"    >ABOUT</a></li>
      <li class="hideOnMobile"><a href="/#/service"
      onclick="route()"     >SERVICE</a></li>
     <li class="hideOnMobile"><a href="/#/portfolio" onclick="route()"    >PORTFOLIO</a></li>
    <li class="hideOnMobile blogactivate"><a href="/#/blog" 
        onclick="route()"    
        >BLOG</a>
    <div class="inner-div-for-hover-navigation">
                    <ul>
                        <li class="gridxyz">
                            <a 
                            class="gridxyzabc"
                            href="">GRID</a>
                            <div class="inner-section-div-for-grid-ldpx">
                                <ul>
                                    <li class="hover-item-asap">
                                   <a href="/#/grid2blog"   onclick="route()">
                                    2 COLUMNS
                                   </a>     
                                        </li>
                                    <li class="hover-item-asap">
                                        <a href="/#/grid3blog"   onclick="route()">
                                    3 COLUMNS
                                   </a>     
                                        </li>
                                    <li class="hover-item-asap">
                                        <a href="/#/grid4blog"   onclick="route()">
                                    4 COLUMNS
                                   </a>     
                                        </li>
                                    <li class="hover-item-asap">
                                        <a href="/#/gridfwblog"   onclick="route()">
                                    FULL WIDTH
                                   </a>     
                                        </li>
                                </ul>
                            </div>
                        </li>


                        <li class="clasxyz"><a
                            class="clasxyzabc"
                            href="">CLASSIC</a>
                            <div class="inner-section-div-for-colu-ldpx">
                                <ul>
                                    <li
                                    class="hover-item-asap">
                                        <a href="/#/blog" onclick="route()">
                                         SIDEBAR LEFT
                                        </a>     
                                             </li>
                                         <li
                                         class="hover-item-asap">
                                         <a href="/#/bloginverted" onclick="route()">
                                        SIDEBAR RIGHT
                                        </a>     
                                             </li>
                                         <li
                                         class="hover-item-asap"     onclick="route()">
                                        <a href="/#/blogws">
                                      WITHOUT SIDEBAR
                                        </a>     
                                             </li>
                                     
                                </ul>
                            </div>
                        </li>

                        <li class="mansxyz"><a 
                            class="mansxyzabc"
                            href="">MASONRY
                            </a>
                            <div class="inner-section-div-for-maso-ldpx">
                                <ul>
                         
                                    <li
                                    class="hover-item-asap">
                                        <a href="">
                                          2 COLUMNS
                                          </a>     
                                          </li>         

                           
                                    <li
                                    class="hover-item-asap">
                                        <a href="">
                                          3 COLUMNS
                                          </a>     
                                          </li>                                        
                                        
                                  

                                 
                                         
                                     
                                </ul>
                            </div>   
                        
                        </a></li>
                    </ul>
                 </div>  
                </li>
                <li class="hideOnMobile last"><a href="/#/contact" onclick="route()">CONTACT</a></li>
                <li onclick=rotatioN() class="menu-button">
                     <span  class="menu"   >
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                     </span>
                </li>
            </ul>
        </div>




</nav>


<!-- <div class="false-alarm">



            <div class="over-bar-navigation-section">
                <ul class="over-bar-navigation-sectionparent">
                    <li>
                        GRID
                    </li>
                    <li>
                        CLASSIC
                    </li>
                    <li>
                        MASONRY
                    </li>
                </ul>

            
            </div>
</div> -->



    <ul class="sidebar">
        <div class="sidebar-heading">
            <h1 class="sidebar-heading-tag">
                WHITE
            </h1>

            <i onclick="showSidebar()" class="fa-solid fa-xmark"></i>
        </div>

          <li><a class=".collapse-nar-bar" onclick="route1()" href="/#/land">HOME</a></li>
          <li><a class=".collapse-nar-bar" onclick="route1()" href="/#/about">ABOUT </a></li>
          
          <li><a class=".collapse-nar-bar" onclick="route1()" href="/#/portfolio">PORTFOLIO</a></li>
          <li><a class=".collapse-nar-bar" onclick="route1()" href="/#/service">SERVICES</a></li>

          <li class="hideOnMobileBLOG BLOGSIDEBARQWX">
            <a class=".collapse-nar-bar  " onclick="route1()" href="/#/blog">BLOG</a>


            <a href="" class="fa-plus-sidebarx1"
            onclick="showAddSidebar(event)">
                <i class="fa-solid fa-plus fa-plus-sidebar1 twistrotate"></i>
            </a>

          
            <ul class="inner-sidebar-listitems-df">
                <li class="inner-listems-items">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        GRID
                    </a>
                    <i class="fa-solid fa-plus fa-plus-sidebar11 
                    fa-plus-sidebar11x                     
                    twistrotate1"
                    onclick="showAddinnerItems(event)" 
                    ></i>
                    <ul class="innermost-bar-of-grid-extension">
                        <li class="innermost-bar-of-grid-extension-li">
                            <a href="/#/grid2blog"   onclick="route1()">
                                2 COLUMNS
                            </a>
                        </li>
                        <li class="innermost-bar-of-grid-extension-li">
                            <a href="/#/grid3blog"   onclick="route1()">
                                3 COLUMNS
                            </a>
                        </li>
                        <li class="innermost-bar-of-grid-extension-li">
                            <a href="/#/grid4blog"   onclick="route1()">
                                4 COLUMNS
                            </a>
                        </li>
                        <li class="innermost-bar-of-grid-extension-li">
                            <a href="/#/gridfwblog"   onclick="route1()">
                                FULL WIDTH
                            </a>
                        </li>

                    </ul>
                </li>

                <li id="iltcb" class="inner-listems-items
                inner-listems-items-columns-bhfv
                ">
                   <a href="http://" target="_blank" rel="noopener noreferrer">
                     CLASSIC
                   </a>
                    <i
                    onclick="showAddinnerItemsCL(event)"
                    class="fa-solid fa-plus 
                    fa-plus-sidebar11
                    fa-plus-sidebar11x1 twistrotate2"></i>

                    <ul class="innermost-bar-of-classic-extension">
                        <li class="innermost-bar-of-classic-extension-li">
                            <a href="/#/blog"   onclick="route1()">
                                SIDEBAR LEFT
                            </a>
                        </li>
                        <li class="innermost-bar-of-classic-extension-li">
                            <a href="/#/bloginverted"   onclick="route1()">
                                SIDEBAR RIGHT
                            </a>
                        </li>
                        <li class="innermost-bar-of-classic-extension-li">
                            <a href="/#/blogws"   onclick="route1()">
                                WITHOUT SIDEBAR
                            </a>
                        </li>
                         

                    </ul>



                </li>
                <li id="iltmb" class="inner-listems-items
                inner-listems-items-masonry-bhfv
                ">
                   <a href="http://" target="_blank" rel="noopener noreferrer">
                     MASONRY
                   </a>
                    <i 
                    onclick="showAddinnerItemsMN(event)"
                    class="fa-solid fa-plus 
                    fa-plus-sidebar11
                    fa-plus-sidebar11x2 twistrotate3"></i>

                    <ul class="innermost-bar-of-masonry-extension">
                        <li class="innermost-bar-of-masonry-extension-li">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                               2 COLUMNS
                            </a>
                        </li>
                        <li class="innermost-bar-of-masonry-extension-li">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                3 COLUMNS
                            </a>
                        </li>

                         

                    </ul>




                </li>
            </ul>
          

          </li>
          
          <li><a class=".collapse-nar-bar display-extend" onclick="route1()" href="/#/contact">CONTACT</a></li>

          <div class="sidebar-contact-info">
            <h1 class="sidebar-contact-heading-info">
                CONTACT INFO
            </h1>
            <div class="sidebar-contact-add-info-bar">
                
                <div class="sub-menu-icons-holder-addinfo">
                    <div class="icon-holder-for-fa-lec">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <h3>
                        12/A, Miranda City Tower, NYC
                    </h3>
                </div>

                <div class="sub-menu-icons-holder-addinfo">
                    <div class="icon-holder-for-fa-lec">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <h3>
                        088888979797
                    </h3>
                </div>

                <div class="sub-menu-icons-holder-addinfo">
                    <div class="icon-holder-for-fa-lec">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <h3>
                        support@email.com
                    </h3>
                </div>

            </div>


            <div class="sidebar-footer-icons-dis">
                <ul class="icons-holder-of-sidebar">
                    <li class="list-item-sidebar-footer-xd"  >
                        <i class="fa-brands fa-youtube"></i>
                    </li>
                    <li class="list-item-sidebar-footer-xd"  >
                        <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                    <li class="list-item-sidebar-footer-xd"  >
                        <i class="fa-brands fa-square-twitter"></i>
                    </li>
                    <li class="list-item-sidebar-footer-xd"  >
                        <i class="fa-brands fa-twitch"></i>
                    </li>
                </ul>
            </div>
          </div>
    
    
    </ul>



    <button id="scrollTopBtn"><p>↑</p></button>
        `;
        
         
    },
    after_render: async () => { 
        



let flag=true;
const sidebar=document.querySelector(".sidebar");
const btnAd=document.querySelector(".menu-button");
const addSidebarBtn = document.querySelector(".fa-plus-sidebarx1");

const but3on= document.querySelector(".fa-plus-sidebar11x");
if(but3on){
    but3on.addEventListener("click", showAddinnerItems);
}



const but3on1= document.querySelector(".fa-plus-sidebar11x1");
if(but3on1){
    but3on1.addEventListener("click", showAddinnerItemsCL);
}


const but3on2= document.querySelector(".fa-plus-sidebar11x2");
if(but3on2){
    but3on2.addEventListener("click", showAddinnerItemsMN);
}





const faX= document.querySelector(".fa-xmark");
if(faX){
    faX.addEventListener("click", showSidebar)
}
 
if (btnAd) {
    btnAd.addEventListener("click", rotatioN);
}
if (addSidebarBtn) addSidebarBtn.addEventListener("click", showAddSidebar);
function rotatioN(){
  {
    btnAd.classList.add("scale");
    setTimeout(() => {
      btnAd.classList.remove("scale");
    }, 150);
  }
  showSidebar();
}

 function showSidebar(){        
     const menu=document.querySelector(".menu");


     

     if(flag)
     {
     sidebar.style.display="flex";
     flag=false;
     }
     else
     {
         sidebar.style.display="none";
     flag=true;

     }
 }

 function handleResize() {
if (window.innerWidth > 768) 
{
 sidebar.style.display="none";
 flag=!flag;
}
}
window.addEventListener('resize', handleResize);
window.addEventListener('scroll', function(params) {
var header=document.querySelector("nav");
header.classList.toggle("sticky", window.scrollY>0);
var header=document.querySelector(".inner-nav-div");
header.classList.toggle("sticky", window.scrollY>0);
});




const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
 
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


 

const displayExtend= document.querySelector(".display-extend");
const cid=document.querySelector(".sidebar-contact-info");


 

let flag1=true;
function showAddSidebar(e){
    
    const innersidebar= document.querySelector(".inner-sidebar-listitems-df");
    
    const btnrotateclose=document.querySelector(".twistrotate");
    let currentMargin1 = parseInt(window.getComputedStyle(displayExtend).marginTop);
    let currentMargin2 = parseInt(window.getComputedStyle(cid).marginTop);
 

    e.preventDefault();






    if(flag1)
    {

       
        innersidebar.classList.add("dnaa")
    
        displayExtend.style.marginTop=(currentMargin1+100)+"px";
        cid.style.marginTop=(currentMargin2+100)+"px";

        btnrotateclose.classList.add("rotationbtnclose");
        flag1=false;

    }
    else  {








        
        innersidebar.classList.remove("dnaa")
        btnrotateclose.classList.remove("rotationbtnclose");

        displayExtend.style.marginTop=(currentMargin1-100)+"px";
        cid.style.marginTop=(currentMargin2-100)+"px";
       

        flag1=true;
    }
    
    

}

let flag2=true;
function showAddinnerItems(e){
     const innmogrex=document.querySelector(".innermost-bar-of-grid-extension");
     
     const btnrotateclose1=document.querySelector(".twistrotate1");

     const classic=document.getElementById("iltmb")

     const masonry=document.getElementById("iltcb")
    console.log(masonry);
    
    let currentMargin1 = parseInt(window.getComputedStyle(displayExtend).marginTop);
    let currentMargin2 = parseInt(window.getComputedStyle(cid).marginTop);



     e.preventDefault();

    if(flag2)
    {
        classic.classList.add("addmargin");
        masonry.classList.add("addmargin");
        innmogrex.classList.add("ibogeli");
        btnrotateclose1.classList.add("rotationbtnclose");


        displayExtend.style.marginTop=(currentMargin1+180)+"px";
        cid.style.marginTop=(currentMargin2+180)+"px";

        flag2=false;

    }
    else{
        classic.classList.remove("addmargin");
        btnrotateclose1.classList.remove("rotationbtnclose");
        masonry.classList.remove("addmargin");
        innmogrex.classList.remove("ibogeli");
        flag2=true;
        displayExtend.style.marginTop=(currentMargin1-180)+"px";
        cid.style.marginTop=(currentMargin2-180)+"px";

    }
    
     

}






let flag3=true;
function showAddinnerItemsCL(e){
     const innmogrexCL=document.querySelector(".innermost-bar-of-classic-extension");
        
     const btnrotateclose2=document.querySelector(".twistrotate2");

     let currentMargin1 = parseInt(window.getComputedStyle(displayExtend).marginTop);
    let currentMargin2 = parseInt(window.getComputedStyle(cid).marginTop);
     e.preventDefault();

    if(flag3)
    {
        
        innmogrexCL.classList.add("ibogelii");
        btnrotateclose2.classList.add("rotationbtnclose");
        flag3=false;
        displayExtend.style.marginTop=(currentMargin1+150)+"px";
        cid.style.marginTop=(currentMargin2+150)+"px";

    }
    else{
      
        innmogrexCL.classList.remove("ibogelii");
        btnrotateclose2.classList.remove("rotationbtnclose");
        displayExtend.style.marginTop=(currentMargin1-150)+"px";
        cid.style.marginTop=(currentMargin2-150)+"px";
        flag3=true;
    }
    
     

}

let flag4=true;
function showAddinnerItemsMN(e){
     const inmbrmse=document.querySelector(".innermost-bar-of-masonry-extension")
      
     const btnrotateclose3=document.querySelector(".twistrotate3");
    e.preventDefault();
    let currentMargin1 = parseInt(window.getComputedStyle(displayExtend).marginTop);
    let currentMargin2 = parseInt(window.getComputedStyle(cid).marginTop);
    // console.log("ENTERY HUII");
    
   if(flag4)
   {
    

    displayExtend.style.marginTop=(currentMargin1+90)+"px";
    cid.style.marginTop=(currentMargin2+90)+"px";

    inmbrmse.classList.add("ibogelii");
    btnrotateclose3.classList.add("rotationbtnclose");
       flag4=false;

   }
   else{
    

    displayExtend.style.marginTop=(currentMargin1-90)+"px";
    cid.style.marginTop=(currentMargin2-90)+"px";


    inmbrmse.classList.remove("ibogelii");
    btnrotateclose3.classList.remove("rotationbtnclose");
       flag4=true;
   }
 
   
    
}


function closeSidebar(e){
    event.preventDefault();
    
}




    }
};

export default navbar;
