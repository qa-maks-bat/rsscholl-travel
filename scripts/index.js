console.log(
    `
        Результат самооценки: 100 баллов (120 баллов из 125 баллов):

    (+45) 1. Слайдер изображений в секции destinations +50
        
        (+15) * на десктоп варианте при клике на урезанную картинку 
                слева или справа изображение меняется по принципу карусели
                (например, если нажать правую картинку, та, что была в центре
                уезжает налево, а та, что была видна наполовину оказывается справа).
                Слайдер может быть как конечным так и бесконечным - данный критерий
                не должен влиять на оценку + 20 
        
        (+20) * три точки внизу отображают "номер слайда", то есть каждому слайду
                соответствует свой кружочек, который становится активным
                при нахождении соответствующего ему слайда в центре. На мобильном варианте
                картинка одна, но поверх нее появляются стрелочки навигации (можно сделать
                как карусель или же затемнять кнопку если слайдер достиг края) +20
            
        (+10) * анимации плавного перемещения для слайдера +10

    (+50) 2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50
            
        (+25) * логин попап соответствует верстке его закрытие происходит при клике вне попапа +25
            
        (+25) * логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными
                (для реализации можно использовать тег ) +25
        
    (+25) 3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету
            (то есть нажатие не закрывает модал а просто меняет его наполнение). +25
    `
);
