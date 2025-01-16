const WellcomeMessage = () => {
  const renderMessage = (currentTime = new Date()) => {
    const currentHour = currentTime.getHours();
    const splitAfternoon = 12;
    const splitEvening = 17;

    if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
      return 'Boa tarde';
    } else if (currentHour >= splitEvening) {
      return 'Boa noite';
    }
    return 'Bom dia';
  };

  const mensagem = renderMessage();

  return mensagem;
};

export default WellcomeMessage;
