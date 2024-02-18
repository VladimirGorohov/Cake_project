function MyButton({ children, ...props }: any) {
  return (
    <button {...props} className={props.className}>
      {children}
    </button>
  );
}

export default MyButton;
