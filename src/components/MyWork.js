import React from "react";
import Navbar from "./NavbarHome";

export default function MyWork() {
  return (
    <div className="text-color-mywork">
      <Navbar />
      <div className="container-fluid bg-image">
        <div className="center Gravity-Book">
          <img className="profile" src="/static/images/profile.PNG" alt="img" />
          <h1 className="titleMain">RIZKY ALAMSYAH</h1>
          <h3>Self-learning software through research & development.</h3>
        </div>
      </div>
      <div className="container-fluid my-work-bg-color padY40">
        <div className="container subTitle ">
          <h3 class="work">MY WORK</h3>
          <p className="subText textPad">
            I was never the best at school or academics, I’m just a super
            curious guy and like solve problem especially in software. I'd say
            the journey was better than the destination when solved problem.
            Sometimes people don't get to their destination. But their journey
            teaches them to go other places, even though they might not of
            gotten to their goal and I have worked on several projects.
          </p>
          <div class="row">
            <div class="col software-developement">
              <h5>Software Development</h5>
              <ul>
                <li>
                  Retrack - Software-Expo (PENS)
                  <br />
                  This project help Chief of police to monitoring it's member
                  when patroling. This project build with 9 member. I'm helping
                  in backend and also deployment. we got achievement 3
                  <sup>rd</sup> backend and 1<sup>st</sup> UI/UX.
                  <br />
                  <br />
                  Tech-Stack : Laravel, Adonis.js, Postgres, Digital Ocean,
                  Android-Java, Azure, Adobe-XD
                </li>
                <br />
                <li>Lycoming-Monitoring - PT.GMF-MMF</li>
                This project i got when i'm intership in KSO GMF-MMF in
                Surabaya. This project help management monitoring engine and
                also customer can monitoring their engine when their engine is
                under repair. This project build with 3 member. I'm charge of
                it's android monitoring
                <br />
                <br />
                Tech-Stack : Laravel, MySQL, Android-Kotlin, Adobe-XD
              </ul>
            </div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
