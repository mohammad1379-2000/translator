import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { Logo } from "../Logo";
import AudioRecordingIcon from "../../../public/icon/AudioRecording.svg";
export const RecordingModal = ({
  isOpen,
  onClose,
  stopListening,
}: {
  isOpen: boolean;
  onClose: () => void;
  stopListening: () => Promise<void>;
}) => {
  return (
    <>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <Logo />
              </ModalHeader>
              <ModalBody className={"flex-col justify-center items-center"}>
                <div
                  className={
                    "w-10/12 h-96 flex justify-center items-center mb-12"
                  }
                >
                  <AudioRecordingIcon className={"fill-content3 absolute"} />
                </div>
                <button
                  className={"w-40 h-40 flex justify-center items-center"}
                  onClick={() => {
                    console.log("mohammad");
                    stopListening();
                    onClose();
                  }}
                >
                  <svg
                    width="140"
                    height="140"
                    viewBox="0 0 140 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="70" cy="70" r="70" className="fill-content3" />
                    <circle
                      cx="71"
                      cy="69"
                      r="32"
                      className="fill-secondary-50"
                    />
                    <circle cx="71" cy="69" r="11" className="fill-content3" />
                  </svg>
                </button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
