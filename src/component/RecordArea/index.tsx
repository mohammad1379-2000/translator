"use client";
import * as React from "react";
import Circle from "../../../public/icon/circle.svg";
import MicIcon from "../../../public/icon/mic.svg";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Select, SelectItem, Textarea, useDisclosure } from "@nextui-org/react";
import { RecordingModal } from "../RecordingModal";
import { useCallback, useEffect, useRef, useState } from "react";
import { languagesMapRecorder, languagesMapSpeech } from "utils";
import SoundIcon from "../../../public/icon/sound.svg";
import { translateText } from "action";
import { useFormState } from "react-dom";
const initialTranslateState = {
  translatedText: "",
  speech: "",
};
export const RecordArea = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [state, formAction] = useFormState(
    translateText,
    initialTranslateState,
  );
  const audioRef = useRef<HTMLAudioElement>(null);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [translateFrom, setTranslateFrom] = useState<any>(new Set([]));
  const [translateTo, setTranslateTo] = useState<any>(new Set([]));

  const playAudio = useCallback(() => {
    if (state.speech && audioRef.current) {
      audioRef.current.play();
    }
  }, [state.speech]);

  return (
    <>
      <form
        className={"h-full flex flex-col items-center justify-around py-28"}
        action={formAction}
      >
        <Select
          color="secondary"
          label="Translate from"
          className="max-w-xs"
          onSelectionChange={setTranslateFrom}
        >
          {Object.keys(languagesMapRecorder).map((lan, index) => (
            <SelectItem
              key={languagesMapRecorder[lan]}
              value={languagesMapRecorder[lan]}
            >
              {lan}
            </SelectItem>
          ))}
        </Select>
        <Textarea
          label="from"
          placeholder="Enter your text"
          minRows={20}
          color={"secondary"}
          name={"translatedText"}
          classNames={{
            label: "text-secondary-100",
            base: "w-2/3",
          }}
          value={transcript}
          endContent={
            <button
              onClick={() => {
                resetTranscript();
                SpeechRecognition.startListening({
                  continuous: true,
                  language: translateFrom.values().next().value,
                });
                onOpen();
              }}
              className={"h-full flex items-end"}
            >
              <div className={"w-20 h-20 flex justify-center items-center"}>
                <Circle className={"fill-content3 absolute"} />
                <MicIcon className={"z-10 fill-content1 absolute"} />
              </div>
            </button>
          }
        />
        <Select
          name={"translateTo"}
          color="secondary"
          label="Translate from"
          className="max-w-xs"
          onSelectionChange={setTranslateTo}
        >
          {Object.keys(languagesMapSpeech).map((lan) => (
            <SelectItem
              key={languagesMapSpeech[lan]}
              value={languagesMapSpeech[lan]}
            >
              {lan}
            </SelectItem>
          ))}
        </Select>
        <Textarea
          isReadOnly
          label="to"
          placeholder="translated text"
          minRows={20}
          color={"secondary"}
          value={state?.translatedText}
          classNames={{
            label: "text-secondary-100",
            base: "w-2/3",
          }}
          endContent={
            <button type={"submit"} className={"h-full"} onClick={playAudio}>
              <div className={"w-20 h-20 flex justify-center items-center"}>
                <Circle className={"fill-content3 absolute top-3"} />
                <SoundIcon className={"z-10 fill-content1 absolute top-8"} />
              </div>
            </button>
          }
        />
        <audio key={state?.speech} ref={audioRef}>
          <source src={`data:audio/wav;base64,${state?.speech}`} />
        </audio>
        <RecordingModal
          stopListening={SpeechRecognition.stopListening}
          isOpen={isOpen}
          onClose={onClose}
        />
      </form>
    </>
  );
};
