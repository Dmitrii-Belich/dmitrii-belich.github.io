import vkIcon from "../images/vk.png";
import instIcon from  "../images/instagram.png";
import githubIcon from  "../images/github.png";
import watsIcon from  "../images/whatsapp.png";
import tgIcon from "../images/tg.png";
import slackIcon from "../images/slack.png";
import hhIcon from "../images/hh.png";
import rekomendIcon from  "../images/rekomend.svg";
import rakImage from "../images/raklechitsya.jpg";
import mestoImage from "../images/mesto.png";
import mestoReactImage from "../images/mesto-react.png";
import mestoNodeImage from "../images/mesto-node.png";
import todoReactImage from "../images/todo-react.png";
import acrossImage from "../images/across-russia.png";
import studyImage from "../images/how-to-study.png";
import procrastinateImage from "../images/procrastinate.png";
import dappyImage from "../images/dappy.jpg";
import notionImage from "../images/Notion.png";
import rekommend from "../rekomendations/raklechitsya.pdf";

export const socialIcons = {
  vk: vkIcon,
  inst: instIcon,
  github: githubIcon,
  wats: watsIcon,
  tg: tgIcon,
  slack: slackIcon,
  rekomend: rekomendIcon,
  hh: hhIcon,

};
export const projects = [
  {
    title: "Основные проекты",
    subtitle: "Крупные проекты в которых я принимал участие.",
    id: "main",
    exampls: [
      {
        title: 'Проект "Mesto" Backend + Frontend',
        subtitle:
          "Проект, созданный по программе обучения в Яндекс.Практикум, призван продемонстрировать создания сервера на Express.js. (В разработке)",
        link: "",
        image: mestoNodeImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/express-mesto",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "РакЛечится"',
        subtitle:
          "Проект по переносу сайта с Tilda. Выполнен на Nuxt.js, командой, на конкурсной основе.",
        link: "/raklechitsa/",
        image: rakImage,
        icons: [
          {
            name: "recomendation",
            link: rekommend,
            icon: socialIcons.rekomend,
          },
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/raklechitsa",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Mesto" на React.js',
        subtitle:
          "Проект, созданный по программе обучения в Яндекс.Практикум, призван продемонстрировать навыки работы с React.",
        link: "/mesto-react/",
        image: mestoReactImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/mesto-react/",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'To Do List',
        subtitle:
          "Проект, созданный мною, для демонстрации навыков использования React. (В разработке)",
        link: "/todolist/",
        image: todoReactImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/todolist/",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Mesto"',
        subtitle:
          "Проект, созданный по программе обучения в Яндекс.Практикум, призван продемонстрировать навыки JavaScript, ООП, валидации форм и работы с WebPack.",
        link: "/mesto-vanilla/",
        image: mestoImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/mesto-vanilla/",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Путешествия по России"',
        subtitle:
          "Проект, созданный по программе обучения в Яндекс.Практикум, призван реализовать на практике навыки адаптивной верстки.",
        link: "/russian-travel/",
        image: acrossImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/russian-travel",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Научиться учиться"',
        subtitle:
          "Проект, созданный по программе обучения в Яндекс.Практикум, призван реализовать навыки верстки и работы с анимациями.",
        link: "/how-to-learn/",
        image: studyImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/how-to-learn",
            icon: socialIcons.github,
          },
        ],
      },
    ],
  },
  {
    title: "Небольшие проекты",
    subtitle:
      "Не занявшие много времени проекты, однако привнесшие значительный опыт на ранних этапах обучения.",
    id: "small",
    exampls: [
      {
        title: 'Проект "Идеи для прокрастинации"',
        subtitle:
          "Проект, созданный по программе обучения в Яндекс.Практикум, был создан для демонстрации начальных навыков JavaScript.",
        link: "/procrastinate/",
        image: procrastinateImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/procrastinate",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Dappy"',
        subtitle:
          "Проект, созданый для применения на практики навыков командной работы с помощью GitHub.",
        link: "/crypto/",
        image: dappyImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/crypto",
            icon: socialIcons.github,
          },
        ],
      },
      {
        title: 'Проект "Notion"',
        subtitle:
          "Создан в рамках конкурса Hackatone по JS, во время которого, за 24 часа, с коллегой, была создана копия Notion. ",
        link: "/jshackatone/",
        image: notionImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/jshackatone",
            icon: socialIcons.github,
          },
        ],
      },
    ],
  },
];

export const socialNetworks = [
  {
    name: "vk",
    link: "https://vk.com/id171896324",
    icon: socialIcons.vk,
  },
  {
    name: "inst",
    link: "https://www.instagram.com/dmitriy_belich/",
    icon: socialIcons.inst,
  },
  {
    name: "github",
    link: "https://github.com/Dmitrii-Belich",
    icon: socialIcons.github,
  },
  {
    name: "wats",
    link: "https://api.whatsapp.com/send?phone=79006351840",
    icon: socialIcons.wats,
  },
  {
    name: "tg",
    link: "https://t.me/Diman014",
    icon: socialIcons.tg,
  },
  {
    name: "HeadHunter",
    link:
      "https://spb.hh.ru/resume/37350f7aff08123d5c0039ed1f76515051584f",
    icon: socialIcons.hh,
  },
];

export const technologies = [
  {
    name: "Express",
    percent: "100",
  },
  {
    name: "Node",
    percent: "100",
  },
  {
    name: "Redux",
    percent: "100",
  },
  {
    name: "React",
    percent: "100",
  },
  {
    name: "Vue",
    percent: "100",
  },
  {
    name: "Vuex",
    percent: "100",
  },
  {
    name: "Nuxt",
    percent: "100",
  },
  {
    name: "OOP",
    percent: "100",
  },
  {
    name: "Webpack",
    percent: "100",
  },
  {
    name: "BEM",
    percent: "100",
  },
  {
    name: "Adaptivity",
    percent: "100",
  },
  {
    name: "GitHub",
    percent: "100",
  },
];
