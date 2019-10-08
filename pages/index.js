import React from "react";
import HeadTag from "../components/Head";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeadTag />
        <h1>CourseIt Boilerplate</h1>

        <style global jsx>{`
          html,
          body {
            font-family: Roboto;
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
