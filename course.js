// Course Filter Functionality
document.addEventListener('DOMContentLoaded', function () {
  const categoryButtons = document.querySelectorAll('#courses .btn');
  const courseItems = document.querySelectorAll('.course-item');

  categoryButtons.forEach(button => {
      button.addEventListener('click', function () {
          // Toggle active state on the clicked button
          categoryButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');

          const category = this.getAttribute('data-category');

          courseItems.forEach(item => {
              if (category === 'all' || item.getAttribute('data-category') === category) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  // Set default to show all courses
  document.querySelector('.btn[data-category="all"]').classList.add('active');
  courseItems.forEach(item => item.style.display = 'block');
});
s