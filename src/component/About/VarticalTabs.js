import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
// import { tab } from '@testing-library/user-event/dist/tab'
import Tab1 from "../About/About Img/tab1.webp";
import Tab2 from "../About/About Img/tab2.webp";
import Tab3 from "../About/About Img/tab3.webp";
import Tab4 from "../About/About Img/tab4.webp";

import AOS from "aos";
import "aos/dist/aos.css";

import TabData from "../About/TabData";
import "../About/About.css";

const { TabPane } = Tabs;

const VarticalTabs = () => {
  const [activeKey, setActiveKey] = useState("1");

  useEffect(() => {
    const timer = setTimeout(() => {
      // Switch to the next tab after 5 seconds
      const nextTabKey = (parseInt(activeKey, 10) % 4) + 1;
      setActiveKey(nextTabKey.toString());
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeKey]);

  // min width

  useEffect(() => {
    AOS.init({ duration: 800 });
  });

  const [faqItems, setFaqItems] = useState(TabData);

  const toggleAnswer = (index) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].isOpen = !updatedFaqItems[index].isOpen;
    setFaqItems(updatedFaqItems);
  };

  return (
    <>
      <div className="max-width ">
        <Tabs
          tabPosition="left"
          style={{ height: "100%" }}
          className="bg-black py-10"
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          destroyInactiveTabPane
        >
          <TabPane
            tab={
              <div className=" text-white px-10 py-5">
                <p className="text-6xl font-bold text-left">Values That</p>
                <p className=" text-6xl text-gray-300 font-bold text-left">Sets Us Apart</p>
              </div>
            }
            key={0}
            disabled
          ></TabPane>
          {/* <TabPane tab={<div className="text-4xl font-bold text-white px-10">Values That</div>} >
        </TabPane> */}

          <TabPane
            tab={
              <div className="text-4xl font-semibold text-white p-10 border-b-2">
                Transparent Communication
              </div>
            }
            key="1"
          >
            <div className="py-20 px-14 flex flex-col justify-center items-center">
              <div>
                <p className="text-6xl font-bold text-yellow-300">
                  Transparent
                </p>
                <img src={Tab1} />
                <p className="text-6xl font-bold text-yellow-300">
                  Communication
                </p>
              </div>
              <p className="text-2xl text-gray-400">
                We prioritize open dialogue, ensuring clients are informed at
                every turn. Our clear communication fosters trust and alignment,
                enriching collaboration.
              </p>
            </div>
          </TabPane>

          <TabPane
            tab={
              <div className="text-4xl font-semibold text-white p-10 border-b-2 ">
                Precision Management
              </div>
            }
            key="2"
          >
            <div className="py-20 px-14 flex flex-col justify-center items-center">
              <div>
                <p className="text-6xl font-bold text-yellow-300">
                Precision
                </p>
                <img src={Tab2} />
                <p className="text-6xl font-bold text-yellow-300">
                Management
                </p>
              </div>
              <p className="text-2xl text-gray-400">
              Our meticulous planning and execution ensure project success. Deadlines are met, objectives achieved, and complexities managed seamlessly, guaranteeing client satisfaction.
              </p>
            </div>
          </TabPane>

          <TabPane
            tab={
              <div className="text-4xl font-semibold text-white p-10 border-b-2">
                Meticulous Detail
              </div>
            }
            key="3"
          >
            <div className="py-20 px-14 flex flex-col justify-center items-center">
              <div>
                <p className="text-6xl font-bold text-yellow-300">
                Meticulous
                </p>
                <img src={Tab3} />
                <p className="text-6xl font-bold text-yellow-300">
                Detail
                </p>
              </div>
              <p className="text-2xl text-gray-400">
              We obsess over details, perfecting design elements to deliver exceptional outcomes. From aesthetics to functionality, our dedication shines through in every pixel.
              </p>
            </div>
          </TabPane>

          <TabPane
            tab={
              <div className="text-4xl font-semibold text-white p-10 border-b-2 ">
               Innovative Excellence
              </div>
            }
            key="4"
          >
            <div className="py-20 px-14 flex flex-col justify-center items-center">
              <div>
                <p className="text-6xl font-bold text-yellow-300">
                Innovative
                </p>
                <img src={Tab4} />
                <p className="text-6xl font-bold text-yellow-300">
                Excellence
                </p>
              </div>
              <p className="text-2xl text-gray-400">
              We thrive on innovation, pushing creative boundaries. By blending cutting-edge trends and strategic insights, we consistently deliver designs that stand at the forefront of excellence.
              </p>
            </div>
          </TabPane>
        </Tabs>
      </div>

      <div className="min-width">
        <div className="">
          {/* <h1 className='flex items-center justify-center m-10 font-bold text-6xl'>Have Questions?</h1> */}
          {TabData.map((val, index) => (
            <div
              key={index}
              className="faq-item bg-black p-5"
              data-aos="fade-up"
            >
              <h3
                className="py-12 flex justify-between font-bold text-2xl bg-black text-white"
                onClick={() => toggleAnswer(index)}
              >
                {val.name}
                <span className={`arrow ${val.isOpen ? "open" : ""}`}>
                  &#9658;
                </span>
              </h3>
              {val.isOpen && (
                <p className="text-xl py-5 bg-black text-white">{val.p}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VarticalTabs;
