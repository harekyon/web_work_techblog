import styles from "./MenuButton.module.scss";

export default function MenuButton({ href = "#", children, ...props }) {
  return (
    <li id={props.id} className={styles["menu-button--wrap"]}>
      <div className={styles["menu-button__barcode"]}>
        <svg
          id="_レイヤー_2"
          data-name="レイヤー 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8.32 23.97"
        >
          <g id="_レイヤー_4" data-name="レイヤー 4">
            <g>
              <path
                class="cls-1"
                d="m0,0h8.32v1.53H0V0Zm0,2.04h8.32v.51H0v-.51Zm0,2.04h8.32v.51H0v-.51Zm0,1.02h8.32v.51H0v-.51Zm0,1.02h8.32v1.53H0v-1.53Z"
              />
              <path
                class="cls-1"
                d="m0,8.16h8.32v1.53H0v-1.53Zm0,2.04h8.32v.51H0v-.51Zm0,2.04h8.32v.51H0v-.51Zm0,1.02h8.32v.51H0v-.51Zm0,1.02h8.32v1.53H0v-1.53Z"
              />
              <path
                class="cls-1"
                d="m0,16.32h8.32v1.53H0v-1.53Zm0,2.04h8.32v.51H0v-.51Zm0,2.04h8.32v.51H0v-.51Zm0,1.02h8.32v.51H0v-.51Zm0,1.02h8.32v1.53H0v-1.53Z"
              />
            </g>
          </g>
        </svg>
      </div>
      <a href={href} className={styles["menu-button__text"]}>
        {children}
      </a>
    </li>
  );
}
