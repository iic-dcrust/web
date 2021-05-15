import React from "react";
import style from "./Blog.module.css";
import { BlogData, BlogList, TrendingBlog } from "./BlogData";
import { BlogCard, BlogListBox, TrendingBlogBox } from "./BlogCard";
import { Container, Grid } from "@material-ui/core";
import { getDeviceType } from "helpers";
import styled from "styled-components";
const BlogsComponent = () => {
  return (
    <>
      <Container maxWidth="lg" className={style.BlogContainer}>
        <InnerBox className={style.innoBlogBox}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <h2 className={style.InnoHeading}>Innovative Ideas</h2>
              {BlogData.map((val, ind) => {
                return (
                  <BlogCard
                    key={ind}
                    Category={val.Category}
                    BlogHeading={val.BlogHeading}
                    AboutBlog={val.AboutBlog}
                    Name={val.Name}
                    BlogDate={val.BlogDate}
                    imgsrc={val.imgsrc}
                    blogId={val.blogId}
                    FullBlog={val.FullBlog}
                  />
                );
              })}
            </Grid>
            <CategoryList item xs={4}>
              <h2 className={style.CatHeading}>Category</h2>
              {BlogList.map((val, ind) => {
                return (
                  <BlogListBox
                    key={ind}
                    CategoryName={val.CategoryName}
                    CategoryIcon={val.CategoryIcon}
                  />
                );
              })}
            </CategoryList>
          </Grid>
        </InnerBox>
      </Container>
      <Container maxWidth="lg" className={style.topPick}>
        <h2 className={style.topHeading}>Trending Now</h2>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            {TrendingBlog.map((val, ind) => {
              return (
                <TrendingBlogBox
                  key={ind}
                  Category={val.Category}
                  BlogHeading={val.BlogHeading}
                  AboutBlog={val.AboutBlog}
                  Name={val.Name}
                  BlogDate={val.BlogDate}
                  imgsrc={val.imgsrc}
                  blogLeftimg={val.blogLeftimg}
                  blogId={val.blogId}
                />
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BlogsComponent;

const CategoryList = styled(Grid)`
  display: ${getDeviceType() === "mobile" ? "none" : ""};
`;
const InnerBox = styled.div`
  margin-left: ${getDeviceType() === "mobile" ? "-5px" : "0"};
`;
