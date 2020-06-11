import {projects} from '../utils/data.js';
import Project from '../components/Project.js';
import Section from '../components/Section.js';
import MenuLink from '../components/MenuLink.js';

function setMenu () {
  const sections = document.querySelectorAll('section')
  const menu = document.querySelector('.menu');
  sections.forEach((item) => {
    const title = item.querySelector('.project-section__title').textContent
    const element = new MenuLink (title, item.getAttribute('id')).getLink();
    menu.append(element)
  })
}

projects.forEach((item) => {
  const element = new Section ({title: item.title, subtitle: item.subtitle, id: item.id})
  element.setProjects(item.exampls, function callback(item, container) {
    const project = new Project ({title: item.title, subtitle: item.subtitle, link: item.link, image: item.image})
    container.append(project.getProject())
  })
  document.querySelector('.content').append(element.getSection())
  
})
setMenu()


