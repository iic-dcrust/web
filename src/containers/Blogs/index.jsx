import React, {Component} from 'react'
// import { withRouter } from "react-router-dom";
import style from './Blog.module.css'
import { BlogData, BlogList, TrendingBlog } from "./BlogData";
import { BlogCard, BlogListBox, TrendingBlogBox } from "./BlogCard";
import { Container,Grid} from "@material-ui/core";
class BlogsComponent extends Component{
constructor(props){
  super(props);
  this.state={}
}
componentDidMount(){

}
render(){
  return (
    <>
      
      <Container maxWidth="lg" className={style.BlogContainer}>
        <div className={style.innoBlogBox}>
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
                  />
                );
              })}
            </Grid>
            <Grid item xs={4}>
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
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg" className={style.topPick}>
        <h2 className={style.topHeading}>Trending Now</h2>
        <Grid container spacing={1}>
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
                  BlogLeftimg={val.BlogLeftimg}
                />
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
}
// export default withRouter(BlogsComponent);
export default BlogsComponent;