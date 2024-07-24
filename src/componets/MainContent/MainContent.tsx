import {SImageWrapper, SMainImage, STextDescription, STextHeading, STextWrapper,} from "./style";
import mainImg from "../../images/pictureForTheWebsite.jpg";
import {Advantages} from "../Advantages/Advantages";
import {SAdvantagesWrapper, SBunsWrapper, STextBlockOfBuns} from "../Advantages/style";
import saveSvg from '../../svg/save-svgrepo-com.svg';
import arrowsSvg from '../../svg/arrows-maximize-svgrepo-com.svg';
import settingsSvg from '../../svg/settings-svgrepo-com.svg';
import {Buns} from "../Buns/Buns";
import {FC} from "react";

export const MainContent: FC = () => {
    return (
        <SImageWrapper>
            <STextWrapper>
                <STextHeading>Заголовок поста №1</STextHeading>
                <STextDescription>
                    Наша компания предлагает уникальную услугу по созданию
                    персонализированных видеороликов для вашего бизнеса.
                </STextDescription>
            </STextWrapper>
            <SMainImage src={mainImg}></SMainImage>

            <SAdvantagesWrapper>
                <Advantages
                    text='Мы используем передовые технологии искусственного
                    интеллекта и машинного обучения, чтобы анализировать вашу аудиторию и создавать видео,
                    которые идеально подходят для ваших клиентов.
                    Наши видеоролики не только помогут вам увеличить продажи и лояльность клиентов,
                    но также будут отличаться высоким качеством и профессионализмом.'
                    variant='yellow'
                />
                <Advantages
                    text='Мы гарантируем, что наши видеоролики будут
                    эффективным инструментом для развития вашего бизнеса.
                    Закажите у нас персонализированный видеоролик сегодня
                    и увидите результаты уже завтра!'
                    variant='blue'
                />
            </SAdvantagesWrapper>

            <STextBlockOfBuns>
                Выбирая наш шаблон, Вы получаете:
            </STextBlockOfBuns>

            <SBunsWrapper>
                <Buns
                    src={saveSvg}
                    variant='green'
                    text='100% исходные файлы шаблона. Ссылка для загрузки будет доступна только Вам'
                />
                <Buns
                    src={arrowsSvg}
                    variant='violet'
                    text='Мы предлагаем бесплатную консультацию по дизайну и стилю вашего видео,
                        чтобы убедиться, что оно полностью соответствует вашим требованиям и пожеланиям.'
                />
                <Buns
                    src={settingsSvg}
                    variant='orange'
                    text='Закажите видеомонтаж у нашей компании сегодня и получите бесплатную доставку
                        готового видео на ваш электронный адрес в течение 24 часов!'
                />
            </SBunsWrapper>

        </SImageWrapper>

    )
}