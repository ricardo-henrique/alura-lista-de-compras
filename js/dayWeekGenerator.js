function dayWeekGenerator() {
  const dayOfWeek = new Date().toLocaleDateString('pt-br', {
    weekday: 'long',
  });
  const date = new Date().toLocaleDateString('pt-br');
  const hour = new Date().toLocaleTimeString('pt-br', {
    hour: 'numeric',
    minute: 'numeric',
  });

  const completeDate = `${dayOfWeek} ${date} às ${hour}`;
  return completeDate;
}

export default dayWeekGenerator;
