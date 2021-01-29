import React from 'react'

function ArticleItem() {
    return (
        <>
            <img class="img img-fluid img-news" src="{{asset('images/img-news-1.jpg')}}" alt=""/>
                    <div class="box-text-news">
                        <p class="txt-title-news">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque
                            gravida tellus quis placerat.</p>
                        <div class="row container-time-created">
                            <img class="img img-fluid icon-clock" src="{{asset('images/clock.png')}}" alt=""/>
                            <p class="txt-time-news">Senin, 20 Januari 2020 | 13.00 WIB</p>
                        </div>
                    </div>
                    <div class="container-content-news">
                        <p class="txt-content-news">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in
                            voluptate velit esse c..</p>
                        <div class="offset-xl-9 ">
                            <a href="">
                                <div class="row">
                                    <div class="col-xl-9">
                                        <p class="txt-see-news">Selanjutnya</p>
                                    </div>
                                    <div class="col-xl-3"><img class="img img-fluid" src="{{asset('images/right1.png')}}"alt=""/></div>
                                </div>
                            </a>
                        </div>
                    </div>  
        </>
    )
}

export default ArticleItem
