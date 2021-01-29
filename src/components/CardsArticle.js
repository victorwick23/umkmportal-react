import React from 'react'
import {Link} from 'react-router-dom';

function CardsArticle(props) {
    return (
        <div class="card-article">
                <div>
                    <img class="img img-fluid img-news" src={props.imgnewssrc} alt=""/>
                    <div class="box-text-news">
                        <p class="txt-title-news">{props.titlenews}</p>
                        <div class="row container-time-created">
                            <img class="img img-fluid icon-clock" src={props.iconsrc} alt=""/>
                            <p class="txt-time-news">{props.time}</p>
                        </div>
                    </div>
                    <div class="container-content-news">
                        <p class="txt-content-news">{props.contentnews}</p>
                        <div class="offset-xl-9 ">
                            <a href="">
                                <div class="row">
                                    <div class="col-xl-9">
                                        <p class="txt-see-news">Selanjutnya</p>
                                    </div>
                                    <div class="col-xl-3"><img class="img img-fluid" src={props.iconarrow} alt=""/></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CardsArticle
