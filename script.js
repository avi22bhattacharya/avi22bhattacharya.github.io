document.addEventListener('scroll', function() {
    const workExperienceDiv = document.getElementById('work-experience');
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = workExperienceDiv.offsetTop;
  
    if (scrollPosition > elementPosition) {
      workExperienceDiv.classList.add('reveal');
    }
  });

//   $(function () {
//     $('.genealogy-tree ul').hide();
//     $('.genealogy-tree>ul').show();
//     $('.genealogy-tree ul.active').show();
//     $('.genealogy-tree li').on('click', function (e) {
//         var children = $(this).find('> ul');
//         if (children.is(":visible")) children.hide('fast').removeClass('active');
//         else children.show('fast').addClass('active');
//         e.stopPropagation();
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
  const memberViewBoxes = document.querySelectorAll('.member-view-box');

  memberViewBoxes.forEach(memberViewBox => {
    memberViewBox.addEventListener('click', function(event) {
      // Prevent the event from bubbling up to parent .member-view-box elements
      event.stopPropagation();
      memberViewBox.classList.toggle('expanded');
    });
  });
});
