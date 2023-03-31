import logo from "../img/welbex-logo.svg";
import redBull from "../img/red-ball.png";
import purpleLight from "../img/purple-light.png";
import purpleBall from "../img/purple-ball.png";
import telegram from "../img/telegram-icon.svg";
import viber from "../img/viber-icon.svg";
import whatsapp from "../img/whatsapp-icon.svg";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="header__logo" />
        <p className="header__description">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
        <div className="header__navbar">
          <a href="/" className="header__items">
            Услуги
          </a>
          <a href="/" className="header__items">
            Виджеты
          </a>
          <a href="/" className="header__items">
            Интеграции
          </a>
          <img src={redBull} alt="red ball" className="header__red-ball" />
          <a href="/" className="header__items">
            Кейсы
          </a>
          <img
            src={purpleLight}
            alt="purple light"
            className="header__purple-light"
          />
          <img
            src={purpleBall}
            alt="purple ball"
            className="header__purple-ball"
          />
          <a href="/" className="header__items">
            Сертификаты
          </a>
        </div>
        <div className="header__contacts">
          <a href="tel:+75555555555">+7 555 555-55-55</a>
          <a href="/">
            <img src={telegram} alt="Icon: Telegram" />
          </a>
          <a href="/">
            <img src={viber} alt="Icon: Viber" />
          </a>
          <a href="/">
            <img src={whatsapp} alt="Icon: WhatsApp" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
