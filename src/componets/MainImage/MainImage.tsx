import {SImageWrapper, SMainImage, STextDescription, STextHeading, STextWrapper,} from "./style";
import mainImg from "../../images/pictureForTheWebsite.jpg";

export function MainImage() {
    return (
        <SImageWrapper>

            <STextWrapper>
                <STextHeading>Заголовок поста №1</STextHeading>
                <STextDescription>
                    Наша компания предлагает уникальную услугу по созданию персонализированных видеороликов для вашего
                    бизнеса.
                </STextDescription>
            </STextWrapper>
            <SMainImage src={mainImg}></SMainImage>
        </SImageWrapper>

    )
}