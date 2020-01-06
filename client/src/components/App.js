import React from "react";
import Recipe from "./Recipe.jpg";
import "./App.css";

const SectionStyle = {
  width: "100%",
  height: "83rem",
  // "background-image": "url(" + Recipe + ")",
  "background-position": "center",
  "background-size": "cover",
  "background-repeat": "no-repeat"
  // opacity: "0.5"
};

// const centered = {
//   position: "absolute",
//   top: "15%",
//   left: "35%",
//   transform: "translate(" - (50 % ", ") - (50 % ")"),
//   "font-size": " 7rem",
//   color: "#1EAEDB",
//   position: "absolute",
//   top: "65%",
//   left: "35%",
//   "font-size": "7rem",
//   color: "rgb(30, 174, 219)",
//   opacity: "0.8",
//   "font-family": "cursive",
//   "-webkit-animation": "slide 0.5s forwards",
//   "-webkit-animation-delay": "2s",
//   animation: "slide 0.5s forwards",
//   "animation-delay": "2s"
// };

const App = () => (
  <div>
    <div class="background-img" style={SectionStyle}></div>
    <h1 class="centered">Build Your Recipes</h1>
  </div>
);

// import posed from "react-pose";

// import { Query } from "react-apollo";
// import { GET_ALL_RECIPES } from "../queries";
// import RecipeItem from "./Recipe/RecipeItem";
// import Spinner from "./Spinner";
// import Recipe from "./Recipe.jpg";

// import { Provider, Heading, Subhead } from 'rebass'
// import {
//   Hero, CallToAction, ScrollDownIndicator, Section, Checklist
// } from 'react-landing-page'

// const featherCheckmark = <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="24" height="24"
//   viewBox="0 0 24 24"
//   fill="none" stroke="currentColor"
//   strokeWidth="2"
//   strokeLinecap="round"
//   strokeLinejoin="round"
// >
//   <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
//   <polyline points="22 4 12 14.01 9 11.01"/>
// </svg>

// const App = props => (
//   <Provider>
//     <Hero
//       color="black"
//       bg="white"
//       backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
//     >
//         <Heading>Name of your app</Heading>
//         <Subhead>a couple more words</Subhead>
//         <CallToAction href="/getting-started" mt={3}>Get Started</CallToAction>
//         <ScrollDownIndicator/>
//     </Hero>
//     <Section width={1}
//       heading='Why pick this library?'
//       subhead='maybe this will help'>
//       <Checklist children={[
//         'Open Source',
//         'React best practices',
//         'Practical API'
//       ]} checkmark={featherCheckmark}/>
//     </Section>
//   </Provider>

// // const RecipeList = posed.ul({
// //   shown: {
// //     x: "0%",
// //     staggerChildren: 100
// //   },
// //   hidden: {
// //     x: "-100%"
// //   }
// // });

// // class App extends React.Component {
// //   state = {
// //     on: false
// //   };

// //   componentDidMount() {
// //     setTimeout(this.slideIn, 200);
// //   }

// //   slideIn = () => {
// //     this.setState({ on: !this.state.on });
// //   };

// //   render() {
// //     return (
// //       <div className="App">
// //         <img src={Recipe} style={{ width: "880px" }}></img>
// //         <h1 className="main-title">
// //           Find Recipes You <strong>Love</strong>
// //         </h1>
// //         <Query query={GET_ALL_RECIPES}>
// //           {({ data, loading, error }) => {
// //             if (loading) return <Spinner />;
// //             if (error) return <div>Error</div>;
// //             // console.log(data);
// //             const { on } = this.state;
// //             return (
// //               <RecipeList pose={on ? "shown" : "hidden"} className="cards">
// //                 {data.getAllRecipes.map(recipe => (
// //                   <RecipeItem key={recipe._id} {...recipe} />
// //                 ))}
// //               </RecipeList>
// //             );
// //           }}
// //         </Query>
// //       </div>
// //     );
// //   }
// // }

// export default App;

// import React from "react";
// import { Provider, Heading, Subhead } from "rebass";
// import {
//   Hero,
//   CallToAction,
//   ScrollDownIndicator,
//   Section,
//   Checklist
// } from "react-landing-page";

// const featherCheckmark = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//     <polyline points="22 4 12 14.01 9 11.01" />
//   </svg>
// );

// const App = props => (
//   <Provider>
//     <Hero
//       color="black"
//       bg="white"
//       backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
//     >
//       <Heading>Name of your app</Heading>
//       <Subhead>a couple more words</Subhead>
//       <CallToAction href="/getting-started" mt={3}>
//         Get Started
//       </CallToAction>
//       <ScrollDownIndicator />
//     </Hero>
//     <Section
//       width={1}
//       heading="Why pick this library?"
//       subhead="maybe this will help"
//     >
//       <Checklist
//         children={["Open Source", "React best practices", "Practical API"]}
//         checkmark={featherCheckmark}
//       />
//     </Section>
//   </Provider>
// );

export default App;
