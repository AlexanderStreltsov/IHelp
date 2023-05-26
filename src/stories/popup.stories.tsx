import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Popup } from '../ui/popup/popup';

const meta: Meta<typeof Popup> = {
  title: 'UI/Popup Base',
  component: Popup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <div id="root" style={{ height: '500px' }}>
          <Story />
        </div>
        <div id="popup-root"></div>
      </>
    ),
  ],
  argTypes: {
    arrow: {
      type: 'string',
      description:
        'Определяет наличие или отсутствие, а также местоположение уголка на верху попапа',
      defaultValue: 'right',
      options: ['right', 'center', 'none'],
      control: {
        type: 'radio',
      },
    },
    widthPopup: {
      type: 'string',
      description:
        'Определяет ширину попапа: "small" - 300px, "middle" - 370px, "big" - 586px (значения для десктопа)',
      defaultValue: 'middle',
      options: ['small', 'middle', 'big'],
      control: {
        type: 'radio',
      },
    },
    shadow: {
      type: 'boolean',
      description: 'Определяет наличие или отсутствие тени от попапа',
      defaultValue: true,
    },
    outStyles: {
      type: 'string',
      description:
        'Передаем объект со стилями, которые будут вложены в аттрибут style html-элемента. Например, `outStyles={{ paddingRight: "60px" }}`.',
    },
    moduleOutStyles: {
      type: 'string',
      description:
        'Передаем строку с классами стилей, которые могут быть определены как глобально, так и в модуле css родительского компонента. Они переопределят уже прописанные стили. Например: `moduleOutStyles={styles.height}` или `moduleOutStyles="text-big"`. Или оба варианта сразу с помощь шаблонных строк.',
    },
    cornerRadius: {
      type: 'boolean',
      description:
        'Определяет наличие или отсутствие закруглений углов попапа.',
      defaultValue: false,
    },
    position: {
      description:
        'Определяет вариант отображения попапа и способ его позиционирования. При значении `"center"` у попапа имеется затемнённая подложка на весь экран и он позиционируется в центре экрана. При передаче объекта с координатами типа `{ coordinateX: number; coordinateY: number }` (например, координаты курсора мыши), попап будет без затемненной подложки и будет расположен по согласно переданным координатам, но не выходя за границы экрана.',
      defaultValue: 'center',
      options: ['center', { coordinateX: 200, coordinateY: 100 }],
      control: {
        type: 'radio',
      },
    },
    setIsShowPopup: {
      description:
        'Обязательный элемент. Метод родительского компонета, сохраняющий новое значение переменной состояния, от значения которой зависит отображение попапа.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Popup>;

export const FormPopup: Story = {
  args: {
    arrow: 'right',
    widthPopup: 'middle',
    shadow: true,
    outStyles: { height: '400px' },
    position: 'center',
  },
};

const PopupSurroundings = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsShowPopup(true)}>
        Нажми на меня
      </button>
      {isShowPopup && (
        <Popup
          arrow="right"
          widthPopup="middle"
          shadow={true}
          moduleOutStyles="text-big"
          outStyles={{ paddingRight: '60px', height: '200px' }}
          position={{ coordinateX: 600, coordinateY: 100 }}
          setIsShowPopup={setIsShowPopup}
        >
          <p>Пример текста</p>
        </Popup>
      )}
    </>
  );
};

export const PopupInAction: Story = {
  decorators: [
    (Story) => (
      <>
        <div id="root" style={{ height: '400px' }}>
          <Story />
        </div>
        <div id="popup-root"></div>
      </>
    ),
  ],
  render: () => <PopupSurroundings />,
};

/* const ArrowCenterMiddle = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsShowPopup(true)}>
        Нажми на меня
      </button>
      {isShowPopup && (
        <Popup
          arrow="center"
          widthPopup="middle"
          shadow={true}
          moduleOutStyles="text-big"
          outStyles={{ paddingRight: '60px', height: '200px' }}
          position={{ coordinateX: 900, coordinateY: 200 }}
          setIsShowPopup={setIsShowPopup}
        >
          <p>Пример текста</p>
        </Popup>
      )}
    </>
  );
};

export const PopupWithArrowCenterMiddle: Story = {
  decorators: [
    (Story) => (
      <>
        <div id="root" style={{ height: '400px' }}>
          <Story />
        </div>
        <div id="popup-root"></div>
      </>
    ),
  ],
  render: () => <ArrowCenterMiddle />,
};

const WithoutArrowCenter = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsShowPopup(true)}>
        Нажми на меня
      </button>
      {isShowPopup && (
        <Popup
          arrow="none"
          widthPopup="big"
          shadow={true}
          moduleOutStyles="text-big"
          outStyles={{ paddingRight: '60px', height: '200px' }}
          position="center"
          setIsShowPopup={setIsShowPopup}
        >
          <p>Пример текста</p>
        </Popup>
      )}
    </>
  );
};

export const PopupWithoutArrowCenter: Story = {
  decorators: [
    (Story) => (
      <>
        <div id="root" style={{ height: '400px' }}>
          <Story />
        </div>
        <div id="popup-root"></div>
      </>
    ),
  ],
  render: () => <WithoutArrowCenter />,
};*/
