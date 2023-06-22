const accordionTitle = document.getElementsByClassName("accordion-title");
const accordionContent = document.getElementsByClassName("accordion-content");

for(let i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].addEventListener("click", () => {
        accordionContent[i].classList.toggle("active");
    })
}