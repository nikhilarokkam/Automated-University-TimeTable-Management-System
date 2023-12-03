## Project Title: Automated University Time Table Management System

### Technologies Used:
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MySQL</li>
</ul>

### Project Description:
Implemented a comprehensive timetable management system for the CSE department, utilizing Node.js, Express.js, and MySQL. The system allows efficient administration of faculty, courses, classrooms, and periods, ensuring dynamic adaptability to departmental needs.

### Key Features:
<ol>
  <li><b>Admin Dashboard</b></li>
  <ul>
    <li>Displayed department statistics, including the number of lecturers, subjects, rooms, and periods.</li>
  </ul>
  <li><b>Admin Panel</b></li>
  <ul>
    <li><b>Faculty Management:</b></li>
    <ul><li>Add, delete, and edit faculty information, including faculty ID and name.</li></ul>
    <li><b>Course Management:</b></li>
    <ul><li>Add, delete, and edit subject information, including subject ID and title.</li></ul>
    <li><b>Classroom Management:</b></li>
    <ul><li>Add, delete, and edit room information, including room ID, department name, and capacity.</li></ul>
    <li><b>Period List Management:</b></li>
    <ul><li>Add, delete, and edit period information, including period ID, start time, and end time.</li></ul>
    <li><b>Assignment Management:</b></li>
    <ul><li>Add, delete faculty assignments, specifying faculty name, subject title, room ID, and period ID.</li></ul>
  </ul>
  <li><b>Timetable Generation</b></li>
  <ul>
    <li>Implemented an intelligent algorithm for conflict-free timetable generation.</li>
    <li>Enabled the generation of timetables based on specified criteria, such as room ID.</li>
  </ul>
  <li><b>User-Friendly Interface</b></li>
  <ul>
    <li>Designed an interactive admin panel for easy input and retrieval of timetable information.</li>
  </ul>
</ol>

### Installation
<ol>
  <li>Install NodeJS (https://nodejs.org/en/)</li>
  <li>Go to the project folder directory then open the terminal.</li>
  <li>Type "npm install" in your terminal to install the npm dependencies and libraries.</li>
  <li>Type "nodemon app.js" to run the project</li>
  <li>Finally, type "localhost:3000" in your browser</li>
</ol>

### Note: Running MySQL and Apache using XAMPP

Before running the project, make sure you have [XAMPP](https://www.apachefriends.org/index.html) installed for managing MySQL and Apache.
<ol>
  <li>Open the XAMPP Control Panel.</li>
  <li>Start the Apache and MySQL modules.</li>
  <li>Ensure that MySQL is running, as the project relies on it for database operations.</li>
  <li>You can now proceed with running the Node.js application using the steps mentioned above.</li>
</ol>
