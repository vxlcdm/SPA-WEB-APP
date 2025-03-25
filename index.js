import Home from './views/pages/Home.js';
import Nav from './views/components/navbar.js';
import Sidebar from './views/components/sidebar.js';
import Footer from './views/components/footer.js';
import Land from './views/pages/Land.js';
import About from './views/pages/About.js';
import Service from './views/pages/Service.js';
import Portfolio from './views/pages/Portfolio.js';
import Contact from './views/pages/Contact.js'
import Blog from './views/pages/Blog.js'
import Grid2blog from './views/pages/Grid2blog.js'
import Grid3blog from './views/pages/Grid3blog.js'
import Grid4blog from './views/pages/Grid4blog.js'
import Gridfwblog from './views/pages/Gridfwblog.js'
import Blogws from './views/pages/Blogws.js';
import Bloginverted from './views/pages/Bloginverted.js';

import { parseRequestUrl } from './services/utils.js';


 

const routes = {
    '/': Home,
    '/land': Land,
    '/about':About,
    '/service': Service,
    '/portfolio': Portfolio,
    '/contact': Contact,
    '/blog':     Blog,  
    '/grid2blog': Grid2blog,
    '/grid3blog': Grid3blog,
    '/grid4blog': Grid4blog,
    '/gridfwblog': Gridfwblog,
    '/blogws': Blogws,
    '/bloginverted': Bloginverted,
    
    

     
     
  };
  


  const router = async () => {
    

    const header = null || document.getElementById('header_root');
    const mainbody= null|| document.getElementById('page_root');
    const footer= null || document.getElementById('footer_root');
    
  
    
    header.innerHTML = await Nav.render();
    await Nav.after_render();

 


    
    const { resource, id, verb } = parseRequestUrl();
  
    const parsedUrl =
    (resource ? '/' + resource : '/') +
    (id ? '/:id' : '') +
    (verb ? '/' + verb : '');
    console.log(parsedUrl);
    
    
    const page = routes[parsedUrl] || Error404;
    mainbody.innerHTML = await page.render();
    await page.after_render();

    footer.innerHTML=await Footer.render();
    await Footer.after_render();
  };


 



  window.addEventListener('hashchange', router);

 
  window.addEventListener('load', router);
   

