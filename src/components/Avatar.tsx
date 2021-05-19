import React from "react";
import { motion, Variants } from "framer-motion";

const AvatarVariants: Variants = {
  initial: { y: "-50%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { ease: "backOut", duration: 0.8 },
  },
  exit: {
    scale: 0.7,
    opacity: 0,
    transition: { ease: "backIn", delay: 0.3, duration: 0.8 },
  },
};

/**
 * Animated SVG-based avatar, created using https://getavataaars.com/
 */
export default class Avatar extends React.Component {
  state = {
    eye: {
      open: true,
      heart: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
  };
  blinkInterval?: NodeJS.Timeout;
  eyeBound?: DOMRect;

  componentDidMount() {
    this.updateEyeBound();
    document.addEventListener("mousemove", this.eyeTrackCursor);
    document.addEventListener("mouseout", this.resetOffset);
    window.addEventListener("resize", this.updateEyeBound);

    this.blinkEye();
  }

  componentWillUnmount() {
    if (this.blinkInterval) {
      clearInterval(this.blinkInterval);
    }
    document.removeEventListener("mousemove", this.eyeTrackCursor);
    document.removeEventListener("mouseout", this.resetOffset);
    window.removeEventListener("resize", this.updateEyeBound);
  }

  updateEyeBound() {
    const eyeElement = document.getElementById("Eyes/Default");
    if (eyeElement) {
      this.eyeBound = eyeElement.getBoundingClientRect();
    } else {
      setInterval(this.updateEyeBound, 300);
    }
  }

  eyeTrackCursor = (ev: MouseEvent) => {
    if (this.eyeBound) {
      let xOffset = 0;
      let yOffset = 0;

      // Calculate x offset
      if (ev.x < this.eyeBound.x) {
        xOffset = ev.x - this.eyeBound.x;
      } else if (ev.x > this.eyeBound.x + this.eyeBound.width) {
        xOffset = ev.x - (this.eyeBound.x + this.eyeBound.width);
      }

      // Calculate y offset
      if (ev.y < this.eyeBound.y) {
        yOffset = ev.y - this.eyeBound.y;
      } else if (ev.y > this.eyeBound.y + this.eyeBound.height) {
        yOffset = ev.y - (this.eyeBound.y + this.eyeBound.height);
      }

      this.setState({
        eye: Object.assign({}, this.state.eye, {
          offset: {
            x: xOffset,
            y: yOffset,
          },
        }),
      });
    }
  };
  resetOffset = () => {
    this.setState({
      eye: Object.assign({}, this.state.eye, {
        offset: {
          x: 0,
          y: 0,
        },
      }),
    });
  };

  blinkEye = () => {
    const eyeOpen = !this.state.eye.open;
    this.setState({
      eye: Object.assign({}, this.state.eye, {
        open: eyeOpen,
      }),
    });
    if (this.blinkInterval) {
      clearInterval(this.blinkInterval);
    }
    if (eyeOpen) {
      // Human eyes blink between 8 and 21 times per minute
      this.blinkInterval = setInterval(
        this.blinkEye,
        7500 + Math.random() * 4642
      );
    } else {
      // One blink lasts about 1/3 second
      this.blinkInterval = setInterval(this.blinkEye, 333);
    }
  };

  get leftEyeX() {
    if (this.state.eye.offset.x >= 0) {
      return Math.min(30 + this.state.eye.offset.x, 35);
    }
    return Math.max(30 + this.state.eye.offset.x, 25);
  }
  get rightEyeX() {
    if (this.state.eye.offset.x >= 0) {
      return Math.min(82 + this.state.eye.offset.x, 87);
    }
    return Math.max(82 + this.state.eye.offset.x, 77);
  }
  get eyeY() {
    if (this.state.eye.offset.y >= 0) {
      return Math.min(22 + this.state.eye.offset.y, 27);
    }
    return Math.max(22 + this.state.eye.offset.y, 17);
  }

  get eye() {
    if (this.state.eye.heart) {
      return (
        <g
          id="Eyes/Hearts"
          transform="translate(0.000000, 8.000000)"
          fillOpacity="0.8"
          fillRule="nonzero"
          fill="#FF5353"
        >
          <path
            d="M35.9583333,10 C33.4074091,10 30.8837273,11.9797894 29.5,13.8206358 C28.1106364,11.9797894 25.5925909,10 23.0416667,10 C17.5523182,10 14,13.3341032 14,17.6412715 C14,23.3708668 18.4118636,26.771228 23.0416667,30.376724 C24.695,31.6133636 27.8223436,34.7777086 28.2083333,35.470905 C28.5943231,36.1641015 30.3143077,36.1885229 30.7916667,35.470905 C31.2690257,34.7532872 34.3021818,31.6133636 35.9583333,30.376724 C40.5853182,26.771228 45,23.3708668 45,17.6412715 C45,13.3341032 41.4476818,10 35.9583333,10 Z"
            id="Heart"
          />
          <path
            d="M88.9583333,10 C86.4074091,10 83.8837273,11.9797894 82.5,13.8206358 C81.1106364,11.9797894 78.5925909,10 76.0416667,10 C70.5523182,10 67,13.3341032 67,17.6412715 C67,23.3708668 71.4118636,26.771228 76.0416667,30.376724 C77.695,31.6133636 80.8223436,34.7777086 81.2083333,35.470905 C81.5943231,36.1641015 83.3143077,36.1885229 83.7916667,35.470905 C84.2690257,34.7532872 87.3021818,31.6133636 88.9583333,30.376724 C93.5853182,26.771228 98,23.3708668 98,17.6412715 C98,13.3341032 94.4476818,10 88.9583333,10 Z"
            id="Heart"
          />
        </g>
      );
    }
    if (this.state.eye.open) {
      return (
        <g
          id="Eyes/Default"
          transform="translate(0.000000, 8.000000)"
          fillOpacity="0.599999964"
        >
          <circle id="Eye" cx={this.leftEyeX} cy={this.eyeY} r="6"/>
          <circle id="Eye" cx={this.rightEyeX} cy={this.eyeY} r="6"/>
        </g>
      );
    }
    return (
      <g
        id="Eyes/Closed"
        transform="translate(0.000000, 8.000000)"
        fillOpacity="0.599999964"
      >
        <path
          d="M16.1601674,32.4473116 C18.006676,28.648508 22.1644225,26 26.9975803,26 C31.8136766,26 35.9591217,28.629842 37.8153518,32.4071242 C38.3667605,33.5291977 37.5821037,34.4474817 36.790607,33.7670228 C34.3395063,31.6597833 30.8587163,30.3437884 26.9975803,30.3437884 C23.2572061,30.3437884 19.8737584,31.5787519 17.4375392,33.5716412 C16.5467928,34.3002944 15.6201012,33.5583844 16.1601674,32.4473116 Z"
          id="Closed-Eye"
          transform="translate(27.000000, 30.000000) scale(1, -1) translate(-27.000000, -30.000000) "
        />
        <path
          d="M74.1601674,32.4473116 C76.006676,28.648508 80.1644225,26 84.9975803,26 C89.8136766,26 93.9591217,28.629842 95.8153518,32.4071242 C96.3667605,33.5291977 95.5821037,34.4474817 94.790607,33.7670228 C92.3395063,31.6597833 88.8587163,30.3437884 84.9975803,30.3437884 C81.2572061,30.3437884 77.8737584,31.5787519 75.4375392,33.5716412 C74.5467928,34.3002944 73.6201012,33.5583844 74.1601674,32.4473116 Z"
          id="Closed-Eye"
          transform="translate(85.000000, 30.000000) scale(1, -1) translate(-85.000000, -30.000000) "
        />
      </g>
    );
  }

  render() {
    return (
      <motion.svg
        variants={AvatarVariants}
        id="avatar"
        width="264px"
        height="280px"
        viewBox="0 0 264 280"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with getavataaars.com</desc>
        <defs>
          <circle id="path-1" cx="120" cy="120" r="120"></circle>
          <path
            d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z"
            id="path-3"
          />
          <path
            d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z"
            id="path-5"
          />
        </defs>
        <g
          id="Avataaar"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            transform="translate(-825.000000, -1100.000000)"
            id="Avataaar/Circle"
          >
            <g transform="translate(825.000000, 1100.000000)">
              <g id="Mask"></g>
              <g
                id="Avataaar"
                strokeWidth="1"
                fillRule="evenodd"
                mask="url(#mask-4)"
              >
                <g id="Body" transform="translate(32.000000, 36.000000)">
                  <mask id="mask-6" fill="white">
                    <use xlinkHref="#path-5"></use>
                  </mask>
                  <use fill="#D0C6AC" xlinkHref="#path-5"></use>
                  <g id="Skin/👶🏽-03-Brown" mask="url(#mask-6)" fill="#EDB98A">
                    <g transform="translate(-32.000000, 0.000000)" id="Color">
                      <rect x="0" y="0" width="264" height="244"></rect>
                    </g>
                  </g>
                  <path
                    d="M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z"
                    id="Neck-Shadow"
                    fillOpacity="0.100000001"
                    fill="#000000"
                    mask="url(#mask-6)"
                  ></path>
                </g>
                <g
                  id="Clothing/Hoodie"
                  transform="translate(0.000000, 170.000000)"
                >
                  <defs>
                    <path
                      d="M108,13.0708856 C90.0813006,15.075938 76.2798424,20.5518341 76.004203,34.6449676 C50.1464329,45.5680933 32,71.1646257 32,100.999485 L32,100.999485 L32,110 L232,110 L232,100.999485 C232,71.1646257 213.853567,45.5680933 187.995797,34.6449832 C187.720158,20.5518341 173.918699,15.075938 156,13.0708856 L156,32 L156,32 C156,45.254834 145.254834,56 132,56 L132,56 C118.745166,56 108,45.254834 108,32 L108,13.0708856 Z"
                      id="react-path-121"
                    ></path>
                  </defs>
                  <mask id="react-mask-122" fill="white">
                    <use xlinkHref="#react-path-121"></use>
                  </mask>
                  <use
                    id="Hoodie"
                    fill="#B7C1DB"
                    fillRule="evenodd"
                    xlinkHref="#react-path-121"
                  ></use>
                  <g
                    id="Color/Palette/Gray-01"
                    mask="url(#react-mask-122)"
                    fillRule="evenodd"
                    fill="#262E33"
                  >
                    <rect
                      id="🖍Color"
                      x="0"
                      y="0"
                      width="264"
                      height="110"
                    ></rect>
                  </g>
                  <path
                    d="M102,61.7390531 L102,110 L95,110 L95,58.1502625 C97.2037542,59.4600576 99.5467694,60.6607878 102,61.7390531 Z M169,58.1502625 L169,98.5 C169,100.432997 167.432997,102 165.5,102 C163.567003,102 162,100.432997 162,98.5 L162,61.7390531 C164.453231,60.6607878 166.796246,59.4600576 169,58.1502625 Z"
                    id="Straps"
                    fill="#F4F4F4"
                    fillRule="evenodd"
                    mask="url(#react-mask-122)"
                  ></path>
                  <path
                    d="M90.9601329,12.7243537 C75.9093095,15.5711782 65.5,21.2428847 65.5,32.3076923 C65.5,52.0200095 98.5376807,68 132,68 C165.462319,68 198.5,52.0200095 198.5,32.3076923 C198.5,21.2428847 188.09069,15.5711782 173.039867,12.7243537 C182.124921,16.0744598 188,21.7060546 188,31.0769231 C188,51.4689754 160.178795,68 132,68 C103.821205,68 76,51.4689754 76,31.0769231 C76,21.7060546 81.8750795,16.0744598 90.9601329,12.7243537 Z"
                    id="Shadow"
                    fillOpacity="0.16"
                    fill="#000000"
                    fillRule="evenodd"
                    mask="url(#react-mask-122)"
                  ></path>
                </g>
                <g
                  id="Face"
                  transform="translate(76.000000, 82.000000)"
                  fill="#000000"
                >
                  <g
                    id="Mouth/Default"
                    transform="translate(2.000000, 52.000000)"
                    fillOpacity="0.699999988"
                  >
                    <path
                      d="M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15"
                      id="Mouth"
                    ></path>
                  </g>
                  <g
                    id="Nose/Default"
                    transform="translate(28.000000, 40.000000)"
                    fillOpacity="0.16"
                  >
                    <path
                      d="M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8"
                      id="Nose"
                    ></path>
                  </g>
                  {/* Render eye dynamically */}
                  {this.eye}
                  <g
                    id="Eyebrow/Natural/Default-Natural"
                    fillOpacity="0.599999964"
                  >
                    <path
                      d="M26.0390934,6.21012364 C20.2775554,6.98346216 11.2929313,12.0052479 12.04426,17.8178111 C12.0689481,18.0080543 12.3567302,18.0673468 12.4809077,17.9084937 C14.9674041,14.7203351 34.1927973,10.0365481 41.1942673,11.0147151 C41.8350523,11.1044465 42.2580662,10.4430343 41.8210501,10.0302067 C38.0765663,6.49485426 31.2003792,5.51224825 26.0390934,6.21012364"
                      id="Eyebrow"
                      transform="translate(27.000000, 12.000000) rotate(5.000000) translate(-27.000000, -12.000000) "
                    ></path>
                    <path
                      d="M85.0390934,6.21012364 C79.2775554,6.98346216 70.2929313,12.0052479 71.04426,17.8178111 C71.0689481,18.0080543 71.3567302,18.0673468 71.4809077,17.9084937 C73.9674041,14.7203351 93.1927973,10.0365481 100.194267,11.0147151 C100.835052,11.1044465 101.258066,10.4430343 100.82105,10.0302067 C97.0765663,6.49485426 90.2003792,5.51224825 85.0390934,6.21012364"
                      id="Eyebrow"
                      transform="translate(86.000000, 12.000000) scale(-1, 1) rotate(5.000000) translate(-86.000000, -12.000000) "
                    ></path>
                  </g>
                </g>
                <g id="Top" strokeWidth="1" fillRule="evenodd">
                  <defs>
                    <rect
                      id="react-path-103"
                      x="0"
                      y="0"
                      width="264"
                      height="280"
                    ></rect>
                    <path
                      d="M94.2519269,52.0221149 C94.3749353,51.9677149 94.0696712,51.9468149 93.3361345,51.9595149 C94.2276637,51.9577149 94.5329279,51.9785149 94.2519269,52.0221149 M86.1169775,36.3015924 C86.1148422,36.2819924 86.1337548,36.4526924 86.1169775,36.3015924 M193.765056,70.7656665 C193.500946,67.448734 193.03295,64.1518864 192.246676,60.9110823 C191.622233,58.3353492 190.769007,55.8775343 189.760006,53.4200433 C189.150703,51.9353766 187.727538,49.8961062 187.560324,48.2944933 C187.395466,46.7168527 188.626521,44.969138 188.889285,43.1323368 C189.144311,41.3447761 189.100909,39.4652134 188.734183,37.6938503 C187.901144,33.6710288 185.140271,29.9300447 180.877167,28.8814158 C179.925362,28.6471994 177.913417,28.9358396 177.240862,28.3815597 C176.469729,27.7459682 175.932761,25.5806808 175.234637,24.7121687 C173.244224,22.2362125 170.13984,20.6417265 166.865887,21.1976261 C164.454917,21.606776 165.839391,22.1053363 164.032005,20.6864317 C163.027041,19.8976114 162.276095,18.6931622 161.300066,17.8392279 C159.832826,16.5563826 158.149588,15.4581893 156.408146,14.556958 C151.851325,12.19892 146.654249,10.4848961 141.564162,9.64942693 C132.278934,8.12523827 122.368926,9.45408458 113.368668,11.8688141 C108.890239,13.0703477 104.381531,14.5951842 100.222053,16.6117782 C98.4385542,17.4764029 97.4090304,18.1936301 95.5494951,18.4200717 C92.6207355,18.7767416 90.1404579,18.7589243 87.3661268,20.0009517 C78.8298269,23.8229236 74.9849256,32.6897818 78.3066539,41.1750259 C78.974835,42.8815988 79.8795374,44.3801954 81.1267416,45.7586062 C82.6474761,47.4392631 83.1975648,47.1085093 81.8877817,49.0411999 C79.9289949,51.9311653 78.2777195,55.0129095 76.9332826,58.2128958 C73.4043038,66.6145606 72.8138416,76.0771643 73.043634,85.0373203 C73.1240445,88.1741362 73.2586228,91.3495022 73.753198,94.4561907 C73.966841,95.8009106 74.0267283,98.3293468 75.0353925,99.3271154 C75.5471264,99.8331265 76.2762042,100.115288 77.0035997,99.9137903 C78.7130802,99.4401742 78.1253096,98.1787097 78.1650102,97.0076274 C78.364859,91.1240324 78.0950295,85.9191145 79.4943071,80.1064647 C80.5278683,75.8118486 82.2504702,71.9114806 84.4827873,68.0713675 C87.3213795,63.1871608 90.3857268,58.8977279 94.2895061,54.7155226 C95.2073299,53.7320079 95.4078515,53.3150832 96.6385698,53.243814 C97.5705244,53.1900382 98.9338023,53.8282213 99.8398505,54.0491558 C101.837665,54.5360539 103.83918,55.0174448 105.873331,55.3452831 C109.613261,55.9481556 113.316519,55.9886494 117.090094,55.8704074 C124.516459,55.6381346 131.974787,55.1172217 139.175061,53.2470535 C143.956964,52.00535 148.196516,49.7762443 152.776887,48.1422364 C152.858644,48.1130808 154.006596,47.2951049 154.207791,47.3284719 C154.488723,47.3747968 156.184746,49.1542588 156.471061,49.3784327 C158.696649,51.1238798 161.137899,51.8566566 163.541467,53.2081794 C166.504881,54.8745825 163.634999,52.4899804 165.269452,54.5668292 C165.745859,55.1716454 165.989782,56.2931632 166.371984,56.9783192 C167.587899,59.1610999 169.279548,61.0795367 171.302932,62.6017816 C173.258018,64.0725184 176.196198,64.7829426 177.193087,66.697168 C177.961865,68.1740599 178.220929,70.1812592 178.841334,71.7579279 C180.468722,75.8931602 182.617937,79.7494709 184.767152,83.6443317 C186.498502,86.7830913 188.392354,89.5250111 188.584801,93.1117947 C188.651754,94.3603012 187.463764,101.849397 190.357534,99.5716982 C190.786502,99.2341415 191.711391,95.415733 191.901483,94.7678314 C192.672616,92.135083 192.94682,89.3866841 193.29605,86.6816947 C193.990474,81.3021672 194.218584,76.1837441 193.765056,70.7656665"
                      id="react-path-102"
                    ></path>
                    <filter
                      x="-0.8%"
                      y="-2.0%"
                      width="101.5%"
                      height="108.0%"
                      filterUnits="objectBoundingBox"
                      id="react-filter-99"
                    >
                      <feOffset
                        dx="0"
                        dy="2"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      ></feOffset>
                      <feColorMatrix
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
                        type="matrix"
                        in="shadowOffsetOuter1"
                        result="shadowMatrixOuter1"
                      ></feColorMatrix>
                      <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                  </defs>
                  <mask id="react-mask-101" fill="white">
                    <use xlinkHref="#react-path-103"></use>
                  </mask>
                  <g id="Mask"></g>
                  <g
                    id="Top/Short-Hair/Short-Curly"
                    mask="url(#react-mask-101)"
                  >
                    <g transform="translate(-1.000000, 0.000000)">
                      <mask id="react-mask-100" fill="white">
                        <use xlinkHref="#react-path-102"></use>
                      </mask>
                      <use
                        id="Short-Hair"
                        stroke="none"
                        fill="#28354B"
                        fillRule="evenodd"
                        xlinkHref="#react-path-102"
                      ></use>
                      <g
                        id="Hair/Color"
                        mask="url(#react-mask-100)"
                        fill="#000000"
                      >
                        <g
                          transform="translate(0.000000, 0.000000) "
                          id="Color"
                        >
                          <rect x="0" y="0" width="264" height="280"></rect>
                        </g>
                      </g>
                      <g
                        id="Top/_Resources/Prescription-02"
                        fill="none"
                        transform="translate(62.000000, 85.000000)"
                        strokeWidth="1"
                      >
                        <defs>
                          <filter
                            x="-0.8%"
                            y="-2.4%"
                            width="101.5%"
                            height="109.8%"
                            filterUnits="objectBoundingBox"
                            id="react-filter-104"
                          >
                            <feOffset
                              dx="0"
                              dy="2"
                              in="SourceAlpha"
                              result="shadowOffsetOuter1"
                            ></feOffset>
                            <feColorMatrix
                              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"
                              type="matrix"
                              in="shadowOffsetOuter1"
                              result="shadowMatrixOuter1"
                            ></feColorMatrix>
                            <feMerge>
                              <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                              <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                          </filter>
                        </defs>
                        <g
                          id="Wayfarers"
                          filter="url(#react-filter-104)"
                          transform="translate(6.000000, 7.000000)"
                          fill="#252C2F"
                        >
                          <path
                            d="M34,41 L31.2421498,41 C17.3147125,41 9,33.3359286 9,20.5 C9,10.127 10.8170058,0 32.5299306,0 L35.4700694,0 C57.1829942,0 59,10.127 59,20.5 C59,32.5686429 48.7212748,41 34,41 Z M32.3853606,6 C13,6 13,12.8410159 13,21.5015498 C13,28.5719428 16.116254,37 30.9709365,37 L34,37 C46.3649085,37 55,30.6270373 55,21.5015498 C55,12.8410159 55,6 35.6146394,6 L32.3853606,6 Z"
                            id="Left"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M96,41 L93.2421498,41 C79.3147125,41 71,33.3359286 71,20.5 C71,10.127 72.8170058,0 94.5299306,0 L97.4700694,0 C119.182994,0 121,10.127 121,20.5 C121,32.5686429 110.721275,41 96,41 Z M94.3853606,6 C75,6 75,12.8410159 75,21.5015498 C75,28.5719428 78.1194833,37 92.9709365,37 L96,37 C108.364909,37 117,30.6270373 117,21.5015498 C117,12.8410159 117,6 97.6146394,6 L94.3853606,6 Z"
                            id="Right"
                            fillRule="nonzero"
                          ></path>
                          <path
                            d="M2.95454545,5.77156439 C3.64590909,5.09629136 11.2095455,0 32.5,0 C50.3513636,0 54.1302273,1.85267217 59.8502273,4.6518809 L60.2689233,4.85850899 C60.6666014,4.99901896 62.7002447,5.68982981 65.0790606,5.76579519 C67.2462948,5.67278567 69.1000195,5.08540191 69.641698,4.89719767 C76.1703915,1.7220864 82.5610971,0 97.5,0 C118.790455,0 126.354091,5.09629136 127.045455,5.77156439 C128.679318,5.77156439 130,7.06150904 130,8.65734659 L130,11.5431288 C130,13.1389663 128.679318,14.428911 127.045455,14.428911 C127.045455,14.428911 120.143997,14.428911 120.143997,17.3146932 C120.143997,20.2004754 118.181818,13.1389663 118.181818,11.5431288 L118.181818,8.73240251 C114.578575,7.35340151 108.128411,4.78617535 97.5,4.78617535 C85.6584651,4.78617535 79.7610984,6.88602813 74.7022935,8.97112368 L74.7588636,9.10752861 L74.7563667,11.0937608 L72.5391666,16.4436339 L69.8004908,15.3608351 C69.5558969,15.2641292 69.0281396,15.090392 68.2963505,14.9099044 C66.256272,14.4067419 64.1589087,14.253569 62.3040836,14.6343084 C61.6235903,14.7739931 60.9922286,14.9836085 60.4128127,15.266732 L57.7704824,16.5578701 L55.1266751,11.3962031 L55.2440909,9.10175705 L55.3248203,8.90683855 C50.9620526,6.87386374 46.9392639,4.78617535 32.5,4.78617535 C21.8721459,4.78617535 15.422131,7.3524397 11.8181818,8.7314671 L11.8181818,11.5431288 C11.8181818,13.1389663 8.86363636,20.2004754 8.86363636,17.3146932 C8.86363636,14.428911 2.95454545,14.428911 2.95454545,14.428911 C1.32363636,14.428911 0,13.1389663 0,11.5431288 L0,8.65734659 C0,7.06150904 1.32363636,5.77156439 2.95454545,5.77156439 Z"
                            id="Stuff"
                            fillRule="nonzero"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </motion.svg>
    );
  }
}
