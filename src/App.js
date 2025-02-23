import Footer from "./components/Footer";
import "./App.css";
import { React, useState, useEffect } from "react";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  const handleRender = () => {
    console.log("here");
    if (portfolioSelected) {
      return (
        <div>
          <Portfolio></Portfolio>
        </div>
      );
    } else if (contactSelected) {
      return (
        <div>
          <ContactForm></ContactForm>
        </div>
      );
    } else if (resumeSelected) {
      return (
        <div>
          <Resume></Resume>
        </div>
      );
    } else {
      return (
        <div>
          <About></About>
        </div>
      );
    }
  };

  useEffect(() => {
    handleRender();
    console.log(contactSelected);
    console.log(portfolioSelected);
  });

  return (
    <div>
      <header>
        <Header
          setContactSelected={setContactSelected}
          contactSelected={contactSelected}
          setPortfolioSelected={setPortfolioSelected}
          setResumeSelected={setResumeSelected}
        ></Header>
      </header>
      <main>
        <div className="content-wrap">{handleRender()}</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

// // GIVEN a single-page application portfolio for a web developer
// WHEN I load the portfolio
// THEN I am presented with a page containing a header, a section for content, and a footer
// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo of the developer and a short bio about them
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
// WHEN I view the footer
// // THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
