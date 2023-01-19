export const useConfirm = (message = "", onConfirm, onCancle) => {
  if (typeof onConfirm !== "function") {
    return;
  }
  if (typeof onCancle !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  };

  return confirmAction;
};
