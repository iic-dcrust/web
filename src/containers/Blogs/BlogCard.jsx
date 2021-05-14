import React from "react";
import blogProfile from "assets/blogProfile.png";
import blogLeftimg from "assets/blogLeftimg.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import style from "./Blog.module.css";
import { useHistory } from "react-router";
const BlogCard = (props) => {
  const history = useHistory();
  return (
    <>
      <div className={style.blogBloxInner}>
        <div className={style.blogCard}>
          <div className={style.insideCard}>
            <article className={style.cardArticle}>
              <div className={style.innerContent}>
                <div className={style.cardCategory}>
                  <span
                    className={style.cardCategoryLink}
                    onClick={() => {
                      history.push(props.Category);
                    }}
                  >
                    {props.Category}
                  </span>
                </div>
                <span
                  className={style.blogName}
                  onClick={() => {
                    history.push();
                  }}
                >
                  {props.BlogHeading}
                </span>
                <div className={style.blogContent}>{props.AboutBlog}</div>
                <div className={style.profileBox}>
                  <div className={style.profileImg}>
                    <img
                      src={blogProfile}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                  <div className={style.profileInfoBox}>
                    <div className={style.profileName}>
                      <strong>{props.Name}</strong>
                    </div>

                    <div className={style.Blogdate}>{props.BlogDate}</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
const BlogListBox = (props) => {
  const history = useHistory();

  return (
    <>
      <div className={style.CategoryList}>
        <span
          className={style.categoryLinklist}
          onClick={() => {
            history.push();
          }}
        >
          <div className={style.categoryLinkIcon}>{props.CategoryIcon}</div>
          <span className={style.categorylistName}>{props.CategoryName}</span>
        </span>
      </div>
    </>
  );
};
const TrendingBlogBox = (props) => {
  const history = useHistory();

  return (
    <>
      <div className={style.outerTrending}>
        <div className={style.tendingBox}>
          <div className={style.trendingInner}>
            <article className={style.cardArticle}>
              <span
                onClick={() => {
                  history.push();
                }}
              >
                <div className={style.leftImgBox}>
                  <img src={blogLeftimg} className={style.leftImg} alt="" />
                </div>
              </span>
              <div className={style.innerContent}>
                <div className={style.cardCategory}>
                  <span
                    className={style.cardCategoryLink}
                    onClick={() => {
                      history.push();
                    }}
                  >
                    {props.Category}
                  </span>
                </div>
                <span
                  className={style.blogName}
                  onClick={() => {
                    history.push();
                  }}
                >
                  {props.BlogHeading}
                </span>
                <div className={style.blogContent}>{props.AboutBlog}</div>
                <div className={style.profileBox}>
                  <div className={style.profileImg}>
                    <img
                      src={blogProfile}
                      style={{ width: "50px", height: "50px" }}
                      alt=""
                    />
                  </div>
                  <div className={style.profileInfoBox}>
                    <div className={style.profileName}>
                      <strong>{props.Name}</strong>
                    </div>

                    <div className={style.Blogdate}>{props.BlogDate}</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
const SingleBlogBox = (props) => {
  const history = useHistory();

  return (
    <>
      <div className={style.blogBloxInner}>
        <div className={style.SingleblogCard}>
          <div className={style.insideCard}>
            <article className={style.cardArticle}>
              <div className={style.innerContent}>
                <h2 className={style.SingleBlogHeading}>
                  <span
                    className={style.blogName}
                    onClick={() => {
                      history.push();
                    }}
                  >
                    What I’ll Be Wearing This Party Season & The Festive Edit
                  </span>
                </h2>
                <div className={style.blogContent}>
                  <p className={style.SingleBlogContent}>
                    Lorem markdownum illic venturi instructa nobis Echidnae, cum
                    quid magna fatebor. Levat placetque Phrygios annis micat
                    carpat; sua iamque disparibus omnia Daedalion utinam et
                    curvos nomine potentia. Retro fecit stridore ignarus spatium
                    petit germanam; sive tergoque. Time sibi sit vulnere
                    Iurantem vimque Alendi ad suspiria fores An nec tumulo
                    fratres arcana Terris passos vix tenuavit petit Hostes
                    iamque Amor tamen
                  </p>

                  <ol
                    style={{
                      paddingLeft: "17px",
                      color: "#718096",
                      fontSize: "18px",
                      lineHeight: "31px",
                    }}
                  >
                    <li>Time sibi sit vulnere </li>
                    <li>Iurantem vimque</li>
                    <li>Alendi ad suspiria fores </li>
                    <li>An nec tumulo fratres arcana </li>
                    <li>Terris passos vix tenuavit petit</li>
                    <li>Hostes iamque Amor tamen</li>
                  </ol>
                </div>
                <div className={style.SocialIcons}>
                  <ul className={style.Socialul}>
                    <li className={style.Socialli}>
                      <FacebookIcon
                        style={{
                          color: "#38529a",
                          marginTop: "9px",
                          fontSize: "26px",
                        }}
                      />
                    </li>
                    <li className={style.Socialli}>
                      <InstagramIcon
                        style={{
                          color: "#c13584",
                          marginTop: "9px",
                          fontSize: "26px",
                        }}
                      />
                    </li>
                    <li className={style.Socialli}>
                      <TwitterIcon
                        style={{
                          color: "#1da1f2",
                          marginTop: "9px",
                          fontSize: "26px",
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
const SingleBlogRight = (props) => {
  return (
    <>
      <div className={style.SingleRight}>
        <div className={style.blogCard}>
          <div className={style.insideCard}>
            <article className={style.cardArticle}>
              <div className={style.innerContent}>
                <div className={style.profileBox}>
                  <div className={style.profileImg}>
                    <img
                      src={blogProfile}
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>
                  <div className={style.profileInfoBox}>
                    <div className={style.profileName}>
                      <strong>Prateek</strong>
                    </div>
                    <div className={style.SocialIcons}>
                      <ul className={style.Socialul}>
                        <li className={style.Socialli}>
                          <FacebookIcon
                            style={{
                              color: "#38529a",
                              marginTop: "9px",
                              fontSize: "26px",
                            }}
                          />
                        </li>
                        <li className={style.Socialli}>
                          <InstagramIcon
                            style={{
                              color: "#c13584",
                              marginTop: "9px",
                              fontSize: "26px",
                            }}
                          />
                        </li>
                        <li className={style.Socialli}>
                          <TwitterIcon
                            style={{
                              color: "#1da1f2",
                              marginTop: "9px",
                              fontSize: "26px",
                            }}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
const RelatedPost = (props) => {
  const history = useHistory();

  return (
    <>
      <div className={style.RelatedPostBox}>
        <div className={style.blogCard}>
          <div className={style.insideCard}>
            <article className={style.cardArticle}>
              <div className={style.innerContent}>
                <span
                  className={style.blogName}
                  onClick={() => {
                    history.push();
                  }}
                >
                  {props.BlogHeading}
                </span>

                <div className={style.profileInfoBox}>
                  <div className={style.profileName}>
                    <strong>{props.Name}</strong>
                  </div>

                  <div className={style.Blogdate}>{props.BlogDate}</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
export {
  BlogCard,
  BlogListBox,
  TrendingBlogBox,
  SingleBlogBox,
  SingleBlogRight,
  RelatedPost,
};
