import React from "react";
import Modal from "react-bootstrap/Modal";

const KeywordData = ({ showKeywordModal, setShowKeywordModal, keywordObj }) => {
  const { keyword, titles, urls } = keywordObj;

  return (
    <div>
      <Modal show={showKeywordModal} onHide={() => setShowKeywordModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{`${keyword}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {titles.map((title, index) => {
            return (
              <div>
                <a href={`${urls[index]}`}>{title}</a>
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default KeywordData;
