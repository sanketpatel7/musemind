import React, { useState , useEffect} from 'react';
import Section11Data from './Section11Data';
import AOS from "aos";
import "aos/dist/aos.css";

const Section11 = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setIsOpen(!isOpen);
    // };
    useEffect(() => {
      AOS.init({ duration: 800 });
    });

      const [faqItems, setFaqItems] = useState(Section11Data);

  const toggleAnswer = (index) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].isOpen = !updatedFaqItems[index].isOpen;
    setFaqItems(updatedFaqItems);
  };

  return (
    <>
       {/* <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-btn">
        <h1>What are your focus areas as a UI/UX agency?</h1>
      </button>
      {isOpen && (
        <div className="dropdown-content-sec-11">
          
          <div className='sec-11-p'>
          <p>User experience is in our bloodline; as a global design agency, we create design solutions that are easily interactable, visually pleasing, and intuitively user-friendly.</p><br />
          <p>We offer solutions for user acceptance, interaction, and user experience of digital products like websites, apps and enterprise software.</p><br />
          <p>Since our inception, we have excelled as a global UX/UI design agency, offering a range of design solutions for websites, web and mobile apps, enterprise software, AR/VR interface, brand identity and front-end web design.</p><br />
          <p>Within this journey of progression, we have set footsteps in industries like SAAS, healthcare, enterprise software, B2B and education software on the global horizon.</p><br />
          <p>We both design and redesign digital products that can connect users more emotionally. Our design solutions offer interactive user experiences focusing on cognitive traits that can easily retain clients repeatedly. We are aware that every digital product, either a webpage, application or illustration, acts as one of the brand identities for a business. To create a loyal user base and strong rapport among the users of a business, we craft highly engaging solutions that sell and earn profit for the business.</p> 
          </div>

        </div>
      )}
    </div> */}
    <div className="faq-section" >
    <h1 className='flex items-center justify-center m-10 font-bold text-6xl'>Have Questions?</h1>
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item bg-white" data-aos="fade-up">
          <h3 className="py-12 flex justify-between font-bold text-2xl" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span className={`arrow ${item.isOpen ? 'open' : ''}`}>&#9658;</span>
          </h3>
            {item.isOpen && <p className="text-xl my-5 bg-white">{item.answer1}</p>}
            {item.isOpen && <p className="text-xl my-5 bg-white">{item.answer2}</p>}
            {item.isOpen && <p className="text-xl my-5 bg-white">{item.answer3}</p>}
            {item.isOpen && <p className="text-xl my-5 bg-white">{item.answer4}</p>}
            {item.isOpen && <p className="text-xl my-5 bg-white">{item.answer5}</p>}
        </div>
      ))}
    </div>
    </>
  )
}

export default Section11
