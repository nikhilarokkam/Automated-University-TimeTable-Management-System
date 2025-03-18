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

## Screenshots
### Admin Login
![screencapture-localhost-3000-login-2023-12-03-08_28_37](https://github.com/nikhilarokkam/Automated-University-TimeTable-Management-System/assets/115566678/fef5b5f1-a3f7-432a-bb09-fc3ea575ab24)
### Dashboard
![screencapture-localhost-3000-detailView-2023-12-03-08_30_48](https://github.com/nikhilarokkam/Automated-University-TimeTable-Management-System/assets/115566678/bb07833a-fe6d-429d-ab31-d57cc059f65e)
### Faculty Management
![screencapture-localhost-3000-facultyView-2023-12-03-08_32_37](https://github.com/nikhilarokkam/Automated-University-TimeTable-Management-System/assets/115566678/55761541-f846-4e24-8235-f6282a5d1fa5)
### Generated Timetable for Room 3CSEB
![screencapture-localhost-3000-createTable-2023-12-03-08_36_52](https://github.com/nikhilarokkam/Automated-University-TimeTable-Management-System/assets/115566678/b260cd52-351c-4faa-96f9-1aa1110e8758)
