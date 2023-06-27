function showHome() {
    var content = document.getElementById("rcontent");
    content.innerHTML = "<h1 id='home-content'>Hello, my name is</h1><h1 id='home-content' style='font-size: 48px;'>Pranvat Singh</h1><h2>About Me</h2><img src='photom.png' alt='Profile Image' style='float: left; margin-right: 20px; width: 200px;'><p>I am in my Third Year of college and have worked in all dimensions till now whether it is studies or my interpersonal skills. I am highly in love with Web Development and have been practicing it on different projects some of which can be found in my resume as well. Speaking of experience, I've worked as a web developer intern at LetsGrowMore, where I developed a few WebApps using HTML, CSS, JS, and React. I've completed numerous courses from Coursera and intend to get more practical experience in order to hone my skills to the finest.</p>";
  }
  
  function showContact() {
    var content = document.getElementById("rcontent");
    content.innerHTML = "<h1>Contact Information</h1><h2>Phone:</h2> <p>9315958065</p><h2>Email:</h2> <p>pranvatrissam@gmail.com</p><h2>LinkedIn:</h2> <p><a href='https://www.linkedin.com/in/pranvat-singh-9a3359213/'>https://www.linkedin.com/in/pranvat-singh-9a3359213/</a></p>";
  }
  
  function showInfo() {
    var content = document.getElementById("rcontent");
    content.innerHTML = "<h1>Information</h1><p>Given Below is my Resume:</p><a href='PranvatResume.pdf' target='_blank'>View Resume</a><h1>Projects</h1><ul><li><a href='https://lgmcal-culator.netlify.app/'>Calculator</a></li><li><a href='https://student-reg-form.netlify.app/'>Student Registration Form</a></li><li><a href='https://lgmtdl.netlify.app/'>To-Do List</a></li></ul>";
  }
  
  
  function showGuide() {
    var content = document.getElementById("rcontent");
    content.innerHTML = "<h1>Guide</h1><p>The code for these files can be found at:- <ul><li><a href='https://drive.google.com/drive/folders/1gFSFM-l774c13-sVwolOt3huV9XNuBpT?usp=sharing'>Google Drive</a></ul> <p>and</p> <ul><li><a href='https://github.com/pranvat-02/JF-Task'>GitHub</a></li></ul>";
  }
  
  
  // Function to toggle the navbar
  function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('collapsed');
    const toggleButton = document.getElementById('toggle-button');
    toggleButton.classList.toggle('expanded');
    const expandedIcon = toggleButton.querySelector('.expanded-icon');
    const minimizedIcon = toggleButton.querySelector('.minimized-icon');
    expandedIcon.classList.toggle('hidden');
    minimizedIcon.classList.toggle('hidden');
  }
  
  // Add event listeners to navigation panel items
  document.getElementById('navbar').addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'LI') {
      const selectedItem = target.innerHTML.toLowerCase();
      if (typeof window[selectedItem] === 'function') {
        window[selectedItem]();
      }
    }
  });
  
  // Add event listener to toggle button
  document.getElementById('toggle-button').addEventListener('click', toggleNavbar);
  
  // Add hover effect to navigation panel items
  const navItems = document.querySelectorAll('#navbar ul li');
  navItems.forEach(function(item) {
    item.addEventListener('mouseenter', function(event) {
      event.target.style.backgroundColor = '#ddd';
    });
    item.addEventListener('mouseleave', function(event) {
      event.target.style.backgroundColor = '';
    });
  });
  