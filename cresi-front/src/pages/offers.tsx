import React, { useEffect, useState } from "react";
import StudentJobTile from "../components/stack/offers_stack";

interface StudentJob {
  id: number;
  title: string;
  location: string;
  isPaid: boolean;
  datePosted: string;
}

const Offers: React.FC = () => {
  const [studentJobs, setStudentJobs] = useState<StudentJob[]>([]);

  useEffect(() => {
    fetchStudentJobs();
  }, []);

  const fetchStudentJobs = async () => {
    try {
      const response = await fetch("http://localhost:8080/student-jobs");
      const data = await response.json();
      setStudentJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Liste des jobs étudiants</h2>
      <h5>(test tuile)</h5>
      <div>
        {studentJobs.map((job) => (
          <StudentJobTile
            key={job.id}
            title={job.title}
            location={job.location}
            isPaid={job.isPaid}
            datePosted={job.datePosted}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;
