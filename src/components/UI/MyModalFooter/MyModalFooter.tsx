import { AiOutlineClose } from "react-icons/ai";
import classes from "./MyModalFooter.module.css";

interface MyModalFooter {
  children?: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

function MyModalFooter({
  children,
  visible,
  setVisible,
  className,
}: MyModalFooter) {
  const rootClasses = [classes.myModal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div
      className={className ? className : rootClasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          className={classes.close__modal}
          onClick={() => setVisible(false)}
        />

        {children}
      </div>
    </div>
  );
}

export default MyModalFooter;
