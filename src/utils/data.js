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
import acrossImage from "../images/across-russia.png";
import studyImage from "../images/how-to-study.png";
import procrastinateImage from "../images/procrastinate.png";
import dappyImage from "../images/dappy.svg";
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
        title: 'Проект "РакЛечится"',
        subtitle:
          "Проект по переносу сайта с Tilda. Выполнен на Nuxt.js, командой, на конкурсной основе.",
        link: "https://github.com/Dmitrii-Belich/raklechitsa",
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
        title: 'Проект "Место"',
        subtitle:
          "Проект, созданный по программе обучения в Яндекс.Практикум, призван продемонстрировать навыки JavaScript, ООП, валидации форм и работы с WebPack. (В разработке)",
        link: "/mesto",
        image: mestoImage,
        icons: [
          {
            name: "code",
            link: "https://github.com/Dmitrii-Belich/mesto",
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
    name: "slack",
    link:
      "https://vk.com/away.php?utf=1&to=https%3A%2F%2Fjoin.slack.com%2Ft%2Fbelichds%2Fshared_invite%2Fzt-dhlqayr8-WI~TBEZeYWLArgm7Um4gZQ",
    icon: socialIcons.slack,
  },
];
