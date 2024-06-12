
export const specialScroll = (e, targetId, offsetTarget) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement){
      const offset = offsetTarget;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
}
