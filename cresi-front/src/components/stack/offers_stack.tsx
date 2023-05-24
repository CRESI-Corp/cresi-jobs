import React from "react";
import "../../styles/offers/offers.css";

interface StudentJobTileProps {
  title: string;
  location: string;
  isPaid: boolean;
  datePosted: string;
}

const StudentJobTile: React.FC<StudentJobTileProps> = ({
  title,
  location,
  isPaid,
  datePosted,
}) => {
  return (
    <div className="student-job-tile">
      <h3 className="title">{title}</h3>
      <div className="info">
        <p className="location">{location}</p>
        <p className="paid">{isPaid ? "Rémunéré" : "Non rémunéré"}</p>
        <p className="date">{datePosted}</p>
      </div>
    </div>
  );
};

export default StudentJobTile;
