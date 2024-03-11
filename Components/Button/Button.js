import styles from "./Button.module.css";
export default function Button({
  text,
  width,
  height,
  background = "transparent",
  borderColor = "transparent",
  callback,
  color = "#667085",
  fontSize = "16px",
  srcIcon,
}) {
  return (
    <div
      className={styles.container}
      style={{
        width: width,
        height: height,
        background: background,
        border: `1px solid ${borderColor}`,
      }}
      onClick={callback === undefined ? null : callback}
    >
      <div
        className={styles.text_button}
        style={{ color: color, fontSize: fontSize }}
      >
        {text}{" "}
      </div>
      {srcIcon && <img src={srcIcon} alt="" style={{ marginLeft: "10px" }} />}
    </div>
  );
}
