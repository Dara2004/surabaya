import React from "react";
import styles from "./App.module.css";
import Island from "./components/Island";
import Legend from "./components/Legend";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import IslandMap from "./components/IslandMap";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.leftSide}>
        <Legend></Legend>
      </div>

      <div>
        <TransformWrapper defaultScale={1}>
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
              <div
                className="tools"
                style={{ position: "absolute", zIndex: "10" }}
              >
                <button className={styles.zoomBtn} onClick={zoomIn}>
                  +
                </button>
                <button className={styles.zoomBtn} onClick={zoomOut}>
                  -
                </button>
                <button className={styles.zoomBtn} onClick={resetTransform}>
                  x
                </button>
              </div>
              <TransformComponent style={{ width: "100%", height: "100%" }}>
                <div className={styles.rightSide}>
                  <Island></Island>
                  <IslandMap></IslandMap>
                </div>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
}

export default App;
