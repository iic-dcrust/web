import React, { Component } from "react";
import style from "./Blog.module.css";
import { BlogData } from "./BlogData";
import { SingleBlogBox, SingleBlogRight, RelatedPost } from "./BlogCard";
import { Container, Grid } from "@material-ui/core";
class SingleBlogsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <Container maxWidth="lg" className={style.BlogContainer}>
          <div className={style.innoBlogBox}>
            <Grid container spacing={5}>
              <Grid item xs={8}>
                <SingleBlogBox />
              </Grid>
              <Grid item xs={4}>
                <SingleBlogRight />
                <div className={style.RelatedHead}>
                  <h2 className={style.RelatedPostHeading}>Related Posts</h2>
                </div>
                {BlogData.map((val, ind) => {
                  return (
                    <RelatedPost
                      key={ind}
                      BlogHeading={val.BlogHeading}
                      Name={val.Name}
                      BlogDate={val.BlogDate}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </div>
        </Container>
      </>
    );
  }
}
export default SingleBlogsComponent;
