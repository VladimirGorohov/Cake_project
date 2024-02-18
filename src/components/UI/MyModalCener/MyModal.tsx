import classes from "./MyModal.module.css";

interface MyModal {
  children?: any;
  visible: Boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

function MyModal({ children, visible, setVisible, className }: MyModal) {
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
        {children}
      </div>
    </div>
  );
}

export default MyModal;
