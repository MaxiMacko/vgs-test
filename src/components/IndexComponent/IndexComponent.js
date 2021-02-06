import CheckBoxPanel from "../CheckBoxPanel/CheckBoxPanel";
import ChartPanel from "../ChartPanel/ChartPanel";
import { AppContext } from "../../storage/reducer";
import { useContext } from "react";
import styles from "./IndexComponent.module.css";

const IndexComponent = () => {
  const { state } = useContext(AppContext);

  console.log("rerendered");

  return (
    <div>
      <ChartPanel />
      <CheckBoxPanel />
      {state.error && <div className={styles.error}>{state.error}</div>}
    </div>
  );
};

export default IndexComponent;
