
import uzinfocom from '@/images/logos/UZINFOCOM_logo.png'
import logoMicrosoft from '@/images/logos/azure.svg'
import itransition from '@/images/logos/itransition.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'  
const siteMeta = {
    title: "Umid Kayumov",
    description: "Umid Kayumov is a developer, keynote speaker, author, and open source practitioner.",
    copyright: "Umid Kayumov",
    author: {
        name: "Umid Kayumov",
        email: "umidkayumov2000@gmail.com",
        twitter: "https://twitter.com/hopekayumov",
        instagram: "https://instagram.com/umidkayumov20",
        github: "https://github.com/hopekayumov",
        linkedin: "https://linkedin.com/in/umidkayumov",
        twitch: "https://twitch.tv/bketelsen",
        youtube: "https://youtube.com/@bketelsen",
    },
    siteUrl: "https://umidkayumov.com"
}
 export const resume = [
    {
      company: 'Vertex',
      title: 'Social Media Marketing manager',
      logo: uzinfocom,
      start: '2019',
      end: {
        label: '2021',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'VMedia',
      title: 'Graphic Designer',
      logo: logoMicrosoft,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Itransition',
      title: 'Frontend internship',
      logo: itransition,
      start: '2022',
      end: '2022',
    },
    {
      company: 'Uzinfocom',
      title: 'Frontend Developer',
      logo: uzinfocom,
      start: '2022',
      end: {
          label: 'present',
          dateTime: new Date().getFullYear(),
      }
    },
  ]
export const projects = [
  {
    name: 'Fleek',
    description:
      'Install and manage all the tools you need to be productive.',
    link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
    logo: logoFleek,
  },
  {
    name: 'Universal Blue',
    description:
      'Custom Operating System images based on Fedora.',
    link: { href: 'https://ublue.it', label: 'Universal Blue' },
    logo: logoUblue,
  },
  {
    name: 'Bluefin',
    description:
      'The next generation Linux workstation. Built for cloud-native, using cloud-native.',
    link: { href: 'https://projectbluefin.io', label: 'Bluefin' },
    logo: logoUblue,
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Custom commands as webhooks.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description:
      'Production-Grade Container Scheduling and Management',
    link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description:
      'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },


]


export default siteMeta;