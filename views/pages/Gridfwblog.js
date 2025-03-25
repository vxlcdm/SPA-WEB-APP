const Gridfwblog={

    render:async()=>{
        return `
        
    <div class="blog-us-big-banner">
        <div class="blog-us-big-banner-child">
            <div class="blog-us-secondary-div">
                <h1 class="blog-usheadfgin">
                    BLOG CLASSIC
                </h1>
                <p class="blog-us-pearagrph">
                    Home &nbsp; / &nbsp; Blog &nbsp; / &nbsp; Classic
                </p>
            </div>
        </div>
    </div> 
    




    <div class="blog-whole-section-div">
        <div class="blog-whole-section-child-container">



        

    <div class="blog-sectioncontaent-max-div">




        <div class="blog-section-div-content">
            <img src="https://picsum.photos/id/397/2560/1440" alt="" class="blogsection-max-content-img">
            <p class="blog-sontent-max-div-author">
                By Mark Stoner, 23 November, 2025
            </p>
            <h1 class="blog-sontent-max-div-title-a">
                THE ULTIMATE RENTERS GUIDE
            </h1>
            <p class="blog-content-max-div-introduction-info">
                Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.
            </p>
            <a href="">Read more -></a>
        </div>




        <div class="blog-section-div-content">
            <img src="https://picsum.photos/id/217/2560/1440" alt="" class="blogsection-max-content-img">
            <p class="blog-sontent-max-div-author">
                By Mark Stoner, 23 November, 2025
            </p>
            <h1 class="blog-sontent-max-div-title-a">
                THE ULTIMATE RENTERS GUIDE
            </h1>
            <p class="blog-content-max-div-introduction-info">
                Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.
            </p>
            <a href="">Read more -></a>
        </div>



        <div class="blog-section-div-content">
            <img src="https://picsum.photos/id/247/2560/1440" alt="" class="blogsection-max-content-img">
            <p class="blog-sontent-max-div-author">
                By Mark Stoner, 23 November, 2025
            </p>
            <h1 class="blog-sontent-max-div-title-a">
                THE ULTIMATE RENTERS GUIDE
            </h1>
            <p class="blog-content-max-div-introduction-info">
                Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.
            </p>
            <a href="">Read more -></a>
        </div>






        <div class="blog-section-div-content">
            <img src="https://picsum.photos/id/397/2560/1440" alt="" class="blogsection-max-content-img">
            <p class="blog-sontent-max-div-author">
                By Mark Stoner, 23 November, 2025
            </p>
            <h1 class="blog-sontent-max-div-title-a">
                THE ULTIMATE RENTERS GUIDE
            </h1>
            <p class="blog-content-max-div-introduction-info">
                Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.
            </p>
            <a href="">Read more -></a>
        </div>




        <div class="blog-section-div-content">
            <img src="https://picsum.photos/id/217/2560/1440" alt="" class="blogsection-max-content-img">
            <p class="blog-sontent-max-div-author">
                By Mark Stoner, 23 November, 2025
            </p>
            <h1 class="blog-sontent-max-div-title-a">
                THE ULTIMATE RENTERS GUIDE
            </h1>
            <p class="blog-content-max-div-introduction-info">
                Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.
            </p>
            <a href="">Read more -></a>
        </div>



        <div class="blog-section-div-content">
            <img src="https://picsum.photos/id/247/2560/1440" alt="" class="blogsection-max-content-img">
            <p class="blog-sontent-max-div-author">
                By Mark Stoner, 23 November, 2025
            </p>
            <h1 class="blog-sontent-max-div-title-a">
                THE ULTIMATE RENTERS GUIDE
            </h1>
            <p class="blog-content-max-div-introduction-info">
                Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.
            </p>
            <a href="">Read more -></a>
        </div>





        <div class="blog-section-div-content">
            <img src="https://picsum.photos/id/397/2560/1440" alt="" class="blogsection-max-content-img">
            <p class="blog-sontent-max-div-author">
                By Mark Stoner, 23 November, 2025
            </p>
            <h1 class="blog-sontent-max-div-title-a">
                THE ULTIMATE RENTERS GUIDE
            </h1>
            <p class="blog-content-max-div-introduction-info">
                Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.
            </p>
            <a href="">Read more -></a>
        </div>




       



        <div class="blog-section-div-content">
            <img src="https://picsum.photos/id/247/2560/1440" alt="" class="blogsection-max-content-img">
            <p class="blog-sontent-max-div-author">
                By Mark Stoner, 23 November, 2025
            </p>
            <h1 class="blog-sontent-max-div-title-a">
                THE ULTIMATE RENTERS GUIDE
            </h1>
            <p class="blog-content-max-div-introduction-info">
                Grass there without lights be years male have and grass firmament kind bring, is thing doesn't herb.
            </p>
            <a href="">Read more -></a>
        </div>












        </div>

        <div class="bottom-pagination-section">
            <div class="bottom-pagination-itemboxholder">
                <div class="boxitem-pagin-c7">
                    ◀
                </div>
                <div class="boxitem-pagin-c7">
                    1
                </div>
                <div class="boxitem-pagin-c7">
                    2
                </div>
                <div class="boxitem-pagin-c7">
                    3
                </div>
                <div class="boxitem-pagin-c7">
                    4
                </div>
                <div class="boxitem-pagin-c7">
                    5
                </div>
                <div class="boxitem-pagin-c7">
                    ▶
                </div>
            </div>
        </div>

    </div>

    </div>

        `;
    },

    after_render:async()=>{

        const linkforblog = document.createElement("link");
        linkforblog.rel = "stylesheet";
        linkforblog.href = "./views/pages/Gridfwblog.css"; // Adjust the path if needed
        document.head.appendChild(linkforblog);
    }
}
export default Gridfwblog ;