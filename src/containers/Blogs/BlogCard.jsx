import React from "react";
import blogProfile from "assets/blogProfile.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import style from "./Blog.module.css";
import { useHistory, useParams } from "react-router";
import { BlogData } from "./BlogData";
import styled from "styled-components";
import { getDeviceType } from "helpers";

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
                    // onClick={() => {
                    //   history.push(`/${props.Category}`);
                    // }}
                  >
                    {props.Category}
                  </span>
                </div>
                <span
                  className={style.blogName}
                  onClick={() => {
                    history.push(
                      `/blogs/${props.Category}/${props.blogId}/${props.BlogHeading}`
                    );
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
  // const history = useHistory();

  return (
    <>
      <div className={style.CategoryList}>
        <span
          className={style.categoryLinklist}
          // onClick={() => {
          //   history.push(`/blogs/${props.CategoryName}`);
          // }}
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
        <TrendingBox>
          <div className={style.trendingInner}>
            <Article className={style.cardArticle}>
              <span
                onClick={() => {
                  history.push(
                    `/blogs/${props.Category}/${props.blogId}/${props.BlogHeading}`
                  );
                }}
              >
                <div className={style.leftImgBox}>
                  <Img
                    src={props.blogLeftimg}
                    className={style.leftImg}
                    alt=""
                  />
                </div>
              </span>
              <div className={style.innerContent}>
                <div className={style.cardCategory}>
                  <span
                    className={style.cardCategoryLink}
                    // onClick={() => {
                    //   history.push(`/blogs/${props.Category}`);
                    // }}
                  >
                    {props.Category}
                  </span>
                </div>
                <span
                  className={style.blogName}
                  onClick={() => {
                    history.push(
                      `/blogs/${props.Category}/${props.blogId}/${props.BlogHeading}`
                    );
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
            </Article>
          </div>
        </TrendingBox>
      </div>
    </>
  );
};
const SingleBlogBox = (props) => {
  const { blogId } = useParams();
  const blogTemp = BlogData.filter(
    (blog) => blog.blogId.toString() === blogId
  )[0];
  return (
    <>
      <div className={style.blogBloxInner}>
        <div className={style.SingleblogCard}>
          <div className={style.insideCard}>
            <article className={style.cardArticle}>
              <div className={style.innerContent}>
                <h2 className={style.SingleBlogHeading}>
                  <span className={style.blogName}>{blogTemp.BlogHeading}</span>
                </h2>
                <div className={style.blogContent}>
                  {blogTemp.FullBlog.map((data) => (
                    <p className={style.SingleBlogContent}>{data}</p>
                  ))}
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
                      <strong>Tamanna Verma</strong>
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
                    history.push(
                      `/blogs/${props.Category}/${props.blogId}/${props.BlogHeading}`
                    );
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

const Article = styled.div`
  display: flex;
  flex-direction: ${getDeviceType() === "mobile" ? "column" : "row"};
`;

const Img = styled.img`
  height: ${getDeviceType() === "desktop" ? "max-content" : "250px"};
  border-radius: ${getDeviceType() === "mobile"
    ? "16px 16px 0 0"
    : "16px 0 0 16px"};
`;

const TrendingBox = styled.div`
  padding: ${getDeviceType() === "desktop" ? "10px" : "0"};
`;
