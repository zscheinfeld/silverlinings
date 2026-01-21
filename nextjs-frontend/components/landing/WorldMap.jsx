import React, { useEffect, useRef } from "react";
import styles from "@/components/Landing.module.scss";

const WorldMap = () => {
  const mapInstance = useRef(null);

  useEffect(() => {
    // Dynamically add the CSS and JS files
    const loadMapAssets = async () => {
      // Add the CSS file
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css";
      document.head.appendChild(link);

      // Add the JS library
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/jsvectormap";
      script.async = true;
      document.body.appendChild(script);

      // Add the world map JS
      const mapScript = document.createElement("script");
      mapScript.src =
        "https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js";
      mapScript.async = true;
      document.body.appendChild(mapScript);

      // Initialize the map after scripts are loaded
      mapScript.onload = () => {
        if (document.getElementById("jvm-regions-group")) return;

        if (window.jsVectorMap) {
          const isMobile = window.innerWidth <= 768;
          const map = new window.jsVectorMap({
            selectedRegions: [
              "US",
              "BR",
              "MA",
              "JP",
              "IN",
              "CN",
              "SA",
              "IT",
              "FR",
              "RU",
              "KR",
            ],
            selector: "#map",
            map: "world",
            zoomOnScroll: false, // Disable zooming with the scroll wheel
            zoomButtons: false, // Disable zoom buttons

            markers: [
              //US
              {
                coords: [37.0902, -95.7129],
                // Add style for this particular marker
                style: {
                  initial: {
                    fill: "#FFF3A8",
                    stroke: "none", // Remove the outline by setting stroke to 'none'
                    strokeWidth: 0, // Set the stroke width to 0
                    r: 6, // Adjust the size (radius) of the marker;
                  },
                  selected: { fill: "#FFF3A8" },
                  selectedHover: { fill: "#FFF3A8", fillOpacity: 1 },
                  hover: { fill: "#FFF3A8" },
                },
              },

              // Brazil
              {
                coords: [-14.235, -51.9253], // Coordinates for Brazil (latitude: -14.2350, longitude: -51.9253)
                // Add style for this particular marker
                style: {
                  initial: {
                    fill: "#FB8ED7", // Initial color of the marker
                    stroke: "none", // Remove the outline by setting stroke to 'none'
                    strokeWidth: 0, // Set the stroke width to 0
                    r: 6, // Adjust the radius (size) of the marker
                  },
                  selected: {
                    fill: "#FB8ED7", // Color when selected
                  },
                  selectedHover: {
                    fill: "#FB8ED7", // Color when selected and hovered
                    fillOpacity: 1, // Ensure the opacity stays the same
                  },
                  hover: {
                    fill: "#FB8ED7", // Color when hovered (same as initial)
                  },
                },
              },

              // Saudi Arabia
              {
                coords: [23.8859, 45.0792], // Coordinates for Saudi Arabia (latitude: 23.8859, longitude: 45.0792)
                // Add style for this particular marker
                style: {
                  initial: {
                    fill: "#BE8DD2", // Fill color for the marker
                    stroke: "none", // Remove the outline by setting stroke to 'none'
                    strokeWidth: 0, // Set the stroke width to 0
                    r: 6, // Adjust the radius (size) of the marker
                  },
                  selected: {
                    fill: "#BE8DD2", // Color when selected
                  },
                  selectedHover: {
                    fill: "#BE8DD2", // Color when selected and hovered
                    fillOpacity: 1, // Ensure the opacity stays the same
                  },
                  hover: {
                    fill: "#BE8DD2", // Color when hovered (same as initial)
                  },
                },
              },

              // Morocco
              {
                coords: [31.7917, -7.0926], // Coordinates for Morocco (latitude: 31.7917, longitude: -7.0926)
                // Add style for this particular marker
                style: {
                  initial: {
                    fill: "#BE8DD2", // Fill color for the marker
                    stroke: "none", // Remove the outline by setting stroke to 'none'
                    strokeWidth: 0, // Set the stroke width to 0
                    r: 6, // Adjust the radius (size) of the marker
                  },
                  selected: {
                    fill: "#BE8DD2", // Color when selected
                  },
                  selectedHover: {
                    fill: "#BE8DD2", // Color when selected and hovered
                    fillOpacity: 1, // Ensure the opacity stays the same
                  },
                  hover: {
                    fill: "#BE8DD2", // Color when hovered (same as initial)
                  },
                },
              },

              // Japan
              {
                coords: [36.2048, 138.2529], // Coordinates for Japan (latitude: 36.2048, longitude: 138.2529)
                // Add style for this particular marker
                style: {
                  initial: {
                    fill: "#F0696B", // Fill color for the marker
                    stroke: "none", // Remove the outline by setting stroke to 'none'
                    strokeWidth: 0, // Set the stroke width to 0
                    r: 6, // Adjust the radius (size) of the marker
                  },
                  selected: {
                    fill: "#F0696B", // Color when selected
                  },
                  selectedHover: {
                    fill: "#F0696B", // Color when selected and hovered
                    fillOpacity: 1, // Ensure the opacity stays the same
                  },
                  hover: {
                    fill: "#F0696B", // Color when hovered (same as initial)
                  },
                },
              },

              // China
              {
                coords: [35.8617, 104.1954], // Coordinates for China (latitude: 35.8617, longitude: 104.1954)
                // Add style for this particular marker
                style: {
                  initial: {
                    fill: "#527BFF", // Fill color for the marker
                    stroke: "none", // Remove the outline by setting stroke to 'none'
                    strokeWidth: 0, // Set the stroke width to 0
                    r: 6, // Adjust the radius (size) of the marker
                  },
                  selected: {
                    fill: "#527BFF", // Color when selected
                  },
                  selectedHover: {
                    fill: "#527BFF", // Color when selected and hovered
                    fillOpacity: 1, // Ensure the opacity stays the same
                  },
                  hover: {
                    fill: "#527BFF", // Color when hovered (same as initial)
                  },
                },
              },
              // Italy
              {
                coords: [41.87194, 12.56738], // Coordinates for Italy (latitude: 41.87194, longitude: 12.56738)
                // Add style for this particular marker
                style: {
                  initial: {
                    fill: "#7FA8E9", // Fill color for the marker
                    stroke: "none", // Remove the outline by setting stroke to 'none'
                    strokeWidth: 0, // Set the stroke width to 0
                    r: 6, // Adjust the radius (size) of the marker
                  },
                  selected: {
                    fill: "#7FA8E9", // Color when selected
                  },
                  selectedHover: {
                    fill: "#7FA8E9", // Color when selected and hovered
                    fillOpacity: 1, // Ensure the opacity stays the same
                  },
                  hover: {
                    fill: "#7FA8E9", // Color when hovered (same as initial)
                  },
                },
              },

              // France
              {
                coords: [46.603354, 1.888334], // Coordinates for France (latitude: 46.603354, longitude: 1.888334)
                // Add style for this particular marker
                style: {
                  initial: {
                    fill: "#FFF3A8", // Fill color for the marker
                    stroke: "none", // Remove the outline by setting stroke to 'none'
                    strokeWidth: 0, // Set the stroke width to 0
                    r: 6, // Adjust the radius (size) of the marker
                  },
                  selected: {
                    fill: "#FFF3A8", // Color when selected
                  },
                  selectedHover: {
                    fill: "#FFF3A8", // Color when selected and hovered
                    fillOpacity: 1, // Ensure the opacity stays the same
                  },
                  hover: {
                    fill: "#FFF3A8", // Color when hovered (same as initial)
                  },
                },
              },

              // Russia
              {
                coords: [61.524, 105.3188],
                style: {
                  initial: {
                    fill: "#FFF3A8", // Matches tooltip and key color for Russia (25%)
                    stroke: "none",
                    strokeWidth: 0,
                    r: 6,
                  },
                  selected: { fill: "#FFF3A8" },
                  selectedHover: { fill: "#FFF3A8", fillOpacity: 1 },
                  hover: { fill: "#FFF3A8" },
                },
              },

              // South Korea
              {
                coords: [35.9078, 127.7669],
                style: {
                  initial: {
                    fill: "#7FA8E9", // Matches tooltip and key color for South Korea (30%)
                    stroke: "none",
                    strokeWidth: 0,
                    r: 6,
                  },
                  selected: { fill: "#7FA8E9" },
                  selectedHover: { fill: "#7FA8E9", fillOpacity: 1 },
                  hover: { fill: "#7FA8E9" },
                },
              },

              // India
              {
                coords: [20.5937, 78.9629],
                style: {
                  initial: {
                    fill: "#BE8DD2", // Matches tooltip and key color for India (~10%)
                    stroke: "none",
                    strokeWidth: 0,
                    r: 6,
                  },
                  selected: { fill: "#BE8DD2" },
                  selectedHover: { fill: "#BE8DD2", fillOpacity: 1 },
                  hover: { fill: "#BE8DD2" },
                },
              },
            ],
            onRegionTooltipShow: function (event, tooltip, region) {
              // List of regions where the tooltip should be enabled
              const enabledRegions = [
                "US",
                "BR",
                "MA",
                "JP",
                "IN",
                "CN",
                "SA",
                "IT",
                "FR",
                "RU",
                "KR",
              ]; // Add region codes here

              tooltip.css({
                backgroundColor: "transparent",
                zIndex: "5",
              });

              if (!enabledRegions.includes(region)) {
                // Disable tooltip by preventing it from showing
                // tooltip.text("");
                event.preventDefault(); // ⛔ Stop tooltip from even attempting to render
                tooltip.text(""); // Just in case, clear text
                tooltip.hide();
                return;
              }

              // Customize the tooltip for specific enabled regions
              if (region === "US") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>United States</div>
                          <p> Between 2012 and 2050, the U.S. population of adults aged 65 and older will nearly double, 
                          from 43 to 84 million. In just 11 years — between 2018 and 2029 — the U.S. mandatory spending 
                          on Social Security and Medicare will more than double, from $1.3 trillion to $2.7 trillion per year. 
                          The U.S. Social Security system will become insolvent by 2034 if its current tax and benefit structure is maintained.</p>
                      </div>`,
                  true
                );
              } else if (region === "BR") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>Brazil</div>
                          <p> By 2050, Brazil’s population of older adults will triple. Adults aged 60 or older will make up 25% of the country’s population, while the country’s total population will begin to shrink.</p>
                      </div>`,
                  true
                );
              } else if (region === "MA") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>Morocco</div>
                          <p>By 2050, 25% of Morocco’s population will be over 60. In urban areas, the elderly population is expected to double in the span of 9 years, between 2021 and 2030.</p>
                      </div>`,
                  true
                );
              } else if (region === "IN") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>India</div>
                          <p>By 2050, India’s population of older adults will more than double, from 149 million to 347 million. Older adults will also surpass the number of children in the country.</p>
                      </div>`,
                  true
                );
              } else if (region === "JP") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>Japan</div>
                          <p>In 2023, Japan recorded more than two deaths for every birth. By 2050, non-workers aged 50 and older could make up roughly 60% of Japan’s population.</p>
                      </div>`,
                  true
                );
              } else if (region === "CN") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>China</div>
                          <p> By 2050, China will be home to over half a billion adults aged 65 and older. By the same year, for every Chinese retiree, there will be only 1.6 working-age adults. The Chinese government will likely need to increase its age of retirement whether or not biological aging can be therapeutically targeted by then.</p>
                      </div>`,
                  true
                );
              } else if (region === "SA") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>Saudi Arabia</div>
                          <p>Between 2020 and 2050, Saudi Arabia’s population will see a fivefold increase in adults aged 60 and older. In parallel, its fertility rate will go from 2.2 to 1.8.</p>
                      </div>`,
                  true
                );
              } else if (region === "IT") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>Italy</div>
                          <p>By 2050, Italy's population will shrink by roughly 6 million people. </p>
                      </div>`,
                  true
                );
              } else if (region === "FR") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>France</div>
                          <p>Between 2030 and 2050, the number of people aged 85 and over in France will increase by almost 90%. </p>
                      </div>`,
                  true
                );
              } else if (region === "RU") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>Russia</div>
                          <p>Between 1995 and 2050, Russia's population will shrink by over 25 million people. 
                           </p>
                      </div>`,
                  true
                );
              } else if (region === "KR") {
                tooltip.text(
                  `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>South Korea</div>
                          <p>South Korea is the fastest-aging population in the world, and will overtake Japan as the country with the oldest population by the year 2050. By then, 45% of South Korea's population will be over 60, compared to 42% in Japan. 
                           </p>
                      </div>`,
                  true
                );
              }
            },

            regionStyle: {
              initial: {
                fill: "#191818",
                stroke: "#808080",
                strokeWidth: 1,
              },

              selected: { fill: "#808080" },
              selectedHover: { fill: "#FFFFFF", fillOpacity: 1 },
            },
          });

          mapInstance.current = map;
        }
      };
    };

    loadMapAssets();

    // Handle window resize and update map size
    const handleResize = () => {
      if (mapInstance.current) {
        mapInstance.current.updateSize(); // Resize the map dynamically
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.mapoutercountainer}>
      <div className={styles.keycontainer}>
        <div className={styles.key}>
          <b>YEAR 2025, POPULATION 60+</b>

          <div className={styles.keyitem}>
            <div className={styles.symbol}></div>
            35% {" > "} (JAPAN)
          </div>

          <div className={styles.keyitem}>
            <div className={`${styles.symbol} ${styles.lightblue}`}></div>
            30% {" > "} (ITALY, SOUTH KOREA)
          </div>

          <div className={styles.keyitem}>
            <div className={`${styles.symbol} ${styles.yellow}`}></div>
            25% {" > "} (U.S., FRANCE, RUSSIA)
          </div>

          <div className={styles.keyitem}>
            <div className={`${styles.symbol} ${styles.darkblue}`}></div>
            20% {" > "} (CHINA)
          </div>

          <div className={styles.keyitem}>
            <div className={`${styles.symbol} ${styles.pink}`}></div>
            15% {" > "} (BRAZIL)
          </div>

          <div className={styles.keyitem}>
            <div className={`${styles.symbol} ${styles.purple}`}></div>
            ~10% {" > "} (SAUDI ARABIA, MOROCCO, INDIA)
          </div>
        </div>
      </div>

      <div className={styles.mapbackground}>
        <div className={styles.verticallinesbg}>
          <div className={styles.verticallines}>
            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>

            <div className={styles.vline}></div>
          </div>
        </div>
        <div className={styles.horizontallinesbg}>
          <div className={styles.horizontallines}>
            {/* <div className={styles.legend}>
          
            </div> */}
            <div className={styles.hline}></div>
            <div className={styles.hline}></div>
            <div className={styles.hline}></div>
            <div className={styles.hline}></div>
            <div className={styles.hline}></div>
            <div className={styles.hline}></div>
            <div className={styles.hline}></div>
            <div className={styles.hline}></div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: "65%" }}>
        <div
          id="map"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default WorldMap;
