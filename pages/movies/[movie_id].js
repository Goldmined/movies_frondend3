import { useRouter } from "next/router";
import MovieLayout from "../../components/layout/Movie";
import DetailMovie from "../../components/movie/DetailInfo";
import Synopsis from "../../components/movie/Synopsis";
import CommentMovie from "../../components/movie/Comment";
import { useEffect, useState } from "react";

const MoviePage = () => {
  const router = useRouter();
  const movie_id = router.query.movie_id; //приходит часть строки связанная с этим файлом movie_id
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (!movie_id) {
      return false;
    }
    fetch(`http://localhost:3001/movies/${movie_id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.item);
        setComments(data.comments);
      });
  }, [movie_id]);
  console.log(movie, movie_id);
  return (
    <MovieLayout>
      <div className="container">
        <div className="sidebar-container">
          <div className="content">
            <section className="section-long">
              <div className="section-line">
                {!!movie && <DetailMovie movie={movie} />}
              </div>
              <div className="section-line">
                {!!movie && (
                  <Synopsis
                    text={movie.fullplot ? movie.fullplot : movie.plot}
                  />
                )}
              </div>
              <div className="section-line">
                <div className="section-head">
                  <h2 className="section-title text-uppercase">Comments</h2>
                </div>
                {comments.map((comment) => {
                  return <CommentMovie key={comment._id} comment={comment} />;
                })}
              </div>
              <div className="section-line">
                <div className="section-head">
                  <h2 className="section-title text-uppercase">Add comment</h2>
                </div>
                <form autoComplete="off">
                  <div className="row form-grid">
                    <div className="col-12 col-sm-6">
                      <div className="input-view-flat input-group">
                        <input
                          className="form-control"
                          name="name"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="input-view-flat input-group">
                        <input
                          className="form-control"
                          name="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-view-flat input-group">
                        <textarea
                          className="form-control"
                          name="review"
                          placeholder="Add your review"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="rating-line">
                        <label>Rating:</label>
                        <div className="form-rating" name="rating">
                          <input
                            type="radio"
                            id="rating-10"
                            name="rating"
                            defaultValue={10}
                          />
                          <label htmlFor="rating-10">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-9"
                            name="rating"
                            defaultValue={9}
                          />
                          <label htmlFor="rating-9">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-8"
                            name="rating"
                            defaultValue={8}
                          />
                          <label htmlFor="rating-8">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-7"
                            name="rating"
                            defaultValue={7}
                          />
                          <label htmlFor="rating-7">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-6"
                            name="rating"
                            defaultValue={6}
                          />
                          <label htmlFor="rating-6">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-5"
                            name="rating"
                            defaultValue={5}
                          />
                          <label htmlFor="rating-5">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-4"
                            name="rating"
                            defaultValue={4}
                          />
                          <label htmlFor="rating-4">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-3"
                            name="rating"
                            defaultValue={3}
                          />
                          <label htmlFor="rating-3">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-2"
                            name="rating"
                            defaultValue={2}
                          />
                          <label htmlFor="rating-2">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-1"
                            name="rating"
                            defaultValue={1}
                          />
                          <label htmlFor="rating-1">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="px-5 btn btn-theme" type="submit">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
          <div className="sidebar section-long order-lg-last">
            <section className="section-sidebar">
              <div className="section-head">
                <h2 className="section-title text-uppercase">Latest movies</h2>
              </div>
              <div className="movie-short-line-entity">
                <a
                  className="entity-preview"
                  href="movie-info-sidebar-right.html"
                >
                  <span className="embed-responsive embed-responsive-16by9">
                    <img
                      className="embed-responsive-item"
                      src="http://via.placeholder.com/1920x1080"
                    />
                  </span>
                </a>
                <div className="entity-content">
                  <h4 className="entity-title">
                    <a
                      className="content-link"
                      href="movie-info-sidebar-right.html"
                    >
                      Deadman skull
                    </a>
                  </h4>
                  <p className="entity-subtext">11 nov 2018</p>
                </div>
              </div>
              <div className="movie-short-line-entity">
                <a
                  className="entity-preview"
                  href="movie-info-sidebar-right.html"
                >
                  <span className="embed-responsive embed-responsive-16by9">
                    <img
                      className="embed-responsive-item"
                      src="http://via.placeholder.com/1920x1080"
                    />
                  </span>
                </a>
                <div className="entity-content">
                  <h4 className="entity-title">
                    <a
                      className="content-link"
                      href="movie-info-sidebar-right.html"
                    >
                      Dream forest
                    </a>
                  </h4>
                  <p className="entity-subtext">29 oct 2018</p>
                </div>
              </div>
              <div className="movie-short-line-entity">
                <a
                  className="entity-preview"
                  href="movie-info-sidebar-right.html"
                >
                  <span className="embed-responsive embed-responsive-16by9">
                    <img
                      className="embed-responsive-item"
                      src="http://via.placeholder.com/1920x1080"
                    />
                  </span>
                </a>
                <div className="entity-content">
                  <h4 className="entity-title">
                    <a
                      className="content-link"
                      href="movie-info-sidebar-right.html"
                    >
                      Fall
                    </a>
                  </h4>
                  <p className="entity-subtext">29 oct 2018</p>
                </div>
              </div>
            </section>
            <section className="section-sidebar">
              <div className="section-head">
                <h2 className="section-title text-uppercase">Archive</h2>
              </div>
              <ul className="list-unstyled list-wider list-categories">
                <li>
                  <a className="content-link text-uppercase" href="#">
                    July 2018
                  </a>
                </li>
                <li>
                  <a className="content-link text-uppercase" href="#">
                    June 2018
                  </a>
                </li>
                <li>
                  <a className="content-link text-uppercase" href="#">
                    May 2018
                  </a>
                </li>
                <li>
                  <a className="content-link text-uppercase" href="#">
                    April 2018
                  </a>
                </li>
              </ul>
            </section>
            <section className="section-sidebar">
              <a className="d-block" href="#">
                <img
                  className="w-100"
                  src="http://via.placeholder.com/350x197"
                />
              </a>
            </section>
          </div>
        </div>
      </div>
    </MovieLayout>
  );
};

export default MoviePage;
