import React from "react";

import { Layout } from "../../Utils/Layout";
import { API } from "../../Utils/config";

const Home = () => {
  console.log(API);
  return (
    <Layout title="Home Page | Online Hotel Booking App">
      <div className="container">
        <h1>Home Page</h1>
      </div>
    </Layout>
  );
};

export default Home;
