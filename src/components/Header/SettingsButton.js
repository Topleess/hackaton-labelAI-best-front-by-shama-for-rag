// /components/Header/SettingsButton.js
import React, { useState } from "react";
import { styled } from "../../stitches.config";
import SettingsModal from "../Modal/SettingsModal";
import { FaGears } from "react-icons/fa6";

const Button = styled("button", {
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  padding: "4px 4px",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px", // Добавлен отступ между иконкой и текстом
  "&:hover": {
    backgroundColor: "#005bb5",
  },
});

const IconWrapper = styled("span", {
  display: "flex",
  alignItems: "center",
  fontSize: "1.3rem",
});

function SettingsButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <IconWrapper>
          <FaGears />
        </IconWrapper>
      </Button>
      {showModal && <SettingsModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default SettingsButton;
