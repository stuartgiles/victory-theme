import { assign } from "lodash";

// *
// * Colors
// *
const colorBrandBlue = "#0058a3";
const colorBrandYellow = "#ffdb00";

const colorFeedbackWarning = "#ffa524";
const colorFeedbackError = "#e00751";
const colorFeedbackConfirmation = "#0a8a00";
const colorFeedbackInformation = colorBrandBlue;

const colorNeutralWhite = "#ffffff";
const colorNeutralGrey100 = "#f5f5f5";
const colorNeutralGrey200 = "#dfdfdf";
const colorNeutralGrey300 = "#cccccc";
const colorNeutralGrey500 = "#959595";
const colorNeutralGrey700 = "#666666";
const colorNeutralGrey800 = "#333333";
const colorNeutralGrey900 = "#111111";
const colorNeutralGreyScale = [
  colorNeutralGrey900,
  colorNeutralGrey800,
  colorNeutralGrey700,
  colorNeutralGrey500,
  colorNeutralGrey300,
  colorNeutralGrey200
];

const colorBrandBlue100 = "#CCDEED";
const colorBrandBlue200 = "#99BCDA";
const colorBrandBlue300 = "#669BC8";
const colorBrandBlue400 = "#3379B5";
const colorBrandBlue500 = colorBrandBlue;
const colorBrandBlue600 = "#004682";
const colorBrandBlue700 = "#003562";
const colorBrandBlue800 = "#002341";
const colorBrandBlue900 = "#001221";
const colorBrandBlueScale = [
  colorBrandBlue800,
  colorBrandBlue700,
  colorBrandBlue600,
  colorBrandBlue500,
  colorBrandBlue400,
  colorBrandBlue300,
  colorBrandBlue200
];

const colorFeedbackWarning100 = "#FFEDD3";
const colorFeedbackWarning200 = "#FFDBA7";
const colorFeedbackWarning300 = "#FFC97C";
const colorFeedbackWarning400 = "#FFB750";
const colorFeedbackWarning500 = colorFeedbackWarning;
const colorFeedbackWarning600 = "#E98900";
const colorFeedbackWarning700 = "#AF6700";
const colorFeedbackWarning800 = "#744500";
const colorFeedbackWarning900 = "#3A2200";
const colorFeedbackWarningScale = [
  colorFeedbackWarning800,
  colorFeedbackWarning700,
  colorFeedbackWarning600,
  colorFeedbackWarning500,
  colorFeedbackWarning400,
  colorFeedbackWarning300,
  colorFeedbackWarning200
];

const colorFeedbackError100 = "#F9CDDC";
const colorFeedbackError200 = "#F39CB9";
const colorFeedbackError300 = "#EC6A97";
const colorFeedbackError400 = "#E63974";
const colorFeedbackError500 = colorFeedbackError;
const colorFeedbackError600 = "#B30641";
const colorFeedbackError700 = "#860431";
const colorFeedbackError800 = "#5A0320";
const colorFeedbackError900 = "#2D0110";
const colorFeedbackErrorScale = [
  colorFeedbackError800,
  colorFeedbackError700,
  colorFeedbackError600,
  colorFeedbackError500,
  colorFeedbackError400,
  colorFeedbackError300,
  colorFeedbackError200
];

const colorFeedbackConfirmation100 = "#CEE8CC";
const colorFeedbackConfirmation200 = "#9DD099";
const colorFeedbackConfirmation300 = "#6CB966";
const colorFeedbackConfirmation400 = "#3BA133";
const colorFeedbackConfirmation500 = colorFeedbackConfirmation;
const colorFeedbackConfirmation600 = "#086E00";
const colorFeedbackConfirmation700 = "#065300";
const colorFeedbackConfirmation800 = "#043700";
const colorFeedbackConfirmation900 = "#021C00";
const colorFeedbackConfirmationScale = [
  colorFeedbackConfirmation800,
  colorFeedbackConfirmation700,
  colorFeedbackConfirmation600,
  colorFeedbackConfirmation500,
  colorFeedbackConfirmation400,
  colorFeedbackConfirmation300,
  colorFeedbackConfirmation200
];

const colorRandomScale = [
  colorFeedbackError400,
  colorBrandBlue500,
  colorFeedbackWarning400,
  colorFeedbackConfirmation400,
  colorFeedbackWarning500,
  colorFeedbackError600,
  colorBrandBlue600,
  colorFeedbackError500,
  colorFeedbackConfirmation500,
  colorBrandBlue400,
  colorFeedbackWarning600,
  colorFeedbackConfirmation600
];


// *
// * Typography
// *
const fontFamilyText = "'Noto IKEA', 'Noto Sans', 'Roboto', 'Open Sans', sans-serif";
const letterSpacing = "normal";

const fontSizeL = 18;
const fontSizeM = 16;
const fontSizeS = 14;
const fontSizeXS = 12;

// *
// * Layout
// *
const spacingXS = 8;
const spacingS = 12;
const spacingM = 16;
const spacingL = 24;
const spacingXL = 32;

const baseProps = {
  width: 640,
  height: 320,
  padding: 32
};


// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: fontFamilyText,
  fontSizeXS,
  letterSpacing,
  spacingXS,
  fill: colorNeutralGrey900,
  stroke: "none",
  strokeWidth: 0
};

const centeredLabelStyles = assign({
  textAnchor: "middle"
}, baseLabelStyles);

// *
// * Strokes
// *
const strokeDasharray = "12, 8";
const strokeLinecap = "round";
const strokeLinejoin = "round";

export default {
  area: assign({
    style: {
      data: {
        fill: colorBrandBlue500
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  axis: assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: colorNeutralGrey900,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: assign({}, centeredLabelStyles, {
        spacingXS,
        stroke: "transparent"
      }),
      grid: {
        fill: "none",
        stroke: "none",
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin,
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 4,
        stroke: colorNeutralGrey900,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      tickLabels: assign({}, baseLabelStyles, {
        fill: colorNeutralGrey900
      })
    }
  }, baseProps),
  bar: assign({
    style: {
      data: {
        fill: colorBrandBlue500,
        spacingXS,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  boxplot: assign({
    style: {
      max: {
        spacingXS,
        stroke: colorNeutralGrey900,
        strokeWidth: 1
      },
      maxLabels: baseLabelStyles,
      median: {
        spacingXS,
        stroke: colorNeutralGrey900,
        strokeWidth: 1
      },
      medianLabels: baseLabelStyles,
      min: {
        spacingXS,
        stroke: colorNeutralGrey900,
        strokeWidth: 1
      },
      minLabels: baseLabelStyles,
      q1: {
        spacingXS,
        fill: colorNeutralGrey900
      },
      q1Labels: baseLabelStyles,
      q3: {
        spacingXS,
        fill: colorNeutralGrey900
      },
      q3Labels: baseLabelStyles
    },
    boxWidth: 20
  }, baseProps),
  candlestick: assign({
    style: {
      data: {
        stroke: colorNeutralGrey900
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: colorNeutralWhite,
      negative: colorNeutralGrey900
    }
  }, baseProps),
  chart: baseProps,
  errorbar: assign({
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: colorNeutralGrey900,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  group: assign({
    colorScale: colorBrandBlueScale,
  }, baseProps),
  legend: {
    colorScale: colorRandomScale,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, {
        spacingXS
      })
    }
  },
  line: assign({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: colorBrandBlue,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  pie: assign({
    colorScale: colorBrandBlueScale,
    style: {
      data: {
        spacingXS,
        stroke: colorNeutralWhite,
        strokeWidth: 2
      },
      labels: assign({}, baseLabelStyles, {
        spacingM
      })
    }
  }, baseProps),
  scatter: assign({
    style: {
      data: {
        fill: colorBrandBlue,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    }
  }, baseProps),
  stack: assign({
    colorScale: colorBrandBlueScale
  }, baseProps),
  tooltip: {
    style: assign({}, centeredLabelStyles, {
      spacingXS,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: colorNeutralGrey900,
      strokeWidth: 1,
      fill: colorNeutralGrey100,
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: assign({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: assign({}, centeredLabelStyles, {
        spacingXS,
        pointerEvents: "none"
      }),
      flyout: {
        stroke: colorNeutralGrey900,
        strokeWidth: 1,
        fill: colorNeutralGrey100,
        pointerEvents: "none"
      }
    }
  }, baseProps)
};
