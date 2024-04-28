const workData = [
  {
    /**待定 */
    link: "https://town.ncuos.com/home/gov",
    title: "行政",
    text: "行政档案馆的执行官们是家园核心文化的传承者,执行官们策划丰富的内部活动,并维护日常工作场所的运转。借助飞书和 Office 等工具,执行官们矢志不渝地守护家园的文化基因,让小镇气息历久弥新。",
    styleBox: {
      background:
        "linear-gradient(0deg, #7CA9DE 0%, #7CA9DE 100%), radial-gradient(37.49% 44.47% at 9.23% 13.79%, rgba(106, 184, 228, 0.60) 0%, rgba(251, 38, 255, 0.22) 100%), radial-gradient(57.82% 70.75% at 12.18% 95.55%, rgba(152, 21, 255, 0.68) 0%, rgba(152, 21, 255, 0.00) 100%), radial-gradient(46.20% 53.31% at 85.79% 10.34%, rgba(25, 48, 255, 0.41) 0%, rgba(25, 48, 255, 0.00) 100%), rgba(52, 182, 255, 0.80)",
    },
  },
  {
    link: "https://town.ncuos.com/home/product",
    title: "产品",
    text: "产品组是家园工作室想法的创造者。他们不仅维护现有产品,还会打造崭新的产品。作为产品经理的他们,使用需求文档、Figma 原型、Whimsical 思维导图等作为工具,像魔法师一样将创意转化为酷炫的新产品。",
    styleBox: {
      background:
        "linear-gradient(0deg, #6854CC 0%, #6854CC 100%), radial-gradient(37.49% 44.47% at 9.23% 13.79%, rgba(251, 38, 255, 0.60) 0%, rgba(251, 38, 255, 0.22) 100%), radial-gradient(57.82% 70.75% at 12.18% 95.55%, rgba(152, 21, 255, 0.68) 0%, rgba(152, 21, 255, 0.00) 100%), radial-gradient(46.20% 53.31% at 85.79% 10.34%, rgba(25, 48, 255, 0.41) 0%, rgba(25, 48, 255, 0.00) 100%), rgba(52, 97, 255, 0.80)",
    },
  },
  {
    link: "https://town.ncuos.com/home/design",
    title: "设计",
    text: "设计组是家园工作室视觉设计的核心。有才的设计师们，手握画笔，心向桃源，家园的 IP、海报、插画、UI、周边等设计在他们笔下活灵活现。他们会使用 ps、ai、ae、sai、procreate、figma、Blender、Zbrush 等软件进行设计创作，是视觉设计的高手！",
    styleBox: {
      background:
        "linear-gradient(0deg, #FFC15C 0%, #FFC15C 100%), radial-gradient(37.49% 44.47% at 9.23% 13.79%, rgba(251, 38, 255, 0.60) 0%, rgba(251, 38, 255, 0.22) 100%), radial-gradient(57.82% 70.75% at 12.18% 95.55%, rgba(152, 21, 255, 0.68) 0%, rgba(152, 21, 255, 0.00) 100%), radial-gradient(46.20% 53.31% at 85.79% 10.34%, rgba(25, 48, 255, 0.41) 0%, rgba(25, 48, 255, 0.00) 100%), rgba(52, 97, 255, 0.80)",
    },
  },
  {
    link: "https://town.ncuos.com/home/code",
    title: "研发",
    text: "研发组分为前端和后端两个组别。前端组挥舞  TypeScript（JavaScript） 这柄神笔,使用 React 等框架搭建网站的结构。后端组运用 Go 语言的力量,配上 MySQL 和 Redis 等数据库装备,用 Gin 等框架撑起网站的后盾，还有隐藏的客户端刺客🥷（高手），使用 React Native 维护南大家园等App产品。",
    styleBox: {
      background:
        "linear-gradient(0deg, #74D39A 0%, #74D39A 100%), radial-gradient(37.49% 44.47% at 9.23% 13.79%, rgba(251, 38, 255, 0.60) 0%, rgba(251, 38, 255, 0.22) 100%), radial-gradient(57.82% 70.75% at 12.18% 95.55%, rgba(152, 21, 255, 0.68) 0%, rgba(152, 21, 255, 0.00) 100%), radial-gradient(46.20% 53.31% at 85.79% 10.34%, rgba(25, 48, 255, 0.41) 0%, rgba(25, 48, 255, 0.00) 100%), rgba(52, 97, 255, 0.80)",
    },
  },
  {
    link: "https://town.ncuos.com/home/operate",
    title: "运营",
    text: "运营组的小伙伴们是家园小镇的运作核心。他们运营各大平台，发布内容、追踪热点，运营如飞。和用户互动，分析数据，解决问题。组织活动，节日来临，产品上线，他们都能策划出炸裂的好活动。运营人有着源源不断的想法和创意，永远保持积极向上的乐观态度。",
    styleBox: {
      background:
        "linear-gradient(0deg, #FAA57B 0%, #FAA57B 100%), radial-gradient(37.49% 44.47% at 9.23% 13.79%, rgba(251, 38, 255, 0.60) 0%, rgba(251, 38, 255, 0.22) 100%), radial-gradient(57.82% 70.75% at 12.18% 95.55%, rgba(152, 21, 255, 0.68) 0%, rgba(152, 21, 255, 0.00) 100%), radial-gradient(46.20% 53.31% at 85.79% 10.34%, rgba(25, 48, 255, 0.41) 0%, rgba(25, 48, 255, 0.00) 100%), rgba(52, 97, 255, 0.80)",
    },
  },
  {
    link: "https://town.ncuos.com/home/game",
    title: "游戏",
    text: "游戏组由策划，美术，程序，三大职位支撑。我们从一个有趣的想法出发，以Unity引擎作为实现的舞台：策划总揽全局，以文案，figma 丰满最初的想法；美术把控视觉，使用 PS，sai 给予场景角色契合的形象；程序实现蓝图，使用 C#，UnityEditor 将想法具现化。",
    styleBox: {
      background:
        "linear-gradient(0deg, #4BCBE7 0%, #4BCBE7 100%), radial-gradient(37.49% 44.47% at 9.23% 13.79%, rgba(251, 38, 255, 0.60) 0%, rgba(251, 38, 255, 0.22) 100%), radial-gradient(57.82% 70.75% at 12.18% 95.55%, rgba(152, 21, 255, 0.68) 0%, rgba(152, 21, 255, 0.00) 100%), radial-gradient(46.20% 53.31% at 85.79% 10.34%, rgba(25, 48, 255, 0.41) 0%, rgba(25, 48, 255, 0.00) 100%), rgba(52, 97, 255, 0.80)",
    },
  },
];
export default workData;
