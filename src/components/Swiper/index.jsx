/** @format */

import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import Swiper1 from "@/assets/Swiper/swiper-1.png";
import Swiper2 from "@/assets/Swiper/swiper-2.jpeg";
import Swiper3 from "@/assets/Swiper/swiper-3.jpeg";

class Index extends Component {
  state = {
    data: [Swiper1, Swiper2, Swiper3],
    imgHeight: 176,
  };
  // componentDidMount() {
  //   // simulate img loading
  //   setTimeout(() => {
  //     this.setState({
  //       data: [
  //         "AiyWuByWklrrUDlFignR",
  //         "TekJlZRVCjLFexlOCuWn",
  //         "IJOtIlfsYdTyaDTRVrLI",
  //       ],
  //     });
  //   }, 100);
  // }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          // beforeChange={(from, to) =>
          //   console.log(`slide from ${from} to ${to}`)
          // }
          // afterChange={(index) => console.log("slide to", index)}
        >
          {this.state.data.map((val, index) => (
            <img
              key={index}
              src={val}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
              onLoad={() => {
                window.dispatchEvent(new Event("resize"));
                this.setState({ imgHeight: "auto" });
              }}
            />
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
export default Index;
