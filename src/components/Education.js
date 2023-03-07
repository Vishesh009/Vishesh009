import React from 'react'
import pic1 from '../img/kiet.jpg'
import pic2 from '../img/LPS.jpg'
import pic3 from '../img/LPS.jpg'

const Education = () => {
  return (
    <section className="education" id="education">
        <div className="max-width">
            <h2 className="title">Education</h2>
            <div className="education-content">
                <div className="column left">
                <img src={pic1} alt='Profile Pic' />
                </div>
                <div className="column right">
                    <div className="text">Bachelor of Technology <span>(IT)</span></div>
                    <p>I have completed my Bachelors of Technology in Information Technology branch
                        from KIET Group of Institutions, Ghaziabad affiliated to Dr. APJ Abdul Kalam Technical University
                        in August 2021.
                    </p>
                    <br/>
                    <p>
                        I have acquired various skills like Competetive Coding , Full Stack Web Development and many more 
                        throughout the 4 years of Learning.
                    </p>
                    <br/>
                    <div className="subtext">CGPA : <span>(7.79)</span> | Division Awarded :<span>(I-DIV HONS)</span></div>
                    <a href="https://www.kiet.edu/" target="_blank">Visit College</a>
                </div>
            </div>
            <br/><hr/><br/>
            <div className="education-content">
                <div className="column right">
                <div className="text">Higher Secondary School <span>(12<sup>th</sup> Class)</span></div>
                    <p>I have completed my Higher Secondary School with English, Physics, Chemistry, Mathematics, and Hindi as my subjects from Lucknow Public School, Lucknow affiliated to 
                        Council for Indian School Certificate Examinations(CISCE).
                    </p>
                    <br/>
                    <p>
                        I have acquired various skills like programming in C++, Problem Solving and many more 
                        throughout my years of Learning.
                    </p>
                    <br/>
                    {/* <div className="subtext">Aggregate : <span>(83.80%)</span></div> */}
                    <a href="https://www.lucknowpublicschoolsandcolleges.com/.in/" target="_blank">Visit School</a></div>
                <div className="column left">
                <img src={pic2} alt='Profile Pic' className="image-right"/>
                </div>
            </div>
            <br/><hr/><br/>
            <div className="education-content">
                <div className="column left">
                <img src={pic3} alt='Profile Pic' />
                </div>
                <div className="column right">
                <div className="text">Senior Secondary School <span>(10<sup>th</sup> Class)</span></div>
                    <p>I have completed my Senior Secondary School with English, Mathematics, Science, Hindi, Social Studies
                        as my subjects from Lucknow Public School, Lucknow affiliated to 
                        Council for Indian School Certificate Examinations(CISCE).
                    </p>
                    <br/>
                    <p>
                        I have acquired various skills like English communication , basic of Information Technology and many more 
                        throughout my years of Learning.
                    </p>
                    <br/>
                    {/* <div className="subtext">Aggregate : <span>(91.20%)</span> | CGPA : <span>(9.60)</span></div> */}
                    <a href="https://www.lucknowpublicschoolsandcolleges.com/.in/" target="_blank">Visit School</a></div>
            </div>
        </div>
    </section>
  )
}

export default Education