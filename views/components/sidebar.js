const sidebar={
    render:async()=>{
        const sidebar=document.createElement("ul");
        sidebar.innerHTML=
        `<div class="sidebar-heading">
            <h1 class="sidebar-heading-tag">
                WHITE
            </h1>

            <i onclick="showSidebar()" class="fa-solid fa-xmark"></i>
        </div>

          <li><a class=".collapse-nar-bar" onclick="route1()" href="/home">HOME</a></li>
          <li><a class=".collapse-nar-bar" onclick="route1()" href="/about">ABOUT </a></li>
          
          <li><a class=".collapse-nar-bar" onclick="route1()" href="/portfolio">PORTFOLIO</a></li>
          <li><a class=".collapse-nar-bar" onclick="route1()" href="/service">SERVICES</a></li>

          <li class="hideOnMobileBLOG BLOGSIDEBARQWX">
            <a class=".collapse-nar-bar  " onclick="route1()" href="/blog">BLOG</a>


            <a href="" class="fa-plus-sidebar"
            onclick="showAddSidebar(event)">
                <i class="fa-solid fa-plus fa-plus-sidebar1 twistrotate"></i>
            </a>

          
            <ul class="inner-sidebar-listitems-df">
                <li class="inner-listems-items">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        GRID
                    </a>
                    <i class="fa-solid fa-plus fa-plus-sidebar11 twistrotate1"
                    onclick="showAddinnerItems(event)" 
                    ></i>
                    <ul class="innermost-bar-of-grid-extension">
                        <li class="innermost-bar-of-grid-extension-li">
                            <a href="/2gridblog"   onclick="route1()">
                                2 COLUMNS
                            </a>
                        </li>
                        <li class="innermost-bar-of-grid-extension-li">
                            <a href="/3gridblog"   onclick="route1()">
                                3 COLUMNS
                            </a>
                        </li>
                        <li class="innermost-bar-of-grid-extension-li">
                            <a href="/4gridblog"   onclick="route1()">
                                4 COLUMNS
                            </a>
                        </li>
                        <li class="innermost-bar-of-grid-extension-li">
                            <a href="/fw"   onclick="route1()">
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
                    class="fa-solid fa-plus fa-plus-sidebar11 twistrotate2"></i>

                    <ul class="innermost-bar-of-classic-extension">
                        <li class="innermost-bar-of-classic-extension-li">
                            <a href="/sidebarleft"   onclick="route1()">
                                SIDEBAR LEFT
                            </a>
                        </li>
                        <li class="innermost-bar-of-classic-extension-li">
                            <a href="/sidebarright"   onclick="route1()">
                                SIDEBAR RIGHT
                            </a>
                        </li>
                        <li class="innermost-bar-of-classic-extension-li">
                            <a href="/blogws"   onclick="route1()">
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
                    class="fa-solid fa-plus fa-plus-sidebar11 twistrotate3"></i>

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
          
          <li><a class=".collapse-nar-bar display-extend" onclick="route1()" href="/contact">CONTACT</a></li>

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
    
    

        `;

        const nav = document.querySelector("nav");  

        nav.parentNode.insertBefore(sidebar, nav.nextSibling);
    },
    render_after:async()=>{}

}
export default sidebar;
