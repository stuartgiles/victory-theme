import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryLine, VictoryPie, VictoryChart, VictoryAxis, VictoryScatter, VictoryArea, VictoryTheme, VictoryStack, VictoryGroup } from 'victory';

// IMPA base styles using existing IKEA UX variables
import "../stylesheets/colour.css";
import "../stylesheets/font.css";
import "../stylesheets/spacing.css";
import "../stylesheets/base.css";

// IMPA report styles
import "../stylesheets/report.css";
import "../stylesheets/layout.css";

// IMPA Victory Theme
import themeIMPA from "../theme/impa-theme.js";


// Example data
const dataFinland = [
  {store: 'CPU031P', allocation: 42.7},
  {store: 'CDC040T', allocation: 14.9},
  {store: 'CDC405T', allocation: 9.5},
  {store: 'STORE019T', allocation: 3.9},
  {store: 'STORE012T', allocation: 2.1},
  {store: 'STORE398T long key name', allocation: 1.9},
  {store: 'STORE445T', allocation: 1.6},
  {store: 'STORE014T', allocation: 1.3},
  {store: 'STORE020T', allocation: 1.1},
  {store: 'Others', allocation: 21.0}
];

const dataReptiles = [
  { x: "lizard", y: 1234 },
  { x: "snake", y: 2048 },
  { x: "crocodile", y: 2600 },
  { x: "alligator", y: 9000 }
];

const dataEqual = [
  {item: 1, value: 1},
  {item: 2, value: 1},
  {item: 3, value: 1},
  {item: 4, value: 1},
  {item: 5, value: 1},
  {item: 6, value: 1},
  {item: 7, value: 1},
  {item: 8, value: 1},
  {item: 9, value: 1},
  {item: 10, value: 1},
  {item: 11, value: 1},
  {item: 12, value: 1},
  {item: 13, value: 1},
  {item: 14, value: 1},
  {item: 15, value: 1},
  {item: 16, value: 1},
  {item: 17, value: 1},
  {item: 18, value: 1},
  {item: 19, value: 1},
  {item: 20, value: 1}
];

const dataSimple = [
  {item: 1, value: 30},
  {item: 2, value: 80},
  {item: 3, value: 41},
  {item: 4, value: 17},
  {item: 5, value: 5},
  {item: 6, value: 16},
  {item: 7, value: 95},
  {item: 8, value: 28}
];

const dataComplex = [
  {item: 1, value: 58 },
  {item: 2, value: 71 },
  {item: 3, value: 48 },
  {item: 4, value: 3 },
  {item: 5, value: 17 },
  {item: 6, value: 99 },
  {item: 7, value: 13 },
  {item: 8, value: 21 },
  {item: 9, value: 7 },
  {item: 10, value: 72 },
  {item: 11, value: 69 },
  {item: 12, value: 35 },
  {item: 13, value: 29 },
  {item: 14, value: 58 },
  {item: 15, value: 47 },
  {item: 16, value: 89 },
  {item: 17, value: 17 },
  {item: 18, value: 74 },
  {item: 19, value: 47 },
  {item: 20, value: 83 },
  {item: 21, value: 28 },
  {item: 22, value: 18 },
  {item: 23, value: 79 },
  {item: 24, value: 53 },
  {item: 25, value: 73 },
  {item: 26, value: 58 },
  {item: 27, value: 85 },
  {item: 28, value: 97 },
  {item: 29, value: 44 },
  {item: 30, value: 81 },
  {item: 31, value: 48 },
  {item: 32, value: 48 },
  {item: 33, value: 42 },
  {item: 34, value: 13 },
  {item: 35, value: 4 },
  {item: 36, value: 94 },
  {item: 37, value: 28 },
  {item: 38, value: 45 },
  {item: 39, value: 18 },
  {item: 40, value: 74 },
  {item: 41, value: 94 },
  {item: 42, value: 73 },
  {item: 43, value: 38 },
  {item: 44, value: 32 },
  {item: 45, value: 30 },
  {item: 46, value: 64 },
  {item: 47, value: 21 },
  {item: 48, value: 9 },
  {item: 49, value: 56 },
  {item: 50, value: 57 },
  {item: 51, value: 77 },
  {item: 52, value: 11 },
  {item: 53, value: 45 },
  {item: 54, value: 5 },
  {item: 55, value: 30 },
  {item: 56, value: 87 },
  {item: 57, value: 14 },
  {item: 58, value: 82 },
  {item: 59, value: 55 },
  {item: 60, value: 26 },
  {item: 61, value: 20 },
  {item: 62, value: 46 },
  {item: 63, value: 20 },
  {item: 64, value: 67 },
  {item: 65, value: 31 },
  {item: 66, value: 64 },
  {item: 67, value: 97 },
  {item: 68, value: 90 },
  {item: 69, value: 23 },
  {item: 70, value: 29 },
  {item: 71, value: 72 },
  {item: 72, value: 33 },
  {item: 73, value: 72 },
  {item: 74, value: 51 },
  {item: 75, value: 74 },
  {item: 76, value: 95 },
  {item: 77, value: 42 },
  {item: 78, value: 85 },
  {item: 79, value: 96 },
  {item: 80, value: 47 },
  {item: 81, value: 84 },
  {item: 82, value: 64 },
  {item: 83, value: 64 },
  {item: 84, value: 15 },
  {item: 85, value: 37 },
  {item: 86, value: 36 },
  {item: 87, value: 76 },
  {item: 88, value: 65 },
  {item: 89, value: 19 },
  {item: 90, value: 47 },
  {item: 91, value: 62 },
  {item: 92, value: 72 },
  {item: 93, value: 34 },
  {item: 94, value: 78 },
  {item: 95, value: 6 },
  {item: 96, value: 46 },
  {item: 97, value: 21 },
  {item: 98, value: 40 },
  {item: 99, value: 80 },
  {item: 100, value: 86 }
];


// App
class Main extends React.Component {
  render() {
    return (
      <div>


        <section className="container-small one-column">
          <div className="report-header">
            <h1 className="report-title">Scenario base for France</h1>
            <div className="report-meta">
              <div>
                <strong>#140</strong>
              </div>
              <div>
                <span className="icon icon-calendar"></span>
                <span>8 days ago</span>
              </div>
            </div>
            <p className="report-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
          </div>

        </section>

        <hr />

// Layout options
        <section className="container-small one-column">
          <div className="chart chart-demo-box">
            <span class="demo-text">small one</span>
          </div>
        </section>

        <section className="container-small two-column">
          <div className="chart chart-demo-box">
            <span class="demo-text">small two</span>
          </div>
          <div className="chart chart-demo-box">
            <span class="demo-text">small two</span>
          </div>
        </section>

        <section className="container-small three-column">
          <div className="chart chart-demo-box">
            <span class="demo-text">small two</span>
          </div>
          <div className="chart chart-demo-box">
            <span class="demo-text">small two</span>
          </div>
          <div className="chart chart-demo-box">
            <span class="demo-text">small two</span>
          </div>
        </section>

        <section className="container-default one-column">
          <div className="chart chart-demo-box">
            <span class="demo-text">default one</span>
          </div>
        </section>

        <section className="container-default two-column">
          <div className="chart chart-demo-box">
            <span class="demo-text">default two</span>
          </div>
          <div className="chart chart-demo-box">
            <span class="demo-text">default two</span>
          </div>
        </section>

        <section className="container-default three-column">
          <div className="chart chart-demo-box">
            <span class="demo-text">default two</span>
          </div>
          <div className="chart chart-demo-box">
            <span class="demo-text">default two</span>
          </div>
          <div className="chart chart-demo-box">
            <span class="demo-text">default two</span>
          </div>
        </section>

        <section className="container-full one-column">
          <div className="chart chart-demo-box">
            <span class="demo-text">full one</span>
          </div>
        </section>

        <section className="container-full two-column">
          <div className="chart chart-demo-box">
            <span class="demo-text">full two</span>
          </div>
          <div className="chart chart-demo-box">
            <span class="demo-text">full two</span>
          </div>
        </section>

        <section className="container-full three-column">
          <div className="chart chart-demo-box">
            <span class="demo-text">full two</span>
          </div>
          <div className="chart chart-demo-box">
            <span class="demo-text">full two</span>
          </div>
          <div className="chart chart-demo-box">
            <span class="demo-text">full two</span>
          </div>
        </section>

        <hr />

// Markdown cart
        <section className="container-small one-column">
          <div className="chart chart-md">
            <h1>Nobis est eligendi optio</h1>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
          </div>
        </section>

        <section className="container-small two-column">
          <div className="chart chart-md">
            <h2>Nobis est eligendi optio</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <ul>
              <li>Et harum quidem rerum facilis est et expedita distinctio.</li>
              <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque.</li>
              <li>Nihil impedit quo minus id quod.</li>
              <li>Maxime placeat facere possimus.</li>
            </ul>
          </div>
          <div className="chart chart-md">
            <h2>Nobis est eligendi optio</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <ul>
              <li>Et harum quidem rerum facilis est et expedita distinctio.</li>
              <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque.</li>
              <li>Nihil impedit quo minus id quod.</li>
              <li>Maxime placeat facere possimus.</li>
            </ul>
          </div>
        </section>

        <section className="container-small three-column">
          <div className="chart chart-md">
            <h3>Nobis est eligendi optio blanditiis</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          </div>
          <div className="chart chart-md">
            <h3>Nobis est eligendi optio</h3>
            <p>Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
          </div>
          <div className="chart chart-md">
            <h3>Nobis est mollitia animi</h3>
            <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
          </div>
        </section>

        <hr />

// Basic charts
        <section className="container-default three-column">
          <div className="chart">
            <VictoryChart theme={themeIMPA}>
              <VictoryBar
                data={dataSimple}
                x="thing"
                y="value"
              />
            </VictoryChart>
          </div>
          <div className="chart">
            <VictoryChart theme={themeIMPA}>
              <VictoryLine
                data={dataSimple}
                x="thing"
                y="value"
              />
            </VictoryChart>
          </div>
          <div className="chart">
            <VictoryPie
              theme={themeIMPA}
              data={dataReptiles}
            />
          </div>
          <div className="chart">
            <VictoryChart theme={themeIMPA}>
              <VictoryArea
                data={dataSimple}
                x="thing"
                y="value"
              />
            </VictoryChart>
          </div>
          <div className="chart">
            <VictoryChart theme={themeIMPA}>
              <VictoryScatter
                data={dataComplex}
                x="thing"
                y="value"
              />
            </VictoryChart>
          </div>
          <div className="chart chart-pie">
            <VictoryPie
               theme={themeIMPA}
               innerRadius={96}
               data={dataReptiles}
            />
          </div>
          <div className="chart">
            <svg width={400} height={400}>
              <VictoryAxis crossAxis
                width={400}
                height={400}
                domain={[-10, 10]}
                theme={themeIMPA}
                offsetY={200}
                standalone={false}
              />
              <VictoryAxis dependentAxis crossAxis
                width={400}
                height={400}
                domain={[-10, 10]}
                theme={themeIMPA}
                offsetX={200}
                standalone={false}
              />
            </svg>
          </div>
        </section>

        <section className="container-default one-column">
          <div className="chart">
            <VictoryChart theme={themeIMPA}>
              <VictoryGroup
                >
                <VictoryArea
                interpolation="natural"
                  data={[
                    { x: 1, y: 3 },
                    { x: 2, y: 4 },
                    { x: 3, y: 9 }
                  ]}
                />
                <VictoryArea
                interpolation="natural"
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 7 }
                  ]}
                />
                <VictoryArea
                interpolation="natural"
                  data={[
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                    { x: 3, y: 5 }
                  ]}
                />
              </VictoryGroup>
            </VictoryChart>
          </div>
        </section>

        <hr />

// Colour Scales & Donuts
        <section className="container-default two-column">
          <div className="chart chart-pie">
            <VictoryPie
              theme={themeIMPA}
              data={dataEqual}
              x="item"
              y="value"
              />
          </div>
          <div className="chart chart-pie">
            <VictoryPie
              theme={themeIMPA}
              innerRadius={96}
              data={dataFinland}
              x="store"
              y="allocation"
           />
          </div>
        </section>

        <hr />

// Group charts
        <section className="container-default two-column">
          <div className="chart">
            <VictoryChart theme={themeIMPA}>
              <VictoryGroup
                offset={20}
                >
                <VictoryBar
                  data={[
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                    { x: 3, y: 5 }
                  ]}
                />
                <VictoryBar
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 1 },
                    { x: 3, y: 7 }
                  ]}
                />
                <VictoryBar
                  data={[
                    { x: 1, y: 3 },
                    { x: 2, y: 4 },
                    { x: 3, y: 9 }
                  ]}
                />
              </VictoryGroup>
            </VictoryChart>
          </div>
          <div className="chart">
            <VictoryChart theme={themeIMPA}>
              <VictoryGroup
                >
                <VictoryArea
                  data={[
                    { x: 1, y: 3 },
                    { x: 2, y: 4 },
                    { x: 3, y: 9 }
                  ]}
                />
                <VictoryArea
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 7 }
                  ]}
                />
                <VictoryArea
                  data={[
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                    { x: 3, y: 5 }
                  ]}
                />
              </VictoryGroup>
            </VictoryChart>
          </div>
        </section>

        <hr />

// Stacked charts

        <section className="container-default two-column">
          <div className="chart">
            <VictoryChart
              theme={themeIMPA}
              domainPadding={32}
            >
              <VictoryStack>
                <VictoryBar
                  data={[
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                    { x: 3, y: 5 }
                  ]}
                />
                <VictoryBar
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 1 },
                    { x: 3, y: 7 }
                  ]}
                />
                <VictoryBar
                  data={[
                    { x: 1, y: 3 },
                    { x: 2, y: 4 },
                    { x: 3, y: 9 }
                  ]}
                />
              </VictoryStack>
            </VictoryChart>
          </div>
          <div className="chart">
            <VictoryChart theme={themeIMPA}>
              <VictoryStack>
                <VictoryLine
                  data={[
                    { x: 1, y: 1 },
                    { x: 2, y: 2 },
                    { x: 3, y: 5 }
                  ]}
                />
                <VictoryLine
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 1 },
                    { x: 3, y: 7 }
                  ]}
                />
                <VictoryLine
                  data={[
                    { x: 1, y: 3 },
                    { x: 2, y: 4 },
                    { x: 3, y: 9 }
                  ]}
                />
              </VictoryStack>
            </VictoryChart>
          </div>
        </section>

        <hr />

// Overriding the theme styles
        <section className="container-default one-column">
          <div className="chart">
            <VictoryChart
              theme={themeIMPA}
              domainPadding={32}
              width="640"
              >
              <VictoryBar
                style={{ data: { fill: "#6DB65B" } }}
                data={dataFinland}
                x="allocation"
                y="store"
              />
            </VictoryChart>
          </div>
        </section>

        <section className="container-default one-column">
          <div className="chart">
            <VictoryPie
              theme={themeIMPA}
              domainPadding={32}
              colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
              data={dataFinland}
              x="store"
              y="allocation"
            />
          </div>
        </section>


      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
