import { useState } from 'react';

export const Test = () => {
  const [date, setDate] = useState(new Date());
  fetch(
    'https://api.cloudflare.com/client/v4/accounts/3497c38785842ef8e8038ba9a9a7ba7e/storage/kv/namespaces/8e11dc88db8a47788909d5343d695b08/values/semester_start_date',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CLOUDFLARE_BEARER_TOKEN}`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const _date = new Date(data);
      setDate(_date);
    })
    .catch(() => {
      console.error('Date fetch failed');
    });

  return <div>{new Date().getTime() < date.getTime() ? 'Break' : 'Active'}</div>;
};
