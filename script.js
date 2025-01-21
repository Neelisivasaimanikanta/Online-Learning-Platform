// Sample course data
const courses = [
    { id: 1, name: "Web Development Basics", completed: false },
    { id: 2, name: "Introduction to JavaScript", completed: false },
    { id: 3, name: "CSS for Beginners", completed: false },
    { id: 4, name: "React Fundamentals", completed: false }
  ];
  
  // Function to display available courses
  function displayCourses() {
    const courseList = document.getElementById("courseList");
    courseList.innerHTML = ""; // Clear existing content
    courses.forEach(course => {
      const li = document.createElement("li");
      li.textContent = course.name;
      li.dataset.id = course.id;
      li.addEventListener("click", () => trackProgress(course));
      courseList.appendChild(li);
    });
  }
  
  // Function to track course progress
  function trackProgress(course) {
    const progressContainer = document.getElementById("progressContainer");
    const certificateList = document.getElementById("certificateList");
  
    if (!course.completed) {
      course.completed = true;
      progressContainer.innerHTML = `
        <p>Great job! You completed the course: <strong>${course.name}</strong></p>
        <p>Your certificate has been added to the list below.</p>
      `;
  
      const certItem = document.createElement("li");
      certItem.textContent = `Certificate for "${course.name}"`;
      certificateList.appendChild(certItem);
    } else {
      progressContainer.innerHTML = `
        <p>You have already completed the course: <strong>${course.name}</strong></p>
      `;
    }
  }
  
  // Initialize the platform
  document.addEventListener("DOMContentLoaded", displayCourses);
  