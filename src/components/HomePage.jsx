import React from 'react';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/img.png";

const HomePage = () => {
    return (
        <div>
            <div className="container text-center">
                <h1>Kento Suzuki</h1>

                <img src={profileImage} className="profileImage"/>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi consectetur consequatur
                    corporis, deleniti dolor dolorem eaque eius error excepturi fuga ipsa iste iure modi molestiae
                    mollitia nam natus nesciunt nisi odit officia optio perferendis porro praesentium quas quo sapiente
                    similique ut veniam voluptatem! Aliquid debitis distinctio eaque esse ex facere officia tempore
                    tenetur? Aliquam asperiores aspernatur, culpa dignissimos dolor dolore doloribus enim et, excepturi
                    expedita fugiat hic in modi mollitia nam natus nemo porro provident quasi quis quo ratione
                    reiciendis sit soluta vel velit veniam voluptatum. Adipisci alias aperiam consequatur cumque
                    deleniti dolore, ducimus expedita impedit itaque, laudantium voluptatum.
                </p>

                <section className="page-section" id="services">
                    <div className="service">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
                            <h3 className="section-subheading text-muted mb-5">
                                私が作った作品一覧です
                            </h3>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
                                <h4 className="my-3">ECサイト</h4>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                    maxime quam architecto quo inventore harum ex magni, dicta
                                    impedit.
                                </p>
                            </div>
                            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
                                <h4 className="my-3">レスポンシブサイト</h4>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                    maxime quam architecto quo inventore harum ex magni, dicta
                                    impedit.
                                </p>
                            </div>
                            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
                                <h4 className="my-3">ウェブセキュリティ</h4>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                    maxime quam architecto quo inventore harum ex magni, dicta
                                    impedit.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skill">
                    <div className="text-center">
                        <h1 className="title">スキル</h1>
                        <div className="row text-center">
                            <div className="col-md-4 services">
                                <img src={reactImage}/>
                                <h4>React</h4>
                                <p>Reactがつかえます</p>
                            </div>
                            <div className="col-md-4 services">
                                <img src={jsImage}/>
                                <h4>HTML/CSS</h4>
                                <p>HTML/CSSがつかえます</p>
                            </div>
                            <div className="col-md-4 services">
                                <img src={firebaseImage}/>
                                <h4>Firebase</h4>
                                <p>Firebaseがつかえます</p>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary">
                            スキル一覧
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
