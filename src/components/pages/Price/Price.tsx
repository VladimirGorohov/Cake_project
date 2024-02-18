import price from "../../../system/price.json";
import classes from "./Price.module.css";


function Price() {
  return (
    <div className={classes.price}>
      <div className={classes.price__header}>
        <h1 className={classes.price__header_text}>Наши цены</h1>
      </div>
      <div className={classes.price__text}>
        <p className={classes.price__discription}>
          Дорогие гости! Наши торты и десерты уникальны. Все изделия
          изготавливаются специально для вас. Мы учтем все пожелания и согласуем
          каждую деталь. Обратите внимание, что на нашем сайте указана цена "БЕЗ
          ДЕКОРА" - цена за 1кг начинки, плюс в эту стоимость входит: усиленная
          подложка, коробка, лента, шокоподтеки, безе, надписи. Все
          дополнительные элементы (леденцы из изомальта, корона, ваза, свежая
          ягода, имбирные прянки, вафельная сахарная печать на мастике,
          шоколадные шары, фигурки из мастики, цветы) декора будут прибавляться
          к итоговой стоимости. За точным расчетом и более подробной информацией
          обращайтесь по тел.: +7-987-8520444
        </p>
      </div>
      {price.map((el) => (
        <div className={classes.price__list}>
          <div className={classes.price__item}>
            <p className={classes.price__item_title}>{el.title}</p>
            <p className={classes.price__item_num}>{el.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Price;
