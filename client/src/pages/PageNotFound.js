import React from "react";
import Layout from "../Components/Layout/Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <div></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        {" "}
        <h1>404 !!PAGE NOT FOUND </h1>
        <div
          style={{
            width: "60%",
            height: "100%",
            background: `url("images/stoneage.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* You can add any content or leave it empty */}
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
