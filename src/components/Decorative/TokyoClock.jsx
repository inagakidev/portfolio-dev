import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Tokyo',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export default function TokyoClock({ className }) {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatter.format(new Date())), 15000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className={className}>
      <span className="jp" lang="ja">東京</span> · {time} JST
    </p>
  );
}
