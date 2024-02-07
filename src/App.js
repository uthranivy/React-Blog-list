import React, { useState, useEffect } from "react";
import "./index.css";
import { data } from "./data";
import Loading from "./Loading";
import { BsCalendar3, BsCardText, BsPersonCircle } from "react-icons/bs";

function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [post, setPost] = React.useState([]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const posts = data;
      setLoading(false);
      setPost(posts);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const { shortpost, dates, person, blogpost } = post[value];

  return (
    <div>
      <div className="blog-container">
        <nav className="nav-blog">
          {post.map((item, index) => {
            return (
              <button
                type="button"
                key={item.order}
                onClick={() => setValue(index)}
                className={`nav-btn-main ${index === value && "active-tab"}`}
              >
                {item.title}
              </button>
            );
          })}
        </nav>
        <article className="nav-main">
          <section className="blog-section">
            <h3 className="blog-head">{shortpost}</h3>
            <div className="flex-item">
              <p>
                <BsCalendar3 /> <small> {dates}</small>
              </p>
              <h6 className="author">
                <BsPersonCircle /> {person}
              </h6>
            </div>
          </section>

          <ul className="list">
            {blogpost.map((postslist, index) => {
              return (
                <li className="blog-list" key={index}>
                  <span>
                    <BsCardText className="list-icon" />{" "}
                  </span>
                  <span className="list-content">{postslist}</span>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     {data.map((blogposts) => {
  //         return <Blogs key={blogposts.id} {...blogposts}></Blogs>;
  //       })}
  //   </div>
  // )
}

export default App;
