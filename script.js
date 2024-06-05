document.addEventListener('scroll', function() {
    const workExperienceDiv = document.getElementById('work-experience');
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = workExperienceDiv.offsetTop;
  
    if (scrollPosition > elementPosition) {
      workExperienceDiv.classList.add('reveal');
    }
  });
  