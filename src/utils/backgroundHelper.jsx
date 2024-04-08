const backgroundClasses = ['bg-home', 'bg-about', 'bg-contact', 'bg-projects', 'bg-resume', 'bg-404'];

const changeBackground = (newClass) => {
  backgroundClasses.forEach(bgClass => {
    document.body.classList.remove(bgClass);
  });
  document.body.classList.add(newClass);
};

export default changeBackground;