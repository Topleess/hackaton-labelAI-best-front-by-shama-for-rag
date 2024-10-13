// /components/Modal/SettingsModal.js
import React, { useState } from "react";
import { styled } from "../../stitches.config";

const ModalOverlay = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(5px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

const ModalContainer = styled("div", {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "700px",
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const ModalHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

const Title = styled("h2", {
  margin: 0,
  fontSize: "1.5rem",
  color: "#000", // Черный цвет для заголовка
});

const CloseButton = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  fontSize: "1.5rem",
  cursor: "pointer",
  "&:hover": {
    color: "#d42e12", // Акцентный красный цвет при наведении (RZD-Red)
  },
});

const SectionHeader = styled("h3", {
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#000", // Черный цвет для заголовка секции
});

const CardContainer = styled("div", {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
  flexDirection: "column",
});

const CardRow = styled("div", {
  display: "flex",
  gap: "10px",
  justifyContent: "flex-start",
});

const Card = styled("div", {
  flex: "1",
  padding: "15px",
  borderRadius: "5px",
  border: "2px solid #d3d3d3",
  textAlign: "left",
  cursor: "pointer",
  fontSize: "1rem",
  color: "#333",
  backgroundColor: "#f9f9f9",
  transition: "background-color 0.2s, border-color 0.2s, color 0.2s",
  "&.selected": {
    borderColor: "#d42e12", // Акцентный красный цвет для выбранных карточек
    backgroundColor: "#fdebea", // Светлый оттенок красного для выделенных карточек
    color: "#d42e12", // Красный цвет текста в выбранных карточках
  },
  "&:hover": {
    borderColor: "#d42e12",
    backgroundColor: "#fdebea",
  },
  "&.disabled": {
    cursor: "not-allowed", // Убираем pointer, чтобы показать неактивность
    backgroundColor: "#e0e0e0", // Более светлый оттенок для disabled-состояния
    color: "#a0a0a0", // Серая окраска текста
    borderColor: "#d3d3d3", // Оставляем стандартную рамку
    "&:hover": {
      borderColor: "#d3d3d3", // Запрещаем изменение цвета на hover для disabled-состояния
      backgroundColor: "#e0e0e0", // Запрещаем изменение фона на hover
    },
  },
});

const CardDescription = styled("p", {
  marginTop: "5px",
  fontSize: "0.9rem",
  color: "#666",
});

const AccuracyInfo = styled("div", {
  marginTop: "20px",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#f0f0f0",
  textAlign: "center",
  fontSize: "1rem",
  color: "#333",
});

const SaveButton = styled("button", {
  marginTop: "20px",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#d42e12", // Акцентный красный цвет для кнопки
  color: "white",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#b3240f", // Темный оттенок красного для кнопки при наведении
  },
});

const Image = styled("img", {
  width: "100%",
  maxHeight: "100px",
  marginTop: "10px",
  objectFit: "contain",
});

function SettingsModal({ onClose }) {
  const [model, setModel] = useState("model1");
  const [searchMethod, setSearchMethod] = useState("method1");
  const [responseType, setResponseType] = useState("withInterpretation");

  // Функция для расчета точности на основе выбранных параметров
  const calculateAccuracy = () => {
    if (model === "model1" && searchMethod === "method1") {
      return "95%";
    } else if (model === "model2" && searchMethod === "method2") {
      return "85%";
    } else {
      return "75%";
    }
  };

  // Функция для закрытия модального окна при клике вне его
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <Title>Настройки чата</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        {/* Выбор модели */}
        <SectionHeader>Выбор модели:</SectionHeader>
        <CardRow>
          {["model1", "model2", "model3"].map((item, index) => (
            <Card
              key={item}
              className={`${model === item ? "selected" : ""} ${
                index !== 0 ? "disabled" : ""
              }`}
              onClick={() => index === 0 && setModel(item)} // Блокируем onClick для disabled карточек
            >
              Модель {item.slice(-1)}
              <CardDescription>
                Описание модели {item.slice(-1)}
              </CardDescription>
            </Card>
          ))}
        </CardRow>

        {/* Выбор метода поиска */}
        <SectionHeader>Выбор метода поиска:</SectionHeader>
        <CardRow>
          {["method1", "method2", "method3"].map((item, index) => (
            <Card
              key={item}
              className={`${searchMethod === item ? "selected" : ""} ${
                index !== 0 ? "disabled" : ""
              }`}
              onClick={() => index === 0 && setSearchMethod(item)} // Блокируем onClick для неактивных карточек
            >
              Метод {item.slice(-1)}
              <CardDescription>
                Описание метода {item.slice(-1)}
              </CardDescription>
            </Card>
          ))}
        </CardRow>

        {/* Выбор отображаемых ответов */}
        <SectionHeader>Выбор отображаемых ответов:</SectionHeader>
        <CardRow>
          {["withInterpretation", "withoutInterpretation"].map(
            (item, index) => (
              <Card
                key={item}
                className={`${responseType === item ? "selected" : ""} ${
                  index !== 0 ? "disabled" : ""
                }`}
                onClick={() => index === 0 && setResponseType(item)} // Блокируем onClick для disabled карточек
              >
                {item === "withInterpretation"
                  ? "С интерпретацией"
                  : "Без интерпретации"}
                <CardDescription>
                  Пример{" "}
                  {item === "withInterpretation"
                    ? "с интерпретацией"
                    : "без интерпретации"}
                </CardDescription>
                <Image
                  src={`/${
                    item === "withInterpretation"
                      ? "interpretation-example.png"
                      : "no-interpretation-example.png"
                  }`}
                  alt={`Пример ${
                    item === "withInterpretation"
                      ? "с интерпретацией"
                      : "без интерпретации"
                  }`}
                />
              </Card>
            )
          )}
        </CardRow>

        {/* Плашка с точностью */}
        <AccuracyInfo>
          Точность выбранной конфигурации: {calculateAccuracy()}
        </AccuracyInfo>

        {/* Кнопка сохранения */}
        <SaveButton onClick={onClose}>Сохранить</SaveButton>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default SettingsModal;
