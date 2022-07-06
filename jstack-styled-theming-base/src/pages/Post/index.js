import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);
  }
  handleNavigate = () => {
    console.log(this.props);
    this.props.history.push("/posts");
  };

  render() {
    console.log(this.queryParams.get("queryParams"));
    return (
      <>
        <h1>Post Page</h1>
        <button onClick={this.handleNavigate}>
          Back to posts
        </button>
      </>
    );
  }
}

// export default function Post() {
//   const params = useParams();
//   const { search } = useLocation();
//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//   console.log(queryParams.get('query'));

//   return <h1>Post Page</h1>;
// }
