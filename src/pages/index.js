import "./index.css";
import { projects, socialNetworks } from "../utils/data.js";
import Project from "../components/Project.js";
import Section from "../components/Section.js";
import MenuLink from "../components/MenuLink.js";
import Icon from "../components/Icon.js";
const footerContainer = document.querySelector(".footer__social-networks");
const profileContainer = document.querySelector(".profile__icons");
const profileFigure = document.querySelector(".profile__figure");

function setMenu() {
  const sections = document.querySelectorAll("section");
  const menu = document.querySelector(".menu");
  sections.forEach((item) => {
    const title = item.querySelector(".project-section__title").textContent;
    const element = new MenuLink(title, item.getAttribute("id")).getLink();
    menu.append(element);
  });
}
function setSections() {
  projects.forEach((item) => {
    const element = new Section({
      title: item.title,
      subtitle: item.subtitle,
      id: item.id,
    });
    element.setProjects(item.exampls, function callback(item, container) {
      const project = new Project({
        title: item.title,
        subtitle: item.subtitle,
        link: item.link,
        image: item.image,
      });
      project.setLinks(item.icons, function callback(item, container) {
        const icon = new Icon(
          { link: item.link, icon: item.icon },
          "project-icon"
        ).getIcon();
        container.append(icon);
      });
      container.append(project.getProject());
    });
    document.querySelector(".content").append(element.getSection());
  });
}
socialNetworks.forEach((item) => {
  const element = new Icon(
    { link: item.link, icon: item.icon },
    "footer-icon"
  ).getIcon();
  footerContainer.append(element);
});
socialNetworks.forEach((item) => {
  const element = new Icon(
    { link: item.link, icon: item.icon },
    "profile-icon"
  ).getIcon();
  profileContainer.append(element);
});

setSections();
setMenu();
const Icons = document.querySelectorAll(".social");
const projectFigures = Array.from(document.querySelectorAll(".project__figure"));
if (
  "ontouchstart" in window ||
  (window.DocumentTouch && document instanceof DocumentTouch)
) {
  Icons.forEach((item) => {
    item.classList.add("social_type_touch");
  });
} else {
  projectFigures.forEach((item) => {
    item.classList.add("project__figure_type_notouch");
  });
  profileFigure.classList.add("profile__figure_type_notouch");
}
