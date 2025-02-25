import React, { useEffect } from 'react';
import styles from "@/components/Landing.module.css"

const WorldMap = () => {
  useEffect(() => {
    // Dynamically add the CSS and JS files
    const loadMapAssets = async () => {
      // Add the CSS file
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href =
        'https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css';
      document.head.appendChild(link);

      // Add the JS library
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/jsvectormap';
      script.async = true;
      document.body.appendChild(script);

      // Add the world map JS
      const mapScript = document.createElement('script');
      mapScript.src =
        'https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js';
      mapScript.async = true;
      document.body.appendChild(mapScript);

      // Initialize the map after scripts are loaded
      mapScript.onload = () => {
        if (window.jsVectorMap) {
          new window.jsVectorMap({
            selectedRegions: ["US", "BR", "MA", "JP", "IN", "CN", "SA"  ],
            selector: '#map',
            map: 'world',
            zoomOnScroll: false, // Disable zooming with the scroll wheel
            zoomButtons: false,  // Disable zoom buttons
            onRegionTooltipShow: function (event, tooltip, region) {
              tooltip.css({ 
                backgroundColor: 'transparent',
                zIndex:"5"
      
            })
              console.log("Hovered over:", region); // Debugging log

              // List of regions where the tooltip should be enabled
              const enabledRegions = ["US", "BR", "MA", "JP", "IN", "CN", "SA"]; // Add region codes here
          
              if (!enabledRegions.includes(region)) {
                  // Disable tooltip by preventing it from showing
                  // tooltip.text("");
                  tooltip.hide()
                  return;
              }
          
              // Customize the tooltip for specific enabled regions
              if (region == "US") {
                  console.log(region);
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
              } else if (region == "BR") {
                  tooltip.text(
                      `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>Brazil</div>
                          <p> By 2050, Brazil’s population of older adults will triple. Adults aged 60 or older will make up 25% of the country’s population, while the country’s total population will begin to shrink.</p>
                      </div>`,
                      true
                  );
              } else if (region == "MA") {
                  tooltip.text(
                      `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>Morocco</div>
                          <p>By 2050, 25% of Morocco’s population will be over 60. In urban areas, the elderly population is expected to double in the span of 9 years, between 2021 and 2030.</p>
                      </div>`,
                      true
                  );
              }
              else if (region == "IN") {
                  tooltip.text(
                      `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>India</div>
                          <p>By 2050, India’s population of older adults will more than double, from 149 million to 347 million. Older adults will also surpass the number of children in the country.</p>
                      </div>`,
                      true
                  );
              }
  
              else if (region == "JP") {
                  tooltip.text(
                      `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>Japan</div>
                          <p>In 2023, Japan recorded more than two deaths for every birth. By 2050, non-workers aged 50 and older could make up roughly 60% of Japan’s population.</p>
                      </div>`,
                      true
                  );
              }
              else if (region == "CN") {
                  tooltip.text(
                      `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>China</div>
                          <p> By 2050, China will be home to over half a billion adults aged 65 and older. By the same year, for every Chinese retiree, there will be only 1.6 working-age adults. The Chinese government will likely need to increase its age of retirement whether or not biological aging can be therapeutically targeted by then.</p>
                      </div>`,
                      true
                  );
              }
              else if (region == "SA") {
                  tooltip.text(
                      `<div class=${styles.tooltipcustom}>
                          <div class=${styles.tooltiphead}>Saudi Arabia</div>
                          <p>Between 2020 and 2050, Saudi Arabia’s population will see a fivefold increase in adults aged 60 and older. In parallel, its fertility rate will go from 2.2 to 1.8.</p>
                      </div>`,
                      true
                  );
              }
          },

          regionStyle: {
            initial: {
                fill: "#191818",
                stroke: "#808080",
                strokeWidth: 1  
            },
        
            selected: { fill: '#808080'},
            selectedHover: { fill: '#FFFFFF', fillOpacity: 1  }
        },
          });
        }
      };
    };

    loadMapAssets();
  }, []);

  return (
    <div className= {styles.mapoutercountainer} >

      



      <div className={styles.mapbackground}>
       
        <div className={styles.verticallinesbg}>
          <div className={styles.verticallines}>
            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>

            <div className={styles.vline}>
            </div>


          </div>
        </div>

        <div className={styles.horizontallinesbg}>
          <div className={styles.horizontallines}>
          {/* <div className={styles.legend}>
        
          </div> */}
            <div className={styles.hline}>
            </div>
            <div className={styles.hline}>
            </div>
            <div className={styles.hline}>
            </div>
            <div className={styles.hline}>
            </div>
            <div className={styles.hline}>
            </div>
            <div className={styles.hline}>
            </div>
            <div className={styles.hline}>
            </div>
            <div className={styles.hline}>
            </div>

          </div>
        </div>


      </div>

      <div  style={{ width: '100%', height: '65%' }}>
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
      </div>
    </div>
  );
};

export default WorldMap;
