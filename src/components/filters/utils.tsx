const applyingCurrentConditions = (
  form: HTMLFormElement | null,
  currentConditions: { [name: string]: string[] },
) => {
  if (Object.keys(currentConditions).length !== 0) {
    const list = form && Array.prototype.slice.call(form.elements);
    list?.forEach((item) => {
      if (
        currentConditions.hasOwnProperty(item.name) &&
        currentConditions[item.name].includes(item.value)
      ) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
  }
};

const collectSelection = (
  e: React.SyntheticEvent<Element, Event>,
  form: HTMLFormElement | null,
  sendResult: (result: { [name: string]: string[] }) => void,
) => {
  e.preventDefault();
  const result: { [name: string]: string[] } = {};
  const list = form && Array.prototype.slice.call(form.elements);
  list?.forEach((item) => {
    if (item instanceof HTMLInputElement && item.checked) {
      if (!result.hasOwnProperty(item.name)) {
        result[item.name] = [item.value];
      } else {
        result[item.name].push(item.value);
      }
    }
  });
  sendResult(result);
};

export { applyingCurrentConditions, collectSelection };
