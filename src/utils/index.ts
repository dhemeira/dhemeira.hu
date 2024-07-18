export const cookieValue = (key: string) => {
  return document.cookie
    ?.split('; ')
    ?.find((row) => row.startsWith(key))
    ?.split('=')[1];
};

export const debounce = (func: TimerHandler, time: number): EventListenerOrEventListenerObject => {
  let _timer: number;
  return (event: Event) => {
    if (_timer) clearTimeout(_timer);
    _timer = setTimeout(func, time, event);
  };
};
