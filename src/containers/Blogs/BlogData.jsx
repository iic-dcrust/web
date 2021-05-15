import blogProfile from "assets/blogProfile.png";
import blogLeftimg from "assets/blogLeftimg.jpg";
const BlogData = [
  {
    Category: "Technical",
    BlogHeading:
      "How to create a setup where A can ping to B and C, but B and C are not able to ping each other?",
    AboutBlog:
      "A can Ping to B to C , B and C can ping to A but B and C are not able to ping each other",
    imgsrc: blogProfile,
    Name: "Tamanna Verma",
    BlogDate: "May 15, 2021",
  },
  {
    Category: "Technical",
    BlogHeading: "Machine Learning is Driving Innovation at Uber.",
    AboutBlog:
      "Some of us really don’t know that what is machine learning actually …",
    imgsrc: blogProfile,
    Name: "Tamanna Verma",
    BlogDate: "May 15, 2021",
  },
  {
    Category: "Agriculture",
    BlogHeading: "What I’ll Be Wearing This Party Season & The Festive Edit",
    AboutBlog:
      "Lorem markdownum illic venturi instructa nobis Echidnae,  cum  quid magna",
    imgsrc: blogProfile,
    Name: "Prateek",
    BlogDate: "May 2, 2021",
  },
  {
    Category: "Agriculture",
    BlogHeading: "What I’ll Be Wearing This Party Season & The Festive Edit",
    AboutBlog:
      "Lorem markdownum illic venturi instructa nobis Echidnae,  cum  quid magna",
    imgsrc: blogProfile,
    Name: "Prateek",
    BlogDate: "May 2, 2021",
  },
];
const BlogList = [
  {
    CategoryName: "Agriculture",
    CategoryIcon: "ds",
  },
  {
    CategoryName: "School",
    CategoryIcon: "ds",
  },
  {
    CategoryName: "Hospital",
    CategoryIcon: "ds",
  },
  {
    CategoryName: "University",
    CategoryIcon: "ds",
  },
];
const TrendingBlog = [
  {
    Category: "Technical",
    BlogHeading:
      "How to create a setup where A can ping to B and C, but B and C are not able to ping each other?",
    AboutBlog:
      "A can Ping to B to C , B and C can ping to A but B and C are not able to ping each other",
    imgsrc: blogProfile,
    Name: "Tamanna Verma",
    BlogDate: "May 15, 2021",
    blogLeftimg: blogProfile,
  },
  {
    Category: "Agriculture",
    BlogHeading: "What I’ll Be Wearing This Party Season & The Festive Edit",
    AboutBlog:
      "Lorem markdownum illic venturi instructa nobis Echidnae,  cum  quid magna",
    imgsrc: blogProfile,
    Name: "Prateek",
    BlogDate: "May 2, 2021",
    BlogLeftimg: blogLeftimg,
  },
];
export { BlogData, BlogList, TrendingBlog };
