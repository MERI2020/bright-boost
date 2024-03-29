import React from "react";
import Profile from "../../assets/profile.png";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";
const AcademicInformation = () => {
    const StudentDetails = {
        name: "Mathew Hasker",
        phone: "+61 444 222 555",
        email: "mathewhasker@gmail.com",
        courseYear: "Computer Science - 4",
    }
    return (
        <div className="academic-information-container white-box">
            <div className="title">
                <p>Academic Information (Student)</p>
            </div>
            <div className="content">
                <div className="flex-container">
                    <div className="profile-picture">
                        <img src={Profile} className="circle" />
                    </div>
                    <div className="information">
                        <ul className="list-unstyled">
                            <li className="name">{StudentDetails.name}</li>
                            <li className="course">{StudentDetails.courseYear}</li>
                            <li className="department">Lorem ipsum dolor sit amet  </li>
                        </ul>
                    </div>

                </div>
                <div className="additional-information">
                    <ul className="list-unstyled">
                        <li className="phone"><span><img src={Phone} /></span>{StudentDetails.phone}</li>
                        <li className="email"><span><img src={Email} /></span>{StudentDetails.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AcademicInformation